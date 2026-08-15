'use client'

/**
 * RobotArm — a procedurally built Franka-Panda-style 7-axis collaborative
 * robot arm rendered with three.js. No external model files, no CDN assets.
 * Pearl-white link shells, matte-black joint housings, and an alternating
 * yaw-pitch-roll-pitch-roll-pitch-roll axis pattern — the Panda's signature
 * silhouette — with a white parallel gripper and black rubber fingertips.
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
    renderer.toneMappingExposure = 1.08
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    mount.appendChild(renderer.domElement)

    // ------------------------------------------------------------------ scene
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      32,
      mount.clientWidth / Math.max(mount.clientHeight, 1),
      0.1,
      100
    )
    camera.position.set(6.6, 3.9, 8.2)
    camera.lookAt(0, 2.15, 0)

    // --------------------------------------------------------------- lighting
    const hemi = new THREE.HemisphereLight(0xffffff, 0xd8d9de, 1.2)
    scene.add(hemi)

    const key = new THREE.DirectionalLight(0xffffff, 2.2)
    key.position.set(5, 9, 5)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    key.shadow.camera.near = 1
    key.shadow.camera.far = 30
    key.shadow.camera.left = -7
    key.shadow.camera.right = 7
    key.shadow.camera.top = 9
    key.shadow.camera.bottom = -2
    key.shadow.bias = -0.0006
    key.shadow.normalBias = 0.02
    scene.add(key)

    const fill = new THREE.DirectionalLight(0xffffff, 0.6)
    fill.position.set(-6, 3.5, -4)
    scene.add(fill)

    // warm accent rim, echoes the brand amber
    const rim = new THREE.PointLight(0xffc300, 18, 18, 2)
    rim.position.set(-3.2, 4, -2.4)
    scene.add(rim)

    // --------------------------------------------------------------- materials
    const white = new THREE.MeshStandardMaterial({
      color: 0xf7f7f4,
      roughness: 0.38,
      metalness: 0.04,
    })
    const whiteSoft = new THREE.MeshStandardMaterial({
      color: 0xeaeae7,
      roughness: 0.46,
      metalness: 0.04,
    })
    const black = new THREE.MeshStandardMaterial({
      color: 0x1c1c1e,
      roughness: 0.4,
      metalness: 0.2,
    })
    const graphite = new THREE.MeshStandardMaterial({
      color: 0x3a3a3d,
      roughness: 0.5,
      metalness: 0.25,
    })
    const amber = new THREE.MeshStandardMaterial({
      color: 0xffc300,
      roughness: 0.28,
      metalness: 0.4,
      emissive: 0xffc300,
      emissiveIntensity: 0.3,
    })
    const rubber = new THREE.MeshStandardMaterial({
      color: 0x161616,
      roughness: 0.8,
      metalness: 0,
    })

    const materials = [white, whiteSoft, black, graphite, amber, rubber]
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

    /** A matte-black joint housing with graphite collar trim, lying along local X. */
    const jointHousing = (radius: number, length: number) => {
      const g = new THREE.Group()
      const hub = mesh(new THREE.CylinderGeometry(radius, radius, length, 40), black)
      hub.rotation.z = Math.PI / 2
      g.add(hub)
      for (const side of [-1, 1]) {
        const collar = mesh(
          new THREE.CylinderGeometry(radius * 1.05, radius * 1.05, length * 0.14, 40),
          graphite
        )
        collar.rotation.z = Math.PI / 2
        collar.position.x = (side * length) / 2
        g.add(collar)
      }
      return g
    }

    /** A slender rounded link lying along the local Y axis. */
    const link = (radius: number, length: number, material: THREE.Material) =>
      mesh(new THREE.CapsuleGeometry(radius, length, 8, 24), material)

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

    // Base mount — matte black, tapered
    const basePlate = mesh(new THREE.CylinderGeometry(1.0, 1.12, 0.12, 56), black)
    basePlate.position.y = 0.06
    root.add(basePlate)

    const baseBody = mesh(new THREE.CylinderGeometry(0.76, 0.94, 0.42, 56), black)
    baseBody.position.y = 0.33
    root.add(baseBody)

    // brand-amber status ring at the base — echoes the LED ring on the real
    // robot's flange, repeated here as a subtle brand touch
    const baseRing = mesh(new THREE.TorusGeometry(0.78, 0.026, 12, 64), amber)
    baseRing.rotation.x = Math.PI / 2
    baseRing.position.y = 0.56
    root.add(baseRing)

    // --- J1: base yaw
    const j1 = new THREE.Group()
    j1.position.y = 0.56
    root.add(j1)

    const column = link(0.33, 0.4, white)
    column.position.y = 0.26
    j1.add(column)

    // --- J2: shoulder pitch
    const j2 = new THREE.Group()
    j2.position.y = 0.5
    j1.add(j2)
    j2.add(jointHousing(0.33, 0.68))

    const upperArmRib = mesh(new THREE.BoxGeometry(0.46, 0.9, 0.15), whiteSoft)
    upperArmRib.position.y = 0.52
    j2.add(upperArmRib)

    const upperArm = link(0.24, 1.0, white)
    upperArm.position.y = 0.56
    j2.add(upperArm)

    // --- J3: upper-arm roll
    const j3 = new THREE.Group()
    j3.position.y = 1.06
    j2.add(j3)
    j3.add(jointHousing(0.22, 0.4))

    const link2 = link(0.19, 0.26, whiteSoft)
    link2.position.y = 0.2
    j3.add(link2)

    // --- J4: elbow pitch
    const j4 = new THREE.Group()
    j4.position.y = 0.34
    j3.add(j4)
    j4.add(jointHousing(0.25, 0.54))

    const forearmRib = mesh(new THREE.BoxGeometry(0.36, 0.72, 0.13), whiteSoft)
    forearmRib.position.y = 0.42
    j4.add(forearmRib)

    const forearm = link(0.18, 0.82, white)
    forearm.position.y = 0.46
    j4.add(forearm)

    // --- J5: forearm roll
    const j5 = new THREE.Group()
    j5.position.y = 0.87
    j4.add(j5)
    j5.add(jointHousing(0.17, 0.34))

    const link3 = link(0.145, 0.22, whiteSoft)
    link3.position.y = 0.17
    j5.add(link3)

    // --- J6: wrist pitch
    const j6 = new THREE.Group()
    j6.position.y = 0.3
    j5.add(j6)
    j6.add(jointHousing(0.165, 0.32))

    const wristStub = link(0.13, 0.22, white)
    wristStub.position.y = 0.16
    j6.add(wristStub)

    // --- J7: flange roll
    const j7 = new THREE.Group()
    j7.position.y = 0.28
    j6.add(j7)
    j7.add(jointHousing(0.135, 0.2))

    // amber LED ring on the flange — a real Panda hardware feature
    const flangeRing = mesh(new THREE.TorusGeometry(0.14, 0.016, 10, 48), amber)
    flangeRing.rotation.z = Math.PI / 2
    flangeRing.position.y = 0.12
    j7.add(flangeRing)

    // --------------------------------------------------------- end effector
    const hand = new THREE.Group()
    hand.position.y = 0.18
    j7.add(hand)

    const handBody = mesh(new THREE.BoxGeometry(0.32, 0.2, 0.15), white)
    handBody.position.y = 0.1
    hand.add(handBody)

    const fingers: THREE.Group[] = []
    for (const side of [-1, 1]) {
      const f = new THREE.Group()
      f.position.set(side * 0.085, 0.2, 0)

      const finger = mesh(new THREE.BoxGeometry(0.058, 0.3, 0.11), whiteSoft)
      finger.position.y = 0.15
      f.add(finger)

      const tip = mesh(new THREE.BoxGeometry(0.06, 0.085, 0.12), rubber)
      tip.position.y = 0.29
      f.add(tip)

      hand.add(f)
      fingers.push(f)
    }

    // Cable loop along the forearm, purely decorative
    const cableCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 0.04, -0.2),
      new THREE.Vector3(0.09, 0.38, -0.3),
      new THREE.Vector3(0.03, 0.72, -0.26),
      new THREE.Vector3(0.0, 0.95, -0.18),
    ])
    const cable = mesh(new THREE.TubeGeometry(cableCurve, 40, 0.024, 10, false), black)
    j4.add(cable)

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
      const fit = THREE.MathUtils.clamp(1100 / Math.max(w, 1), 1, 1.9)
      camera.position.set(6.6 * fit, 3.9 * fit * 0.92, 8.2 * fit)
      camera.lookAt(0, 2.15, 0)
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

      // Layered sine motion across all seven axes — reads as a machine
      // running a slow, deliberate demo cycle rather than a mechanical loop.
      j1.rotation.y = Math.sin(t * 0.18) * 0.55
      j2.rotation.z = -0.08 + Math.sin(t * 0.24) * 0.14
      j3.rotation.y = Math.sin(t * 0.3 + 0.6) * 0.3
      j4.rotation.z = 0.62 + Math.sin(t * 0.26 + 1.1) * 0.2
      j5.rotation.y = Math.sin(t * 0.35 + 1.7) * 0.38
      j6.rotation.z = -0.32 + Math.sin(t * 0.32 + 2.2) * 0.22
      j7.rotation.y = Math.sin(t * 0.42) * 0.5

      const grip = (Math.sin(t * 0.62) + 1) / 2
      const spread = 0.045 + grip * 0.09
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
