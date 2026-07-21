import { Reveal, SectionHeader } from './primitives'
import { event } from '../data/site'
import { sponsorTiers } from '../data/content'

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-line relative scroll-mt-24">
      <div className="shell section-pad">
        <SectionHeader
          index="07"
          kicker="Sponsors & Partners"
          title={<>Help student ideas take shape.</>}
          intro="We’re welcoming financial and in-kind partners who want to support the next generation of builders with tools, food, prizes, swag, and event resources."
          className="max-w-2xl"
        />

        <div className="section-content-gap grid gap-4 md:grid-cols-2">
          {sponsorTiers.map((sponsor, index) => (
            <Reveal
              key={sponsor.tier}
              delay={index * 0.05}
              className="clip-sharp border border-indigo/25 bg-heart/25 p-7 sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo">
                    {sponsor.tier} sponsor
                  </div>
                  <div className="mt-3 font-display text-3xl font-semibold text-seashell">
                    {sponsor.price}
                  </div>
                </div>
                <span className="font-mono text-[10px] text-faint">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-6 font-body leading-relaxed text-muted text-pretty">
                {sponsor.benefits}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-col items-start justify-between gap-5 border border-line bg-midnight/60 p-7 sm:flex-row sm:items-center sm:p-8">
          <p className="max-w-2xl font-body leading-relaxed text-muted">
            Interested in supporting student builders with funding, prizes, food, tools, or event resources?
          </p>
          <a href={event.contactLink} className="flex-shrink-0 font-mono text-[13px] uppercase text-indigo hover:text-indigo-soft">
            Get in touch →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
