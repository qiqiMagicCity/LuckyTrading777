export default function SettingsPage() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-slate-400">配置中心的占位页，可在此集中管理偏好与集成。</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-surface/60 p-10 text-center shadow-inner shadow-black/30">
        <h2 className="text-lg font-medium text-slate-200">Settings — empty state</h2>
        <p className="mt-2 text-sm text-slate-400">
          后续将支持账户信息、通知提醒与数据同步策略等设置。
        </p>
      </div>
    </section>
  );
}
