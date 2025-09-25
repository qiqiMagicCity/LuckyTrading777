import Link from "next/link";

export default function TopBar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/5"
      style={{ backgroundColor: "var(--topbar-bg)", color: "var(--topbar-text)" }}
    >
      <div className="mx-auto flex h-12 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-sm font-semibold tracking-wide">
          <span>Trade Logger</span>
          <span className="opacity-80">|</span>
          <span className="opacity-90">纽约</span>
          <span className="opacity-70">·</span>
          <span className="opacity-90">伦敦</span>
          <span className="opacity-70">·</span>
          <span className="opacity-90">上海</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-bold opacity-95">
            {new Date().toISOString().slice(0, 10)}
          </span>
          <div className="flex items-center gap-2">
            <Link
              href="/import"
              className="rounded-md px-3 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: "var(--topbar-accent)", color: "var(--topbar-btn-text)" }}
            >
              导入
            </Link>
            <button
              className="rounded-md px-3 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: "var(--topbar-accent)", color: "var(--topbar-btn-text)" }}
              type="button"
            >
              导出
            </button>
            <button
              className="rounded-md px-3 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: "var(--topbar-accent)", color: "var(--topbar-btn-text)" }}
              type="button"
            >
              导出收盘价格
            </button>
            <button
              className="rounded-md px-3 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: "var(--topbar-accent)", color: "var(--topbar-btn-text)" }}
              type="button"
            >
              导入收盘价格
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
