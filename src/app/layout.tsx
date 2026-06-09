import type { Metadata } from "next";
import { Noto_Sans_SC, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { content, profile } from "@/lib/site";

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cxodex.com"),
  title: {
    default: content.zh.meta.title,
    template: `%s | ${profile.brand}`
  },
  description: content.zh.meta.description,
  openGraph: {
    title: content.zh.meta.title,
    description: content.zh.meta.description,
    url: "https://cxodex.com",
    siteName: profile.brand,
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={`${notoSans.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
