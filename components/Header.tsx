'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const bookingsUrl = process.env.NEXT_PUBLIC_BOOKINGS_URL || ''

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-28 h-12 md:w-40 md:h-16 lg:w-52 lg:h-20 rounded-lg overflow-hidden">
              <Image 
                src="/img/Tornado-removebg-preview.png" 
                alt="Tornado Logo" 
                width={208} 
                height={208}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={bookingsUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={(e) => {
                if (!bookingsUrl) {
                  e.preventDefault()
                  alert('Microsoft Bookings URL is not configured. Please set NEXT_PUBLIC_BOOKINGS_URL in your .env.local file.')
                }
              }}
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4">
                <a
                  href={bookingsUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                  onClick={(e) => {
                    if (!bookingsUrl) {
                      e.preventDefault()
                      alert('Microsoft Bookings URL is not configured. Please set NEXT_PUBLIC_BOOKINGS_URL in your .env.local file.')
                    }
                  }}
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
