import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-accent-100 text-gray-900">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-52 h-52 rounded-lg overflow-hidden">
                <Image 
                  src="/img/Tornado AI.jpg" 
                  alt="Tornado AI Logo" 
                  width={208} 
                  height={208}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              Empowering businesses with cutting-edge AI solutions for sustainable growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-700 hover:text-primary-600 transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-700">AI Strategy</span></li>
              <li><span className="text-gray-700">Machine Learning</span></li>
              <li><span className="text-gray-700">Generative AI</span></li>
              <li><span className="text-gray-700">Data Engineering</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="text-gray-700">Sydney, Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-600" />
                <a href="mailto:info@tornadoai.com.au" className="text-gray-700 hover:text-primary-600 transition-colors">
                  info@tornadoai.com.au
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-600" />
                <span className="text-gray-700">+61 2 8000 0000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 Tornado. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
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
