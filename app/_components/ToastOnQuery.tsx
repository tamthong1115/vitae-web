// app/components/ToastOnQuery.tsx
'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { toast } from 'sonner';

type Map = Record<
  string,
  {
    type?: 'success' | 'error' | 'warning' | 'info';
    title: string;
    description?: string;
  }
>;

export function ToastOnQuery({ param, map }: { param: string; map: Map }) {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const fired = useRef(false); // prevent Strict Mode double-fire

  useEffect(() => {
    if (fired.current) return;
    const val = sp.get(param);
    if (!val) return;

    const cfg = map[val];
    if (!cfg) return;

    fired.current = true;

    const fn =
      cfg.type === 'success'
        ? toast.success
        : cfg.type === 'error'
          ? toast.error
          : cfg.type === 'warning'
            ? toast.warning
            : toast; // info

    fn(
      cfg.title,
      cfg.description ? { description: cfg.description } : undefined
    );

    // remove the query so refresh/back doesn’t re-trigger
    const params = new URLSearchParams(sp);
    params.delete(param);
    router.replace(`${pathname}${params.toString() ? `?${params}` : ''}`);
  }, [sp, param, map, pathname, router]);

  return null;
}
