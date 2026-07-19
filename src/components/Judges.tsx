import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader, stagger, staggerItem } from './primitives'
import { judges } from '../data/content'

function initials(name: string) {
  const clean = name.replace(/[[\]]/g, '').trim()
  const parts = clean.split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return clean.slice(0, 2).toUpperCase()
}

export default function Judges() {
  const reduce = useReducedMotion()
  return (
    <section id="judges" className="section-line relative scroll-mt-24">
      <div className="shell section-pad">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            index="08"
            kicker="Judges"
            title={<>The people in the room.</>}
            className="max-w-xl"
          />
          <p className="max-w-xs font-body text-muted text-pretty">
            A diverse panel of professionals will review every project across the published rubric.
          </p>
        </div>

        <motion.ul
          variants={stagger}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
          className="section-content-gap grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {judges.length === 0 && (
            <motion.li
              variants={staggerItem}
              className="clip-sharp rounded-lg border border-indigo/25 bg-heart/30 p-8 sm:col-span-2 sm:p-12 lg:col-span-3"
            >
              <div className="kicker">Panel announcement</div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-seashell">
                Judges will be announced soon.
              </h3>
              <p className="mt-3 max-w-2xl font-body leading-relaxed text-muted text-pretty">
                We’re assembling a panel with a mix of technical, creative, and real-world
                perspectives so every project gets a thoughtful review.
              </p>
            </motion.li>
          )}
          {judges.map((j) => (
            <motion.li
              key={j.name + j.role}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-lg border border-line bg-heart/20 p-7 transition-all hover:border-indigo/50 hover:bg-heart/40"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-indigo/40 font-display text-lg font-bold text-seashell"
                  style={{
                    background:
                      'radial-gradient(120% 120% at 25% 20%, rgba(144,91,244,0.5), rgba(78,43,204,0.32) 55%, rgba(15,3,45,0.95))',
                  }}
                >
                  {initials(j.name)}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-tight">
                    {j.name}
                  </h3>
                  <p className="mt-0.5 font-body text-sm text-muted">
                    {j.role} · {j.org}
                  </p>
                </div>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo/40 px-3 py-1 font-mono text-[11px] uppercase text-indigo">
                <span className="diamond h-1.5 w-1.5" />
                {j.expertise}
              </span>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted text-pretty">{j.bio}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
