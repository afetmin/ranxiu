'use client';

import { useEffect, useState } from 'react';
import { Eye } from '@phosphor-icons/react';

type VisitStats = {
  totalUV: string;
  dailyUV: string;
}

export default function VisitData() {
  const isConfigured =
    process.env.NEXT_PUBLIC_OPENPANEL_VISIT_STATS_ENABLED === 'true';
  const [stats, setStats] = useState<VisitStats>({
    totalUV: '-',
    dailyUV: '-',
  });

  useEffect(() => {
    if (!isConfigured) return;

    const fetchVisitStats = async () => {
      try {
        const response = await fetch('/api/visit-stats');
        if (!response.ok) return;

        const data = await response.json();
        setStats(data);
      } catch {
        // 网络暂时不可用时保留当前展示值，等待下次刷新。
      }
    };

    fetchVisitStats();
    const interval = setInterval(fetchVisitStats, 300000);
    return () => clearInterval(interval);
  }, [isConfigured]);

  if (!isConfigured) return null;

  return (
    <div className="flex flex-row items-center justify-center gap-2 text-sm text-gray-500 mt-2">
      <Eye size={16} weight="duotone" />
      Total Visits: {stats.totalUV} / Today Visits: {stats.dailyUV}
    </div>
  );
}
