import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="w-40 h-40 rounded-xl overflow-hidden bg-white p-3">
              <Image
                src="/img/Tornado_AI-removebg-preview.png"
                alt="Tornado AI Logo"
                width={148}
                height={148}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with cutting-edge robotic solutions for sustainable growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/109622305/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-400 uppercase text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-400 uppercase text-sm tracking-wide">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Robotics Strategy</span></li>
              <li><span className="text-gray-400">Robotic Arms & Automation</span></li>
              <li><span className="text-gray-400">Warehouse Robotics</span></li>
              <li><span className="text-gray-400">Fleet Systems Integration</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-400 uppercase text-sm tracking-wide">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">Sydney, Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <a href="mailto:info@tornadoai.com.au" className="text-gray-400 hover:text-white transition-colors">
                  info@tornadoai.com.au
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">+61 468 933 033</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Tornado. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
