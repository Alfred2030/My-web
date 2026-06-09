import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryHref = "/contact",
  secondaryHref = "/methodology",
  primaryLabel = "预约一次沟通",
  secondaryLabel = "了解工作方法"
}: HeroProps) {
  return (
    <section className="hero-photo min-h-[calc(100vh-5rem)] border-b border-neutral-900 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-end px-5 py-12 sm:px-8 lg:py-16">
        <div className="w-full">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">{eyebrow}</p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-200">{subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="button-dark border-white bg-white text-neutral-950 hover:border-blue-900 hover:bg-blue-900 hover:text-white">{primaryLabel}</Link>
            <Link href={secondaryHref} className="button-light border-white/35 bg-transparent text-white hover:border-white hover:text-white">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
