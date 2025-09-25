export default function ImportPage() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Import</h1>
        <p className="text-sm text-slate-400">导入交易数据的占位页，预留文件上传与同步功能。</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-surface/60 p-10 text-center shadow-inner shadow-black/30">
        <h2 className="text-lg font-medium text-slate-200">Import — empty state</h2>
        <p className="mt-2 text-sm text-slate-400">
          即将支持从券商、交易所或 CSV 导入，请规划相关流程。
        </p>
      </div>
    </section>
  );
}
