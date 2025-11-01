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
  MessageSquare,
  Award,
  Code,
  Settings,
  Sparkles,
  GitBranch,
  Cpu,
  GraduationCap,
  Briefcase,
  Layers
} from 'lucide-react'
import Button from '@/components/Button'

const ServicesPage = () => {
  const services = [
    {
      icon: Database,
      title: 'Data & AI Experts',
      description: 'We deliver cutting-edge data and AI solutions tailored to your organization\'s goals. Our experts transform complex data into actionable insights and leverage advanced AI technologies to drive innovation, enhance decision-making, and optimize operations—ensuring your business thrives in a data-driven world.',
      features: [
        'Data transformation & insights',
        'Advanced AI technology integration',
        'Decision-making optimization',
        'Operational excellence',
        'Business-driven solutions'
      ],
      benefits: [
        'Actionable business insights',
        'Enhanced decision-making',
        'Improved operational efficiency',
        'Competitive advantage in data-driven world'
      ]
    },
    {
      icon: Sparkles,
      title: 'Generative AI Specialists',
      description: 'We design and deploy generative AI models that create new content—text, imagery, video, and voice. Our specialists help businesses unlock creativity, automate content generation, and elevate customer experiences through the transformative potential of generative AI.',
      features: [
        'Text, image, video & voice generation',
        'Content automation systems',
        'Creative AI solutions',
        'Customer experience enhancement',
        'Multi-modal AI development'
      ],
      benefits: [
        'Automated content creation',
        'Enhanced creativity & innovation',
        'Improved customer experiences',
        'Reduced content production costs'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Large Language Model (LLM) Solutions',
      description: 'We harness the power of large-scale AI models such as GPT to build intelligent chatbots, copilots, and enterprise assistants. Our LLM solutions enhance productivity, automate communication, and deliver human-like interaction across customer support, internal operations, and analytics.',
      features: [
        'Intelligent chatbot development',
        'Enterprise copilot solutions',
        'Customer support automation',
        'Internal operations optimization',
        'Human-like AI interactions'
      ],
      benefits: [
        'Increased productivity',
        '24/7 automated communication',
        'Enhanced customer satisfaction',
        'Streamlined internal operations'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning & Data Science',
      description: 'Our machine learning engineers and data scientists develop adaptive algorithms that continuously learn from data. We deliver predictive insights, automate workflows, and enable data-driven decisions—empowering organizations to stay agile and competitive.',
      features: [
        'Adaptive ML algorithm development',
        'Predictive analytics & forecasting',
        'Workflow automation',
        'Data-driven decision systems',
        'Continuous learning models'
      ],
      benefits: [
        'Predictive business insights',
        'Automated workflows',
        'Agile & competitive operations',
        'Continuous improvement'
      ]
    },
    {
      icon: Brain,
      title: 'Strategic AI & Transformation Consulting',
      description: 'We partner with executives to craft AI strategies and implementation roadmaps aligned with business priorities. From opportunity discovery to measurable outcomes, our consultants guide your organization through every stage of its AI transformation journey.',
      features: [
        'Executive-level AI strategy',
        'Implementation roadmaps',
        'Opportunity discovery & assessment',
        'Measurable outcome frameworks',
        'End-to-end transformation guidance'
      ],
      benefits: [
        'Aligned AI strategy with business goals',
        'Clear transformation roadmap',
        'Measurable business outcomes',
        'Executive confidence in AI adoption'
      ]
    },
    {
      icon: Briefcase,
      title: 'Management & Digital Transformation Consulting',
      description: 'Our management consultants align AI and data strategies with organizational goals. We help businesses modernize systems, optimize performance, and foster innovation through seamless technology integration and change management.',
      features: [
        'Strategic alignment consulting',
        'System modernization',
        'Performance optimization',
        'Technology integration',
        'Change management support'
      ],
      benefits: [
        'Aligned technology & business goals',
        'Modernized operational systems',
        'Optimized performance metrics',
        'Successful change adoption'
      ]
    },
    {
      icon: Eye,
      title: 'Machine Vision & Computer Vision Systems',
      description: 'We design advanced computer vision solutions for automating visual inspection, quality control, facial recognition, and pattern detection. Our systems enhance precision, reduce operational costs, and improve efficiency across manufacturing, retail, and security sectors.',
      features: [
        'Visual inspection automation',
        'Quality control systems',
        'Facial recognition technology',
        'Pattern detection & analysis',
        'Multi-sector applications'
      ],
      benefits: [
        'Enhanced precision & accuracy',
        'Reduced operational costs',
        'Improved efficiency',
        'Sector-specific solutions'
      ]
    },
    {
      icon: Cloud,
      title: 'Modern Data Platform Architecture (Azure, AWS & GCP)',
      description: 'Our data architects design secure and scalable data ecosystems on Azure, AWS, and GCP. We build modern data lakes, warehouses, and pipelines to support real-time analytics, machine learning, and enterprise-grade AI solutions.',
      features: [
        'Multi-cloud architecture (Azure, AWS, GCP)',
        'Modern data lakes & warehouses',
        'Scalable data pipelines',
        'Real-time analytics infrastructure',
        'Enterprise-grade AI solutions'
      ],
      benefits: [
        'Scalable & secure infrastructure',
        'Real-time analytics capabilities',
        'Cloud-agnostic flexibility',
        'Enterprise-ready solutions'
      ]
    },
    {
      icon: Shield,
      title: 'AI Governance, Ethics & Risk Management',
      description: 'We implement robust AI governance frameworks that ensure transparency, accountability, and compliance. Our experts help organizations manage ethical, regulatory, and operational risks while fostering trust in AI adoption.',
      features: [
        'AI governance frameworks',
        'Transparency & accountability systems',
        'Regulatory compliance',
        'Ethical risk management',
        'Trust-building strategies'
      ],
      benefits: [
        'Regulatory compliance',
        'Reduced ethical risks',
        'Enhanced trust & transparency',
        'Sustainable AI adoption'
      ]
    },
    {
      icon: GitBranch,
      title: 'Agile Delivery & Project Management',
      description: 'Our Scrum and Agile project management expertise ensures timely, efficient, and collaborative delivery. This approach enables flexibility, continuous improvement, and consistent client satisfaction throughout every phase of your AI journey.',
      features: [
        'Scrum & Agile methodologies',
        'Timely project delivery',
        'Collaborative development',
        'Flexible project management',
        'Continuous improvement processes'
      ],
      benefits: [
        'On-time project delivery',
        'Flexible & adaptive approach',
        'Consistent client satisfaction',
        'Continuous value delivery'
      ]
    },
    {
      icon: Zap,
      title: 'AI Automation & Intelligent Process Optimization',
      description: 'We design AI-driven automation systems that eliminate repetitive tasks, streamline operations, and improve efficiency. Our automation experts integrate AI into workflows—boosting productivity and freeing human teams to focus on high-value work.',
      features: [
        'Repetitive task elimination',
        'Process streamlining',
        'Workflow AI integration',
        'Productivity optimization',
        'Human-AI collaboration design'
      ],
      benefits: [
        'Increased productivity',
        'Reduced manual workloads',
        'Enhanced operational efficiency',
        'Focus on high-value work'
      ]
    },
    {
      icon: Cpu,
      title: 'Edge AI & IoT Intelligence',
      description: 'We build edge AI solutions that process data in real time—close to where it\'s generated. Perfect for IoT, robotics, and industrial automation, our systems deliver faster insights, reduce latency, and enable smarter, autonomous operations.',
      features: [
        'Real-time edge processing',
        'IoT device intelligence',
        'Robotics automation',
        'Industrial automation systems',
        'Low-latency AI deployment'
      ],
      benefits: [
        'Faster real-time insights',
        'Reduced latency',
        'Autonomous operations',
        'Offline processing capability'
      ]
    },
    {
      icon: Code,
      title: 'AI Integration & Custom Application Development',
      description: 'We integrate AI into existing platforms, CRMs, and enterprise applications to extend their capabilities. From intelligent search to recommendation engines, we create tailored solutions that deliver immediate business impact.',
      features: [
        'Platform & CRM integration',
        'Enterprise application enhancement',
        'Intelligent search solutions',
        'Recommendation engine development',
        'Tailored business solutions'
      ],
      benefits: [
        'Extended platform capabilities',
        'Immediate business impact',
        'Seamless system integration',
        'Customized AI solutions'
      ]
    },
    {
      icon: Layers,
      title: 'Data Engineering & MLOps',
      description: 'We provide end-to-end data engineering and MLOps services, including data ingestion, transformation, model deployment, and continuous monitoring. This ensures your AI systems are reliable, scalable, and production-ready.',
      features: [
        'End-to-end data engineering',
        'Data ingestion & transformation',
        'Model deployment automation',
        'Continuous monitoring systems',
        'Production-ready infrastructure'
      ],
      benefits: [
        'Reliable AI systems',
        'Scalable infrastructure',
        'Production-ready solutions',
        'Continuous optimization'
      ]
    },
    {
      icon: Award,
      title: 'Responsible & Sustainable AI Consulting',
      description: 'We help organizations design ethical and sustainable AI frameworks that prioritize fairness, inclusivity, and environmental responsibility. Our consultants align technology with human and societal values for long-term trust and success.',
      features: [
        'Ethical AI framework design',
        'Fairness & inclusivity focus',
        'Environmental responsibility',
        'Value-aligned technology',
        'Long-term sustainability planning'
      ],
      benefits: [
        'Ethical brand reputation',
        'Sustainable AI practices',
        'Long-term trust & success',
        'Social responsibility alignment'
      ]
    },
    {
      icon: GraduationCap,
      title: 'AI Training & Capability Building',
      description: 'We empower teams with custom AI training programs—from executive briefings to hands-on technical workshops. Our goal is to build your internal AI literacy so your organization can innovate confidently and independently.',
      features: [
        'Custom training programs',
        'Executive AI briefings',
        'Hands-on technical workshops',
        'Internal AI capability building',
        'Innovation enablement'
      ],
      benefits: [
        'Enhanced AI literacy',
        'Confident AI innovation',
        'Independent AI capabilities',
        'Organizational transformation'
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
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our AI Consulting Offerings
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
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
                className="max-w-4xl mx-auto"
              >
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-lg text-gray-700 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                        What We Deliver
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-700 flex items-start">
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
                          <li key={benefitIndex} className="text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-gradient-to-r from-primary-100 to-accent-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our AI consulting services deliver measurable impact for businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">16</div>
              <div className="text-gray-700">Service Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-700">Custom Solutions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-700">AI Projects Delivered</div>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
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
