'use client'
/* eslint-disable react/no-unescaped-entities */

import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
}

const SLIDE_DURATION = 7000

/** Hero slides. The first has no image — it renders the live 3D arm instead. */
const slides = [
  {
    id: 'tornado',
    eyebrow: 'Tornado Consulting Group',
    title: 'Robots That Understand',
    tagline: 'Perceive. Plan. Act.',
    href: '/services',
    cta: 'Explore capabilities',
    image: null,
  },
  {
    id: 'arms',
    eyebrow: 'Manufacturing',
    title: 'Precision On The Line',
    tagline: 'Robotic arms, integrated end to end',
    href: '/services',
    cta: 'See how we integrate',
    image:
      'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?auto=format&fit=crop&w=2400&q=80',
  },
  {
    id: 'amr',
    eyebrow: 'Warehouse & Logistics',
    title: 'Autonomy In Motion',
    tagline: 'Mobile robots that move your inventory',
    href: '/case-studies',
    cta: 'View use cases',
    image:
      'https://images.unsplash.com/photo-1743611978046-9723d29b99cb?auto=format&fit=crop&w=2400&q=80',
  },
  {
    id: 'integration',
    eyebrow: 'Systems Integration',
    title: 'One Connected Fleet',
    tagline: 'Telemetry, monitoring and control in one place',
    href: '/robotics-tools',
    cta: 'Browse platforms',
    image:
      'https://images.unsplash.com/photo-1753153481105-7a979eabe5a9?auto=format&fit=crop&w=2400&q=80',
  },
] as const

const pipeline = [
  {
    id: 'perception',
    label: 'Perception',
    icon: Eye,
    description:
      'Cameras, LiDAR, and force sensors give the system eyes on the work-cell, feeding real-time data into every decision it makes.',
  },
  {
    id: 'planning',
    label: 'Planning',
    icon: Route,
    description:
      'Motion planning maps a safe, efficient path before a single joint moves — accounting for payload, reach, and nearby obstacles.',
  },
  {
    id: 'decision',
    label: 'Decision Making',
    icon: Brain,
    description:
      'Onboard logic weighs sensor input against the plan in real time, adapting the sequence the moment the environment changes.',
  },
  {
    id: 'control',
    label: 'Control',
    icon: SlidersHorizontal,
    description:
      'Low-level controllers translate decisions into precise joint commands, keeping every axis synchronised and within safety limits.',
  },
  {
    id: 'action',
    label: 'Action',
    icon: Hand,
    description:
      'The end effector executes — gripping, placing, or inspecting — completing the loop from perception back to the next decision.',
  },
] as const

/** Featured capabilities, sized for a cinematic mosaic rather than a uniform grid. */
const featured = [
  {
    title: 'Robotic Arms',
    tagline: 'Manufacturing automation, built around your line',
    href: '/services',
    image:
      'https://images.unsplash.com/photo-1606206873764-fd15e242df52?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Mobile Robotics',
    tagline: 'AMRs and AGVs for warehouse and logistics',
    href: '/services',
    image:
      'https://images.unsplash.com/photo-1742761771253-459473041235?auto=format&fit=crop&w=1600&q=80',
  },
]

const capabilities = [
  {
    title: 'Robotics Strategy',
    tagline: 'A roadmap tied to measurable business targets',
    href: '/services',
    image:
      'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Systems Integration',
    tagline: 'Fleet management and real-time telemetry',
    href: '/services',
    image:
      'https://images.unsplash.com/photo-1753153481105-7a979eabe5a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'IoT & Edge Computing',
    tagline: 'Connected sensors and on-device processing',
    href: '/services',
    image:
      'https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Responsible & Safe Robotics',
    tagline: 'Safety compliance and risk assessment',
    href: '/services',
    image:
      'https://images.unsplash.com/photo-1705579611249-9861db5469ea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Robotics Training',
    tagline: 'Get your team fluent on the platforms you run',
    href: '/training',
    image:
      'https://images.unsplash.com/photo-1737228813532-9cd720824ba7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Robotics Tools',
    tagline: 'Evaluated platforms matched to your requirements',
    href: '/robotics-tools',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
  },
]

