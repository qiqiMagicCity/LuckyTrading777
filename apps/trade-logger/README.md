# Trade Logger 前端

全新前端基于 Next.js 14 App Router + TypeScript + Tailwind CSS，提供暗色调空壳界面，方便在其上迭代交易日志相关功能。

## 快速开始

```bash
cd apps/trade-logger
npm install
npm run dev
```

开发服务器默认监听 [http://localhost:3000](http://localhost:3000)。页面包含以下占位路由：

- `/dashboard`：仪表盘空状态
- `/trades`：交易记录空状态
- `/import`：数据导入空状态
- `/settings`：配置中心空状态

## 路线图

- 整合真实交易数据源，完善仪表盘与图表组件。
- 构建交易明细表格、标签筛选与统计分析视图。
- 实现多渠道导入、自动对账与通知提醒等功能。
- 引入团队协作、权限管理与多终端体验。
