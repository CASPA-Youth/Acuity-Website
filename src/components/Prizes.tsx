import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader, stagger, staggerItem } from './primitives'
import { prizes } from '../data/content'
import { event } from '../data/site'

export default function Prizes() {
  const reduce = useReducedMotion()
  const grand = prizes.find((p) => p.size === 'grand')!
  const rest = prizes.filter((p) => p.size !== 'grand')

  return (
    <section id="prizes" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            index="06"
            kicker="Prizes"
            title={<>{event.prizePool} on the line.</>}
            className="max-w-xl"
          />
          <p className="max-w-xs font-body text-muted text-pretty">
            Prizes span every track, so beginners and veterans both have a real shot.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_1.4fr]">
          {/* grand prize */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="clip-sharp relative flex flex-col justify-between overflow-hidden rounded-lg bg-indigo p-8 sm:p-10"
          >
            <div
              aria-hidden
              className="reticle-grid pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rotate-45 border border-midnight/20"
            />
            <div className="relative flex items-center gap-2">
              <span className="diamond bg-midnight" />
              <span className="font-mono text-[12px] uppercase text-midnight/80">
                {grand.title}
              </span>
            </div>
            <div className="relative mt-10">
              <div className="break-words font-display text-5xl font-bold leading-none text-midnight sm:text-6xl">
                {grand.amount}
              </div>
              <p className="mt-4 max-w-xs font-body text-lg text-midnight/80">{grand.note}</p>
            </div>
          </motion.div>

          {/* category prizes */}
          <motion.ul
            variants={stagger}
            initial={reduce ? undefined : 'hidden'}
            whileInView={reduce ? undefined : 'show'}
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {rest.map((p) => (
              <motion.li
                key={p.title}
                variants={staggerItem}
                className={`group rounded-lg border border-line bg-[#140a32]/60 p-6 transition-all hover:border-indigo/50 hover:bg-[#180d3c] ${
                  p.size === 'major' ? 'sm:col-span-1' : ''
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-seashell">
                    {p.title}
                  </h3>
                  {p.size === 'major' && (
                    <span className="rounded-full border border-indigo/50 px-2.5 py-0.5 font-mono text-[10px] uppercase text-indigo">
                      Major
                    </span>
                  )}
                </div>
                <div className="mt-3 font-display text-2xl font-bold text-indigo">{p.amount}</div>
                <p className="mt-1.5 font-body text-sm text-muted">{p.note}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
