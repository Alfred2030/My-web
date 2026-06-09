import Link from "next/link";
import { content, localizedPath, navigation, profile, type Locale, type RouteKey } from "@/lib/site";

type HeaderProps = {
  locale: Locale;
  current: RouteKey;
};

export function Header({ locale, current }: HeaderProps) {
  const copy = content[locale];
  const alternateLocale = locale === "zh" ? "en" : "zh";
  const alternatePath = localizedPath(alternateLocale, current);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href={localizedPath(locale, "home")} className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-neutral-950 bg-neutral-950 text-sm font-semibold tracking-[0.18em] text-white">
            CX
          </span>
          <span className="leading-tight">
            <span className="block text-[0.95rem] font-semibold tracking-[0.22em] text-neutral-950">{profile.brand}</span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-neutral-500 sm:block">CEO Advisory</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation[locale].map((item) => (
            <Link
              key={item.key}
              href={localizedPath(locale, item.key)}
              className={`text-sm font-medium transition ${
                current === item.key ? "text-blue-900" : "text-neutral-600 hover:text-neutral-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={alternatePath} className="text-sm font-medium text-neutral-500 hover:text-neutral-950">
            {copy.common.language}
          </Link>
          <Link href={localizedPath(locale, "contact")} className="button-dark">
            {copy.common.consultation}
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 border border-neutral-300">
            <span className="h-px w-5 bg-neutral-950"></span>
            <span className="h-px w-5 bg-neutral-950"></span>
            <span className="h-px w-5 bg-neutral-950"></span>
          </summary>
          <div className="absolute right-0 mt-3 w-72 border border-neutral-200 bg-white p-4 shadow-2xl shadow-neutral-950/10">
            <div className="grid gap-1">
              {navigation[locale].map((item) => (
                <Link key={item.key} href={localizedPath(locale, item.key)} className="px-3 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4">
              <Link href={alternatePath} className="text-sm font-medium text-neutral-500">
                {copy.common.language}
              </Link>
              <Link href={localizedPath(locale, "contact")} className="button-dark">
                {copy.common.consultation}
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
