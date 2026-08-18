import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '../data/siteConfig'

export default function PromoBanner() {
  return (
    <section className="py-8 max-w-7xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden bg-[#181818] text-white p-10 lg:p-16 text-center space-y-5">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center mix-blend-luminosity" />

        <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
          <span className="text-xs text-gray-400 font-medium tracking-wide">
            (Open to Internships &amp; Freelance Work!)
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Got a Project in Mind? Let&apos;s Build It Together!
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto">
            From AI-powered web apps to 3D experiences, I build fast, modern
            interfaces with React, Tailwind CSS and Vite.
          </p>

          <div className="pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium border-b border-white pb-0.5 hover:opacity-80 transition-opacity"
            >
              Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}