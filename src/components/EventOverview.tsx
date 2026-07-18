import { Reveal, SectionHeader } from './primitives'
import { event } from '../data/site'

const principles = [
  {
    n: '01',
    title: 'Start together',
    body: 'The final theme is revealed at kickoff. No premade projects—everyone gets the same starting line and two days to turn an idea into a demo.',
  },
  {
    n: '02',
    title: 'Open to every level',
    body: 'Middle and high school students can build solo or in a team of up to four. Team matching helps students connect before the clock starts.',
  },
  {
    n: '03',
    title: 'Original work, clearly shown',
    body: 'AI and third-party tools can support the build, but the project should reflect your team’s own thinking. Credit what you use and show the panel what you made.',
  },
]

export default function EventOverview() {
  return (
    <section id="about" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          <div>
            <SectionHeader
              index="00"
              kicker="The Event"
              title={
                <>
                  Two days to build
                  <br />
                  something <span className="text-indigo">sharp</span>.
                </>
              }
              intro={
                <>
                  {event.name} is a student-run build sprint by {event.organizer}. Join in Santa
                  Clara or online, discover the theme at kickoff, and turn an original idea into a
                  working submission across two focused days.
                </>
              }
            />

            <div className="mt-12 space-y-px overflow-hidden rounded-lg border border-line bg-line">
              {principles.map((p) => (
                <Reveal key={p.n}>
                  <div className="group grid grid-cols-[auto_1fr] gap-5 bg-midnight p-6 transition-colors hover:bg-[#160a34] sm:p-7">
                    <span className="font-mono text-sm text-indigo">{p.n}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-2 font-body leading-relaxed text-muted text-pretty">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* aside: at-a-glance facts */}
          <Reveal delay={0.1} className="lg:pt-16">
            <div className="clip-sharp sticky top-24 rounded-lg border border-line bg-[#160a34] p-7 sm:p-8">
              <div className="kicker">At a glance</div>
              <dl className="mt-6 divide-y divide-line">
                {[
                  ['Who', 'Middle & high schoolers'],
                  ['Format', 'Solo or teams up to 4'],
                  ['Theme', event.theme],
                  ['When', event.date],
                  ['Where', event.location],
                  ['Venue', event.venueAddress],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="font-mono text-[12px] uppercase text-faint">
                      {k}
                    </dt>
                    <dd className="text-right font-display font-semibold text-seashell">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={event.registrationLink}
                className="mt-7 flex w-full items-center justify-center rounded-[10px] bg-indigo px-6 py-3.5 font-display font-semibold text-midnight transition-all hover:-translate-y-0.5 hover:bg-indigo-soft"
              >
                {event.ctaPrimary}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
