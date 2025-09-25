import Link from "next/link";
import TopBarClock from "./TopBarClock";

export default function TopBar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/10"
      style={{ backgroundColor: "var(--topbar-bg)", color: "var(--topbar-text)" }}
    >
      <div className="mx-auto flex h-12 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center gap-6">
          {/* 左侧：仅三地时钟 */}
          <div className="flex min-w-0 flex-1">
            <TopBarClock />
          </div>

          {/* 右侧：按钮（浅绿底 + 白字） */}
          <div className="flex items-center gap-3">
            <Link
              href="/import"
              className="rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "var(--topbar-accent)", color: "#FFFFFF" }}
            >
              导入
            </Link>
            <button
              className="rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "var(--topbar-accent)", color: "#FFFFFF" }}
              type="button"
            >
              导出
            </button>
            <button
              className="rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "var(--topbar-accent)", color: "#FFFFFF" }}
              type="button"
            >
              导出收盘价格
            </button>
            <button
              className="rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "var(--topbar-accent)", color: "#FFFFFF" }}
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
