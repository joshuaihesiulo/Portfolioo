import { ArrowDown } from 'lucide-react'
import { MY_PHOTO, scrollToSection } from '../data/siteConfig'

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-28 pb-16 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="hidden lg:flex lg:col-span-1 flex-col justify-between h-[500px] border-r border-gray-200/80 pr-4 text-xs text-gray-400 tracking-wider">
          <span className="[writing-mode:vertical-lr] rotate-180 uppercase">
            Product designer
          </span>
          <span className="[writing-mode:vertical-lr] rotate-180">2024</span>
        </div>

        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-4">
            <h1 className="text-7xl sm:text-8xl lg:text-[11rem] font-light leading-none tracking-tight">
              Hello
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-normal">
              — It&apos;s D.Nova a design wizerd
            </p>
          </div>

          <div className="flex items-center gap-16">
            <div>
              <h3 className="text-4xl lg:text-5xl font-light tracking-tight">+200</h3>
              <p className="text-xs text-gray-500 mt-1">Project completed</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-light tracking-tight">+50</h3>
              <p className="text-xs text-gray-500 mt-1">Startup raised</p>
            </div>
          </div>

          <div className="pt-8">
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
              alt="D.Nova - Product Designer"
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  )
}