export default function DashboardPage() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-slate-400">交易概览的占位页，后续将展示关键指标。</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-surface/60 p-10 text-center shadow-inner shadow-black/30">
        <h2 className="text-lg font-medium text-slate-200">Dashboard — empty state</h2>
        <p className="mt-2 text-sm text-slate-400">
          暂无数据，请稍后在此构建仪表盘组件。
        </p>
      </div>
    </section>
  );
}
