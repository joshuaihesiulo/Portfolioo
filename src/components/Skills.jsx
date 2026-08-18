const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'React DOM',
      'Web Development',
      'Front-End Development',
    ],
  },
  {
    title: 'AI Engineering',
    skills: [
      'Artificial Intelligence (AI)',
      'AI Integration',
      'LangGraph',
      'CrewAI',
      'Google Gemini',
      'AI Coding Agents (OpenCode, DeepSeek, GLM, Claude Code)',
    ],
  },
  {
    title: 'State & APIs',
    skills: ['State Management (Zustand)', 'REST APIs', 'Vite'],
  },
  {
    title: '3D & Tools',
    skills: [
      'Three.js',
      'React Three Fiber',
      '@react-three/drei',
      'Git & GitHub',
      'Vercel',
      'Oracle Cloud',
      'Claude Code 101',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-14 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-medium bg-white border border-gray-200 px-3 py-1 rounded-full">
            &bull; Skills
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-4">
            Skills &amp; Expertise
          </h2>
        </div>
        <p className="max-w-md text-xs text-gray-500 leading-relaxed">
          A toolkit for building high-end, AI-powered web experiences — from
          pixel-perfect interfaces to intelligent features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-4"
          >
            <h3 className="text-sm font-bold tracking-tight">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}