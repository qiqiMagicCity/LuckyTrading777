"use client";

import React, { useEffect, useMemo, useState } from "react";

type Zone = {
  name: string;
  timeZone: string;
};

function ClockRow() {
  const zones: Zone[] = useMemo(
    () => [
      { name: "纽约", timeZone: "America/New_York" },
      { name: "加州", timeZone: "America/Los_Angeles" },
      { name: "上海", timeZone: "Asia/Shanghai" },
    ],
    []
  );
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const timeFormatter = useMemo(
    () =>
      Object.fromEntries(
        zones.map((zone) => [
          zone.timeZone,
          new Intl.DateTimeFormat("zh-CN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: zone.timeZone,
          }),
        ])
      ),
    [zones]
  ) as Record<string, Intl.DateTimeFormat>;

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Shanghai",
      }),
    []
  );

  const weekdayFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("zh-CN", {
        weekday: "short",
        timeZone: "Asia/Shanghai",
      }),
    []
  );

  const dateText = `${dateFormatter.format(now)} ${weekdayFormatter
    .format(now)
    .replace("星期", "周")}`;

  return (
    <div className="header">
      <div className="clocks">
        {zones.map((zone) => (
          <span key={zone.timeZone}>
            {zone.name}: {timeFormatter[zone.timeZone].format(now)}
          </span>
        ))}
      </div>
      <div className="date">{dateText}</div>
    </div>
  );
}

type Tone = "up" | "down" | "";

function KPI({ title, value, tone }: { title: string; value: string; tone?: Tone }) {
  return (
    <div className="panel">
      <div className="kpiTitle">{title}</div>
      <div className={`kpiValue ${tone === "up" ? "up" : tone === "down" ? "down" : ""}`}>
        {value}
      </div>
    </div>
  );
}

function StatsGrid() {
  const items: { title: string; value: string; tone?: Tone }[] = [
    { title: "持仓成本", value: "$438,156.90" },
    { title: "持仓市值", value: "$461,767.50" },
    { title: "持仓浮盈", value: "$23,610.60", tone: "up" },
    { title: "今天持仓盈亏", value: "$0.00" },
    { title: "今日总盈亏变化", value: "$23,610.60", tone: "up" },
    { title: "今日交易盈亏", value: "交割: $0.00 / FIFO: $0.00" },
    { title: "今日交易次数", value: "B/S 0/0  P/O 0/0 [0]" },
    { title: "累计交易次数", value: "B/S 0/0  P/O 0/0 [0]" },
    { title: "所有历史平仓盈利", value: "$0.00" },
    { title: "胜率", value: "W/0 L/0 0.00%" },
    { title: "WTD", value: "$23,610.60", tone: "up" },
    { title: "MTD", value: "$23,610.60", tone: "up" },
    { title: "YTD", value: "$23,610.60", tone: "up" },
    { title: "最大回撤", value: "-5.3%", tone: "down" },
    { title: "仓位使用率", value: "64.2%" },
    { title: "现金余额", value: "$158,202.18" },
  ];
  return (
    <div className="grid stats">
      {items.map((item) => (
        <KPI key={item.title} title={item.title} value={item.value} tone={item.tone} />
      ))}
    </div>
  );
}

type TabKey = "当前持仓" | "交易分析";

