import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Нетизен — техника премиум-класса",
  description:
    "Оригинальная техника, гарантия, доставка по России и помощь с подбором конфигурации.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}