const stats = [
  { value: '20+', label: 'Years combined experience' },
  { value: '2', label: 'Founders, hands-on on every project' },
  { value: 'Sydney', label: 'Based, working Australia-wide' },
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

const partners = [
  'Universal Robots',
  'FANUC',
  'ABB',
  'KUKA',
  'Siemens',
  'NVIDIA Isaac',
]

const HomePage = () => {
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [activeStage, setActiveStage] = useState<string>('perception')
  const active = pipeline.find((p) => p.id === activeStage) ?? pipeline[0]

  const go = useCallback((next: number) => {
    setSlide((next + slides.length) % slides.length)
  }, [])

  // Auto-advance the hero, pausing while the visitor is interacting with it.
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => go(slide + 1), SLIDE_DURATION)
    return () => clearTimeout(id)
  }, [slide, paused, go])

  const openBooking = () =>
    window.open('/book', '_blank', 'noopener,noreferrer,width=960,height=800')

  const scrollToCapabilities = () =>
    document
      .getElementById('capabilities')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const current = slides[slide]
  // The 3D arm slide uses a split layout; the photo slides stay centred.
  const isRobotSlide = current.image === null

  return (
    <div className="bg-black">
      {/* ============================================================== HERO */}
      <section
        className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-black"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Featured robotics capabilities"
      >
        {/* ---------------------------------------------- slide 0: live 3D arm */}
        <div
          aria-hidden={slide !== 0}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            slide === 0 ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(65% 60% at 50% 45%, #000 0%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(65% 60% at 50% 45%, #000 0%, transparent 100%)',
            }}
          />
          {/* Pushed to the right half on desktop so the headline gets clean space.
              The amber glow lives inside so it travels with the arm. */}
          <div className="relative h-full w-full transition-transform duration-700 md:translate-x-[24%] md:scale-95">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(50% 48% at 50% 55%, rgba(255,195,0,0.14) 0%, transparent 70%)',
              }}
            />
            <RobotArm className="h-full w-full" />
          </div>
          {/* Mobile-only scrim — there the arm sits directly behind the type. */}
          <div className="absolute inset-0 bg-black/45 md:hidden" />
        </div>

        {/* ------------------------------------------------- photo slides 1..n */}
        {slides.map((s, i) =>
          s.image ? (
            <div
              key={s.id}
              aria-hidden={slide !== i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                slide === i ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <motion.div
                className="absolute inset-0"
                animate={slide === i ? { scale: 1.08 } : { scale: 1 }}
                transition={{ duration: SLIDE_DURATION / 1000 + 2, ease: 'linear' }}
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  priority={i === 1}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
              {/* keep the overlaid type legible on any photograph */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/55" />
            </div>
          ) : null
        )}

        {/* ------------------------------------------------------ overlaid copy */}
        <div
          className={`container-wide relative z-20 flex h-full flex-col justify-center ${
            isRobotSlide
              ? 'items-center text-center md:items-start md:text-left'
              : 'items-center text-center'
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={isRobotSlide ? 'max-w-2xl' : 'max-w-4xl'}
            >
              <p className="text-[11px] font-light uppercase tracking-[0.32em] text-primary-400">
                {current.eyebrow}
              </p>
              <h1 className="mt-6 text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
                {current.title}
              </h1>
              <p className="mt-6 text-base font-light tracking-wide text-white/70 md:text-xl">
                {current.tagline}
              </p>
              <div
                className={`mt-10 flex flex-col gap-3 sm:flex-row ${
                  isRobotSlide
                    ? 'items-center justify-center md:items-start md:justify-start'
                    : 'items-center justify-center'
                }`}
              >
                <Link href={current.href} className="btn-ghost w-full sm:w-auto">
                  {current.cta}
                </Link>
                <button
                  onClick={openBooking}
                  className="btn-primary w-full font-light sm:w-auto"
                >
                  Book a consultation
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ----------------------------------------------------- prev / next */}
        <button
          onClick={() => go(slide - 1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/20 p-2.5 text-white/70 transition-all duration-200 hover:border-white/60 hover:text-white md:block"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(slide + 1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/20 p-2.5 text-white/70 transition-all duration-200 hover:border-white/60 hover:text-white md:block"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* -------------------------------------------------------- indicators */}
        <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              aria-current={slide === i}
              className="group py-3"
            >
              <span
                className={`block h-px w-10 transition-all duration-300 md:w-14 ${
                  slide === i
                    ? 'bg-primary-400'
                    : 'bg-white/30 group-hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>

        {/* --------------------------------------------------------- scroll cue */}
        <motion.button
          onClick={scrollToCapabilities}
          aria-label="Scroll to capabilities"
          className="absolute bottom-4 left-1/2 z-30 hidden -translate-x-1/2 text-white/40 transition-colors hover:text-white md:block"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowRight className="h-4 w-4 rotate-90" />
        </motion.button>
      </section>

      {/* ====================================================== FEATURED TILES */}
      <section id="capabilities" className="scroll-mt-16 bg-black pb-4 pt-16 md:pt-24">
        <motion.div {...fadeUp} className="container-wide mb-6 text-center">
          <p className="eyebrow-dark">What we build</p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl">
            Robotics, end to end.
          </h2>
        </motion.div>

        <div className="container-wide grid grid-cols-1 gap-3 md:grid-cols-2">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            >
              <Link href={item.href} className="tile group block h-[62vh] min-h-[420px] w-full">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="tile-media"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/25 to-black/60" />
                <div className="relative z-10 flex h-full flex-col items-center px-8 pt-12 text-center">
                  <h3 className="text-3xl font-light tracking-tight text-white md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-white/70 md:text-base">
                    {item.tagline}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-light text-primary-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================== CAPABILITY MOSAIC */}
      <section className="bg-black pb-16 md:pb-24">
        <div className="container-wide grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 3) * 0.07 }}
            >
              <Link href={item.href} className="tile group block h-[360px] w-full">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="tile-media"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/30 to-black/60" />
                <div className="relative z-10 flex h-full flex-col items-center px-6 pt-9 text-center">
                  <h3 className="text-xl font-light tracking-tight text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-[16rem] text-[13px] font-light leading-relaxed text-white/65">
                    {item.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-light text-primary-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================================================== PIPELINE SHOWCASE */}
      <section id="pipeline" className="scroll-mt-16 border-y border-white/10 bg-black py-20 md:py-28">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">How it works</p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl">
              The robotic intelligence pipeline.
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-white/60 md:text-base">
              Every system we integrate runs the same loop. Select a stage to see
              what happens inside it.
            </p>
          </motion.div>

          <div className="relative mx-auto mt-14 max-w-3xl">
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
                      className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-black transition-all duration-300 ${
                        isActive
                          ? 'border-primary-400 bg-primary-400 text-black'
                          : 'border-white/15 text-white/50 group-hover:border-white/40 group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span
                      className={`text-xs font-light tracking-wide transition-colors duration-200 sm:text-sm ${
                        isActive ? 'text-white' : 'text-white/45 group-hover:text-white/80'
                      }`}
                    >
                      {stage.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-center text-base font-light leading-relaxed text-white/70 md:text-lg"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ======================================================== STATEMENT BAND */}
      <section className="relative h-[70vh] min-h-[440px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1725834451127-4eb36b47f434?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.div {...fadeUp} className="max-w-3xl text-center">
            <h2 className="text-3xl font-light leading-tight tracking-tight text-white md:text-5xl">
              We pave the way to robotics success.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/70">
              From first assessment to a running line — scoped clearly, priced
              transparently, and led directly by the people who founded the company.
            </p>
            <Link href="/about" className="btn-ghost mt-9 inline-flex">
              About Tornado
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ PRINCIPLES */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {principles.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="border-t border-white/10 pt-6 md:pr-8"
              >
                <span className="text-xs font-light tabular-nums text-primary-400">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-light tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ STATS */}
      <section className="border-y border-white/10 bg-black">
        <div className="container-custom">
          <dl className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="py-10 sm:px-8 sm:py-14 sm:first:pl-0"
              >
                <dt className="text-4xl font-light tracking-tight text-white md:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm font-light text-white/50">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================================================= PARTNERS */}
      <section className="bg-black py-16">
        <div className="container-custom">
          <motion.p {...fadeUp} className="eyebrow-dark text-center">
            Platforms and vendors we build with
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
          >
            {partners.map((name) => (
              <span
                key={name}
                className="text-sm font-light tracking-wide text-white/40 transition-colors hover:text-white"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== CTA */}
      <section className="relative h-[62vh] min-h-[400px] w-full overflow-hidden border-t border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl">
              Ready to put robotics to work?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-white/70">
              Let's talk through where automation actually pays back in your
              operation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={openBooking} className="btn-primary w-full font-light sm:w-auto">
                Book free consultation
              </button>
              <Link href="/case-studies" className="btn-ghost w-full sm:w-auto">
                See example use cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
