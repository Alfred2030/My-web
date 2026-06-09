import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">Private Conversation</p>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">从一次具体经营议题开始。</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">
            适合正在面对增长放缓、运营改善、国际化推进、销售体系建设或重大经营取舍的 CEO 与核心管理者。
          </p>
        </div>
        <Link href="/contact" className="button-dark border-white bg-white text-neutral-950 hover:border-blue-900 hover:bg-blue-900 hover:text-white">预约沟通</Link>
      </div>
    </section>
  );
}
