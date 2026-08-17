import { ArrowUpRight } from 'lucide-react'
import { showcaseData } from '../data/portfolioData'
import { WHATSAPP_URL } from '../data/siteConfig'

export default function ShowcaseCarousel() {
  return (
    <section className="py-12 overflow-x-auto no-scrollbar">
      <div className="flex gap-6 px-6 max-w-none w-max mx-auto">
        {showcaseData.map((item) => (
          <div key={item.id} className="w-[320px] sm:w-[420px] shrink-0 space-y-3 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.featured && (
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#222222] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                    aria-label="Contact via WhatsApp"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between text-xs font-medium px-2">
              <span>{item.title}</span>
              <span className="text-gray-400 flex items-center gap-1">
                For <span className="text-black font-semibold">{item.client}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}