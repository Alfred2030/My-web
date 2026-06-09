import type { MetadataRoute } from "next";

const baseUrl = "https://cxodex.com";
const routes = ["/", "/about", "/services", "/methodology", "/cases", "/insights", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-06-09"),
    changeFrequency: route === "/insights" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
