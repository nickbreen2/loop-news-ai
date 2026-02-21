const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2zm1 17h-2v-6h2v6zm0-8h-2V9h2v2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Tell us what you care about',
    description:
      'Quick 2-minute text conversation. We ask about your role, industry, and interests — then we do the rest.',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 4a8 8 0 100 16A8 8 0 0014 4zm.75 12.25h-1.5v-1.5h1.5v1.5zm0-3h-1.5V7.75h1.5v5.5z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2zm0 22C8.477 24 4 19.523 4 14S8.477 4 14 4s10 4.477 10 10-4.477 10-10 10zm-1-5h2v-6h-2v6zm0-8h2V9h-2v2z"
          fill="currentColor"
        />
        <circle cx="21" cy="7" r="5" fill="#F97316" />
        <path d="M21 5v2.5l1.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Wake up to your briefing',
    description:
      'Every morning, 3–5 personalized news items with summaries on why they matter to you — delivered right to your texts.',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2zm6 13.5l-8 4.5V8l8 4.5-8 4.5z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M10 8l8 6-8 6V8z"
          fill="currentColor"
        />
        <path
          d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2zm0 22C8.477 24 4 19.523 4 14S8.477 4 14 4s10 4.477 10 10-4.477 10-10 10z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'React to make it smarter',
    description:
      'Emoji react what you love. Reply to dig deeper. Your assistant learns exactly what you want over time.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-coral-500 mb-3">
            How It Works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Three steps to smarter mornings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Step number */}
              <span className="absolute top-6 right-7 font-display text-5xl font-bold text-stone-100 select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center mb-5">
                {step.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-stone-900 mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-stone-500 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
