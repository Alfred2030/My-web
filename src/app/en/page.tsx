import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { content, localizedPath } from "@/lib/site";

export default function EnglishHomePage() {
  const locale = "en";
  const copy = content[locale];

  return (
    <PageShell locale={locale} current="home">
      <section className="hero-photo min-h-[calc(100vh-5rem)] border-b border-neutral-900 text-white">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-end px-5 py-12 sm:px-8 lg:py-16">
          <div className="w-full">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">{copy.home.eyebrow}</p>
            <h1 className="max-w-5xl text-4xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">{copy.home.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-200">{copy.home.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={localizedPath(locale, "contact")} className="button-dark border-white bg-white text-neutral-950 hover:border-blue-900 hover:bg-blue-900 hover:text-white">{copy.home.primaryCta}</Link>
              <Link href={localizedPath(locale, "methodology")} className="button-light border-white/35 bg-transparent text-white hover:border-white hover:text-white">{copy.home.secondaryCta}</Link>
            </div>
            <div className="metric-grid mt-14 border-y border-white/20">
              {copy.home.proof.map((item) => <div key={item.label} className="border-white/20 py-6 pr-5 lg:border-r"><strong className="block text-3xl font-semibold">{item.value}</strong><span className="mt-2 block text-sm leading-6 text-neutral-300">{item.label}</span></div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section"><div className="section-inner grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><p className="eyebrow">Positioning</p><h2 className="text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">{copy.home.introTitle}</h2></div><div><p className="text-lg leading-8 text-neutral-600">{copy.home.introBody}</p><div className="mt-10 grid gap-4 sm:grid-cols-2">{copy.home.pillars.map((pillar) => <div key={pillar} className="border-l-2 border-blue-900 bg-neutral-50 px-5 py-4 text-sm font-semibold text-neutral-800">{pillar}</div>)}</div></div></div></section>
    </PageShell>
  );
}
