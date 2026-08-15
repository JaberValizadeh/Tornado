'use client'
/* eslint-disable react/no-unescaped-entities */

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

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

const HomePage = () => {
  const openBooking = () =>
    window.open('/book', '_blank', 'noopener,noreferrer,width=960,height=800')

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
      title: 'Robotics Strategy & Automation Roadmap',
      description:
        'Comprehensive robotics roadmaps aligned to your business objectives and measurable growth targets.',
    },
    {
      title: 'Robotic Arms & Manufacturing Automation',
      description:
        'Intelligent robotic arms that automate production lines, optimise operations and unlock data-driven insight.',
    },
    {
      title: 'Warehouse & Logistics Robotics',
      description:
        'Autonomous mobile robots and AGVs that automate workflows and lift productivity across the facility.',
    },
    {
      title: 'Systems Integration & Cloud Monitoring',
      description:
        'Fleet management, cloud infrastructure and real-time telemetry with enterprise-grade reliability.',
    },
    {
      title: 'IoT & Edge Computing for Robotics',
      description:
        'Connected sensors, real-time processing and edge deployment for industrial and consumer robotics.',
    },
    {
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
    <div className="bg-white">
      {/* ================================================================ HERO */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 md:pt-28">
        {/* whisper-thin grid, barely there */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage:
              'radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 100%)',
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="eyebrow">Robotic solutions, engineered</span>
            <h1 className="display mt-5">
              The right robotic solutions
              <br className="hidden sm:block" />{' '}
              <span className="text-neutral-400">for your business.</span>
            </h1>
            <p className="body-muted mx-auto mt-6 max-w-xl">
              Tornado helps businesses unlock the potential of robotics with
              intelligent systems that drive productivity, automation and
              innovation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={openBooking} className="btn-primary w-full sm:w-auto">
                Book free consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <Link href="/services" className="btn-secondary w-full sm:w-auto">
                Explore services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* -------------------------------------------------- 3D robot arm */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative z-0 mt-6 h-[46vh] min-h-[300px] w-full md:mt-4 md:h-[52vh] md:min-h-[380px]"
        >
          <RobotArm className="h-full w-full" />
        </motion.div>
      </section>

      {/* =============================================================== STATS */}
      <section className="border-y border-neutral-200">
        <div className="container-custom">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="border-neutral-200 py-10 pr-6 [&:nth-child(n+3)]:border-t md:border-t-0 md:py-12 [&:not(:first-child)]:md:border-l md:[&:not(:first-child)]:pl-8"
              >
                <dt className="text-4xl font-medium tracking-tight text-neutral-950 md:text-5xl">
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
          <motion.h2 {...fadeUp} className="heading max-w-xl">
            We pave the way to robotics success.
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden md:grid-cols-3">
            {principles.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="border-t border-neutral-200 pt-6 md:pr-8"
              >
                <span className="text-xs font-medium tabular-nums text-primary-600">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-medium text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ SERVICES */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div {...fadeUp} className="max-w-xl">
            <span className="eyebrow">What we do</span>
            <h2 className="heading mt-4">Robotics consulting services.</h2>
            <p className="body-muted mt-5">
              From strategy to implementation, end-to-end robotics solutions
              tailored to how your operation actually runs.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.07 }}
                className="group border-t border-neutral-200 py-8"
              >
                <span className="text-xs font-medium tabular-nums text-neutral-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-base font-medium leading-snug text-neutral-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {service.description}
                </p>
                <Link href="/services" className="link-quiet mt-5">
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== ENTRY POINTS */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...fadeUp} className="max-w-xl">
            <h2 className="heading">Harness the power of robotics.</h2>
            <p className="body-muted mt-5">
              We've assessed hundreds of robotics platforms so you don't have to.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {entryPoints.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              >
                <Link
                  href={item.link}
                  className="card group flex h-full flex-col p-7 hover:border-neutral-900"
                >
                  <h3 className="text-lg font-medium text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                  <span className="link-quiet mt-6">
                    Read more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ PARTNERS */}
      <section className="border-t border-neutral-200 py-16">
        <div className="container-custom">
          <motion.p {...fadeUp} className="eyebrow text-center">
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
                className="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-900"
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
            className="relative overflow-hidden rounded-3xl bg-neutral-950 px-8 py-20 text-center md:px-16"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 h-64"
              style={{
                background:
                  'radial-gradient(50% 100% at 50% 100%, rgba(255,195,0,0.18) 0%, rgba(255,195,0,0) 100%)',
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
                className="btn-base w-full border border-neutral-700 px-6 py-3 text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900 sm:w-auto"
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
