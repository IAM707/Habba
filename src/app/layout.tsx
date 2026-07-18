import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habba — Visual direction",
  description: "Sprint 0 visual exploration for Habba's Arabic-first restaurant decision experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
