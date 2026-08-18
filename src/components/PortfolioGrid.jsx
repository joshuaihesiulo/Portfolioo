import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { WHATSAPP_URL } from '../data/siteConfig'

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-14 max-w-7xl mx-auto px-6 text-center">
      <span className="text-xs font-medium bg-white border border-gray-200 px-3 py-1 rounded-full inline-block mb-4">
        &bull; Portfolio
      </span>

      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-10">
        Latest Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {portfolioData.map((project) => (
          <div key={project.id} className="space-y-4 group cursor-pointer">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {project.active && project.url && (
                <>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#222222] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                    aria-label="Open project"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[11px] text-white font-medium drop-shadow-md">
                    <span>Website</span>
                    <span>{project.url.replace('https://', '')}</span>
                  </div>
                </>
              )}
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-medium">
                <span>{project.title}</span>
                <span className="text-gray-400">
                  For{' '}
                  <span className="text-black font-semibold">{project.client}</span>
                </span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-xs font-medium text-gray-500">
        <span>Check out More</span>
        <ArrowRight className="w-3.5 h-3.5" />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:underline"
        >
          View More
        </a>
      </div>
    </section>
  )
}
