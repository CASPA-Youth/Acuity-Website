import { Reveal, SectionHeader } from './primitives'
import { event } from '../data/site'

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-line relative scroll-mt-24">
      <div className="shell py-24 lg:py-36">
        <SectionHeader
          index="07"
          kicker="Sponsors & Partners"
          title={<>Help student ideas take shape.</>}
          intro="We’re welcoming financial and in-kind partners who want to support the next generation of builders with tools, food, prizes, swag, and event resources."
          className="max-w-2xl"
        />

        <Reveal className="clip-sharp mt-14 flex flex-col items-start justify-between gap-8 border border-indigo/25 bg-heart/25 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <div className="kicker">Partnerships are open</div>
            <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-muted">
              Support can include funding, prizes, food, tools, participant resources, or in-kind contributions.
              Confirmed partner logos will appear here.
            </p>
          </div>
          <a href={event.contactLink} className="flex-shrink-0 font-mono text-[13px] uppercase text-indigo hover:text-indigo-soft">
            Get in touch →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
