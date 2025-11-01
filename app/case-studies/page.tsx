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
      title: 'AI-Powered Inventory Optimization',
      challenge: 'TechFlow Solutions was struggling with overstock and stockouts, leading to significant revenue loss and customer dissatisfaction.',
      solution: 'Implemented machine learning models to predict demand patterns, optimize inventory levels, and automate reorder processes.',
      results: [
        { metric: '35%', label: 'Reduction in inventory costs' },
        { metric: '28%', label: 'Increase in sales' },
        { metric: '95%', label: 'Reduction in stockouts' }
      ],
      duration: '6 months',
      category: 'Machine Learning'
    },
    {
      id: 2,
      industry: 'Healthcare',
      company: 'MediCare Plus',
      icon: Heart,
      title: 'Predictive Analytics for Patient Care',
      challenge: 'MediCare Plus needed to improve patient outcomes while reducing readmission rates and operational costs.',
      solution: 'Developed predictive models to identify high-risk patients and optimize treatment plans using historical patient data.',
      results: [
        { metric: '40%', label: 'Reduction in readmissions' },
        { metric: '25%', label: 'Improvement in patient outcomes' },
        { metric: '30%', label: 'Cost savings' }
      ],
      duration: '8 months',
      category: 'Predictive Analytics'
    },
    {
      id: 3,
      industry: 'Manufacturing',
      company: 'InnovateCorp',
      icon: Factory,
      title: 'Smart Manufacturing Automation',
      challenge: 'InnovateCorp faced production inefficiencies and quality control issues in their manufacturing processes.',
      solution: 'Implemented AI-driven quality control systems and predictive maintenance solutions to optimize production lines.',
      results: [
        { metric: '45%', label: 'Increase in production efficiency' },
        { metric: '60%', label: 'Reduction in defects' },
        { metric: '50%', label: 'Decrease in downtime' }
      ],
      duration: '10 months',
      category: 'Process Automation'
    },
    {
      id: 4,
      industry: 'Finance',
      company: 'SecureBank',
      icon: DollarSign,
      title: 'Fraud Detection & Risk Management',
      challenge: 'SecureBank needed to enhance their fraud detection capabilities while reducing false positives.',
      solution: 'Built advanced machine learning models for real-time fraud detection and risk assessment.',
      results: [
        { metric: '85%', label: 'Improvement in fraud detection' },
        { metric: '70%', label: 'Reduction in false positives' },
        { metric: '25%', label: 'Decrease in fraud losses' }
      ],
      duration: '7 months',
      category: 'Risk Management'
    },
    {
      id: 5,
      industry: 'Transportation',
      company: 'FleetMax Logistics',
      icon: Car,
      title: 'Route Optimization & Fleet Management',
      challenge: 'FleetMax Logistics struggled with inefficient routing and high fuel costs across their delivery network.',
      solution: 'Developed AI-powered route optimization algorithms and predictive maintenance systems for their fleet.',
      results: [
        { metric: '30%', label: 'Reduction in fuel costs' },
        { metric: '35%', label: 'Improvement in delivery times' },
        { metric: '20%', label: 'Increase in customer satisfaction' }
      ],
      duration: '5 months',
      category: 'Logistics Optimization'
    },
    {
      id: 6,
      industry: 'Education',
      company: 'EduTech Academy',
      icon: BookOpen,
      title: 'Personalized Learning Platform',
      challenge: 'EduTech Academy wanted to improve student engagement and learning outcomes through personalized education.',
      solution: 'Created AI-driven personalized learning paths and adaptive content delivery systems.',
      results: [
        { metric: '50%', label: 'Improvement in student engagement' },
        { metric: '35%', label: 'Increase in completion rates' },
        { metric: '40%', label: 'Better learning outcomes' }
      ],
      duration: '9 months',
      category: 'Personalization'
    }
  ]

  const industries = ['All', 'Retail', 'Healthcare', 'Manufacturing', 'Finance', 'Transportation', 'Education']
  const categories = ['All', 'Machine Learning', 'Predictive Analytics', 'Process Automation', 'Risk Management', 'Logistics Optimization', 'Personalization']

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how we've helped businesses across industries transform their operations 
              and achieve remarkable results with AI solutions.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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
              Each case study represents a unique challenge solved with innovative AI solutions 
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
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <study.icon className="w-6 h-6 text-white" />
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
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
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
                        <span className="text-2xl font-bold text-primary-600">{result.metric}</span>
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
                  <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-primary-100">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-primary-100">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">3x</div>
              <div className="text-primary-100">Average ROI</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-100">Industries Served</div>
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
            className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results 
              with AI solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
