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
  Award
} from 'lucide-react'
import Button from '@/components/Button'

const HomePage = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Digital Transformation',
      description: 'Develop comprehensive AI roadmaps that align with your business objectives and drive measurable growth.',
      features: [
        'AI Readiness Assessment',
        'Strategic Roadmap Development',
        'Change Management & Training',
        'ROI Measurement & Optimization'
      ],
      image: '/img/Generative AI & Intelligent Automation.jpg'
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning Models & Predictive Analytics',
      description: 'Build intelligent systems that predict trends, optimize operations, and unlock data-driven insights.',
      features: [
        'Custom ML Model Development',
        'Predictive Analytics Solutions',
        'Real-time Data Processing',
        'Performance Monitoring & Optimization'
      ],
      image: '/img/Machine Learning.webp'
    },
    {
      icon: Zap,
      title: 'Generative AI & Automation',
      description: 'Implement cutting-edge AI solutions that automate workflows and enhance productivity across your organization.',
      features: [
        'Workflow Automation',
        'Content Generation Systems',
        'Intelligent Process Automation',
        'AI-Powered Decision Support'
      ],
      image: '/img/Robotics & Automation.jpeg'
    },
  ]

  const partnerships = [
    { 
      icon: Users, 
      value: '20+', 
      label: 'Strategic Partners',
      description: 'Leading technology companies and industry innovators',
      details: ['Microsoft Azure', 'Amazon Web Services', 'Google Cloud', 'IBM Watson', 'Salesforce', 'Oracle Cloud'],
      color: 'from-blue-500 to-cyan-500',
      accentColor: 'bg-blue-400'
    },
    { 
      icon: Target, 
      value: '15+', 
      label: 'Industry Specializations',
      description: 'Deep expertise across diverse business sectors',
      details: ['Healthcare & Life Sciences', 'Financial Services', 'Manufacturing', 'Retail & E-commerce', 'Education', 'Government'],
      color: 'from-emerald-500 to-teal-500',
      accentColor: 'bg-emerald-400'
    },
    { 
      icon: Award, 
      value: '10+', 
      label: 'Professional Associations',
      description: 'Active members of leading AI and technology organizations',
      details: ['AI Australia', 'IEEE Computer Society', 'ACM', 'Data Science Society', 'Machine Learning Society', 'Cloud Computing Association'],
      color: 'from-purple-500 to-pink-500',
      accentColor: 'bg-purple-400'
    },
  ]

  const expertise = [
    {
      icon: Brain,
      title: "Data Engineering & Cloud-Based AI",
      description: "Scalable data pipelines, cloud infrastructure, and distributed AI systems that handle massive datasets with enterprise-grade reliability.",
      technologies: ["AWS", "Azure", "GCP", "Apache Kafka", "Kubernetes", "Docker"]
    },
    {
      icon: TrendingUp,
      title: "Machine Learning & Predictive Analytics",
      description: "Custom ML models, deep learning solutions, and AI systems that learn and adapt to optimize business processes.",
      technologies: ["Scikit-learn", "PyTorch", "Keras", "XGBoost", "MLflow", "Kubeflow"]
    },
    {
      icon: Zap,
      title: "IoT & Edge Computing",
      description: "Connected device solutions, real-time data processing, and edge AI deployment for industrial and consumer applications.",
      technologies: ["MQTT", "CoAP", "EdgeX", "TensorFlow Lite", "Raspberry Pi", "Arduino"]
    },
    {
      icon: Shield,
      title: "Generative AI & Intelligent Automation",
      description: "Large language models, content generation, and autonomous AI agents that can reason, plan, and execute complex tasks with minimal human intervention.",
      technologies: ["GPT", "LangChain", "ReAct", "AutoGPT", "LangGraph", "CrewAI"]
    },
    {
      icon: Target,
      title: "Robotic & Autonomous Systems",
      description: "Intelligent robotics solutions, autonomous navigation, and robotic process automation that enhance operational efficiency and safety.",
      technologies: ["ROS", "OpenCV", "SLAM", "Computer Vision", "Motion Planning", "RPA"]
    },
    {
      icon: Shield,
      title: "Responsible & Ethical AI",
      description: "AI governance, bias detection, fairness auditing, and ethical AI implementation ensuring transparent, accountable, and trustworthy AI systems.",
      technologies: ["AI Fairness", "Explainable AI", "Privacy-Preserving ML", "AI Governance", "Bias Detection", "Ethical Frameworks"]
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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Unlock AI's Potential</span>
              <br />
              <span className="text-white">for Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Partner with Tornado, a leading AI consulting firm. We help businesses adopt 
              intelligent solutions that drive productivity, automation, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
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
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with businesses to implement comprehensive AI solutions that deliver real, measurable results across every aspect of your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-0 overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat relative"
                  style={{
                    backgroundImage: `url('${service.image}')`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Services:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="mt-6 text-center">
                    <Link href="/services">
                      <Button variant="secondary" size="sm" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Approach?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">End-to-End Solutions</h4>
                    <p className="text-gray-600 text-sm">From strategy to implementation, we handle every aspect of your AI transformation journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Industry Expertise</h4>
                    <p className="text-gray-600 text-sm">Deep knowledge across multiple industries ensures solutions tailored to your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Proven Results</h4>
                    <p className="text-gray-600 text-sm">Track record of delivering measurable ROI and transformative business outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnerships, Specialisations & Associations Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partnerships, Specialisations & Associations
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We collaborate with industry leaders and maintain expertise across diverse sectors to deliver comprehensive AI solutions that drive innovation and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Color Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partnership.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon and Value */}
                <div className="text-center mb-6 relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${partnership.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <partnership.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {partnership.value}
                  </div>
                  <div className="text-primary-100 text-lg font-semibold mb-2">
                    {partnership.label}
                  </div>
                  <p className="text-primary-200 text-sm">
                    {partnership.description}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-3 relative z-10">
                  <h4 className="font-semibold text-white mb-3 text-center">Key Partners & Areas:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {partnership.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-all duration-300">
                        <div className={`w-2 h-2 ${partnership.accentColor} rounded-full flex-shrink-0`}></div>
                        <span className="text-primary-100 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Partnership Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Our Network Matters</h3>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Our extensive network of partnerships and associations ensures you have access to cutting-edge technology, industry best practices, and the latest AI innovations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Certified Solutions</h4>
                <p className="text-primary-200 text-sm">Enterprise-grade, certified AI solutions from trusted partners</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Continuous Innovation</h4>
                <p className="text-primary-200 text-sm">Access to latest AI research and emerging technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Expert Network</h4>
                <p className="text-primary-200 text-sm">Collaboration with industry experts and thought leaders</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Industry Recognition</h4>
                <p className="text-primary-200 text-sm">Award-winning solutions and industry best practices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
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
              We are experts in Data, ML, IoT, Gen AI, Robotic & Ethical AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines deep technical expertise with industry experience to deliver cutting-edge solutions across the full spectrum of AI technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => {
              // Map expertise areas to their corresponding images
              const getImagePath = (title: string) => {
                switch (title) {
                  case "Data Engineering & Cloud-Based AI":
                    return "/img/data-analysis-vs-data-science.jpeg";
                  case "Machine Learning & Predictive Analytics":
                    return "/img/Machine Learning.webp";
                  case "IoT & Edge Computing":
                    return "/img/IoT and Edge Computing.png";
                  case "Generative AI & Intelligent Automation":
                    return "/img/Generative AI & Intelligent Automation.jpg";
                  case "Robotic & Autonomous Systems":
                    return "/img/Robotics & Automation.jpeg";
                  case "Responsible & Ethical AI":
                    return "/img/Responsible & Ethical AI.jpg";
                  default:
                    return "/img/background.jpg";
                }
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 group hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url('${getImagePath(area.title)}')`
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-3 text-center">{area.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 text-center">{area.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {area.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Expertise?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">End-to-End Solutions</h4>
                    <p className="text-gray-600 text-sm">From data collection to AI deployment, we handle every aspect of your project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Cutting-Edge Technologies</h4>
                    <p className="text-gray-600 text-sm">We stay ahead of the curve with the latest AI frameworks and methodologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Proven Results</h4>
                    <p className="text-gray-600 text-sm">Our solutions deliver measurable ROI and transform business operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can drive growth and innovation in your organization.
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
