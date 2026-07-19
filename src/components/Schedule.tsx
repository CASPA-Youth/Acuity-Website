import { SectionHeader, Reveal } from './primitives'
import { schedule } from '../data/content'

export default function Schedule() {
  let lastDay = ''
  return (
    <section id="schedule" className="section-line relative scroll-mt-24">
      <div className="shell py-24 lg:py-36">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            index="05"
            kicker="Schedule"
            title={<>The full two-day run of show.</>}
            intro="Both in-person and online participants follow the same event timeline. Access links and final participant instructions will be shared before kickoff."
            className="mx-auto max-w-2xl text-center"
          />

          <div className="relative mt-16">
            {/* spine */}
            <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[calc(120px+7px)]" />
            <ol className="space-y-1">
              {schedule.map((item, i) => {
                const newDay = item.day !== lastDay
                lastDay = item.day
                return (
                  <Reveal as="li" key={i} delay={Math.min(i * 0.03, 0.3)}>
                    {newDay && (
                      <div className="mb-2 mt-6 flex items-center gap-3 first:mt-0 sm:pl-[120px]">
                        <span className="font-mono text-[12px] uppercase text-indigo">
                          {item.day}
                        </span>
                        <span className="h-px flex-1 bg-line" />
                      </div>
                    )}
                    <div className="group grid grid-cols-[auto_1fr] gap-4 sm:grid-cols-[120px_auto_1fr] sm:items-baseline">
                      <div className="hidden pt-3 text-right font-mono text-[12px] text-faint sm:block">
                        {item.time}
                      </div>
                      <div className="relative flex justify-center pt-[14px]">
                        <span
                          className={`relative z-10 h-3.5 w-3.5 rotate-45 border ${
                            item.highlight
                              ? 'border-indigo bg-indigo'
                              : 'border-indigo/60 bg-midnight'
                          }`}
                        />
                      </div>
                      <div
                        className={`rounded-lg border px-5 py-3 transition-colors sm:my-1 ${
                          item.highlight
                            ? 'border-indigo/50 bg-heart/45'
                            : 'border-transparent group-hover:border-line group-hover:bg-heart/20'
                        }`}
                      >
                        <div className="flex flex-wrap items-baseline gap-x-3">
                          <h3 className="font-display font-semibold text-seashell">
                            {item.title}
                          </h3>
                          <span className="font-mono text-[11px] text-faint sm:hidden">
                            {item.time}
                          </span>
                        </div>
                        <p className="mt-0.5 font-body text-sm text-muted">{item.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
