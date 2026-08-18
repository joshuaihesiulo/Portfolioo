import { MY_EMAIL, scrollToSection } from '../data/siteConfig'

const FOOTER_LINKS = [
  { label: 'Home', id: 'hero', active: true },
  { label: 'About Me', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Portfolio', id: 'portfolio' },
]

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <nav className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-gray-300">
          {FOOTER_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={
                link.active
                  ? 'bg-[#242424] text-white px-4 py-2 rounded-full font-medium'
                  : 'hover:text-white transition-colors'
              }
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={`mailto:${MY_EMAIL}`}
          className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          {MY_EMAIL}
        </a>
      </div>
    </footer>
  )
}