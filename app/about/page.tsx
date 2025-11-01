'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  ArrowRight,
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/Button'

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Ethics First',
      description: 'We prioritize ethical AI development, ensuring our solutions are fair, transparent, and beneficial to all stakeholders.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We believe in open communication and clear explanations of how our AI solutions work and deliver value.',
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'We stay at the forefront of AI technology, continuously learning and adapting to deliver cutting-edge solutions.',
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Recognized as Sydney\'s leading AI consulting firm by industry publications.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'PhD-level AI experts with decades of combined experience in machine learning and business transformation.',
    },
    {
      icon: Target,
      title: 'Proven Results',
      description: '95% success rate in AI implementations with measurable ROI for our clients.',
    },
  ]

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
              <span className="gradient-text">About Tornado Consulting Group</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're a trusted partner in applied artificial intelligence, 
              helping businesses unlock their potential through innovative AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To enable businesses to unlock AI's potential by providing strategic guidance, 
                innovative solutions, and expert implementation that drives real, measurable growth.
              </p>
              <p className="text-lg text-gray-600">
                We believe that AI should be accessible, ethical, and transformative. 
                Our mission is to bridge the gap between cutting-edge AI technology and 
                practical business applications that deliver value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be Australia's most trusted partner in applied artificial intelligence, 
                recognized for our expertise, integrity, and commitment to delivering 
                transformative AI solutions.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where AI empowers every business to achieve 
                unprecedented levels of efficiency, innovation, and growth while 
                maintaining the highest ethical standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Meet Our Founder</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leading AI innovation with deep expertise and a passion for business transformation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-48 h-48 rounded-3xl mx-auto lg:mx-0 overflow-hidden border-4 border-primary-500/20">
                    <Image 
                      src="/img/Jaber.jpg" 
                      alt="Dr. Jaber Valizadeh - Founder & Principal AI Consultant"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Dr. Jaber Valizadeh</h3>
                  <p className="text-lg text-primary-400 font-semibold mb-6">Founder & Principal AI Consultant</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-accent-500" />
                      <span className="text-gray-300">PhD in Computer Science</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-accent-500" />
                      <span className="text-gray-300">Western Sydney University</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-accent-500" />
                      <span className="text-gray-300">Years of experience with industry and research leaders</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Dr. Jaber Valizadeh is an expert in Artificial Intelligence, Multi-Agent Systems and Algorithmic Game Theory based in Sydney, Australia. 
                    With a PhD in Computer Science and years of experience collaborating with industry and research leaders, 
                    he specializes in transforming business challenges into practical, scalable AI solutions. 
                    His expertise spans machine learning, generative AI, data-driven automation, and intelligent decision-making systems.
                  </p>
                  
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Multi-Agent Systems</span>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-sm">Algorithmic Game Theory</span>
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-sm">Generative AI</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Tornado Consulting Group?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what sets us apart in the AI consulting space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with AI solutions 
              that deliver real, measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start the Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
