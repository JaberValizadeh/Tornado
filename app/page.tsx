'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Bot,
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Award,
  Clock,
  BarChart3,
  MessageSquare
} from 'lucide-react'
import Button from '@/components/Button'

const HomePage = () => {
  const whyChooseItems = [
    {
      icon: Clock,
      title: 'Prompt and Responsive Support',
      description: 'Experience exceptional customer service with our lightning-fast response guarantee within 2 hours.'
    },
    {
      icon: BarChart3,
      title: 'Live Dashboards of Deployment Plan',
      description: 'Maximise productivity with our efficient project management system: Monitor completed and in-progress robot installations and stay informed with real-time deployment visibility.'
    },
    {
      icon: MessageSquare,
      title: 'Comprehensive Performance Insights',
      description: 'Transparent, data-driven reports: Track uptime, measure throughput, and make informed decisions.'
    }
  ]

  const services = [
    {
      icon: Target,
      title: 'Robotics Strategy & Automation Roadmap',
      description: 'Develop comprehensive robotics roadmaps that align with your business objectives and drive measurable growth.',
      image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: Bot,
      title: 'Robotic Arms & Manufacturing Automation',
      description: 'Deploy intelligent robotic arms that automate production lines, optimize operations, and unlock data-driven insights.',
      image: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: Zap,
      title: 'Warehouse & Logistics Robotics',
      description: 'Implement autonomous mobile robots (AMRs) and AGVs that automate workflows and enhance productivity across your facility.',
      image: 'https://images.unsplash.com/photo-1767966762602-b68f11f146f7?auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: Shield,
      title: 'Robotics Systems Integration & Cloud Monitoring',
      description: 'Scalable fleet management, cloud infrastructure, and distributed robotics systems that handle real-time telemetry with enterprise-grade reliability.',
      image: 'https://images.unsplash.com/photo-1753153481105-7a979eabe5a9?auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: TrendingUp,
      title: 'IoT & Edge Computing for Robotics',
      description: 'Connected sensor solutions, real-time data processing, and edge computing deployment for industrial and consumer robotics applications.',
      image: 'https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: Award,
      title: 'Responsible & Safe Robotics',
      description: 'Robot safety compliance, risk assessment, and ethical automation implementation ensuring transparent, accountable, and trustworthy robotic systems.',
      image: 'https://images.unsplash.com/photo-1705579611249-9861db5469ea?auto=format&fit=crop&w=1200&q=80'
    }
  ]

  const stats = [
    {
      value: '20+',
      label: 'Years of Combined Experience'
    },
    {
      value: '50+',
      label: 'Robotic Systems Deployed'
    },
    {
      value: '95%',
      label: 'Client Satisfaction Rate'
    },
    {
      value: '15+',
      label: 'Industry Specializations'
    }
  ]

  const roboticsServices = [
    {
      icon: Bot,
      title: 'Robotics Consulting',
      description: 'Strategic robotics guidance to transform your business operations and drive innovation.',
      link: '/services#robotics-consulting'
    },
    {
      icon: Zap,
      title: 'Robotics Training',
      description: 'Comprehensive training programs to help your team master robotics platforms and technologies.',
      link: '/training'
    },
    {
      icon: Shield,
      title: 'Robotics Tools',
      description: 'Access to cutting-edge robotics tools and platforms tailored to your business needs.',
      link: '/robotics-tools'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-gray-900"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-primary-400/10 animate-pulse"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs - Various Sizes */}
          {/* Extra Large Orb */}
          <motion.div
            className="absolute top-10 left-1/4 w-[32rem] h-[32rem] bg-primary-400/12 rounded-full blur-3xl"
            animate={{
              x: [0, 80, 0],
              y: [0, 60, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Large Orbs */}
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-[28rem] h-[28rem] bg-primary-400/15 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 120, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Medium Orbs */}
          <motion.div
            className="absolute bottom-40 right-1/3 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 80, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-400/18 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              scale: [1, 1.18, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-primary-500/12 rounded-full blur-3xl"
            animate={{
              x: [0, -70, 0],
              y: [0, 90, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Small Orbs */}
          <motion.div
            className="absolute top-1/2 left-1/5 w-48 h-48 bg-primary-300/25 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/5 w-40 h-40 bg-primary-400/22 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 70, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/2 w-36 h-36 bg-primary-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 90, 0],
              y: [0, -40, 0],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Extra Small Orbs */}
          <motion.div
            className="absolute top-3/4 right-1/6 w-32 h-32 bg-primary-300/30 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -60, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/5 left-2/3 w-28 h-28 bg-primary-400/28 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
              scale: [1, 1.45, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Geometric Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-primary-400/30 rounded-lg rotate-45"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-primary-500/30 rounded-lg rotate-12"></div>
            <div className="absolute top-1/2 right-1/3 w-32 h-32 border-4 border-primary-300/30 rounded-full"></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              color: 'rgb(255, 195, 0)'
            }}
          ></div>
          
          {/* Animated Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-500 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="container-custom text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-400 text-sm font-semibold tracking-wide uppercase mb-6">
              Robotic Solutions, Engineered
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">The Right Robotic Solutions</span>
              <br />
              <span className="text-white">Let's Automate Your Business!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Partner with Tornado, a leading robotics solutions provider. We help businesses unlock the potential of robotics
              with intelligent systems that drive productivity, automation, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open('/book', '_blank', 'noopener,noreferrer,width=960,height=800')}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Tornado Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Pave the Way to Robotics Success
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your gateway to the world's most advanced robotics technologies
            </h2>
            <p className="text-gray-600 text-lg">
              Universal Robots, FANUC, ABB, KUKA, Siemens, NVIDIA Isaac, and More
            </p>
          </motion.div>
        </div>
      </section>

      {/* Robotics Services Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Harness the Power of Robotics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We've assessed hundreds of robotics platforms so you don't have to. Choose from our robotics services today
              and put distance between you and your competition starting tomorrow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roboticsServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.link}>
                  <span className="text-primary-700 font-semibold hover:text-primary-800 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Robotics Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to implementation, we provide end-to-end robotics solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-0 overflow-hidden group"
              >
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat relative"
                  style={{
                    backgroundImage: `url('${service.image}')`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/services">
                    <span className="text-primary-700 font-semibold hover:text-primary-800 flex items-center group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          color: 'rgb(255, 195, 0)'
        }}></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Unveiling Robotics Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
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
            className="text-center bg-gradient-to-br from-gray-950 via-black to-gray-900 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative">
              Let's discuss how robotics can drive growth and innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open('/book', '_blank', 'noopener,noreferrer,width=960,height=800')}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/case-studies">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
