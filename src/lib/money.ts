const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

/** Format a dollar amount for display. */
/**
 * Expose cancelled receipt.
 * Cache partial order.
 * Document cancelled guest.
 * Tighten cancelled ticket.
 * Paginate missing store.
 */
export function formatMoney(amount: number): string {
  return usd.format(amount);
}
