import Link from 'next/link'
import Image from 'next/image'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Training', href: '/training' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Robotics Strategy', href: '/services' },
      { label: 'Robotic Arms & Automation', href: '/services' },
      { label: 'Warehouse Robotics', href: '/services' },
      { label: 'Robotics Tools', href: '/robotics-tools' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/img/Tornado_AI-removebg-preview.png"
              alt="Tornado AI"
              width={512}
              height={512}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-500">
              Robotic solutions engineered for productivity, automation and
              measurable growth.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              <li>Sydney, Australia</li>
              <li>
                <a
                  href="mailto:info@tornadoai.com.au"
                  className="transition-colors hover:text-neutral-950"
                >
                  info@tornadoai.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61468933033"
                  className="transition-colors hover:text-neutral-950"
                >
                  +61 468 933 033
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/109622305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-950"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Tornado. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-900"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-900"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
