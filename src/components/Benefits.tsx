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
      <div className="shell py-24 lg:py-36">
        <div className="grid border-y border-line lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col justify-center bg-heart px-7 py-14 sm:px-10 lg:border-r lg:border-line lg:px-12 lg:py-20">
            <div className="kicker">03 / Why Participate</div>
            <h2 className="mt-8 max-w-xl font-display text-3xl font-semibold leading-[1.05] text-balance sm:text-4xl lg:text-[3rem]">
              Two focused days are enough to build something you’re proud to show.
            </h2>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-muted">
              Leave with a working project, sharper skills, people who build like you do, and a
              chance to put your work in front of a professional panel.
            </p>
          </Reveal>

          <dl className="grid grid-cols-2">
            {benefits.map((benefit, index) => (
              <Reveal
                key={benefit.label}
                delay={index * 0.06}
                className={`flex min-h-52 flex-col justify-between p-7 transition-colors hover:bg-heart/25 sm:p-9 ${
                  index % 2 === 0 ? 'border-r border-line' : ''
                } ${index < 2 ? 'border-b border-line' : ''}`}
              >
                <dt className="font-mono text-[11px] uppercase text-faint">
                  <span className="mr-2 text-indigo">/</span>
                  {benefit.label}
                </dt>
                <dd>
                  <div className="font-display text-5xl font-semibold text-seashell sm:text-6xl">
                    {benefit.stat}
                  </div>
                  <p className="mt-3 max-w-[24ch] font-body text-sm leading-relaxed text-muted">
                    {benefit.body}
                  </p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <Reveal>
            <div className="kicker">What you take home</div>
            <h3 className="mt-5 font-display text-3xl font-semibold text-balance">
              More than a weekend project.
            </h3>
          </Reveal>

          <ul className="grid border-t border-line sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal
                as="li"
                key={reason}
                delay={index * 0.04}
                className={`group flex min-h-24 items-center gap-5 border-b border-line py-6 ${
                  index % 2 === 0 ? 'sm:border-r sm:pr-8' : 'sm:pl-8'
                }`}
              >
                <span className="font-mono text-[11px] text-faint">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-base text-seashell">{reason}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <p className="max-w-2xl font-display text-xl font-semibold">
            Award details are coming soon. Projects will be recognized across main and special
            categories.
          </p>
          <a
            href="/prizes"
            className="font-mono text-[13px] uppercase text-indigo hover:text-indigo-soft"
          >
            See the prizes →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
