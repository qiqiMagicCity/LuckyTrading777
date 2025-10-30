import './globals.css'

export const metadata = {
  title: 'LuckyTrading777 — Starter',
  description: 'Next.js starter for LuckyTrading777',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
