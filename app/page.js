export const revalidate = 0;

export default function Page() {
  return (
    <main className="wrap">
      <div className="card">
        <span className="pill">Next.js · 暗色 · 绿色</span>
        <h1>项目已连接成功 ✅</h1>
        <p>这是 Next.js 的起始页。合并到 main 后，Vercel 会自动构建与部署。</p>
        <div className="grid">
          <a className="btn" href="/api/status">API /status</a>
          <a className="btn" href="https://github.com/qiqiMagicCity/LuckyTrading777" target="_blank" rel="noreferrer noopener">GitHub 仓库</a>
        </div>
        <p className="muted">你说“下一步”，我就继续加模块或接入 Tailwind。</p>
      </div>
      <style jsx global>{`
        html,body{height:100%;margin:0}
        body{display:flex;align-items:center;justify-content:center;background:#0b0f0e;color:#e6ffe6;font-family:system-ui,Segoe UI,Helvetica,Arial,sans-serif}
        .wrap{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px}
        .card{padding:28px 32px;border-radius:16px;background:rgba(0,0,0,.35);box-shadow:0 10px 30px rgba(0,0,0,.4);max-width:720px}
        h1{font-size:28px;margin:0 0 8px;letter-spacing:.5px}
        .pill{display:inline-block;font-size:12px;padding:4px 10px;border-radius:999px;background:#103b28;color:#8dffb3;border:1px solid #1f6b45;margin-bottom:12px}
        .grid{display:grid;gap:12px;margin-top:10px;margin-bottom:10px}
        a.btn{display:inline-block;padding:10px 14px;border-radius:10px;text-decoration:none;border:1px solid #2b905f;color:#b5ffd0}
        a.btn:hover{background:rgba(23,110,70,.2)}
        .muted{opacity:.7;font-size:13px}
      `}</style>
    </main>
  )
}
