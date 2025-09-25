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
  const year = new Intl.DateTimeFormat("zh-CN", { year: "numeric", timeZone: tz }).format(date);
  const month = new Intl.DateTimeFormat("zh-CN", { month: "2-digit", timeZone: tz }).format(date);
  const day = new Intl.DateTimeFormat("zh-CN", { day: "2-digit", timeZone: tz }).format(date);
  const week = new Intl.DateTimeFormat("zh-CN", { weekday: "short", timeZone: tz }).format(date);
  return `${year}年/${month}月/${day}日 ${week}`;
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
      {/* 左侧：三地时间，同一行，数字等宽 */}
      <div
        className="flex items-center gap-4 text-[15px] font-semibold"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {cities.map((city, index) => (
          <span key={city.tz} className="whitespace-nowrap">
            {city.label}: {fmtTime(city.tz, now)}
            {index < cities.length - 1 ? " │" : ""}
          </span>
        ))}
      </div>
      {/* 右侧：日期（更大更粗） */}
      <div className="ml-4 whitespace-nowrap text-[16px] font-extrabold">{rightDate}</div>
    </div>
  );
}
