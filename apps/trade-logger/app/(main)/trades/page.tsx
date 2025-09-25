export default function TradesPage() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Trades</h1>
        <p className="text-sm text-slate-400">交易明细的占位页，未来会展示历史交易记录。</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-surface/60 p-10 text-center shadow-inner shadow-black/30">
        <h2 className="text-lg font-medium text-slate-200">Trades — empty state</h2>
        <p className="mt-2 text-sm text-slate-400">
          尚未接入交易数据。请在此处设计表格或时间线组件。
        </p>
      </div>
    </section>
  );
}
