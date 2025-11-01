'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Brain, 
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
      title: 'Live Dashboards of Project Plan',
      description: 'Maximise productivity with our efficient task management system: Monitor completed and in-progress tasks and stay informed with real-time project visibility.'
    },
    {
      icon: MessageSquare,
      title: 'Comprehensive Performance Insights',
      description: 'Transparent, data-driven reports: Track progress, measure success, and make informed decisions.'
    }
  ]

  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Digital Transformation',
      description: 'Develop comprehensive AI roadmaps that align with your business objectives and drive measurable growth.',
      image: '/img/Generative AI & Intelligent Automation.jpg'
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning Models & Predictive Analytics',
      description: 'Build intelligent systems that predict trends, optimize operations, and unlock data-driven insights.',
      image: '/img/Machine Learning.webp'
    },
    {
      icon: Zap,
      title: 'Generative AI & Automation',
      description: 'Implement cutting-edge AI solutions that automate workflows and enhance productivity across your organization.',
      image: '/img/Robotics & Automation.jpeg'
    },
    {
      icon: Shield,
      title: 'Data Engineering & Cloud-Based AI',
      description: 'Scalable data pipelines, cloud infrastructure, and distributed AI systems that handle massive datasets with enterprise-grade reliability.',
      image: '/img/data-analysis-vs-data-science.jpeg'
    },
    {
      icon: Target,
      title: 'IoT & Edge Computing',
      description: 'Connected device solutions, real-time data processing, and edge AI deployment for industrial and consumer applications.',
      image: '/img/IoT and Edge Computing.png'
    },
    {
      icon: Award,
      title: 'Responsible & Ethical AI',
      description: 'AI governance, bias detection, fairness auditing, and ethical AI implementation ensuring transparent, accountable, and trustworthy AI systems.',
      image: '/img/Responsible & Ethical AI.jpg'
    }
  ]

  const stats = [
    {
      value: '20+',
      label: 'Years of Combined Experience'
    },
    {
      value: '50+',
      label: 'Projects Completed Successfully'
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

  const aiServices = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI guidance to transform your business operations and drive innovation.',
      link: '/services#ai-consulting'
    },
    {
      icon: Zap,
      title: 'AI Training',
      description: 'Comprehensive training programs to help your team master AI tools and technologies.',
      link: '/services#ai-training'
    },
    {
      icon: Shield,
      title: 'AI Tools',
      description: 'Access to cutting-edge AI tools and platforms tailored to your business needs.',
      link: '/services#ai-tools'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/img/6849391_3425081.jpg')`
            }}
          ></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container-custom text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">The Right AI Consulting</span>
              <br />
              <span className="text-white">Let's Transform Your Business!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Partner with Tornado, a leading AI consulting firm. We help businesses unlock AI's potential 
              with intelligent solutions that drive productivity, automation, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Request Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
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
              We Pave the Way to AI Success
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

      {/* What We Do Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions and Consulting, Crafted with Brilliance, Precision and Excellence.
            </h2>
          </motion.div>
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
              Your gateway to the world's most exciting AI technologies
            </h2>
            <p className="text-gray-600 text-lg">
              Microsoft Azure, Amazon Web Services, Google Cloud, IBM Watson, OpenAI, and More
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
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
              Harness the Power of AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We've assessed hundreds of AI Tools so you don't have to. Choose from our AI services today 
              and put distance between you and your competition starting tomorrow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
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
                  <span className="text-primary-600 font-semibold hover:text-primary-700 flex items-center justify-center group-hover:translate-x-1 transition-transform">
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
              AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to implementation, we provide end-to-end AI solutions tailored to your business needs.
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
                    <span className="text-primary-600 font-semibold hover:text-primary-700 flex items-center group-hover:translate-x-1 transition-transform">
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
      <section className="section-padding bg-accent-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Unveiling AI Excellence
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
                <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-lg">{stat.label}</div>
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
            className="text-center bg-gradient-to-r from-primary-100 to-primary-50 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can drive growth and innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Request Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
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
