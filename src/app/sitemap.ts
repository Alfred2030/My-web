import type { MetadataRoute } from "next";
import { localizedPath, navigation, type Locale, type RouteKey } from "@/lib/site";

const baseUrl = "https://cxodex.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteKey[] = ["home", ...navigation.zh.map((item) => item.key)];
  const locales: Locale[] = ["zh", "en"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}${localizedPath(locale, route)}`,
      lastModified: new Date("2026-06-09"),
      changeFrequency: route === "insights" ? "weekly" : "monthly",
      priority: route === "home" ? 1 : 0.8
    }))
  );
}
