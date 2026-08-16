'use client'
/* eslint-disable react/no-unescaped-entities */

import dynamic from 'next/dynamic'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Target,
  Zap,
  Cloud,
  Cpu,
  Shield,
  Eye,
  Route,
  Brain,
  SlidersHorizontal,
  Hand,
} from 'lucide-react'

// three.js touches window/document, so it never runs on the server.
const RobotArm = dynamic(() => import('@/components/RobotArm'), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
})

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
}

/** Nudges its children toward the cursor within a small radius, springs back on leave. */
function Magnetic({
  children,
  className = '',
  strength = 14,
}: {
  children: React.ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 })

  const handleMove = (e: React.MouseEvent) => {
    if (reduce) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(((e.clientX - (rect.left + rect.width / 2)) / rect.width) * strength)
    y.set(((e.clientY - (rect.top + rect.height / 2)) / rect.height) * strength)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** A card that tilts gently toward the cursor and shows a soft amber spotlight. */
function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRX = useSpring(rotateX, { stiffness: 220, damping: 22 })
  const springRY = useSpring(rotateY, { stiffness: 220, damping: 22 })

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    if (!reduce) {
      rotateY.set((px - 0.5) * 7)
      rotateX.set((0.5 - py) * 7)
    }
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(260px circle at ${px * 100}% ${py * 100}%, rgba(255,195,0,0.14), transparent 70%)`
      glowRef.current.style.opacity = '1'
    }
  }
  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: springRX, rotateY: springRY, transformPerspective: 800 }}
      className={`relative ${className}`}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  )
}

const pipeline = [
  {
    id: 'perception',
    label: 'Perception',
    icon: Eye,
    pin: { top: '13%', left: '41%' },
    description:
      "Cameras, LiDAR, and force sensors give the system eyes on the work-cell, feeding real-time data into every decision it makes.",
  },
  {
    id: 'planning',
    label: 'Planning',
    icon: Route,
    pin: { top: '40%', left: '46%' },
    description:
      'Motion planning maps a safe, efficient path before a single joint moves — accounting for payload, reach, and nearby obstacles.',
  },
  {
    id: 'decision',
    label: 'Decision Making',
    icon: Brain,
    pin: { top: '55%', left: '49%' },
    description:
      "Onboard logic weighs sensor input against the plan in real time, adapting the sequence the moment the environment changes.",
  },
  {
    id: 'control',
    label: 'Control',
    icon: SlidersHorizontal,
    pin: { top: '82%', left: '50%' },
    description:
      'Low-level controllers translate decisions into precise joint commands, keeping every axis synchronised and within safety limits.',
  },
  {
    id: 'action',
    label: 'Action',
    icon: Hand,
    pin: { top: '5%', left: '39%' },
    description:
      "The end effector executes — gripping, placing, or inspecting — completing the loop from perception back to the next decision.",
  },
] as const

const HomePage = () => {
  const [activeStage, setActiveStage] = useState<string>('perception')
  const active = pipeline.find((p) => p.id === activeStage) ?? pipeline[0]

  const openBooking = () =>
    window.open('/book', '_blank', 'noopener,noreferrer,width=960,height=800')

  const scrollToPipeline = () => {
    document.getElementById('pipeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const stats = [
    { value: '20+', label: 'Years combined experience' },
    { value: '50+', label: 'Robotic systems deployed' },
    { value: '95%', label: 'Client satisfaction' },
    { value: '15+', label: 'Industry specialisations' },
  ]

  const principles = [
    {
      title: 'Prompt, responsive support',
      description:
        'A two-hour response guarantee, so a stopped line never waits on a ticket queue.',
    },
    {
      title: 'Live deployment dashboards',
      description:
        'Track completed and in-progress robot installations with real-time visibility into every stage.',
    },
    {
      title: 'Transparent performance data',
      description:
        'Uptime, throughput and cycle-time reporting you can take straight into a board meeting.',
    },
  ]

  const services = [
    {
      icon: Target,
      title: 'Robotics Strategy & Automation Roadmap',
      description:
        'Comprehensive robotics roadmaps aligned to your business objectives and measurable growth targets.',
    },
    {
      icon: Bot,
      title: 'Robotic Arms & Manufacturing Automation',
      description:
        'Intelligent robotic arms that automate production lines, optimise operations and unlock data-driven insight.',
    },
    {
      icon: Zap,
      title: 'Warehouse & Logistics Robotics',
      description:
        'Autonomous mobile robots and AGVs that automate workflows and lift productivity across the facility.',
    },
    {
      icon: Cloud,
      title: 'Systems Integration & Cloud Monitoring',
      description:
        'Fleet management, cloud infrastructure and real-time telemetry with enterprise-grade reliability.',
    },
    {
      icon: Cpu,
      title: 'IoT & Edge Computing for Robotics',
      description:
        'Connected sensors, real-time processing and edge deployment for industrial and consumer robotics.',
    },
    {
      icon: Shield,
      title: 'Responsible & Safe Robotics',
      description:
        'Safety compliance, risk assessment and ethical automation for transparent, accountable systems.',
    },
  ]

  const entryPoints = [
    {
      title: 'Robotics Consulting',
      description:
        'Strategic guidance to transform operations and prioritise the automation that pays back first.',
      link: '/services#robotics-consulting',
    },
    {
      title: 'Robotics Training',
      description:
        'Programs that get your team fluent in the platforms running on your floor.',
      link: '/training',
    },
    {
      title: 'Robotics Tools',
      description:
        'Access to evaluated robotics tools and platforms matched to your requirements.',
      link: '/robotics-tools',
    },
  ]

  const partners = [
    'Universal Robots',
    'FANUC',
    'ABB',
    'KUKA',
    'Siemens',
    'NVIDIA Isaac',
  ]

  return (
    <div className="bg-neutral-950">
      {/* ================================================================ HERO */}
      <section className="relative overflow-hidden pt-24 md:pt-28">
        {/* whisper-thin grid + amber vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(70% 60% at 50% 35%, #000 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(70% 60% at 50% 35%, #000 0%, transparent 100%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
          style={{
            background: 'radial-gradient(60% 55% at 50% 15%, rgba(255,195,0,0.10) 0%, transparent 70%)',
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="eyebrow-dark">Robotic Solutions, Engineered</span>
            <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Building intelligent robots that
              <br className="hidden sm:block" />{' '}
              <span className="text-primary-400">understand, learn, and act.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Tornado designs, integrates, and deploys robotic systems that perceive
              their environment, plan safely, and act reliably — from the factory
              floor to the warehouse aisle.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <Link href="/services" className="btn-primary w-full sm:w-auto">
                  Explore Our Capabilities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={scrollToPipeline}
                  className="btn-base w-full border border-white/15 px-6 py-3 text-white transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto"
                >
                  See How It Works
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* -------------------------------------------------- 3D robot + hotspots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative z-0 mt-4 h-[48vh] min-h-[320px] w-full md:mt-2 md:h-[54vh] md:min-h-[400px]"
        >
          <RobotArm className="h-full w-full" />

          {/* interactive hotspots — sync with the pipeline stepper below */}
          {pipeline.map((stage) => {
            const Icon = stage.icon
            const isActive = stage.id === activeStage
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage.id)}
                onMouseEnter={() => setActiveStage(stage.id)}
                onFocus={() => setActiveStage(stage.id)}
                aria-label={stage.label}
                aria-pressed={isActive}
                style={{ top: stage.pin.top, left: stage.pin.left }}
                className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2 outline-none"
              >
                <span
                  className={`relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive ? 'scale-125 bg-primary-400' : 'bg-white/50 group-hover:bg-primary-400/80'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary-400/60"
                      animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </span>
                <span
                  className={`pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-neutral-900/90 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <Icon className="mr-1 inline h-3 w-3 text-primary-400" />
                  {stage.label}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* scroll cue */}
        <motion.button
          onClick={scrollToPipeline}
          aria-label="Scroll to pipeline showcase"
          className="relative z-10 mx-auto mb-8 mt-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition-colors hover:border-white/25 hover:text-white"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowRight className="h-4 w-4 rotate-90" />
        </motion.button>
      </section>

      {/* ===================================================== PIPELINE SHOWCASE */}
      <section id="pipeline" className="border-y border-white/10 py-16 md:py-20 scroll-mt-20">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mx-auto max-w-xl text-center">
            <span className="eyebrow-dark">How it works</span>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-white md:text-3xl">
              The robotic intelligence pipeline.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
              Every system we integrate runs the same loop — click a stage to see
              what's happening, or hover the matching point on the robot above.
            </p>
          </motion.div>

          {/* stepper */}
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-0 right-0 top-4 hidden h-px bg-white/10 sm:block" />
            <div className="grid grid-cols-3 gap-y-6 sm:grid-cols-5 sm:gap-y-0">
              {pipeline.map((stage) => {
                const Icon = stage.icon
                const isActive = stage.id === activeStage
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(stage.id)}
                    className="group relative flex flex-col items-center gap-3 px-2 text-center"
                    aria-pressed={isActive}
                  >
                    <span
                      className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-neutral-950 transition-all duration-300 ${
                        isActive
                          ? 'border-primary-400 bg-primary-400 text-neutral-950'
                          : 'border-white/15 text-neutral-400 group-hover:border-white/30 group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span
                      className={`text-xs font-medium transition-colors duration-200 sm:text-sm ${
                        isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                      }`}
                    >
                      {stage.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* active stage description */}
          <div className="mx-auto mt-10 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-dark rounded-2xl p-6 text-center md:p-8"
              >
                <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =============================================================== STATS */}
      <section className="border-b border-white/10">
        <div className="container-custom">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="border-white/10 py-10 pr-6 [&:nth-child(n+3)]:border-t md:border-t-0 md:py-12 [&:not(:first-child)]:md:border-l md:[&:not(:first-child)]:pl-8"
              >
                <dt className="text-4xl font-medium tracking-tight text-white md:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-neutral-500">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* ========================================================== PRINCIPLES */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            {...fadeUp}
            className="max-w-xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl"
          >
            We pave the way to robotics success.
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden md:grid-cols-3">
            {principles.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="border-t border-white/10 pt-6 md:pr-8"
              >
                <span className="text-xs font-medium tabular-nums text-primary-400">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ SERVICES */}
      <section className="section-padding bg-neutral-900/40">
        <div className="container-custom">
          <motion.div {...fadeUp} className="max-w-xl">
            <span className="eyebrow-dark">What we do</span>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
              Robotics consulting services.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              From strategy to implementation, end-to-end robotics solutions
              tailored to how your operation actually runs.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.07 }}
              >
                <TiltCard className="card-dark group h-full rounded-2xl p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-medium leading-snug text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-primary-400"
                  >
                    Read more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== ENTRY POINTS */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...fadeUp} className="max-w-xl">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
              Harness the power of robotics.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              We've assessed hundreds of robotics platforms so you don't have to.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {entryPoints.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <TiltCard className="card-dark h-full">
                  <Link href={item.link} className="group flex h-full flex-col p-7">
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                      {item.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors group-hover:text-primary-400">
                      Read more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ PARTNERS */}
      <section className="border-t border-white/10 py-16">
        <div className="container-custom">
          <motion.p {...fadeUp} className="eyebrow-dark text-center">
            Your gateway to the world's most advanced robotics technologies
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            {partners.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-white"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 px-8 py-20 text-center md:px-16"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 h-64"
              style={{
                background:
                  'radial-gradient(50% 100% at 50% 100%, rgba(255,195,0,0.16) 0%, rgba(255,195,0,0) 100%)',
              }}
            />
            <h2 className="relative text-3xl font-medium tracking-tight text-white md:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-base leading-relaxed text-neutral-400">
              Let's discuss how robotics can drive growth and innovation in your
              organisation.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={openBooking} className="btn-primary w-full sm:w-auto">
                Book free consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <Link
                href="/case-studies"
                className="btn-base w-full border border-white/15 px-6 py-3 text-white transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto"
              >
                View case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
