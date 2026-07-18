import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeader, stagger, staggerItem } from './primitives'
import { tracks } from '../data/content'

// Deliberate, varied footprint so no two cards read the same.
const span: Record<string, string> = {
  sustainability: 'lg:col-span-2',
  ml: 'lg:col-span-2',
  productivity: 'lg:col-span-1 lg:row-span-2',
  education: 'lg:col-span-1',
  health: 'lg:col-span-2',
}

export default function ChallengeTracks() {
  const reduce = useReducedMotion()
  return (
    <section id="challenges" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <SectionHeader
          index="01"
          kicker="Possible Themes"
          title={<>One theme. Revealed at kickoff.</>}
          intro="We’ll share hints as the event gets closer. The final challenge will come from this pool, and every team will discover it together when building begins."
          className="max-w-2xl"
        />

        <motion.div
          variants={stagger}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tracks.map((t) => (
            <motion.a
              key={t.id}
              href={event_challengesHref}
              variants={staggerItem}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-lg border border-line bg-[#140a32]/60 p-7 transition-all duration-300 hover:border-indigo/60 hover:bg-[#180d3c] sm:p-8 ${span[t.id]}`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-indigo opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-[13px] text-indigo">{t.index}</span>
                <ArrowUpRight
                  size={20}
                  className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo"
                />
              </div>
              <div className="relative mt-10">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-indigo/50 px-3 py-1 font-mono text-[11px] uppercase text-muted">
                    {t.tag}
                  </span>
                  <span className="font-mono text-[11px] uppercase text-faint">
                    {t.level}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold sm:text-[26px]">
                  {t.title}
                </h3>
                <p className="mt-3 max-w-md font-body leading-relaxed text-muted text-pretty">
                  {t.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const event_challengesHref = '#ideas'
