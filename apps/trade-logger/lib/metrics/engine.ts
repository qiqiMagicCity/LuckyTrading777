export type AccountMetrics = {
  positionsCount: number;
  totalCost: number;
  totalMarketValue?: number;
  totalUnrealizedPnL?: number;
  M1: number | null;
  M2: number | null;
  M3: number | null;
  M4: number | null;
  M5: number | null;
  M6: number | null;
  M7: number | null;
  M8: number | null;
  M9: number | null;
  M10: number | null;
  M11: number | null;
  M12: number | null;
  M13: number | null;
  M14: number | null;
  M15: number | null;
};

export type ComputeAccountMetricsParams = {
  positionsCount: number;
  totalCost: number;
  totalMarketValue?: number;
  totalUnrealizedPnL?: number;
};

export function computeAccountMetrics(
  params: ComputeAccountMetricsParams,
): AccountMetrics {
  const { positionsCount, totalCost, totalMarketValue, totalUnrealizedPnL } = params;

  return {
    positionsCount,
    totalCost,
    totalMarketValue,
    totalUnrealizedPnL,
    M1: null,
    M2: null,
    M3: null,
    M4: null,
    M5: null,
    M6: null,
    M7: null,
    M8: null,
    M9: null,
    M10: null,
    M11: null,
    M12: null,
    M13: null,
    M14: null,
    M15: null,
  };
}
