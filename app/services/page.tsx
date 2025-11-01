'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
  Shield
} from 'lucide-react'
import Button from '@/components/Button'

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Digital Transformation',
      description: 'Develop comprehensive AI roadmaps that align with your business objectives and drive measurable growth.',
      image: '/img/AI Strategy.png',
      features: [
        'AI Readiness Assessment',
        'Strategic AI Roadmap Development',
        'Change Management & Training',
        'ROI Analysis & Planning',
        'Technology Stack Selection'
      ],
      benefits: [
        'Clear AI implementation path',
        'Reduced implementation risks',
        'Faster time to value',
        'Competitive advantage'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning Models & Predictive Analytics',
      description: 'Build intelligent systems that predict trends, optimize operations, and unlock data-driven insights.',
      image: '/img/Machine Learning.webp',
      features: [
        'Custom ML Model Development',
        'Predictive Analytics Solutions',
        'Real-time Data Processing',
        'Model Performance Optimization',
        'A/B Testing & Validation'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved operational efficiency',
        'Reduced costs and waste',
        'Enhanced customer experience'
      ]
    },
    {
      icon: Zap,
      title: 'Generative AI & Automation for Business Operations',
      description: 'Implement cutting-edge AI solutions that automate workflows and enhance productivity across your organization.',
      image: '/img/Robotics & Automation.jpeg',
      features: [
        'Process Automation Design',
        'Chatbot & Virtual Assistant Development',
        'Document Processing & Analysis',
        'Content Generation Systems',
        'Workflow Optimization'
      ],
      benefits: [
        'Increased productivity',
        'Reduced manual errors',
        '24/7 operational capability',
        'Scalable business processes'
      ]
    },
    {
      icon: Database,
      title: 'Data Engineering & Cloud AI',
      description: 'Build robust data infrastructure and cloud-based AI solutions that scale with your business growth.',
      image: '/img/data-analysis-vs-data-science.jpeg',
      features: [
        'Data Pipeline Architecture',
        'Cloud Infrastructure Setup',
        'Data Quality & Governance',
        'Scalable AI Infrastructure',
        'Security & Compliance'
      ],
      benefits: [
        'Scalable data infrastructure',
        'Improved data quality',
        'Enhanced security posture',
        'Cost-effective cloud solutions'
      ]
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/img/background.jpg')`
            }}
          ></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
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
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
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

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                        What We Deliver
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 flex items-start">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Target className="w-5 h-5 text-primary-500 mr-2" />
                        Business Impact
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-gray-600 flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden relative">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
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
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-white" />
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
            className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-12"
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
