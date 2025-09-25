"use client";

import { useEffect, useState } from "react";

type CityClock = { label: string; tz: string };

const cities: CityClock[] = [
  { label: "纽约", tz: "America/New_York" },
  { label: "瓦伦西亚", tz: "Europe/Madrid" },
  { label: "上海", tz: "Asia/Shanghai" },
];

function fmtTime(tz: string, date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(date);
}

function fmtDateWithWeek(date: Date, tz: string) {
  const y = new Intl.DateTimeFormat("zh-CN", { year: "numeric", timeZone: tz }).format(date);
  const m = new Intl.DateTimeFormat("zh-CN", { month: "2-digit", timeZone: tz }).format(date);
  const d = new Intl.DateTimeFormat("zh-CN", { day: "2-digit", timeZone: tz }).format(date);
  const week = new Intl.DateTimeFormat("zh-CN", { weekday: "short", timeZone: tz }).format(date);
  return `${y}/${m}/${d} ${week}`;
}

export default function TopBarClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const rightDate = fmtDateWithWeek(now, "Asia/Shanghai");

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4 text-[14px] font-semibold">
        {cities.map((city, index) => (
          <div key={city.tz} className="flex items-center gap-2">
            <span>{city.label}:</span>
            <span style={{ fontVariantNumeric: "tabular-nums" }}>{fmtTime(city.tz, now)}</span>
            {index < cities.length - 1 && <span className="mx-2">│</span>}
          </div>
        ))}
      </div>
      <div className="text-[14px] font-extrabold">{rightDate}</div>
    </div>
  );
}
