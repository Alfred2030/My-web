import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { content, profile, type Locale } from "@/lib/site";

export function AboutPageContent({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <PageShell locale={locale} current="about">
      <PageHero eyebrow="About" title={copy.about.title} subtitle={copy.about.subtitle} />
      <section className="section">
        <div className="section-inner grid gap-10 lg:grid-cols-3">
          {copy.about.sections.map((section) => (
            <article key={section.title} className="border-t border-neutral-950 pt-6">
              <h2 className="text-2xl font-semibold text-neutral-950">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-neutral-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="max-w-4xl text-2xl font-semibold leading-relaxed sm:text-3xl">{copy.about.statement}</p>
        </div>
      </section>
    </PageShell>
  );
}

export function ServicesPageContent({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <PageShell locale={locale} current="services">
      <PageHero eyebrow="Services" title={copy.services.title} subtitle={copy.services.subtitle} />
      <section className="section">
        <div className="section-inner grid gap-px bg-neutral-200 p-0 sm:p-0 lg:grid-cols-3">
          {copy.services.items.map((item, index) => (
            <article key={item.title} className="bg-white p-7 sm:p-9">
              <span className="text-xs font-semibold tracking-[0.18em] text-blue-900">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-6 text-2xl font-semibold text-neutral-950">{item.title}</h2>
              <p className="mt-5 text-base leading-8 text-neutral-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function MethodologyPageContent({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <PageShell locale={locale} current="methodology">
      <PageHero eyebrow="Methodology" title={copy.methodology.title} subtitle={copy.methodology.subtitle} />
      <section className="section">
        <div className="section-inner grid gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-0 border-y border-neutral-200">
            {copy.methodology.steps.map((step, index) => (
              <article key={step.title} className="grid gap-5 border-b border-neutral-200 py-8 last:border-b-0 sm:grid-cols-[5rem_1fr]">
                <span className="text-sm font-semibold tracking-[0.18em] text-blue-900">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-950">{step.title}</h2>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
          <aside className="border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="text-xl font-semibold text-neutral-950">Principles</h2>
            <div className="mt-7 grid gap-4">
              {copy.methodology.principles.map((principle) => (
                <p key={principle} className="border-l-2 border-blue-900 pl-4 text-sm font-semibold leading-6 text-neutral-700">
                  {principle}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

export function CasesPageContent({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <PageShell locale={locale} current="cases">
      <PageHero eyebrow="Cases" title={copy.cases.title} subtitle={copy.cases.subtitle} />
      <section className="section">
        <div className="section-inner grid gap-6">
          {copy.cases.items.map((item, index) => (
            <article key={item.title} className="grid gap-6 border border-neutral-200 bg-white p-7 sm:p-9 lg:grid-cols-[8rem_1fr_1fr]">
              <span className="text-xs font-semibold tracking-[0.18em] text-blue-900">CASE {String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-2xl font-semibold text-neutral-950">{item.title}</h2>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-400">Context</p>
                <p className="mt-3 text-base leading-8 text-neutral-600">{item.context}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-400">Result</p>
                <p className="mt-3 text-base leading-8 text-neutral-600">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function InsightsPageContent({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <PageShell locale={locale} current="insights">
      <PageHero eyebrow="Insights" title={copy.insights.title} subtitle={copy.insights.subtitle} />
      <section className="section">
        <div className="section-inner grid gap-0 border-y border-neutral-200">
          {copy.insights.posts.map((post) => (
            <article key={post.title} className="grid gap-5 border-b border-neutral-200 py-8 last:border-b-0 lg:grid-cols-[12rem_1fr]">
              <time className="text-sm font-semibold text-blue-900">{post.date}</time>
              <div>
                <h2 className="text-2xl font-semibold text-neutral-950">{post.title}</h2>
                <p className="mt-4 text-base leading-8 text-neutral-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function ContactPageContent({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <PageShell locale={locale} current="contact">
      <PageHero eyebrow="Contact" title={copy.contact.title} subtitle={copy.contact.subtitle} />
      <section className="section">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">{copy.contact.emailLabel}</p>
            <a className="text-2xl font-semibold text-neutral-950 hover:text-blue-900" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="mt-8 max-w-md text-base leading-8 text-neutral-600">
              {locale === "zh"
                ? "建议在邮件中简要说明企业阶段、当前核心挑战、希望沟通的议题，以及是否需要一对一陪跑或高管团队工作坊。"
                : "Please briefly describe your company stage, core challenge, topic of interest, and whether you are considering one-on-one advisory or an executive workshop."}
            </p>
          </div>
          <form className="grid gap-5 border border-neutral-200 bg-neutral-50 p-6 sm:p-8" action={`mailto:${profile.email}`} method="post" encType="text/plain">
            <h2 className="text-2xl font-semibold text-neutral-950">{copy.contact.formTitle}</h2>
            <label className="grid gap-2"><span className="text-sm font-semibold text-neutral-700">{copy.contact.fields.name}</span><input className="h-12 border border-neutral-300 bg-white px-4 text-base outline-none focus:border-blue-900" name="name" required /></label>
            <label className="grid gap-2"><span className="text-sm font-semibold text-neutral-700">{copy.contact.fields.company}</span><input className="h-12 border border-neutral-300 bg-white px-4 text-base outline-none focus:border-blue-900" name="company" /></label>
            <label className="grid gap-2"><span className="text-sm font-semibold text-neutral-700">{copy.contact.fields.email}</span><input className="h-12 border border-neutral-300 bg-white px-4 text-base outline-none focus:border-blue-900" name="email" type="email" required /></label>
            <label className="grid gap-2"><span className="text-sm font-semibold text-neutral-700">{copy.contact.fields.message}</span><textarea className="min-h-36 resize-y border border-neutral-300 bg-white px-4 py-3 text-base outline-none focus:border-blue-900" name="message" /></label>
            <button className="button-dark justify-self-start" type="submit">{copy.contact.submit}</button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
