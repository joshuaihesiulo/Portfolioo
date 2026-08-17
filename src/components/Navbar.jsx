import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { WHATSAPP_URL, scrollToSection } from '../data/siteConfig'

const NAV_LINKS = [
  { label: 'About Me', id: 'about' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Services', id: 'services' },
  { label: 'Blog', id: 'blog' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNav = (id) => {
    setMobileMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f7]/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => handleNav('hero')}
          className="flex items-center gap-2 group"
          aria-label="Go to top"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8L18 8v8l-6 3.75L6 16V8l6-3.2s0 0 0 0z" />
              <path d="M12 6.5L8 9v6l4 2.5 4-2.5V9l-4-2.5z" />
            </svg>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8 bg-white/70 px-6 py-2.5 rounded-full border border-gray-200/80 shadow-sm">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-sm font-medium hover:text-gray-500 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4"
        >
          Book A Call <ArrowUpRight className="w-4 h-4" />
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left text-base font-medium"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-base font-medium text-black pt-2 border-t border-gray-100 w-full"
          >
            Book A Call <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  )
}