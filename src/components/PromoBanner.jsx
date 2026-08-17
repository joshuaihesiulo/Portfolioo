import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '../data/siteConfig'

export default function PromoBanner() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden bg-[#181818] text-white p-12 lg:p-20 text-center space-y-6">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center mix-blend-luminosity" />

        <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
          <span className="text-xs text-gray-400 font-medium tracking-wide">
            (Book Your Free Consultation Now!)
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
            Exclusive Winter Deal Days Get a Free Consultation!
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto">
            Take advantage of this limited-time offer to discuss your design
            needs with an experienced UI/UX and product designer.
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