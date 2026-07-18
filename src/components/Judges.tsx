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
      <div className="shell py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            index="08"
            kicker="Judges & Mentors"
            title={<>The people in the room.</>}
            className="max-w-xl"
          />
          <p className="max-w-xs font-body text-muted text-pretty">
            Engineers, researchers, and designers who’ve shipped the real thing — reviewing and
            mentoring all weekend.
          </p>
        </div>

        <motion.ul
          variants={stagger}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {judges.map((j) => (
            <motion.li
              key={j.name + j.role}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-lg border border-line bg-[#140a32]/60 p-6 transition-all hover:border-indigo/50 hover:bg-[#180d3c]"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-indigo/40 font-display text-lg font-bold text-seashell"
                  style={{
                    background:
                      'radial-gradient(120% 120% at 25% 20%, rgba(144,91,244,0.55), rgba(78,43,204,0.35) 55%, rgba(15,3,45,0.9))',
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
