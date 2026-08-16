'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { MotionConfig } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const hideChrome = pathname === '/book'

  return (
    <MotionConfig reducedMotion="user">
      {!hideChrome && <Header />}
      <main>{children}</main>
      {!hideChrome && <Footer />}
      {!hideChrome && <Chatbot />}
    </MotionConfig>
  )
}


