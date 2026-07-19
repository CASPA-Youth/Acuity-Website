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
      <div className="shell section-pad">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <SectionHeader
              index="08"
              kicker="FAQ"
              title={<>Questions, answered.</>}
              intro="Still stuck? We’re one email away."
              className="mx-auto max-w-2xl"
            />
            <a
              href={event.contactLink}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[13px] uppercase text-indigo hover:text-indigo-soft"
            >
              <span className="diamond h-1.5 w-1.5" />
              {event.contactEmail}
            </a>
          </div>

          <ul className="section-content-gap divide-y divide-line rounded-lg border border-indigo/20 bg-heart/25">
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
                      className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left transition-colors hover:bg-heart/30 sm:px-9 sm:py-7"
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
                        <p className="max-w-2xl px-7 pb-8 font-body leading-relaxed text-muted text-pretty sm:px-9">
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
