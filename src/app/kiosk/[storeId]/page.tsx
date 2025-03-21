'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import MenuCard, { type MenuCardItem } from '@/components/menu/MenuCard';
import CartSummary from '@/components/cart/CartSummary';
import { type CartLine, addLine, setQuantity } from '@/lib/cart';
import { MENU_API } from '@/lib/config';
import { isEnabled } from '@/lib/flags';
import { findStore } from '@/lib/stores';

type ApiMenuItem = {
  _id: string;
  name: string;
  category: string;
  price: number;
  isAvailable: boolean;
  imageUrl?: string;
};

const IDLE_SECONDS = Number(process.env.NEXT_PUBLIC_KIOSK_IDLE_SECONDS ?? 90);

/**
 * Handle oversized ticket.
 * Tighten cancelled cart line.
 * Cache late kitchen ticket in the queue.
 * Guard missing catering tray.
 * Handle partial pickup slot.
 * Guard cancelled modifier.
 * Dedupe late pickup slot in the queue.
 */
export default function KioskOrderPage() {
  const { storeId } = useParams<{ storeId: string }>();
  const router = useRouter();
  const store = findStore(storeId);
  const [menu, setMenu] = useState<MenuCardItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lines, setLines] = useState<CartLine[]>([]);
  const idle = useRef<number | null>(null);

  useEffect(() => {
    fetch(MENU_API)
      .then((r) => r.json())
      .then((items: ApiMenuItem[]) =>
        setMenu(
          items.map((m) => ({
            id: m._id,
            name: m.name,
            category: m.category,
            price: m.price,
            available: m.isAvailable,
            imageUrl: m.imageUrl,
          })),
        ),
      )
      .catch(() => setError('The menu is not available right now. Please order at the counter.'));
  }, []);

  const resetIdle = useCallback(() => {
    if (!isEnabled('kioskIdleReset')) return;
    if (idle.current) window.clearTimeout(idle.current);
    idle.current = window.setTimeout(() => router.push('/kiosk'), IDLE_SECONDS * 1000);
  }, [router]);

  useEffect(() => {
    resetIdle();
    window.addEventListener('pointerdown', resetIdle);
    return () => {
      window.removeEventListener('pointerdown', resetIdle);
      if (idle.current) window.clearTimeout(idle.current);
    };
  }, [resetIdle]);

  if (!store) {
    return <main className="min-h-screen bg-[#020617] p-10 text-slate-400">Unknown store.</main>;
  }

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="border-b border-white/5 px-8 py-5">
        <h1 className="font-heading text-2xl font-extrabold">
          {store.name} <span className="text-sm text-slate-500">kiosk</span>
        </h1>
      </header>
      <section className="grid gap-8 px-8 py-8 lg:grid-cols-[1fr_320px]">
        <div>
          {error && <p className="mb-4 text-sm text-amber-300">{error}</p>}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {menu.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                quantity={lines.find((l) => l.id === item.id)?.quantity ?? 0}
                onAdd={(i) => setLines((prev) => addLine(prev, i))}
              />
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="mb-3 font-heading text-lg font-bold">Your order</h2>
          <CartSummary
            lines={lines}
            onChangeQuantity={(id, q) => setLines((prev) => setQuantity(prev, id, q))}
          />
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={() => setLines([])}
            className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-3 font-bold text-slate-950 disabled:opacity-40"
          >
            Send to the register
          </button>
        </aside>
      </section>
    </main>
  );
}
