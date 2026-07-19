import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader, stagger, staggerItem } from './primitives'
import { prizes } from '../data/content'

export default function Prizes() {
  const reduce = useReducedMotion()
  const grand = prizes.find((p) => p.size === 'grand')!
  const rest = prizes.filter((p) => p.size !== 'grand')

  return (
    <section id="prizes" className="section-line relative scroll-mt-24">
      <div className="shell section-pad">
        <SectionHeader
          index="06"
          kicker="Prizes"
          title={<>Awards for work that stands out.</>}
          className="max-w-xl"
        />

        <div className="section-content-gap grid gap-4 lg:grid-cols-[1.1fr_1.4fr]">
          {/* grand prize */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="clip-sharp relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-lg bg-midnight p-8 sm:p-10"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <video
                className="h-full w-full object-cover"
                autoPlay={!reduce}
                loop={!reduce}
                muted
                playsInline
                preload="metadata"
                tabIndex={-1}
              >
                <source src="/money.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/55 to-midnight/20" />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rotate-45 border border-seashell/20"
            />
            <div className="relative flex items-center gap-2">
              <span className="diamond" />
              <span className="font-mono text-[12px] uppercase text-seashell/80">
                {grand.title}
              </span>
            </div>
            <div className="relative mt-10">
              <div className="break-words font-display text-5xl font-bold leading-none text-seashell sm:text-6xl">
                {grand.amount}
              </div>
              <p className="mt-4 max-w-xs font-body text-lg text-seashell/80">{grand.note}</p>
            </div>
          </motion.div>

          <motion.ul variants={stagger} initial={reduce ? undefined : 'hidden'} whileInView={reduce ? undefined : 'show'} viewport={{ once: true, margin: '-60px' }} className="border-t border-line">
            {rest.map((p) => (
              <motion.li
                key={p.title}
                variants={staggerItem}
                className="group flex items-start gap-5 border-b border-line px-2 py-5 transition-colors hover:bg-heart/20 sm:px-5"
              >
                <span className="diamond mt-1.5 opacity-60" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-seashell">{p.title}</h3>
                  <p className="mt-1.5 font-body text-sm text-muted">{p.note}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
