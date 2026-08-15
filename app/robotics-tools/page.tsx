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
  Eye,
  FileText,
  Search,
  Settings
} from 'lucide-react'
import Button from '@/components/Button'

const RoboticsToolsPage = () => {
  const toolCategories = [
    {
      icon: Brain,
      title: 'Robot Operating Systems & Programming',
      description: 'Programming frameworks and vendor platforms used to control and orchestrate robotic systems.',
      tools: [
        { name: 'ROS / ROS2', description: 'Open-source robotics middleware for building and controlling robot software' },
        { name: 'Universal Robots PolyScope', description: 'Intuitive programming platform for collaborative robot arms' },
        { name: 'FANUC ROBOGUIDE', description: 'Offline programming and simulation for FANUC industrial robots' },
        { name: 'ABB RobotStudio', description: 'Programming and simulation suite for ABB robotic systems' }
      ],
      useCases: [
        'Robot cell programming and configuration',
        'Multi-robot coordination and orchestration',
        'Custom controller logic development',
        'Cross-platform robot integration'
      ]
    },
    {
      icon: BarChart3,
      title: 'Fleet Analytics & Monitoring',
      description: 'AI-powered analytics platforms for tracking robotic fleet performance and uptime.',
      tools: [
        { name: 'Fleet Management Dashboards', description: 'Real-time visibility into robot status, location, and task queues' },
        { name: 'Predictive Maintenance Analytics', description: 'Sensor-driven forecasting to prevent unplanned robot downtime' },
        { name: 'OEE Tracking Tools', description: 'Overall Equipment Effectiveness monitoring for robotic production lines' },
        { name: 'Custom Telemetry Dashboards', description: 'Tailored dashboards with predictive maintenance capabilities' }
      ],
      useCases: [
        'Robotic fleet performance tracking',
        'Predictive maintenance and forecasting',
        'Throughput and uptime analysis',
        'Real-time operations decision support'
      ]
    },
    {
      icon: Sparkles,
      title: 'Simulation & Digital Twin Platforms',
      description: 'Virtual commissioning and digital twin tools for designing and testing robotic cells before deployment.',
      tools: [
        { name: 'NVIDIA Isaac Sim', description: 'Photorealistic robotics simulation and synthetic data generation' },
        { name: 'Gazebo', description: 'Open-source robot simulation for testing control algorithms' },
        { name: 'Digital Twin Platforms', description: 'Live virtual replicas of robotic cells for monitoring and optimization' },
        { name: 'Offline Programming Suites', description: 'Design and validate robot programs before floor deployment' }
      ],
      useCases: [
        'Virtual commissioning of robot cells',
        'Path planning and collision testing',
        'Operator training in simulated environments',
        'Layout optimization before installation'
      ]
    },
    {
      icon: Eye,
      title: 'Vision & Perception Systems',
      description: 'Machine vision and sensor technologies that let robots see, inspect, and navigate their environment.',
      tools: [
        { name: 'Machine Vision Cameras & Software', description: 'High-speed inspection and part-recognition systems' },
        { name: 'LiDAR & Sensor Fusion', description: 'Multi-sensor perception for autonomous navigation' },
        { name: 'AI-Based Object Detection', description: 'Real-time detection and classification for robotic picking' },
        { name: 'Quality Inspection Vision Systems', description: 'Automated defect detection on production lines' }
      ],
      useCases: [
        'Automated visual inspection',
        'Bin-picking and part localization',
        'Autonomous navigation and obstacle avoidance',
        'Quality control and defect detection'
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Compliance Systems',
      description: 'Tools and hardware that keep robotic deployments safe, compliant, and audit-ready.',
      tools: [
        { name: 'Safety PLCs & Light Curtains', description: 'Hardware-level safety interlocks for robotic work cells' },
        { name: 'Risk Assessment Software', description: 'Structured tools for robot safety and hazard analysis' },
        { name: 'Compliance Documentation Systems', description: 'Track ISO 10218 and collaborative robot standard compliance' },
        { name: 'Functional Safety Systems', description: 'Certified safety controllers for human-robot collaboration' }
      ],
      useCases: [
        'Workplace safety compliance',
        'Risk assessment and hazard mitigation',
        'Regulatory documentation and audits',
        'Safe human-robot collaboration'
      ]
    },
    {
      icon: Settings,
      title: 'Enterprise Fleet & MES Integration',
      description: 'Comprehensive platforms for connecting robotic fleets to enterprise systems at scale.',
      tools: [
        { name: 'MES/ERP Integration Tools', description: 'Connect robotic operations to manufacturing execution and ERP systems' },
        { name: 'Cloud Robotics Platforms', description: 'Enterprise-grade cloud services for fleet orchestration' },
        { name: 'Multi-Site Fleet Orchestration', description: 'Coordinate robotic operations across multiple facilities' },
        { name: 'Custom Robotics Platforms', description: 'Tailored enterprise platforms built for your specific needs' }
      ],
      useCases: [
        'Enterprise-wide robotics deployment',
        'Scalable fleet infrastructure',
        'Multi-site and multi-vendor coordination',
        'Custom robotics platform development'
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
      description: 'Reduce human errors with robotic automation and intelligent decision support.'
    },
    {
      icon: Sparkles,
      title: 'Innovation Acceleration',
      description: 'Leverage cutting-edge robotics capabilities to innovate faster and stay competitive.'
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
      <section
        className="relative section-padding overflow-hidden bg-gray-950"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.90), rgba(0,0,0,0.94)), url('https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&w=1600&q=70')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Robotics Tools</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We've assessed hundreds of robotics platforms so you don't have to. Access cutting-edge robotics platforms
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
              Robotics Tool Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From robot programming to enterprise fleet platforms, we provide access to the best robotics tools
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
                      <Code className="w-5 h-5 text-primary-700 mr-2" />
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
                      <Target className="w-5 h-5 text-primary-700 mr-2" />
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
              Benefits of Using Our Robotics Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with us to access and implement the best robotics tools that drive real business value.
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
              How We Help You Implement Robotics Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just provide access to tools—we help you select, implement, and optimize
              the right robotics solutions for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'We evaluate your business needs and identify the right robotics tools for your use cases.'
              },
              {
                step: '02',
                title: 'Selection',
                description: 'We recommend and provide access to the best robotics tools that match your requirements.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Our team helps you integrate and deploy robotics tools into your existing workflows.'
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
              Ready to Leverage Robotics Tools for Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative">
              Let's discuss how our robotics tools can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
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

export default RoboticsToolsPage
