'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight,
  Building2,
  ShoppingCart,
  Factory,
  Heart,
  Car,
  BookOpen
} from 'lucide-react'
import Button from '@/components/Button'

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      industry: 'Retail',
      company: 'TechFlow Solutions',
      icon: ShoppingCart,
      title: 'Autonomous Mobile Robot Warehouse Optimization',
      challenge: 'TechFlow Solutions was struggling with overstock and stockouts, leading to significant revenue loss and customer dissatisfaction.',
      solution: 'Deployed a fleet of autonomous mobile robots (AMRs) to automate picking and replenishment, predict demand patterns, and optimize inventory levels.',
      results: [
        { metric: '35%', label: 'Reduction in inventory costs' },
        { metric: '28%', label: 'Increase in sales' },
        { metric: '95%', label: 'Reduction in stockouts' }
      ],
      duration: '6 months',
      category: 'Warehouse Robotics'
    },
    {
      id: 2,
      industry: 'Healthcare',
      company: 'MediCare Plus',
      icon: Heart,
      title: 'Hospital Logistics Robots for Patient Care',
      challenge: 'MediCare Plus needed to improve patient outcomes while reducing staff workload and operational costs.',
      solution: 'Deployed autonomous delivery robots to transport medications, supplies, and lab samples, freeing clinical staff to focus on patient care.',
      results: [
        { metric: '40%', label: 'Reduction in delivery response times' },
        { metric: '25%', label: 'Improvement in staff availability' },
        { metric: '30%', label: 'Cost savings' }
      ],
      duration: '8 months',
      category: 'Service Robotics'
    },
    {
      id: 3,
      industry: 'Manufacturing',
      company: 'InnovateCorp',
      icon: Factory,
      title: 'Robotic Arm Deployment for Smart Manufacturing',
      challenge: 'InnovateCorp faced production inefficiencies and quality control issues in their manufacturing processes.',
      solution: 'Implemented robotic arm work cells with machine vision quality control and predictive maintenance solutions to optimize production lines.',
      results: [
        { metric: '45%', label: 'Increase in production efficiency' },
        { metric: '60%', label: 'Reduction in defects' },
        { metric: '50%', label: 'Decrease in downtime' }
      ],
      duration: '10 months',
      category: 'Manufacturing Automation'
    },
    {
      id: 4,
      industry: 'Finance',
      company: 'SecureBank',
      icon: DollarSign,
      title: 'Autonomous Security & Facilities Robots',
      challenge: 'SecureBank needed to enhance facility monitoring and physical security across its branch network while reducing patrol costs.',
      solution: 'Deployed autonomous patrol robots with real-time sensing for facility monitoring, anomaly detection, and after-hours security.',
      results: [
        { metric: '85%', label: 'Improvement in incident detection' },
        { metric: '70%', label: 'Reduction in false alarms' },
        { metric: '25%', label: 'Decrease in security costs' }
      ],
      duration: '7 months',
      category: 'Security Robotics'
    },
    {
      id: 5,
      industry: 'Transportation',
      company: 'FleetMax Logistics',
      icon: Car,
      title: 'Autonomous Delivery Robots & Fleet Routing',
      challenge: 'FleetMax Logistics struggled with inefficient routing and high fuel costs across their delivery network.',
      solution: 'Deployed autonomous delivery robots with route optimization algorithms and predictive maintenance systems for their fleet.',
      results: [
        { metric: '30%', label: 'Reduction in fuel costs' },
        { metric: '35%', label: 'Improvement in delivery times' },
        { metric: '20%', label: 'Increase in customer satisfaction' }
      ],
      duration: '5 months',
      category: 'Logistics Robotics'
    },
    {
      id: 6,
      industry: 'Education',
      company: 'EduTech Academy',
      icon: BookOpen,
      title: 'Educational & STEM Robotics Lab Deployment',
      challenge: 'EduTech Academy wanted to improve student engagement and learning outcomes through hands-on robotics education.',
      solution: 'Designed and deployed a STEM robotics lab with programmable robot kits and an adaptive, project-based curriculum.',
      results: [
        { metric: '50%', label: 'Improvement in student engagement' },
        { metric: '35%', label: 'Increase in completion rates' },
        { metric: '40%', label: 'Better learning outcomes' }
      ],
      duration: '9 months',
      category: 'Educational Robotics'
    }
  ]

  const industries = ['All', 'Retail', 'Healthcare', 'Manufacturing', 'Finance', 'Transportation', 'Education']
  const categories = ['All', 'Warehouse Robotics', 'Service Robotics', 'Manufacturing Automation', 'Security Robotics', 'Logistics Robotics', 'Educational Robotics']

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
            <span className="eyebrow">Success Stories</span>
            <h1 className="display mt-5">
              Real results, <span className="text-neutral-400">real impact.</span>
            </h1>
            <p className="body-muted mx-auto mt-6 max-w-xl">
              Discover how we've helped businesses across industries transform their operations
              and achieve remarkable results with robotic solutions.
            </p>
            <div className="mt-9">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start Your Success Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
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
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each case study represents a unique challenge solved with innovative robotic solutions
              tailored to specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
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
                      <study.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{study.industry}</div>
                      <div className="font-semibold text-gray-900">{study.company}</div>
                    </div>
                  </div>
                  <div className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                    {study.category}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-700 transition-colors">
                  {study.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary-700">{result.metric}</span>
                        <span className="text-gray-600 text-sm">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary-700 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-neutral-200 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="heading">Our Track Record</h2>
            <p className="body-muted max-w-2xl mx-auto mt-4">
              Numbers that speak to our commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 mb-2">50+</div>
              <div className="text-sm text-neutral-500">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 mb-2">95%</div>
              <div className="text-sm text-neutral-500">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 mb-2">3x</div>
              <div className="text-sm text-neutral-500">Average ROI</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 mb-2">15+</div>
              <div className="text-sm text-neutral-500">Industries Served</div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="relative text-base md:text-lg leading-relaxed text-neutral-400 mb-8 mt-5 max-w-lg mx-auto">
              Let's discuss how we can help your business achieve similar results
              with robotic solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center relative">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start Your Project
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
