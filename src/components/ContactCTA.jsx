import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '../data/siteConfig'

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 text-center space-y-6">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
        Got a Vision? Let&apos;s Bring It to Life!
      </h2>

      <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
        I&apos;m always excited to collaborate on new and innovative projects.
        Whether you&apos;re starting from scratch or refining an existing idea
      </p>

      <div className="pt-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
        >
          Book A Call <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}