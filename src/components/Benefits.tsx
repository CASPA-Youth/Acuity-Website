import { Reveal } from './primitives'
import { benefits } from '../data/content'

const reasons = [
  'Turn an idea into a working prototype',
  'Work shoulder-to-shoulder with a team',
  'Build in person or join online',
  'Meet other student builders',
  'Present live to a professional panel',
  'Walk away with a portfolio project',
]

export default function Benefits() {
  return (
    <section id="why" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* large statement */}
          <Reveal className="clip-sharp relative flex flex-col justify-between overflow-hidden rounded-lg bg-indigo p-8 sm:p-12">
            <div
              aria-hidden
              className="reticle-grid pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
            />
            <div className="kicker relative text-midnight/70">03 / Why Participate</div>
            <h2 className="relative mt-8 max-w-xl font-display text-3xl font-bold leading-[1.05] text-midnight text-balance sm:text-4xl lg:text-[2.9rem]">
              Two focused days are enough to build something you’re proud to show.
            </h2>
            <p className="relative mt-5 max-w-md font-body text-lg leading-relaxed text-midnight/80">
              You leave with a working project, sharper skills, people who build like you do, and a
              chance to put your work in front of a professional panel.
            </p>
          </Reveal>

          {/* stat tiles — varied emphasis */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <Reveal
                key={b.label}
                delay={i * 0.06}
                className="flex flex-col justify-between rounded-lg border border-line bg-[#140a32]/60 p-6"
              >
                <div className="font-display text-4xl font-bold text-indigo sm:text-5xl">
                  {b.stat}
                </div>
                <div className="mt-4">
                  <div className="font-mono text-[11px] uppercase text-faint">
                    {b.label}
                  </div>
                  <p className="mt-1.5 font-body text-sm leading-snug text-muted">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* benefit list */}
        <div className="mt-4 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r}
              delay={i * 0.04}
              className="group flex items-center gap-4 bg-midnight px-6 py-5 transition-colors hover:bg-[#160a34]"
            >
              <span className="diamond transition-transform duration-300 group-hover:rotate-[135deg]" />
              <span className="font-body text-[15px] text-seashell">{r}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-line bg-[#120830]/50 px-7 py-6">
          <p className="font-display text-xl font-semibold">
            <span className="text-indigo">Award details are coming soon.</span> Projects will be
            recognized across both main and special categories.
          </p>
          <a
            href="#prizes"
            className="font-mono text-[13px] uppercase text-indigo hover:text-indigo-soft"
          >
            See the prizes →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
