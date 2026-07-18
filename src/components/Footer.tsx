import { Github, Instagram, Twitter } from 'lucide-react'
import { event, navLinks } from '../data/site'

export default function Footer() {
  return (
    <footer id="contact" className="section-line relative scroll-mt-24">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <img src="/logo-mark.png" alt="" aria-hidden className="h-8 w-8" />
              <span className="font-display text-lg font-bold">
                Acuity<span className="text-indigo"> Hacks</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-muted text-pretty">
              A student-run {event.theme} hackathon by {event.organizer}. {event.date} ·{' '}
              {event.location}.
            </p>
            <div id="social-links" className="mt-6 flex items-center gap-3" aria-label="Social links pending">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Github, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  aria-label={`${label}: [SOCIAL LINK]`}
                  aria-disabled="true"
                  title={`${label} link pending`}
                  className="grid h-10 w-10 cursor-not-allowed place-items-center rounded-lg border border-line text-faint"
                >
                  <Icon size={17} />
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[12px] uppercase text-faint">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-11 items-center font-body text-sm text-muted transition-colors hover:text-seashell"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[12px] uppercase text-faint">
              Get involved
            </h2>
            <ul className="mt-5 space-y-3 font-body text-sm">
              <li>
                <a href={event.registrationLink} className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-seashell">
                  {event.ctaPrimary}
                </a>
              </li>
              <li>
                <a href="#sponsors" className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-seashell">
                  Become a sponsor
                </a>
              </li>
              <li>
                <span className="text-muted">
                  {event.contactEmail}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[12px] text-faint">
            © {new Date().getFullYear()} {event.name} · {event.organizer}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-faint" aria-label="Policy links pending">
            <span aria-disabled="true">Code of Conduct [LINK]</span>
            <span aria-disabled="true">Privacy [LINK]</span>
            <span aria-disabled="true">Terms [LINK]</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
