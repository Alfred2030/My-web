export function PageHero({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="max-w-5xl text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">{subtitle}</p>
      </div>
    </section>
  );
}
