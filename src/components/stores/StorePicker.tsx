'use client';

import { type Store } from '@/lib/stores';

export default function StorePicker({
  stores,
  suggested,
  onChoose,
}: {
  stores: Store[];
  suggested?: string;
  onChoose: (store: Store) => void;
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2" data-testid="store-picker">
      {stores
        .filter((s) => s.kiosk)
        .map((store) => (
          <li key={store.id}>
            <button
              type="button"
              onClick={() => onChoose(store)}
              className={`w-full rounded-2xl border px-5 py-4 text-left ${
                store.id === suggested
                  ? 'border-emerald-400 bg-emerald-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <span className="block font-heading text-lg font-bold text-slate-100">
                {store.name} <span className="text-xs text-slate-500">#{store.id}</span>
              </span>
              <span className="text-sm text-slate-400">
                {store.city}, {store.state}
              </span>
            </button>
          </li>
        ))}
    </ul>
  );
}
