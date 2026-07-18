import type { Metadata } from "next";
import { Alexandria, Nunito } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-english",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Habba | هبّة",
  description:
    "Sprint 0 visual exploration for Habba's Arabic-first restaurant decision experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alexandria.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
