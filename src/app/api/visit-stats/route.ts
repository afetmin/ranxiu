import { NextResponse } from "next/server";

import {
  getOpenPanelEventCount,
  type OpenPanelExportMeta,
} from "@/lib/openpanel-stats";

type ExportResponse = {
  meta?: OpenPanelExportMeta;
};

export async function GET() {
  const apiUrl = process.env.OPENPANEL_API_URL;
  const readClientId = process.env.OPENPANEL_READ_CLIENT_ID;
  const readClientSecret = process.env.OPENPANEL_READ_CLIENT_SECRET;
  const projectId = process.env.OPENPANEL_PROJECT_ID;

  if (!apiUrl || !readClientId || !readClientSecret || !projectId) {
    return NextResponse.json(
      { error: "OpenPanel visit stats are not configured" },
      { status: 503 },
    );
  }

  const headers = {
    "openpanel-client-id": readClientId,
    "openpanel-client-secret": readClientSecret,
  };

  try {
    // 获取总访问数据
    const totalParams = new URLSearchParams({
      projectId,
      event: "screen_view",
    });
    const response = await fetch(`${apiUrl}/export/events?${totalParams}`, {
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch total visit stats");
    }

    const data = (await response.json()) as ExportResponse;
    const totalUV = getOpenPanelEventCount(data.meta);

    // 获取今日访问数据
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const tomorrow = new Date(today);
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];
    const todayParams = new URLSearchParams({
      projectId,
      event: "screen_view",
      start: todayStr,
      end: tomorrowStr,
    });

    const todayResponse = await fetch(
      `${apiUrl}/export/events?${todayParams}`,
      { headers, cache: "no-store" },
    );

    if (!todayResponse.ok) {
      throw new Error("Failed to fetch today's visit stats");
    }

    const todayData = (await todayResponse.json()) as ExportResponse;
    const dailyUV = getOpenPanelEventCount(todayData.meta);

    return NextResponse.json({
      totalUV,
      dailyUV,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch visit stats" },
      { status: 502 },
    );
  }
}
