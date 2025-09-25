export type MetricKey =
  | "M1"
  | "M2"
  | "M3"
  | "M4"
  | "M5"
  | "M6"
  | "M7"
  | "M8"
  | "M9"
  | "M10"
  | "M11"
  | "M12"
  | "M13"
  | "M14"
  | "M15";

export const METRIC_KEYS: MetricKey[] = [
  "M1",
  "M2",
  "M3",
  "M4",
  "M5",
  "M6",
  "M7",
  "M8",
  "M9",
  "M10",
  "M11",
  "M12",
  "M13",
  "M14",
  "M15",
];

// 「计算单元1～计算单元15」中文命名（占位，不作展示强制）
export const METRIC_LABELS_ZH: Record<MetricKey, string> = {
  M1: "计算单元1",
  M2: "计算单元2",
  M3: "计算单元3",
  M4: "计算单元4",
  M5: "计算单元5",
  M6: "计算单元6",
  M7: "计算单元7",
  M8: "计算单元8",
  M9: "计算单元9",
  M10: "计算单元10",
  M11: "计算单元11",
  M12: "计算单元12",
  M13: "计算单元13",
  M14: "计算单元14",
  M15: "计算单元15",
};

// 可选：英文占位（便于后续多语言）
export const METRIC_LABELS_EN: Record<MetricKey, string> = {
  M1: "Unit 1",
  M2: "Unit 2",
  M3: "Unit 3",
  M4: "Unit 4",
  M5: "Unit 5",
  M6: "Unit 6",
  M7: "Unit 7",
  M8: "Unit 8",
  M9: "Unit 9",
  M10: "Unit 10",
  M11: "Unit 11",
  M12: "Unit 12",
  M13: "Unit 13",
  M14: "Unit 14",
  M15: "Unit 15",
};
