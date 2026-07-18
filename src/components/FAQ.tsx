import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeader } from './primitives'
import { faqs } from '../data/content'
import { event } from '../data/site'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <section id="faq" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeader
              index="10"
              kicker="FAQ"
              title={<>Questions, answered.</>}
              intro="Still stuck? We’re one email away."
            />
            <a
              href={event.contactLink}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[13px] uppercase text-indigo hover:text-indigo-soft"
            >
              <span className="diamond h-1.5 w-1.5" />
              {event.contactEmail}
            </a>
          </div>

          <ul className="divide-y divide-line rounded-lg border border-line bg-[#120830]/40">
            {faqs.map((f, i) => {
              const isOpen = open === i
              const panelId = `faq-panel-${i}`
              const btnId = `faq-btn-${i}`
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#160a34] sm:px-7"
                    >
                      <span className="font-display text-lg font-semibold text-seashell">
                        {f.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg border border-line text-indigo transition-all duration-300 ${
                          isOpen ? 'rotate-45 bg-indigo/10' : ''
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 font-body leading-relaxed text-muted text-pretty sm:px-7">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
