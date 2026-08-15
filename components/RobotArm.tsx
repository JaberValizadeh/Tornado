'use client'

/**
 * RobotArm — a procedurally built 6-axis industrial robot arm rendered with three.js.
 * No external model files, no CDN assets. Designed for a light, minimal page background.
 */

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type RobotArmProps = {
  className?: string
}

const RobotArm = ({ className = '' }: RobotArmProps) => {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ---------------------------------------------------------------- renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    mount.appendChild(renderer.domElement)

    // ------------------------------------------------------------------ scene
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      34,
      mount.clientWidth / Math.max(mount.clientHeight, 1),
      0.1,
      100
    )
    camera.position.set(6.2, 3.4, 7.6)
    camera.lookAt(0, 2.05, 0)

    // --------------------------------------------------------------- lighting
    const hemi = new THREE.HemisphereLight(0xffffff, 0xdcdce2, 1.15)
    scene.add(hemi)

    const key = new THREE.DirectionalLight(0xffffff, 2.1)
    key.position.set(5, 8.5, 5)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    key.shadow.camera.near = 1
    key.shadow.camera.far = 30
    key.shadow.camera.left = -7
    key.shadow.camera.right = 7
    key.shadow.camera.top = 8
    key.shadow.camera.bottom = -2
    key.shadow.bias = -0.0006
    key.shadow.normalBias = 0.02
    scene.add(key)

    const fill = new THREE.DirectionalLight(0xffffff, 0.55)
    fill.position.set(-6, 3, -4)
    scene.add(fill)

    // warm accent rim, echoes the brand amber
    const rim = new THREE.PointLight(0xffc300, 22, 18, 2)
    rim.position.set(-3.2, 3.6, -2.4)
    scene.add(rim)

    // --------------------------------------------------------------- materials
    const shell = new THREE.MeshStandardMaterial({
      color: 0xf4f4f6,
      roughness: 0.42,
      metalness: 0.08,
    })
    const shellSoft = new THREE.MeshStandardMaterial({
      color: 0xe6e7ea,
      roughness: 0.5,
      metalness: 0.06,
    })
    const charcoal = new THREE.MeshStandardMaterial({
      color: 0x2a2d34,
      roughness: 0.55,
      metalness: 0.25,
    })
    const amber = new THREE.MeshStandardMaterial({
      color: 0xffc300,
      roughness: 0.32,
      metalness: 0.35,
    })
    const steel = new THREE.MeshStandardMaterial({
      color: 0x9aa0a8,
      roughness: 0.28,
      metalness: 0.7,
    })

    const materials = [shell, shellSoft, charcoal, amber, steel]
    const geometries: THREE.BufferGeometry[] = []

    const track = <T extends THREE.BufferGeometry>(g: T): T => {
      geometries.push(g)
      return g
    }

    const mesh = (g: THREE.BufferGeometry, m: THREE.Material) => {
      const mm = new THREE.Mesh(track(g), m)
      mm.castShadow = true
      mm.receiveShadow = true
      return mm
    }

    /** A joint housing: an amber disc sandwiched between two steel collars. */
    const joint = (radius: number, width: number) => {
      const g = new THREE.Group()
      const hub = mesh(new THREE.CylinderGeometry(radius, radius, width, 40), amber)
      hub.rotation.z = Math.PI / 2
      g.add(hub)
      for (const side of [-1, 1]) {
        const collar = mesh(
          new THREE.CylinderGeometry(radius * 1.06, radius * 1.06, width * 0.16, 40),
          steel
        )
        collar.rotation.z = Math.PI / 2
        collar.position.x = (side * width) / 2
        g.add(collar)
      }
      return g
    }

    // ------------------------------------------------------------------- rig
    const root = new THREE.Group()
    scene.add(root)

    // Ground shadow catcher
    const ground = new THREE.Mesh(
      track(new THREE.PlaneGeometry(40, 40)),
      new THREE.ShadowMaterial({ opacity: 0.16 })
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    ground.receiveShadow = true
    scene.add(ground)

    // Base plinth
    const basePlate = mesh(new THREE.CylinderGeometry(1.32, 1.46, 0.16, 56), charcoal)
    basePlate.position.y = 0.08
    root.add(basePlate)

    const baseBody = mesh(new THREE.CylinderGeometry(1.06, 1.24, 0.5, 56), shell)
    baseBody.position.y = 0.41
    root.add(baseBody)

    const baseRing = mesh(new THREE.TorusGeometry(1.02, 0.045, 16, 64), amber)
    baseRing.rotation.x = Math.PI / 2
    baseRing.position.y = 0.68
    root.add(baseRing)

    // Bolt detail around the plinth
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2
      const bolt = mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.06, 12), steel)
      bolt.position.set(Math.cos(a) * 1.36, 0.17, Math.sin(a) * 1.36)
      root.add(bolt)
    }

    // --- Axis 1: turntable yaw
    const turntable = new THREE.Group()
    turntable.position.y = 0.68
    root.add(turntable)

    const column = mesh(new THREE.CylinderGeometry(0.68, 0.82, 0.86, 44), shell)
    column.position.y = 0.44
    turntable.add(column)

    const columnBand = mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.1, 44), charcoal)
    columnBand.position.y = 0.2
    turntable.add(columnBand)

    // shoulder yoke cheeks
    for (const side of [-1, 1]) {
      const cheek = mesh(new THREE.BoxGeometry(0.16, 0.62, 0.62), shellSoft)
      cheek.position.set(side * 0.36, 1.06, 0)
      turntable.add(cheek)
    }

    // --- Axis 2: shoulder pitch
    const shoulder = new THREE.Group()
    shoulder.position.y = 1.18
    turntable.add(shoulder)
    shoulder.add(joint(0.3, 0.86))

    const upperArm = mesh(new THREE.CapsuleGeometry(0.22, 1.6, 8, 24), shell)
    upperArm.position.y = 1.02
    shoulder.add(upperArm)

    const upperRib = mesh(new THREE.BoxGeometry(0.5, 1.15, 0.16), shellSoft)
    upperRib.position.y = 1.0
    shoulder.add(upperRib)

    const upperStripe = mesh(new THREE.CylinderGeometry(0.235, 0.235, 0.09, 32), amber)
    upperStripe.position.y = 1.66
    shoulder.add(upperStripe)

    // --- Axis 3: elbow pitch
    const elbow = new THREE.Group()
    elbow.position.y = 2.04
    shoulder.add(elbow)
    elbow.add(joint(0.25, 0.7))

    const forearm = mesh(new THREE.CapsuleGeometry(0.175, 1.24, 8, 24), shell)
    forearm.position.y = 0.82
    elbow.add(forearm)

    const forearmRib = mesh(new THREE.BoxGeometry(0.4, 0.9, 0.13), shellSoft)
    forearmRib.position.y = 0.8
    elbow.add(forearmRib)

    // --- Axis 4: wrist pitch
    const wrist = new THREE.Group()
    wrist.position.y = 1.6
    elbow.add(wrist)
    wrist.add(joint(0.185, 0.5))

    // --- Axis 5: tool roll
    const tool = new THREE.Group()
    tool.position.y = 0.2
    wrist.add(tool)

    const toolNeck = mesh(new THREE.CylinderGeometry(0.135, 0.155, 0.34, 28), charcoal)
    toolNeck.position.y = 0.17
    tool.add(toolNeck)

    const toolFlange = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 32), steel)
    toolFlange.position.y = 0.37
    tool.add(toolFlange)

    // Two-finger gripper
    const fingers: THREE.Group[] = []
    for (const side of [-1, 1]) {
      const f = new THREE.Group()
      f.position.set(side * 0.1, 0.41, 0)

      const knuckle = mesh(new THREE.BoxGeometry(0.09, 0.1, 0.2), steel)
      knuckle.position.y = 0.05
      f.add(knuckle)

      const blade = mesh(new THREE.BoxGeometry(0.07, 0.34, 0.17), charcoal)
      blade.position.y = 0.26
      f.add(blade)

      const pad = mesh(new THREE.BoxGeometry(0.035, 0.16, 0.15), amber)
      pad.position.set(side * -0.05, 0.34, 0)
      f.add(pad)

      tool.add(f)
      fingers.push(f)
    }

    // Cable loop along the forearm, purely decorative
    const cableCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 0.05, -0.26),
      new THREE.Vector3(0.12, 0.5, -0.42),
      new THREE.Vector3(0.05, 1.05, -0.36),
      new THREE.Vector3(0.0, 1.5, -0.22),
    ])
    const cable = mesh(new THREE.TubeGeometry(cableCurve, 40, 0.032, 10, false), charcoal)
    elbow.add(cable)

    // ------------------------------------------------------------- interaction
    const pointer = { x: 0, y: 0 }
    const smoothed = { x: 0, y: 0 }

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    }
    const onPointerLeave = () => {
      pointer.x = 0
      pointer.y = 0
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    mount.addEventListener('pointerleave', onPointerLeave)

    // ------------------------------------------------------------------ resize
    const resize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h)
      camera.aspect = w / h
      // pull the camera back a little on narrow viewports so the arm always fits
      const fit = THREE.MathUtils.clamp(1100 / Math.max(w, 1), 1, 1.85)
      camera.position.set(6.2 * fit, 3.4 * fit * 0.92, 7.6 * fit)
      camera.lookAt(0, 2.05, 0)
      camera.updateProjectionMatrix()
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(mount)

    // --------------------------------------------------------------- animation
    const clock = new THREE.Clock()
    let frame = 0
    let running = true

    const onVisibility = () => {
      running = !document.hidden
      if (running) {
        clock.getDelta() // discard the gap
        frame = requestAnimationFrame(tick)
      } else {
        cancelAnimationFrame(frame)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    let elapsed = 0

    function tick() {
      frame = requestAnimationFrame(tick)
      const dt = Math.min(clock.getDelta(), 0.05)
      if (!prefersReducedMotion) elapsed += dt
      const t = elapsed

      // Layered sine motion — reads as a machine running a slow, deliberate cycle.
      turntable.rotation.y = Math.sin(t * 0.22) * 0.72
      shoulder.rotation.z = -0.34 + Math.sin(t * 0.31) * 0.2
      elbow.rotation.z = 0.86 + Math.sin(t * 0.27 + 1.1) * 0.26
      wrist.rotation.z = -0.48 + Math.sin(t * 0.4 + 2.0) * 0.3
      tool.rotation.y = Math.sin(t * 0.5) * 0.9

      const grip = (Math.sin(t * 0.62) + 1) / 2
      const spread = 0.06 + grip * 0.11
      fingers[0].position.x = -spread
      fingers[1].position.x = spread

      // pointer parallax
      smoothed.x += (pointer.x - smoothed.x) * Math.min(dt * 3.2, 1)
      smoothed.y += (pointer.y - smoothed.y) * Math.min(dt * 3.2, 1)
      root.rotation.y = smoothed.x * 0.26
      root.rotation.x = smoothed.y * 0.06

      renderer.render(scene, camera)
    }

    frame = requestAnimationFrame(tick)
    setReady(true)

    // ----------------------------------------------------------------- cleanup
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointerMove)
      mount.removeEventListener('pointerleave', onPointerLeave)
      ro.disconnect()
      geometries.forEach((g) => g.dispose())
      materials.forEach((m) => m.dispose())
      ;(ground.material as THREE.Material).dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* soft amber floor glow behind the arm */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 42% at 50% 68%, rgba(255,195,0,0.16) 0%, rgba(255,195,0,0.05) 45%, rgba(255,195,0,0) 72%)',
        }}
      />
      <div
        ref={mountRef}
        className={`relative h-full w-full transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export default RobotArm
