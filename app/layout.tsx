import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Lucky Trading Dashboard",
  description: "Lucky Trading777 仪表盘布局原型",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
