'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Clock,
  ArrowRight,
  ShoppingCart,
  Factory,
  Heart,
  Car,
  BookOpen,
  ShieldCheck
} from 'lucide-react'
import Button from '@/components/Button'

const CaseStudiesPage = () => {
  const scenarios = [
    {
      id: 1,
      industry: 'Retail & Warehousing',
      icon: ShoppingCart,
      title: 'Autonomous Mobile Robot Warehouse Optimization',
      challenge: 'Overstock and stockouts are two of the most common warehouse problems — both eat into margin and customer trust.',
      approach: 'A fleet of autonomous mobile robots (AMRs) automates picking and replenishment, tracking demand patterns to keep inventory levels closer to what the floor actually needs.',
      outcomes: ['Fewer stockouts', 'Less manual picking time', 'Tighter inventory control'],
      category: 'Warehouse Robotics'
    },
    {
      id: 2,
      industry: 'Healthcare',
      icon: Heart,
      title: 'Hospital Logistics Robots for Patient Care',
      challenge: 'Clinical staff often lose hours a week to internal logistics — moving medications, supplies, and lab samples between departments.',
      approach: 'Autonomous delivery robots take over routine transport runs, freeing clinical staff to spend that time on patient care instead.',
      outcomes: ['Faster delivery turnaround', 'More staff time for patients', 'Fewer manual handoffs'],
      category: 'Service Robotics'
    },
    {
      id: 3,
      industry: 'Manufacturing',
      icon: Factory,
      title: 'Robotic Arm Deployment for Smart Manufacturing',
      challenge: 'Production lines with manual, repetitive tasks tend to accumulate inconsistent quality and unplanned downtime over time.',
      approach: 'Robotic arm work cells with machine vision quality control and predictive maintenance keep production lines running consistently.',
      outcomes: ['More consistent output', 'Fewer defects reaching QA', 'Maintenance scheduled before failure'],
      category: 'Manufacturing Automation'
    },
    {
      id: 4,
      industry: 'Facilities & Security',
      icon: ShieldCheck,
      title: 'Autonomous Security & Facilities Robots',
      challenge: 'Facility monitoring across a large site is expensive to staff around the clock, and human patrols can miss the same blind spots every time.',
      approach: 'Autonomous patrol robots handle facility monitoring and anomaly detection, with real-time sensing and after-hours coverage.',
      outcomes: ['Consistent, repeatable patrol coverage', 'Faster anomaly detection', 'Lower reliance on overnight staffing'],
      category: 'Security Robotics'
    },
    {
      id: 5,
      industry: 'Transportation & Logistics',
      icon: Car,
      title: 'Autonomous Delivery Robots & Fleet Routing',
      challenge: 'Delivery networks lose money to inefficient routing and reactive vehicle maintenance.',
      approach: 'Autonomous delivery robots paired with route optimization algorithms and predictive maintenance systems keep a fleet running efficiently.',
      outcomes: ['Lower fuel costs', 'More predictable delivery windows', 'Fewer unplanned fleet outages'],
      category: 'Logistics Robotics'
    },
    {
      id: 6,
      industry: 'Education',
      icon: BookOpen,
      title: 'Educational & STEM Robotics Lab Deployment',
      challenge: 'Hands-on robotics education is one of the most effective ways to build student engagement — but it takes real equipment and curriculum, not just theory.',
      approach: 'A STEM robotics lab with programmable robot kits and an adaptive, project-based curriculum gives students something to actually build.',
      outcomes: ['Higher student engagement', 'Practical, transferable skills', 'A curriculum that scales with ability'],
      category: 'Educational Robotics'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="eyebrow">Use Cases</span>
            <h1 className="display mt-5">
              Where robotics <span className="text-neutral-400">creates value.</span>
            </h1>
            <p className="body-muted mx-auto mt-6 max-w-xl">
              As a young company, we don't have a long client roster to show off yet. What
              follows are illustrative scenarios based on common operational challenges —
              the kinds of problems robotics is well suited to solve, not a portfolio of
              completed projects.
            </p>
            <div className="mt-9">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Talk to Us About Your Operation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scenarios Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Robotics Applies Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each scenario below reflects a common challenge and the type of robotic
              solution typically used to address it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 group hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <scenario.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <div className="font-semibold text-gray-900">{scenario.industry}</div>
                  </div>
                  <div className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                    {scenario.category}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-700 transition-colors">
                  {scenario.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                  <p className="text-gray-600 text-sm">{scenario.challenge}</p>
                </div>

                {/* Approach */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">The Approach</h4>
                  <p className="text-gray-600 text-sm">{scenario.approach}</p>
                </div>

                {/* Outcomes */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Targets</h4>
                  <ul className="space-y-1.5">
                    {scenario.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with us early */}
      <section className="border-y border-neutral-200 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="heading">Why Work With Us Early</h2>
            <p className="body-muted max-w-2xl mx-auto mt-4">
              Being a young company cuts both ways — here's the part that works in your favour.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Direct founder access</h3>
                <p className="text-sm text-gray-600">You work with the people who actually design the system, not an account manager.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Small team, fast iteration</h3>
                <p className="text-sm text-gray-600">Fewer layers between a decision and a change on the floor.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Right-sized first step</h3>
                <p className="text-sm text-gray-600">We scope a pilot that proves value before either of us commits to scaling it.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-neutral-950 px-8 py-16 md:px-16 text-center"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 h-64"
              style={{
                background: 'radial-gradient(50% 100% at 50% 100%, rgba(255,195,0,0.18) 0%, rgba(255,195,0,0) 100%)',
              }}
            ></div>
            <h2 className="relative text-3xl md:text-4xl font-medium tracking-tight text-white">
              Have a Problem Like This?
            </h2>
            <p className="relative text-base md:text-lg leading-relaxed text-neutral-400 mb-8 mt-5 max-w-lg mx-auto">
              Let's talk through your operation and figure out honestly whether robotics
              is the right fit — and if so, what a first step could look like.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center relative">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start the Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
