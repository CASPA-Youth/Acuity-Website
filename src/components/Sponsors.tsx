import { Reveal, SectionHeader } from './primitives'
import { sponsorTiers } from '../data/content'
import { event } from '../data/site'

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <SectionHeader
          index="09"
          kicker="Sponsors & Partners"
          title={<>Backed by teams who build.</>}
          intro="Interested in supporting the next class of ML builders? Reach out — sponsor slots and partner tiers are open."
          className="max-w-2xl"
        />

        <div className="mt-14 space-y-4">
          {sponsorTiers.map((tier, ti) => (
            <Reveal key={tier.tier} delay={ti * 0.05}>
              <div className="rounded-lg border border-line bg-[#120830]/40 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="diamond" />
                  <h3 className="font-mono text-[12px] uppercase text-indigo">
                    {tier.tier}
                  </h3>
                  {tier.note && (
                    <span className="font-mono text-[11px] text-faint">— {tier.note}</span>
                  )}
                </div>
                <div
                  className={`mt-6 grid gap-3 ${
                    ti === 0
                      ? 'grid-cols-1'
                      : ti === 1
                        ? 'grid-cols-1 sm:grid-cols-3'
                        : 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-5'
                  }`}
                >
                  {tier.logos.map((logo, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-center rounded-lg border border-dashed border-line bg-midnight/60 font-display font-semibold text-faint transition-colors hover:border-indigo/50 hover:text-muted ${
                        ti === 0 ? 'h-28 text-2xl' : ti === 1 ? 'h-24 text-xl' : 'h-16 text-sm'
                      }`}
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-line bg-[#140a32]/60 px-7 py-5">
          <p className="font-body text-muted">Want your logo here?</p>
          <a
            href={event.contactLink}
            className="font-mono text-[13px] uppercase text-indigo hover:text-indigo-soft"
          >
            {event.contactEmail} →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
