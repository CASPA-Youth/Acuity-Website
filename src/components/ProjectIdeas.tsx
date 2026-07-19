import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from './primitives'
import { ideas } from '../data/content'

export default function ProjectIdeas() {
  const [active, setActive] = useState<number | null>(null)
  const reduce = useReducedMotion()

  return (
    <section id="ideas" className="section-line relative scroll-mt-24">
      <div className="shell py-24 lg:py-36">
        <SectionHeader
          index="02"
          kicker="Project Formats"
          title={<>Build it your way.</>}
          intro="The revealed theme sets the direction, but your project can take many forms. Choose a format to see one possible build path."
          className="mx-auto max-w-2xl text-center [&_.kicker]:justify-center"
        />

        <ul className="mx-auto mt-14 grid max-w-4xl gap-3">
          {ideas.map((idea, index) => {
            const isActive = active === index
            const buttonId = `format-button-${index}`
            const panelId = `format-panel-${index}`

            return (
              <li
                key={idea.title}
                className={`overflow-hidden border transition-colors duration-300 ${
                  isActive
                    ? 'border-indigo/60 bg-heart/25'
                    : 'border-line bg-heart/15 hover:border-indigo/40'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setActive(isActive ? null : index)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className="group flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-heart/20 sm:gap-6 sm:px-7 sm:py-6"
                  >
                    <span className="font-mono text-[11px] text-indigo">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1 font-display text-lg font-semibold text-seashell sm:text-xl">
                      {idea.title}
                    </span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-faint sm:block">
                      {idea.meta}
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center border border-line text-indigo transition-colors group-hover:border-indigo/50">
                      <ChevronDown
                        size={17}
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-indigo/35 bg-midnight/45 px-5 py-6 sm:grid sm:grid-cols-[1.15fr_1fr] sm:gap-10 sm:px-7 sm:py-8">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-indigo sm:hidden">
                            {idea.meta}
                          </div>
                          <p className="mt-3 max-w-xl font-body leading-relaxed text-muted text-pretty sm:mt-0 sm:text-lg">
                            {idea.description}
                          </p>
                        </div>

                        <div className="mt-7 border-t border-line pt-5 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                            A focused build path
                          </div>
                          <ol>
                            {idea.trace.map((step, stepIndex) => (
                              <li
                                key={step}
                                className="flex items-center gap-3 border-t border-line/60 py-2.5 first:border-t-0"
                              >
                                <span className="font-mono text-[10px] text-indigo">
                                  {String(stepIndex + 1).padStart(2, '0')}
                                </span>
                                <span className="font-body text-sm text-muted">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
