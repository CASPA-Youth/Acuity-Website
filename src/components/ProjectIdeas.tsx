import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from './primitives'
import { ideas } from '../data/content'

export default function ProjectIdeas() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const current = ideas[active]

  return (
    <section id="ideas" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <SectionHeader
          index="02"
          kicker="Project Inspiration"
          title={<>Things worth building.</>}
          intro="Not requirements — starting points. Every one of these is a weekend-sized project with real teeth. Hover to see how an agent might approach it."
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
          {/* selectable list */}
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {ideas.map((idea, i) => {
              const isActive = i === active
              return (
                <li key={idea.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => !reduce && setActive(i)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center justify-between gap-4 rounded-lg border px-5 py-4 text-left transition-all duration-200 ${
                      isActive
                        ? 'border-indigo/60 bg-[#180d3c]'
                        : 'border-line bg-[#120830]/50 hover:border-indigo/40 hover:bg-[#160a34]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`diamond transition-transform duration-300 ${
                          isActive ? 'scale-125' : 'opacity-50'
                        }`}
                      />
                      <span className="font-display text-lg font-semibold">
                        {idea.title}
                      </span>
                    </span>
                    <span className="font-mono text-[11px] uppercase text-faint">
                      {idea.meta}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* detail panel */}
          <div className="clip-sharp relative min-h-[320px] overflow-hidden rounded-lg border border-line bg-[#160a34] p-7 sm:p-8 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="kicker">{current.meta}</div>
                <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-3 font-body leading-relaxed text-muted text-pretty">
                  {current.description}
                </p>

                <div className="mt-7 rounded-lg border border-line bg-midnight/60 p-4 font-mono text-[12.5px]">
                  <div className="mb-3 text-[11px] uppercase text-faint">
                    how an agent runs it
                  </div>
                  <div className="space-y-1.5">
                    {current.trace.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-indigo">{i === current.trace.length - 1 ? '✓' : '↳'}</span>
                        <span className={i === current.trace.length - 1 ? 'text-indigo' : 'text-muted'}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
