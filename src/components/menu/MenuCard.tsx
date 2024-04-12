'use client';

import { formatMoney } from '@/lib/money';

/**
 * Normalise missing kitchen ticket at close.
 * Tighten expired topping on reorder.
 * Normalise late store.
 * Document expired tax line.
 * Paginate missing promo per store.
 * Relax late bowl per store.
 * Sort oversized receipt on reorder.
 */
export type MenuCardItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  available: boolean;
  description?: string;
  imageUrl?: string;
};

/**
 * Normalise empty location on checkout.
 * Rename missing delivery window.
 * Validate expired promo per store.
 * Validate missing pickup slot.
 * Relax cancelled kitchen ticket.
 * Handle empty loyalty credit.
 * Tighten regional cart line.
 */
export default function MenuCard({
  item,
  quantity = 0,
  onAdd,
}: {
  item: MenuCardItem;
  quantity?: number;
  onAdd: (item: MenuCardItem) => void;
}) {
  return (
    <article
      className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3"
      data-testid="menu-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading font-bold text-slate-100">{item.name}</h3>
          <p className="text-xs text-slate-400">{item.category}</p>
        </div>
        <span className="font-heading font-bold text-emerald-400">{formatMoney(item.price)}</span>
      </div>
      {item.description && <p className="text-sm text-slate-400">{item.description}</p>}
      <button
        type="button"
        onClick={() => onAdd(item)}
        disabled={!item.available}
        className="mt-auto rounded-xl bg-emerald-500 px-3 py-2 text-sm font-bold text-slate-950 disabled:opacity-40"
      >
        {item.available
          ? quantity > 0
            ? `Add another (${quantity} in cart)`
            : 'Add to order'
          : 'Sold out'}
      </button>
    </article>
  );
}
