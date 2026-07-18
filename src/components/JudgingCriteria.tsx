import { SectionHeader } from './primitives'
import { criteria } from '../data/content'

export default function JudgingCriteria() {
  return (
    <section id="judging" className="section-line relative scroll-mt-24">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <SectionHeader
            index="07"
            kicker="Judging Criteria"
            title={<>How judges keep score.</>}
            intro="Every submission is reviewed across the same five dimensions. The final scoring scale and category details will be shared with participants before judging."
          />

          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line">
            {criteria.map((c) => (
              <li
                key={c.index}
                className="group grid grid-cols-[auto_1fr] items-center gap-5 bg-midnight px-6 py-5 transition-colors hover:bg-[#160a34] sm:px-7"
              >
                <span className="font-mono text-sm text-indigo">{c.index}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-1 font-body text-sm text-muted text-pretty">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
