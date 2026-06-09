import Link from "next/link";
import { content, localizedPath, navigation, profile, type Locale } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-white/20 bg-white text-sm font-semibold tracking-[0.18em] text-neutral-950">
              CX
            </span>
            <span>
              <strong className="block tracking-[0.22em]">{profile.brand}</strong>
              <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{copy.common.companyStyle}</span>
            </span>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-300">{copy.meta.description}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Navigation</h2>
            <div className="grid gap-3">
              {navigation[locale].map((item) => (
                <Link key={item.key} href={localizedPath(locale, item.key)} className="text-sm text-neutral-300 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Contact</h2>
            <a className="text-sm text-neutral-300 hover:text-white" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="mt-6 text-xs text-neutral-500">© 2026 {profile.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
