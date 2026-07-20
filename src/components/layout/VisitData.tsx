'use client';

import { useEffect, useState } from 'react';
import { Eye } from '@phosphor-icons/react';

type VisitStats = {
  totalUV: string;
  dailyUV: string;
}

export default function VisitData() {
  const isConfigured = Boolean(process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID);
  const [stats, setStats] = useState<VisitStats>({
    totalUV: '-',
    dailyUV: '-',
  });

  useEffect(() => {
    if (!isConfigured) return;

    const fetchVisitStats = async () => {
      try {
        const response = await fetch('/api/visit-stats');
        const data = await response.json();
        // console.log('data: ', data)
        setStats(data);
      } catch (error) {
        console.error('Error fetching visit stats:', error);
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
