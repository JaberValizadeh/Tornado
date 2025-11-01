'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, 
  Brain,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Code,
  Sparkles,
  BarChart3,
  MessageSquare,
  FileText,
  Search,
  Settings
} from 'lucide-react'
import Button from '@/components/Button'

const AIToolsPage = () => {
  const toolCategories = [
    {
      icon: Brain,
      title: 'Generative AI Tools',
      description: 'Advanced language models and content generation platforms for creative and productive applications.',
      tools: [
        { name: 'ChatGPT / GPT-4', description: 'Advanced conversational AI for content creation, analysis, and problem-solving' },
        { name: 'Claude (Anthropic)', description: 'Enterprise-grade AI assistant with exceptional reasoning capabilities' },
        { name: 'Google Gemini', description: 'Multimodal AI that understands text, images, and code' },
        { name: 'Midjourney / DALL-E', description: 'AI image generation tools for creative visuals and marketing materials' }
      ],
      useCases: [
        'Content creation and copywriting',
        'Code generation and assistance',
        'Data analysis and summarization',
        'Creative design and visualization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Business Intelligence',
      description: 'AI-powered analytics platforms for data-driven decision making and business insights.',
      tools: [
        { name: 'Tableau AI', description: 'Enhanced data visualization with AI-powered insights' },
        { name: 'Power BI AI', description: 'Microsoft\'s BI platform with integrated AI capabilities' },
        { name: 'Google Analytics Intelligence', description: 'AI-driven website and marketing analytics' },
        { name: 'Custom ML Dashboards', description: 'Tailored analytics dashboards with predictive capabilities' }
      ],
      useCases: [
        'Business performance tracking',
        'Predictive analytics and forecasting',
        'Customer behavior analysis',
        'Real-time decision support'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Customer Engagement & Support',
      description: 'AI chatbots and customer service automation tools for enhanced user experience.',
      tools: [
        { name: 'Custom AI Chatbots', description: 'Intelligent virtual assistants for customer support' },
        { name: 'Sentiment Analysis Tools', description: 'Analyze customer feedback and social media sentiment' },
        { name: 'Voice AI Assistants', description: 'Voice-enabled AI for phone and voice applications' },
        { name: 'Email Automation', description: 'AI-powered email routing and response systems' }
      ],
      useCases: [
        '24/7 customer support',
        'Automated query resolution',
        'Customer satisfaction monitoring',
        'Lead qualification and nurturing'
      ]
    },
    {
      icon: Code,
      title: 'Development & Automation',
      description: 'AI tools for software development, automation, and workflow optimization.',
      tools: [
        { name: 'GitHub Copilot', description: 'AI pair programmer for code generation and assistance' },
        { name: 'Workflow Automation Platforms', description: 'AI-driven process automation and orchestration' },
        { name: 'API Integration Tools', description: 'AI-powered API management and integration platforms' },
        { name: 'Testing & QA Automation', description: 'Intelligent test generation and quality assurance' }
      ],
      useCases: [
        'Accelerated software development',
        'Process automation and optimization',
        'API integration and management',
        'Quality assurance and testing'
      ]
    },
    {
      icon: FileText,
      title: 'Content & Document Management',
      description: 'AI tools for document processing, content management, and knowledge extraction.',
      tools: [
        { name: 'Document AI', description: 'Intelligent document parsing and data extraction' },
        { name: 'Content Management Systems', description: 'AI-enhanced CMS with automated content organization' },
        { name: 'Knowledge Bases', description: 'AI-powered search and retrieval systems' },
        { name: 'Contract Analysis Tools', description: 'Automated contract review and risk assessment' }
      ],
      useCases: [
        'Document digitization and processing',
        'Content organization and search',
        'Knowledge management',
        'Compliance and risk analysis'
      ]
    },
    {
      icon: Settings,
      title: 'Enterprise AI Platforms',
      description: 'Comprehensive AI platforms for large-scale enterprise deployments and integrations.',
      tools: [
        { name: 'Microsoft Azure AI', description: 'Enterprise AI services and ML platform' },
        { name: 'AWS AI Services', description: 'Amazon\'s comprehensive AI and ML cloud services' },
        { name: 'Google Cloud AI', description: 'Google\'s enterprise AI platform and services' },
        { name: 'Custom AI Solutions', description: 'Tailored AI platforms built for your specific needs' }
      ],
      useCases: [
        'Enterprise-wide AI deployment',
        'Scalable ML infrastructure',
        'Multi-cloud AI solutions',
        'Custom AI platform development'
      ]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Productivity',
      description: 'Automate repetitive tasks and focus on high-value activities that drive business growth.'
    },
    {
      icon: Target,
      title: 'Improved Accuracy',
      description: 'Reduce human errors with AI-powered automation and intelligent decision support.'
    },
    {
      icon: Sparkles,
      title: 'Innovation Acceleration',
      description: 'Leverage cutting-edge AI capabilities to innovate faster and stay competitive.'
    },
    {
      icon: Shield,
      title: 'Cost Efficiency',
      description: 'Optimize operations and reduce costs through intelligent automation and process optimization.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our AI Tools</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We've assessed hundreds of AI tools so you don't have to. Access cutting-edge AI platforms 
              and technologies tailored to your business needs, helping you stay ahead of the competition.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tool Categories Section */}
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
              AI Tool Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From generative AI to enterprise platforms, we provide access to the best AI tools 
              across all categories to meet your business needs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {toolCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 lg:p-12"
              >
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{category.title}</h3>
                    <p className="text-lg text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Code className="w-5 h-5 text-primary-600 mr-2" />
                      Available Tools
                    </h4>
                    <div className="space-y-4">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="border-l-4 border-primary-500 pl-4">
                          <h5 className="font-semibold text-gray-900 mb-1">{tool.name}</h5>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 text-primary-600 mr-2" />
                      Use Cases
                    </h4>
                    <ul className="space-y-3">
                      {category.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="text-gray-600 flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Using Our AI Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with us to access and implement the best AI tools that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How We Help You Implement AI Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just provide access to tools—we help you select, implement, and optimize 
              the right AI solutions for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'We evaluate your business needs and identify the right AI tools for your use cases.'
              },
              {
                step: '02',
                title: 'Selection',
                description: 'We recommend and provide access to the best AI tools that match your requirements.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Our team helps you integrate and deploy AI tools into your existing workflows.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We provide ongoing support to optimize tool usage and maximize ROI.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-3xl p-12 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Leverage AI Tools for Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI tools can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIToolsPage

