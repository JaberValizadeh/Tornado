'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Zap, 
  Users, 
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Brain,
  Code,
  TrendingUp
} from 'lucide-react'
import Button from '@/components/Button'

const TrainingPage = () => {
  const trainingPrograms = [
    {
      icon: Brain,
      title: 'Robotics Fundamentals & Strategy',
      duration: '2 Days',
      level: 'Beginner to Intermediate',
      description: 'Introduction to robotics concepts, business applications, and strategic planning for robotics adoption.',
      topics: [
        'Understanding Robotics and Automation',
        'Robotics Use Cases in Business',
        'Robotics Strategy Development',
        'ROI Measurement for Robotics Projects',
        'Robot Safety Considerations'
      ],
      outcomes: [
        'Understand robotics fundamentals and terminology',
        'Identify robotics opportunities in your business',
        'Develop a robotics strategy framework',
        'Assess robotics readiness of your organization'
      ]
    },
    {
      icon: Code,
      title: 'Robotics Platforms & Programming',
      duration: '3 Days',
      level: 'Intermediate',
      description: 'Hands-on training with cutting-edge robot programming tools, platforms, and development frameworks.',
      topics: [
        'Robot Operating System (ROS/ROS2)',
        'Vendor Programming Platforms (UR, FANUC, ABB)',
        'No-Code Robot Configuration',
        'Sensor Data Preparation & Calibration',
        'Robot Deployment & Commissioning'
      ],
      outcomes: [
        'Master popular robotics tools and platforms',
        'Build robot-powered applications',
        'Configure robotic solutions without extensive coding',
        'Deploy robots into production'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Advanced Robotics Engineering',
      duration: '5 Days',
      level: 'Advanced',
      description: 'Deep dive into robot kinematics, control systems, path planning, and optimization techniques.',
      topics: [
        'Kinematics & Motion Planning',
        'Robot Control System Design',
        'Controller Optimization & Tuning',
        'Advanced Perception Techniques',
        'Production Robotics Systems'
      ],
      outcomes: [
        'Build complex robot control systems from scratch',
        'Optimize robot performance',
        'Implement advanced perception solutions',
        'Design scalable robotics systems'
      ]
    },
    {
      icon: Users,
      title: 'Robotics for Business Leaders',
      duration: '1 Day',
      level: 'Executive',
      description: 'Strategic overview of robotics for decision-makers and business leaders.',
      topics: [
        'Robotics Market Trends & Opportunities',
        'Digital Transformation with Robotics',
        'Building Robotics Teams & Culture',
        'Robotics Investment & Budgeting',
        'Risk Management & Governance'
      ],
      outcomes: [
        'Make informed robotics investment decisions',
        'Lead robotics transformation initiatives',
        'Build robotics-ready organizations',
        'Navigate robotics governance and compliance'
      ]
    }
  ]

  const trainingFeatures = [
    {
      icon: Clock,
      title: 'Flexible Schedules',
      description: 'On-site, online, or hybrid training options to fit your team\'s schedule.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry practitioners with real-world robotics implementation experience.'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Receive certificates of completion to validate your team\'s robotics expertise.'
    },
    {
      icon: Target,
      title: 'Customized Content',
      description: 'Training programs tailored to your industry, use cases, and technical level.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative section-padding overflow-hidden bg-gray-950"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.90), rgba(0,0,0,0.94)), url('https://images.unsplash.com/photo-1705579611249-9861db5469ea?auto=format&fit=crop&w=1600&q=70')",
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
              <span className="gradient-text">Our Training Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive robotics training programs designed to empower your team with the knowledge and skills
              needed to leverage robotics effectively in your business.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
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
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From fundamentals to advanced techniques, we offer comprehensive training programs 
              tailored to your team's needs and expertise level.
            </p>
          </motion.div>

          <div className="space-y-12">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 lg:p-12"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/4">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                      <program.icon className="w-10 h-10 text-gray-900" />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-500">Duration</span>
                        <p className="font-semibold text-gray-900">{program.duration}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Level</span>
                        <p className="font-semibold text-gray-900">{program.level}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{program.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <BookOpen className="w-5 h-5 text-primary-700 mr-2" />
                          Topics Covered
                        </h4>
                        <ul className="space-y-2">
                          {program.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-gray-600 flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <Target className="w-5 h-5 text-primary-700 mr-2" />
                          Learning Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {program.outcomes.map((outcome, outcomeIndex) => (
                            <li key={outcomeIndex} className="text-gray-600 flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide practical, hands-on training that delivers real results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to Upskill Your Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative">
              Contact us to discuss custom training programs tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Started
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

export default TrainingPage

