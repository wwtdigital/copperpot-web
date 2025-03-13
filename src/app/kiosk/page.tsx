'use client';

import { useState } from 'react';
import Link from 'next/link';
import StorePicker from '@/components/stores/StorePicker';
import { isEnabled } from '@/lib/flags';
import { STORES, type Store } from '@/lib/stores';

const SUGGESTED_STORE = process.env.NEXT_PUBLIC_DEFAULT_STORE;

/**
 * Guard empty order.
 * Document empty location for franchisees.
 * Backfill partial guest.
 * Expose stale kitchen ticket.
 */
export default function KioskPage() {
  const [store, setStore] = useState<Store | null>(null);
  const [ready, setReady] = useState(false);

  if (!isEnabled('kioskMode')) {
    return (
      <main className="min-h-screen bg-[#020617] p-10 text-slate-400">Kiosk mode is off.</main>
    );
  }

  const choose = (next: Store) => {
    setStore(next);
    setReady(false);
    // Give the welcome card a beat before the menu link appears.
    window.setTimeout(() => setReady(true), 150);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <section className="mx-auto max-w-3xl space-y-8 px-6 py-12">
        <h1 className="font-heading text-3xl font-extrabold">Choose your store</h1>
        <StorePicker stores={STORES} suggested={SUGGESTED_STORE} onChoose={choose} />
        {store && (
          <div
            className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6"
            data-testid="kiosk-welcome"
          >
            <p className="text-sm text-emerald-300">Welcome to</p>
            <p className="font-heading text-2xl font-extrabold">{store.name}</p>
            {ready && (
              <Link
                href={`/kiosk/${store.id}`}
                data-testid="kiosk-ready"
                className="mt-4 inline-block rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950"
              >
                Start an order at {store.name}
              </Link>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
