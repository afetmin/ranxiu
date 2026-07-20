import assert from "node:assert/strict";
import test from "node:test";

import { getOpenPanelEventCount } from "./openpanel-stats.ts";

test("优先保留正常返回的总事件数", () => {
  assert.equal(getOpenPanelEventCount({ count: 2, totalCount: 12 }), 12);
});

test("兼容自托管版本错误返回 totalCount 为零", () => {
  assert.equal(getOpenPanelEventCount({ count: 2, totalCount: 0 }), 2);
});

test("无有效计数时返回零", () => {
  assert.equal(getOpenPanelEventCount(), 0);
  assert.equal(getOpenPanelEventCount({ count: -1, totalCount: NaN }), 0);
});
