import { ArrowUpRight, Globe, Sparkles } from 'lucide-react'
import { MY_PHOTO, WHATSAPP_URL } from '../data/siteConfig'

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-4xl font-normal tracking-tight">About Me</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            I&apos;m specialize in turning complex problems into elegant
            solutions. My approach blends creativity with strategic thinking to
            deliver designs that not only look great but work seamlessly. Ready
            to start your next project?
          </p>
          <div className="hidden lg:block pt-8 pl-12">
            <svg className="w-32 h-32 text-gray-300 stroke-current fill-none" viewBox="0 0 100 100">
              <path d="M 10 10 Q 30 80 80 80" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 70 70 L 80 80 L 70 90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-black">
            <Globe className="w-6 h-6" />
          </div>

          <div>
            <h3 className="text-5xl font-light tracking-tight">120%</h3>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Average increase in client engagement in the first 6 months
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-square bg-gray-100">
            <img
              src={MY_PHOTO}
              alt="Portrait"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 group">
            <img
              src={MY_PHOTO}
              alt="Work sample"
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              aria-label="Contact via WhatsApp"
            >
              <ArrowUpRight className="w-5 h-5 text-black" />
            </a>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                With 4+ years of experience, I specialize in creating intuitive,
                user-focused designs that solve real-world problems and deliver
                seamless digital experiences.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                I thrive on working closely with clients, blending creativity
                with strategy to bring their vision to life through thoughtful,
                impactful design solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}