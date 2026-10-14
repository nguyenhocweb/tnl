import type { Metadata } from "next";
import "./globals.css";
import "./fixes.css";

export const metadata: Metadata = {
  title: "Trung Nguyên Legend | Вьетнамский кофе",
  description: "Кофе Trung Nguyên Legend для России.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
