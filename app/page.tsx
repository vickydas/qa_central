const navLinks = [
  { label: 'About', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

const frameworkSteps = [
  'Identify high-revenue flows',
  'Map failure points',
  'Prioritize impact over coverage',
  'Design lightweight release gates',
  'Improve process, not just testing'
];

const services = [
  {
    name: 'Risk Audit Sprint',
    points: ['5-day deep dive', 'Risk matrix', 'Priority scoring', 'Action roadmap'],
    cta: 'Schedule Audit'
  },
  {
    name: 'Launch Readiness Audit',
    points: [
      'Critical flow validation',
      'Regression sweep',
      'Load testing',
      'Payment & auth validation'
    ],
    cta: 'Prepare for Launch'
  },
  {
    name: 'Fractional QA Partner',
    points: [
      'Ongoing risk ownership',
      'Release gatekeeper',
      'QA strategy',
      'Process improvement'
    ],
    cta: 'Become My QA Partner'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">QA Central</p>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="primary-btn text-xs md:text-sm">
            Book a 30-min Risk Call
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 md:gap-12 md:px-8 md:py-14">
        <section className="section-shell bg-hero-grid bg-[size:24px_24px]">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium text-slate-600">Fractional QA & Product Risk Partner for Early-Stage SaaS</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Ship Fast. Break Less.</h1>
            <p className="text-lg text-slate-600 md:text-xl">
              Fractional QA & Product Risk Management for Early-Stage SaaS Teams.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a href="#contact" className="primary-btn">
                Book a 30-min Risk Call
              </a>
              <a href="#contact" className="secondary-btn">
                Get the Free Startup Risk Checklist
              </a>
            </div>
          </div>
        </section>

        <section id="problem" className="section-shell space-y-5">
          <h2 className="section-title">Most Startups Don&apos;t Fail Because of Competition.</h2>
          <ul className="grid gap-3 text-slate-700">
            <li>• Production bugs kill trust.</li>
            <li>• Payment failures kill revenue.</li>
            <li>• Performance issues kill retention.</li>
            <li>• Releases turn into firefighting.</li>
          </ul>
          <p className="font-medium text-slate-800">
            Quality isn&apos;t about perfection. It&apos;s about preventing the failures that matter.
          </p>
          <a href="#contact" className="primary-btn">
            Book a 30-min Risk Call
          </a>
        </section>

        <section className="section-shell space-y-6">
          <h2 className="section-title">I Don&apos;t Test Features. I Map Risk.</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {frameworkSteps.map((step, index) => (
              <article key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Step {index + 1}</p>
                <p className="mt-3 text-sm font-medium text-slate-800">{step}</p>
              </article>
            ))}
          </div>
          <a href="#contact" className="secondary-btn">
            Get the Free Startup Risk Checklist
          </a>
        </section>

        <section className="section-shell space-y-6" id="services">
          <h2 className="section-title">Services Built for High-Pressure Release Cycles</h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <a href="#contact" className="primary-btn mt-6 w-full">
                  {service.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell space-y-4">
          <h2 className="section-title">Who This Is For</h2>
          <p className="text-slate-700">
            For SaaS founders and small teams (2–15 people) shipping fast without a dedicated QA lead.
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>• Moving fast but things break</li>
            <li>• No structured QA process</li>
            <li>• Preparing for launch or scale</li>
            <li>• Want release confidence</li>
          </ul>
          <a href="#contact" className="primary-btn">
            Request Risk Call
          </a>
        </section>

        <section className="section-shell space-y-4">
          <h2 className="section-title">Founder Feedback</h2>
          <blockquote className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
            “Our releases stopped feeling like roulette. We gained clarity on what could fail and exactly what to
            lock down before shipping.”
            <footer className="mt-4 text-sm font-medium text-slate-900">— Alex Chen, Founder, NimbusHQ</footer>
          </blockquote>
          <a href="#contact" className="secondary-btn">
            Get the Free Startup Risk Checklist
          </a>
        </section>

        <section className="section-shell space-y-5 text-center md:text-left">
          <h2 className="section-title">Don&apos;t Let Avoidable Bugs Kill Your Growth.</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="primary-btn">
              Book a 30-min Risk Call
            </a>
            <a href="#contact" className="secondary-btn">
              Download the Risk Checklist
            </a>
          </div>
        </section>

        <section id="contact" className="section-shell space-y-6">
          <h2 className="section-title">Request Your Risk Call</h2>
          <p className="text-slate-700">Tell me where risk is showing up. I&apos;ll help you prioritize what protects revenue.</p>
          <form className="grid gap-4 md:grid-cols-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
              <input id="name" name="name" required className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" type="text" />
            </label>
            <label htmlFor="company" className="text-sm font-medium text-slate-700">
              Company
              <input id="company" name="company" className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" type="text" />
            </label>
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
              <input id="email" name="email" required className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" type="email" />
            </label>
            <label htmlFor="teamSize" className="text-sm font-medium text-slate-700">
              Current team size
              <input id="teamSize" name="teamSize" className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" type="text" />
            </label>
            <label htmlFor="risk" className="text-sm font-medium text-slate-700 md:col-span-2">
              Biggest product risk
              <textarea id="risk" name="risk" required className="mt-1 min-h-28 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500" />
            </label>
            <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row">
              <button type="submit" className="primary-btn">
                Request Risk Call
              </button>
              <a href="#contact" className="secondary-btn">
                Download the Risk Checklist
              </a>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} QA Central</p>
          <div className="flex flex-wrap gap-4">
            <a href="#problem" className="hover:text-slate-900">
              About
            </a>
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
            <a href="#" className="hover:text-slate-900">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
