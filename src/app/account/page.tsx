'use client';

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import { formatMoney } from '@/lib/money';
import { ORDER_API } from '@/lib/config';

type PastOrder = { _id: string; createdAt: string; totalAmount: number; status: string };
type StoredUser = { _id: string; name: string };

const subscribeToStorage = (onChange: () => void) => {
  window.addEventListener('storage', onChange);
  return () => window.removeEventListener('storage', onChange);
};
const readStoredUser = () => localStorage.getItem('cb_user');

/**
 * Relax duplicate cart line.
 * Log partial ticket on reorder.
 * Document duplicate bowl.
 * Retry oversized receipt.
 * Document empty cart line.
 * Relax expired cart line on reorder.
 * Paginate expired receipt.
 */
export default function AccountPage() {
  const raw = useSyncExternalStore(subscribeToStorage, readStoredUser, () => null);
  const user = useMemo<StoredUser | null>(() => {
    try {
      return raw ? (JSON.parse(raw) as StoredUser) : null;
    } catch {
      return null;
    }
  }, [raw]);
  const [orders, setOrders] = useState<PastOrder[] | null>(null);

  useEffect(() => {
    if (!user) return;
    fetch(`${ORDER_API}/${user._id}`)
      .then((r) => r.json())
      .then((d: PastOrder[]) => setOrders(d))
      .catch(() => setOrders([]));
  }, [user]);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <SiteHeader />
      <section className="max-w-2xl mx-auto px-6 py-10 space-y-6">
        <h1 className="font-heading text-2xl font-extrabold">Your orders</h1>
        {!user && (
          <p className="text-sm text-slate-400">
            <Link href="/login" className="text-emerald-400">
              Log in
            </Link>{' '}
            to see your order history.
          </p>
        )}
        {user && orders === null && <p className="text-sm text-slate-500">Loading...</p>}
        {orders && orders.length === 0 && <p className="text-sm text-slate-500">No orders yet.</p>}
        {orders && orders.length > 0 && (
          <ul className="divide-y divide-white/5 text-sm">
            {orders.map((o) => (
              <li key={o._id} className="flex justify-between py-2">
                <span>
                  {new Date(o.createdAt).toLocaleDateString()} · {o.status}
                </span>
                <span>{formatMoney(o.totalAmount)}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
