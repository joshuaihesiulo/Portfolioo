import { ArrowUpRight } from 'lucide-react'
import { experienceData } from '../data/experienceData'
import { WHATSAPP_URL } from '../data/siteConfig'

export default function Experience() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <span className="text-xs font-medium bg-white border border-gray-200 px-3 py-1 rounded-full">
            &bull; Experiences
          </span>
          <h2 className="text-4xl lg:text-5xl font-normal tracking-tight mt-4">
            Explore My Design<br />Journey
          </h2>
        </div>

        <div className="max-w-md space-y-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            Over the past 4+ years, I&apos;ve had the opportunity to work on a
            wide range of design projects, collaborating with diverse teams and
            clients to bring creative visions to life.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium hover:underline underline-offset-4"
          >
            Book A Call <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className={
              item.expanded
                ? 'py-8 space-y-6'
                : 'py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-white/50 px-2 transition-colors rounded-xl'
            }
          >
            {item.expanded ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-4">
                    <h3 className="text-lg font-medium">{item.company}</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      &bull; {item.period}
                    </p>
                  </div>
                  <div className="md:col-span-5" />
                  <div className="md:col-span-3 flex justify-start md:justify-end gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-black text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
                  <div className="md:col-span-7 grid grid-cols-3 gap-3">
                    {item.media.map((src) => (
                      <div
                        key={src}
                        className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200"
                      >
                        <img
                          src={src}
                          alt="Work thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="md:col-span-5 flex items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                      aria-label="Contact via WhatsApp"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-medium">
                    {item.company}, {item.location}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    &bull; {item.period}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <div className="md:col-span-3 flex justify-start md:justify-end gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gray-200/70 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}