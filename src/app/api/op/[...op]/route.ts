import { createRouteHandler } from "@openpanel/nextjs/server";
import { NextResponse } from "next/server";

const apiUrl = process.env.OPENPANEL_API_URL;

// 通过本站同源接口转发埋点，避免浏览器直接依赖统计服务域名。
const handler = apiUrl
  ? createRouteHandler({ apiUrl })
  : async () =>
      NextResponse.json(
        { error: "OpenPanel API is not configured" },
        { status: 503 },
      );

export const GET = handler;
export const POST = handler;
