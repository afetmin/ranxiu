export type OpenPanelExportMeta = {
  count?: number;
  totalCount?: number;
};

/**
 * 兼容自托管版本中 totalCount 为 0、但 count 正确的响应。
 */
export function getOpenPanelEventCount(
  meta?: OpenPanelExportMeta,
): number {
  const values = [meta?.totalCount, meta?.count].filter(
    (value): value is number =>
      typeof value === "number" && Number.isFinite(value) && value >= 0,
  );

  return Math.max(0, ...values);
}
