'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Database,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  BarChart3,
  Cloud,
  Bot,
  Shield,
  Eye,
  Globe,
  Code,
  FileText,
  Settings,
  Sparkles,
  Cpu,
  GitBranch,
  Leaf
} from 'lucide-react'
import Button from '@/components/Button'

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'Data & AI Experts',
      description: 'We deliver cutting-edge data and AI solutions tailored to your organization\'s goals. Our experts transform complex data into actionable insights and leverage advanced AI technologies to drive innovation, enhance decision-making, and optimize operations—ensuring your business thrives in a data-driven world.'
    },
    {
      icon: Sparkles,
      title: 'Generative AI Specialists',
      description: 'We design and deploy generative AI models that create new content—text, imagery, video, and voice. Our specialists help businesses unlock creativity, automate content generation, and elevate customer experiences through the transformative potential of generative AI.'
    },
    {
      icon: Bot,
      title: 'Large Language Model (LLM) Solutions',
      description: 'We harness the power of large-scale AI models such as GPT to build intelligent chatbots, copilots, and enterprise assistants. Our LLM solutions enhance productivity, automate communication, and deliver human-like interaction across customer support, internal operations, and analytics.'
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning & Data Science',
      description: 'Our machine learning engineers and data scientists develop adaptive algorithms that continuously learn from data. We deliver predictive insights, automate workflows, and enable data-driven decisions—empowering organizations to stay agile and competitive.'
    },
    {
      icon: Target,
      title: 'Strategic AI & Transformation Consulting',
      description: 'We partner with executives to craft AI strategies and implementation roadmaps aligned with business priorities. From opportunity discovery to measurable outcomes, our consultants guide your organization through every stage of its AI transformation journey.'
    },
    {
      icon: Users,
      title: 'Management & Digital Transformation Consulting',
      description: 'Our management consultants align AI and data strategies with organizational goals. We help businesses modernize systems, optimize performance, and foster innovation through seamless technology integration and change management.'
    },
    {
      icon: Eye,
      title: 'Machine Vision & Computer Vision Systems',
      description: 'We design advanced computer vision solutions for automating visual inspection, quality control, facial recognition, and pattern detection. Our systems enhance precision, reduce operational costs, and improve efficiency across manufacturing, retail, and security sectors.'
    },
    {
      icon: Cloud,
      title: 'Modern Data Platform Architecture (Azure, AWS & GCP)',
      description: 'Our data architects design secure and scalable data ecosystems on Azure, AWS, and GCP. We build modern data lakes, warehouses, and pipelines to support real-time analytics, machine learning, and enterprise-grade AI solutions.'
    },
    {
      icon: Shield,
      title: 'AI Governance, Ethics & Risk Management',
      description: 'We implement robust AI governance frameworks that ensure transparency, accountability, and compliance. Our experts help organizations manage ethical, regulatory, and operational risks while fostering trust in AI adoption.'
    },
    {
      icon: GitBranch,
      title: 'Agile Delivery & Project Management',
      description: 'Our Scrum and Agile project management expertise ensures timely, efficient, and collaborative delivery. This approach enables flexibility, continuous improvement, and consistent client satisfaction throughout every phase of your AI journey.'
    },
    {
      icon: Zap,
      title: 'AI Automation & Intelligent Process Optimization',
      description: 'We design AI-driven automation systems that eliminate repetitive tasks, streamline operations, and improve efficiency. Our automation experts integrate AI into workflows—boosting productivity and freeing human teams to focus on high-value work.'
    },
    {
      icon: Cpu,
      title: 'Edge AI & IoT Intelligence',
      description: 'We build edge AI solutions that process data in real time—close to where it\'s generated. Perfect for IoT, robotics, and industrial automation, our systems deliver faster insights, reduce latency, and enable smarter, autonomous operations.'
    },
    {
      icon: Code,
      title: 'AI Integration & Custom Application Development',
      description: 'We integrate AI into existing platforms, CRMs, and enterprise applications to extend their capabilities. From intelligent search to recommendation engines, we create tailored solutions that deliver immediate business impact.'
    },
    {
      icon: Database,
      title: 'Data Engineering & MLOps',
      description: 'We provide end-to-end data engineering and MLOps services, including data ingestion, transformation, model deployment, and continuous monitoring. This ensures your AI systems are reliable, scalable, and production-ready.'
    },
    {
      icon: Leaf,
      title: 'Responsible & Sustainable AI Consulting',
      description: 'We help organizations design ethical and sustainable AI frameworks that prioritize fairness, inclusivity, and environmental responsibility. Our consultants align technology with human and societal values for long-term trust and success.'
    },
    {
      icon: FileText,
      title: 'AI Training & Capability Building',
      description: 'We empower teams with custom AI training programs—from executive briefings to hands-on technical workshops. Our goal is to build your internal AI literacy so your organization can innovate confidently and independently.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current state, identify opportunities, and assess AI readiness across your organization.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy with clear objectives, timelines, and success metrics.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation & Development',
      description: 'Build and deploy AI solutions using best practices and industry-leading technologies.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Monitor performance, optimize results, and provide ongoing support for continuous improvement.',
      icon: BarChart3
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-primary-100">
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">AI Consulting Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Comprehensive AI solutions designed to transform your business operations, 
              drive innovation, and deliver measurable results.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Book a Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
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
              Our AI Consulting Offerings
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
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card p-6 lg:p-8 relative group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-accent-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to AI implementation that ensures success at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-gray-900" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a customized AI strategy for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Book a Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
