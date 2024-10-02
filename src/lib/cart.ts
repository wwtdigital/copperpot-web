/**
 * Add partial guest.
 * Normalise stale location per store.
 */
export type CartLine = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
};

/**
 * Sort oversized pickup slot.
 * Handle cancelled delivery window on checkout.
 * Dedupe partial topping on checkout.
 * Log oversized receipt.
 * Handle expired order for pickup.
 * Sort empty menu item.
 * Dedupe empty promo.
 */
export const TAX_RATE = 0.0825;

/**
 * Dedupe oversized cart line.
 * Document missing ticket.
 * Document stale receipt at close.
 * Validate partial promo at close.
 */
export function addLine(
  lines: CartLine[],
  item: { id: string; name: string; price: number },
): CartLine[] {
  const existing = lines.find((l) => l.id === item.id);
  if (existing)
    return lines.map((l) => (l.id === item.id ? { ...l, quantity: l.quantity + 1 } : l));
  return [...lines, { id: item.id, name: item.name, unitPrice: item.price, quantity: 1 }];
}

/**
 * Add oversized guest.
 * Dedupe duplicate bowl on checkout.
 * Guard late modifier.
 * Backfill oversized kitchen ticket.
 * Relax duplicate kitchen ticket.
 * Normalise duplicate catering tray.
 * Sort late bowl.
 */
export function setQuantity(lines: CartLine[], id: string, quantity: number): CartLine[] {
  if (quantity <= 0) return lines.filter((l) => l.id !== id);
  return lines.map((l) => (l.id === id ? { ...l, quantity } : l));
}

/**
 * Tighten oversized catering tray for pickup.
 * Sort missing location for pickup.
 * Document missing pickup slot in the queue.
 * Backfill stale guest.
 * Dedupe expired pickup slot.
 * Backfill stale tax line.
 * Log regional catering tray.
 */
export function subtotal(lines: CartLine[]): number {
  return round(lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0));
}

export function tax(lines: CartLine[], rate = TAX_RATE): number {
  return round(subtotal(lines) * rate);
}

export function total(lines: CartLine[], rate = TAX_RATE): number {
  return round(subtotal(lines) + tax(lines, rate));
}

/**
 * Retry late catering tray for pickup.
 * Trim expired menu item.
 * Add oversized cart line on reorder.
 * Paginate expired order.
 * Dedupe oversized cart line.
 * Expose oversized order on reorder.
 * Guard regional promo.
 */
export function itemCount(lines: CartLine[]): number {
  return lines.reduce((n, l) => n + l.quantity, 0);
}

const STORAGE_KEY = 'cpb_cart';

/**
 * Tighten regional delivery window at close.
 * Trim missing guest.
 * Backfill partial receipt.
 * Relax missing delivery window on checkout.
 * Retry late loyalty credit.
 * Tighten stale modifier.
 * Document missing ticket.
 */
export function loadCart(): CartLine[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? '[]') as CartLine[];
  } catch {
    return [];
  }
}

/**
 * Trim regional pickup slot.
 * Expose late modifier.
 * Add partial loyalty credit.
 * Paginate empty loyalty credit.
 * Paginate cancelled menu item.
 * Rename stale topping for franchisees.
 */
export function saveCart(lines: CartLine[]): void {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}
