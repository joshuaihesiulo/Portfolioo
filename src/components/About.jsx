import { Globe, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-14 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4 space-y-5">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            I am a Frontend Engineer and an aspiring AI Engineer specializing in
            building robust, interactive web applications using React,
            JavaScript, Tailwind CSS, and Zustand.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            I&apos;m deeply passionate about high-end UI/UX, drawing inspiration
            from top design communities to craft unique, professional
            interfaces — from cinematic layouts to Neo-Brutalist designs — that
            avoid &quot;generic&quot; aesthetics.
          </p>
          <div className="hidden lg:block pt-6 pl-12">
            <svg className="w-28 h-28 text-gray-300 stroke-current fill-none" viewBox="0 0 100 100">
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
            <h3 className="text-4xl font-bold tracking-tight">3</h3>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Certifications: TECHCERT Cohort 1, Google AI Essentials, Python
              (University of Michigan)
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-5">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Alongside frontend, I&apos;m heavily focused on AI Engineering —
              application building and API integration, leveraging foundation
              models and AI coding agents (OpenCode, DeepSeek, GLM) to
              accelerate development and ship intelligent features.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              I recently served as a capstone project team leader during my
              frontend engineering internship, and I&apos;m currently seeking
              frontend roles and internships where I can contribute to
              high-quality user experiences and integrate cutting-edge AI
              functionalities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}