function Tabs({ active, onChange }: { active: TabKey; onChange: (tab: TabKey) => void }) {
  return (
    <div className="tabs">
      {(["当前持仓", "交易分析"] as TabKey[]).map((tab) => (
        <div
          key={tab}
          className={`tab ${active === tab ? "active" : ""}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

type PositionRow = {
  code: string;
  cn: string;
  price: number;
  qty: number;
  avg: number;
  last: number;
  pnl: number;
  rate: number;
  win: number;
  times: number;
};

function PositionsTable({ rows }: { rows: PositionRow[] }) {
  return (
    <div className="panel" style={{ marginTop: 12 }}>
      <div className="tableWrap" style={{ marginTop: 4 }}>
        <table>
          <thead>
            <tr>
              <th>LOGO</th>
              <th>代码</th>
              <th>中文</th>
              <th>实时报价</th>
              <th>持仓</th>
              <th>均价</th>
              <th>现价</th>
              <th>持仓浮盈</th>
              <th>收益比例</th>
              <th>胜率</th>
              <th>历史交易次数</th>
              <th>详情</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.code}>
                <td>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {row.code.slice(0, 2)}
                  </div>
                </td>
                <td>{row.code}</td>
                <td style={{ textAlign: "left" }}>{row.cn}</td>
                <td>{row.price.toFixed(2)}</td>
                <td>{row.qty.toLocaleString()}</td>
                <td>{row.avg.toFixed(2)}</td>
                <td>{row.last.toFixed(2)}</td>
                <td className={row.pnl >= 0 ? "up" : "down"}>
                  {row.pnl >= 0 ? `+${row.pnl.toFixed(2)}` : row.pnl.toFixed(2)}
                </td>
                <td className={row.rate >= 0 ? "up" : "down"}>
                  {row.rate >= 0
                    ? `+${row.rate.toFixed(2)}%`
                    : `${row.rate.toFixed(2)}%`}
                </td>
                <td className={row.win >= 0 ? "up" : "down"}>
                  {row.win >= 0 ? `+${row.win.toFixed(2)}` : row.win.toFixed(2)}
                </td>
                <td>{row.times}</td>
                <td>
                  <a href="#">详情</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AnalysisPlaceholder() {
  return (
    <div className="panel" style={{ marginTop: 12, minHeight: 200 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>交易分析</div>
      <p style={{ color: "var(--muted)", margin: 0 }}>
        即将上线：盈亏拆解、策略胜率、持仓周期等图表分析。
      </p>
    </div>
  );
}

type Trade = {
  date: string;
  time: string;
  week: string;
  code: string;
  cn: string;
  side: "BUY" | "SELL";
  price: number;
  qty: number;
  amount: number;
};

function TradesTable({ rows }: { rows: Trade[] }) {
  return (
    <div className="panel" style={{ marginTop: 12 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontWeight: 700 }}>交易记录</div>
        <a href="#" style={{ color: "var(--muted)" }}>
          查看全部
        </a>
      </div>
      <div className="tableWrap" style={{ marginTop: 8 }}>
        <table>
          <thead>
            <tr>
              <th>时间</th>
              <th>星期</th>
              <th>代码</th>
              <th>中文</th>
              <th>方向</th>
              <th>单价</th>
              <th>数量</th>
              <th>订单金额</th>
              <th>详情</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.code}-${index}`}>
                <td style={{ textAlign: "left" }}>
                  {row.date} {row.time}
                </td>
                <td>{row.week}</td>
                <td>{row.code}</td>
                <td style={{ textAlign: "left" }}>{row.cn}</td>
                <td className={row.side === "BUY" ? "up" : "down"}>{row.side}</td>
                <td>{row.price.toFixed(2)}</td>
                <td>{row.qty}</td>
                <td>
                  {row.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td>
                  <a href="#">详情</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ChipRow({
  chips,
  active,
  onSelect,
}: {
  chips: string[];
  active: string;
  onSelect: (chip: string) => void;
}) {
  return (
    <div className="panel" style={{ marginTop: 12 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>个股情况</div>
      <div className="badgeRow">
        {chips.map((chip) => (
          <div
            key={chip}
            className={`badge ${active === chip ? "active" : ""}`}
            onClick={() => onSelect(chip)}
          >
            {chip}
          </div>
        ))}
      </div>
    </div>
  );
}

const POSITION_ROWS: PositionRow[] = [
  {
    code: "TSDD",
    cn: "所罗门实验科技",
    price: 10.22,
    qty: 10000,
    avg: 11.04,
    last: 11.04,
    pnl: -3200,
    rate: -7.43,
    win: -3200,
    times: 12,
  },
  {
    code: "BA",
    cn: "波音",
    price: 215.1,
    qty: 350,
    avg: 216.27,
    last: 216.27,
    pnl: -409.5,
    rate: -0.54,
    win: -409.5,
    times: 8,
  },
  {
    code: "GOOGL",
    cn: "谷歌A",
    price: 247.14,
    qty: 400,
    avg: 170.73,
    last: 170.73,
    pnl: 30564,
    rate: 44.75,
    win: 30564,
    times: 18,
  },
  {
    code: "AMD",
    cn: "超威半导体",
    price: 160.88,
    qty: 400,
    avg: 151.72,
    last: 151.72,
    pnl: 3480.8,
    rate: 6.04,
    win: 3480.8,
    times: 5,
  },
  {
    code: "PYPL",
    cn: "贝宝",
    price: 68.54,
    qty: 5500,
    avg: 68.54,
    last: 68.54,
    pnl: 0,
    rate: 0,
    win: 0,
    times: 21,
  },
  {
    code: "UAL",
    cn: "联合航空",
    price: 101.39,
    qty: 300,
    avg: 101.03,
    last: 103.7,
    pnl: -693,
    rate: -2.37,
    win: -693,
    times: 9,
  },
  {
    code: "DIS",
    cn: "迪士尼",
    price: 113.43,
    qty: 250,
    avg: 116.83,
    last: 116.83,
    pnl: -850,
    rate: -2.91,
    win: -850,
    times: 14,
  },
  {
    code: "NVDL",
    cn: "所罗门类多空热试",
    price: 84.41,
    qty: 340,
    avg: 84.12,
    last: 84.12,
    pnl: 95.7,
    rate: 0.34,
    win: 95.7,
    times: 3,
  },
];

const TRADE_ROWS: Trade[] = [
  {
    date: "2025-05-23",
    time: "05:22:24",
    week: "Fri",
    code: "NVDL",
    cn: "所罗门类多空热试",
    side: "BUY",
    price: 84.12,
    qty: 330,
    amount: 27759.6,
  },
  {
    date: "2025-05-23",
    time: "05:21:59",
    week: "Fri",
    code: "DIS",
    cn: "迪士尼",
    side: "BUY",
    price: 116.83,
    qty: 250,
    amount: 29207.5,
  },
  {
    date: "2025-05-23",
    time: "05:21:20",
    week: "Fri",
    code: "UAL",
    cn: "联合航空",
    side: "BUY",
    price: 103.7,
    qty: 300,
    amount: 31110,
  },
  {
    date: "2025-05-23",
    time: "05:21:20",
    week: "Fri",
    code: "PYPL",
    cn: "贝宝",
    side: "BUY",
    price: 68.54,
    qty: 5555,
    amount: 38039.7,
  },
  {
    date: "2025-05-20",
    time: "21:10:20",
    week: "Tue",
    code: "AMD",
    cn: "超威半导体",
    side: "SELL",
    price: 152.5,
    qty: 200,
    amount: 30500,
  },
  {
    date: "2025-05-18",
    time: "19:04:12",
    week: "Sun",
    code: "BA",
    cn: "波音",
    side: "SELL",
    price: 218.4,
    qty: 150,
    amount: 32760,
  },
  {
    date: "2025-05-18",
    time: "18:32:02",
    week: "Sun",
    code: "GOOGL",
    cn: "谷歌A",
    side: "SELL",
    price: 244.5,
    qty: 180,
    amount: 44010,
  },
  {
    date: "2025-05-16",
    time: "15:18:44",
    week: "Fri",
    code: "TSDD",
    cn: "所罗门实验科技",
    side: "SELL",
    price: 11.04,
    qty: 2600,
    amount: 28704,
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>("当前持仓");
  const [activeChip, setActiveChip] = useState<string>(POSITION_ROWS[0]?.code ?? "");

  return (
    <div className="container">
      <ClockRow />
      <StatsGrid />
      <Tabs active={activeTab} onChange={setActiveTab} />
      {activeTab === "当前持仓" ? (
        <PositionsTable rows={POSITION_ROWS} />
      ) : (
        <AnalysisPlaceholder />
      )}
      <ChipRow chips={POSITION_ROWS.map((row) => row.code)} active={activeChip} onSelect={setActiveChip} />
      <TradesTable rows={TRADE_ROWS} />
      <div className="fab" onClick={() => alert(`为 ${activeChip || "新"} 标的添加交易（占位）`)}>
        +
      </div>
    </div>
  );
}
