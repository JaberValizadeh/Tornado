'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Use Cases', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const showCta = pathname !== '/book'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openBooking = () =>
    window.open('/book', '_blank', 'noopener,noreferrer,width=960,height=800')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-neutral-950/90 backdrop-blur-md'
          : 'border-white/5 bg-neutral-950/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
          }`}
        >
          {/* Logo — white chip so the dark mark stays visible on the dark bar */}
          <Link href="/" className="flex items-center" aria-label="Tornado AI home">
            <span
              className={`flex items-center justify-center rounded-lg bg-white px-2 transition-all duration-300 ${
                isScrolled ? 'py-1' : 'py-1.5'
              }`}
            >
              <Image
                src="/img/Tornado_AI-removebg-preview.png"
                alt="Tornado AI"
                width={512}
                height={512}
                priority
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-8 md:h-9' : 'h-9 md:h-11'
                }`}
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    active ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            {showCta && (
              <button onClick={openBooking} className="btn-primary py-2.5 text-sm">
                Book a consultation
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="-mr-2 p-2 text-white md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-neutral-950 md:hidden">
          <div className="container-custom flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-white/5 py-3.5 text-sm text-neutral-300 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {showCta && (
              <button
                className="btn-primary mt-5 w-full"
                onClick={() => {
                  setIsMenuOpen(false)
                  openBooking()
                }}
              >
                Book a consultation
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
