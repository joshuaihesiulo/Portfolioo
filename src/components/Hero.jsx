import { ArrowDown } from 'lucide-react'
import { MY_PHOTO, scrollToSection } from '../data/siteConfig'

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 pb-8 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="hidden lg:flex lg:col-span-1 flex-col justify-between h-[400px] border-r border-gray-200/80 pr-4 text-xs text-gray-400 tracking-wider">
          <span className="[writing-mode:vertical-lr] rotate-180 uppercase">
            Frontend developer
          </span>
          <span className="[writing-mode:vertical-lr] rotate-180">2026</span>
        </div>

        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-none tracking-tight">
              Hello
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-normal">
              — I&apos;m Joshua Ihesiulo, a Frontend Engineer &amp; aspiring AI
              Engineer crafting high-end UIs and AI-powered web apps
            </p>
          </div>

          <div className="flex items-center gap-12">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
                +10
              </h3>
              <p className="text-xs text-gray-500 mt-1">Projects built</p>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
                +8
              </h3>
              <p className="text-xs text-gray-500 mt-1">Certifications</p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
            >
              Scroll down <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200 shadow-xl">
            <img
              src={MY_PHOTO}
              alt="Joshua Ihesiulo - Frontend Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
