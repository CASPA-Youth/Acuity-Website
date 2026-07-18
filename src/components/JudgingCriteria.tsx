import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from './primitives'
import { criteria } from '../data/content'

export default function JudgingCriteria() {
  const reduce = useReducedMotion()
  return (
    <section id="judging" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <SectionHeader
            index="07"
            kicker="Judging Criteria"
            title={<>How judges keep score.</>}
            intro="Every submission is scored on the same seven dimensions. Weights show where to spend your last hour before the deadline."
          />

          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line">
            {criteria.map((c, i) => (
              <li
                key={c.index}
                className="group grid grid-cols-[auto_1fr] items-center gap-5 bg-midnight px-6 py-5 transition-colors hover:bg-[#160a34] sm:px-7"
              >
                <span className="font-mono text-sm text-indigo">{c.index}</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold">
                      {c.title}
                    </h3>
                    <span className="font-mono text-[13px] text-muted">{c.weight}</span>
                  </div>
                  <p className="mt-1 font-body text-sm text-muted text-pretty">{c.body}</p>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-line">
                    <motion.div
                      className="h-full rounded-full bg-indigo"
                      initial={reduce ? { width: c.weight } : { width: 0 }}
                      whileInView={{ width: c.weight }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
