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
      title: 'Safety First',
      description: 'We prioritize safe robotics development, ensuring our solutions are reliable, compliant, and beneficial to all stakeholders.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We believe in open communication and clear explanations of how our robotic solutions work and deliver value.',
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'We stay at the forefront of robotics technology, continuously learning and adapting to deliver cutting-edge solutions.',
    },
  ]

  const leaders = [
    {
      name: 'Dr. Jaber Valizadeh',
      role: 'Founder & Principal Robotics Consultant',
      image: '/img/Jaber.jpg',
      initials: 'JV',
      details: [
        { icon: GraduationCap, text: 'PhD in Computer Science' },
        { icon: MapPin, text: 'Western Sydney University' },
        { icon: Calendar, text: 'Years of experience with industry and research leaders' },
      ],
      bio: 'Dr. Jaber Valizadeh is an expert in Robotics, Multi-Agent Systems and Algorithmic Game Theory based in Sydney, Australia. With a PhD in Computer Science and years of experience collaborating with industry and research leaders, he specializes in transforming business challenges into practical, scalable robotic solutions. His expertise spans robotic control systems, autonomous navigation, data-driven automation, and intelligent decision-making systems.',
      tags: ['Multi-Agent Systems', 'Algorithmic Game Theory', 'Robotic Control Systems', 'Autonomous Navigation'],
    },
    {
      name: 'Rey Telikani',
      role: 'Co-Founder',
      image: '',
      initials: 'RT',
      details: [
        { icon: MapPin, text: 'Sydney, Australia' },
        { icon: Calendar, text: 'Extensive experience across technology and business strategy' },
      ],
      bio: 'Rey Telikani is Co-Founder of Tornado Consulting Group, working alongside our clients to turn robotics strategy into delivery. Rey focuses on partnerships, business growth, and making sure every engagement translates cutting-edge robotic technology into measurable outcomes.',
      tags: ['Robotics Strategy', 'Business Transformation', 'Client Partnerships'],
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Hands-On Leadership',
      description: 'Every engagement is led directly by our founders — no account-manager hand-offs, no junior bench.',
    },
    {
      icon: Users,
      title: 'PhD-Level Expertise',
      description: 'Robotics and multi-agent systems expertise grounded in real research, applied to practical business problems.',
    },
    {
      icon: Target,
      title: 'Built for Accountability',
      description: 'Clear scope, transparent pricing, and metrics you can track from day one of every engagement.',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-neutral-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="eyebrow">About Tornado Consulting Group</span>
            <h1 className="display mt-5">
              A hands-on partner in <span className="text-neutral-400">applied robotics.</span>
            </h1>
            <p className="body-muted mx-auto mt-6 max-w-xl">
              We're helping businesses unlock their potential through innovative robotic solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/60 mb-6">
                To enable businesses to unlock the potential of robotics by providing strategic guidance,
                innovative solutions, and expert implementation that drives real, measurable growth.
              </p>
              <p className="text-lg text-white/60">
                We believe that robotics should be accessible, safe, and transformative.
                Our mission is to bridge the gap between cutting-edge robotic technology and
                practical business applications that deliver value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-white/60 mb-6">
                To be Australia's most trusted partner in applied robotics,
                recognized for our expertise, integrity, and commitment to delivering
                transformative robotic solutions.
              </p>
              <p className="text-lg text-white/60">
                We envision a future where robotics empowers every business to achieve
                unprecedented levels of efficiency, innovation, and growth while
                maintaining the highest safety standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
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
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Meet Our Founders</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Deep expertise in robotics, applied hands-on by the two people who lead every engagement.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black border border-white/20 rounded-2xl p-8 lg:p-12 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-48 h-48 rounded-3xl mx-auto lg:mx-0 overflow-hidden border-4 border-primary-500/20">
                      {leader.image ? (
                        <Image
                          src={leader.image}
                          alt={`${leader.name} - ${leader.role}`}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                          priority={index === 0}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                          <span className="text-5xl font-bold text-black">{leader.initials}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{leader.name}</h3>
                    <p className="text-lg text-primary-400 font-semibold mb-6">{leader.role}</p>

                    <div className="space-y-4 mb-6">
                      {leader.details.map((detail) => (
                        <div key={detail.text} className="flex items-center space-x-3">
                          <detail.icon className="w-5 h-5 text-primary-400" />
                          <span className="text-white/70">{detail.text}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-white/70 mb-6">{leader.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {leader.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className={
                            tagIndex % 2 === 0
                              ? 'px-3 py-1 bg-primary-500/15 text-primary-400 rounded-full text-sm'
                              : 'px-3 py-1 bg-white/15 text-white/70 rounded-full text-sm'
                          }
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-neutral-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Tornado Consulting Group?</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Here's what to expect when you work with us.
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
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{achievement.title}</h3>
                <p className="text-white/60">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
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
              Ready to Partner with Us?
            </h2>
            <p className="relative text-base md:text-lg leading-relaxed text-neutral-400 mb-8 mt-5 max-w-lg mx-auto">
              Let's discuss how we can help transform your business with robotic solutions
              that deliver real, measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center relative">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start the Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  See Example Use Cases
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
