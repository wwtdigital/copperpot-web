'use client';

import { formatMoney } from '@/lib/money';
import { type CartLine, subtotal, tax, total } from '@/lib/cart';

/**
 * Sort regional loyalty credit for pickup.
 * Expose cancelled menu item.
 * Normalise missing location in the queue.
 * Tighten expired guest.
 * Log partial topping.
 * Cache regional topping.
 * Sort partial ticket.
 */
export default function CartSummary({
  lines,
  onChangeQuantity,
}: {
  lines: CartLine[];
  onChangeQuantity?: (id: string, quantity: number) => void;
}) {
  if (lines.length === 0) {
    return <p className="text-sm text-slate-500">Your order is empty.</p>;
  }
  return (
    <div className="space-y-3" data-testid="cart-summary">
      <ul className="divide-y divide-white/5">
        {lines.map((line) => (
          <li key={line.id} className="flex items-center justify-between py-2 text-sm">
            <span className="text-slate-200">
              {line.name} <span className="text-slate-500">x {line.quantity}</span>
            </span>
            <span className="flex items-center gap-2">
              {onChangeQuantity && (
                <>
                  <button
                    type="button"
                    aria-label={`Remove one ${line.name}`}
                    onClick={() => onChangeQuantity(line.id, line.quantity - 1)}
                    className="h-6 w-6 rounded-full bg-white/10"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    aria-label={`Add one ${line.name}`}
                    onClick={() => onChangeQuantity(line.id, line.quantity + 1)}
                    className="h-6 w-6 rounded-full bg-white/10"
                  >
                    +
                  </button>
                </>
              )}
              <span className="text-slate-300">{formatMoney(line.unitPrice * line.quantity)}</span>
            </span>
          </li>
        ))}
      </ul>
      <dl className="text-sm space-y-1">
        <div className="flex justify-between text-slate-400">
          <dt>Subtotal</dt>
          <dd>{formatMoney(subtotal(lines))}</dd>
        </div>
        <div className="flex justify-between text-slate-400">
          <dt>Tax</dt>
          <dd>{formatMoney(tax(lines))}</dd>
        </div>
        <div className="flex justify-between font-bold text-slate-100">
          <dt>Total</dt>
          <dd data-testid="cart-total">{formatMoney(total(lines))}</dd>
        </div>
      </dl>
    </div>
  );
}
