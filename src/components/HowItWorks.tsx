import { SectionHeader, Reveal } from './primitives'
import { howItWorks } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how" className="light-band section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <SectionHeader
          index="04"
          kicker="How It Works"
          title={<>From sign-up to stage, in seven steps.</>}
          className="max-w-2xl"
        />

        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s, i) => (
            <Reveal
              as="li"
              key={s.step}
              delay={i * 0.05}
              className={`group relative rounded-lg border border-heart/25 bg-midnight p-6 text-seashell transition-colors hover:border-indigo hover:bg-[#180d3c] ${
                i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo/50 font-mono text-sm text-indigo transition-colors group-hover:bg-indigo group-hover:text-midnight">
                  {s.step}
                </span>
                {i < howItWorks.length - 1 && (
                  <span aria-hidden className="h-px flex-1 bg-line" />
                )}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted text-pretty">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
