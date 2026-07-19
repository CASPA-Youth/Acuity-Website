import { SectionHeader, Reveal } from './primitives'
import { schedule } from '../data/content'

export default function Schedule() {
  const days = schedule.reduce<Record<string, typeof schedule>>((groups, item) => {
    const dayItems = groups[item.day] ?? []
    dayItems.push(item)
    groups[item.day] = dayItems
    return groups
  }, {})

  return (
    <section id="schedule" className="section-line relative scroll-mt-24">
      <div className="shell section-pad">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            index="05"
            kicker="Schedule"
            title={<>The full two-day run of show.</>}
            intro="Both in-person and online participants follow the same event timeline. Access links and final participant instructions will be shared before kickoff."
            className="mx-auto max-w-2xl text-center"
          />

          <div className="section-content-gap grid gap-14 lg:grid-cols-2 lg:gap-12">
            {Object.entries(days).map(([day, items], dayIndex) => {
              const [dayLabel, date] = day.split(' · ')

              return (
                <Reveal as="section" key={day} delay={dayIndex * 0.08}>
                  <header className="flex items-end justify-between gap-6 border-b-2 border-indigo pb-4">
                    <div>
                      <span className="font-mono text-[11px] uppercase text-indigo">
                        Agenda 0{dayIndex + 1}
                      </span>
                      <h3 className="mt-1 font-display text-3xl font-semibold text-seashell">
                        {dayLabel}
                      </h3>
                    </div>
                    <span className="pb-1 font-mono text-sm uppercase text-muted">{date}</span>
                  </header>

                  <ol className="divide-y divide-seashell/20 border-b border-seashell/20">
                    {items.map((item) => (
                      <li
                        key={`${item.time}-${item.title}`}
                        className="group grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-5"
                      >
                        <time
                          className={`font-mono text-[11px] leading-6 ${
                            item.highlight ? 'text-indigo' : 'text-faint'
                          }`}
                        >
                          {item.time}
                        </time>
                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h4
                              className={`font-display font-semibold ${
                                item.highlight ? 'text-indigo-soft' : 'text-seashell'
                              }`}
                            >
                              {item.title}
                            </h4>
                            {item.highlight && (
                              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wide text-indigo">
                                <span className="h-1.5 w-1.5 rotate-45 bg-indigo" />
                                Milestone
                              </span>
                            )}
                          </div>
                          <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
