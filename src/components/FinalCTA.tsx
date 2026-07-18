import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { event } from '../data/site'

export default function FinalCTA() {
  const reduce = useReducedMotion()
  return (
    <section id="register" className="section-line relative overflow-hidden scroll-mt-24">
      <div aria-hidden className="reticle-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-indigo/25"
      />

      <div className="shell relative py-24 text-center lg:py-32">
        <motion.img
          src="/logo.png"
          alt=""
          aria-hidden
          className="mx-auto h-20 w-auto drop-shadow-[0_12px_48px_rgba(144,91,244,0.55)]"
          initial={reduce ? false : { opacity: 0, y: 16, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="kicker mt-8 justify-center">{event.registrationStatus}</div>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[0.98] text-balance sm:text-5xl lg:text-[4.5rem]">
          Bring the idea.
          <br />
          <span className="text-indigo">We’ll bring the weekend.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg text-muted text-pretty">
          {event.date} · {event.location}. Build solo or with a team of up to four, and plan to
          register at least one week before the event.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
          {[
            ['Aug 6–7', 'two days'],
            ['Hybrid', 'Santa Clara + online'],
            ['Up to 4', 'students per team'],
          ].map(([v, l]) => (
            <div
              key={l}
              className="rounded-lg border border-line bg-[#140a32]/90 px-4 py-4"
            >
              <div className="font-display text-xl font-bold text-seashell sm:text-2xl">{v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase text-faint">
                {l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            disabled
            className="group inline-flex cursor-not-allowed items-center gap-2 rounded-[10px] bg-indigo/70 px-8 py-4 font-display text-lg font-semibold text-midnight"
          >
            {event.registrationStatus}
            <ArrowRight size={20} />
          </button>
          <a
            href={event.contactLink}
            className="font-mono text-[13px] uppercase text-muted transition-colors hover:text-indigo"
          >
            Need help? {event.contactEmail}
          </a>
        </div>
        <p id="registration-link" className="mt-4 font-mono text-[11px] uppercase text-faint">
          Check back for the registration form and exact deadline.
        </p>
      </div>
    </section>
  )
}
