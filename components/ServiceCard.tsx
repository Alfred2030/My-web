type ServiceCardProps = {
  index: number;
  title: string;
  body: string;
};

export function ServiceCard({ index, title, body }: ServiceCardProps) {
  return (
    <article className="bg-white p-7 sm:p-9">
      <span className="text-xs font-semibold tracking-[0.18em] text-blue-900">{String(index).padStart(2, "0")}</span>
      <h2 className="mt-6 text-2xl font-semibold text-neutral-950">{title}</h2>
      <p className="mt-5 text-base leading-8 text-neutral-600">{body}</p>
    </article>
  );
}
