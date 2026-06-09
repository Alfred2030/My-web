import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Locale, RouteKey } from "@/lib/site";

export function PageShell({
  locale,
  current,
  children
}: {
  locale: Locale;
  current: RouteKey;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale={locale} current={current} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
