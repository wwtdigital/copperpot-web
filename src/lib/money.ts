const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

/** Format a dollar amount for display. */
export function formatMoney(amount: number): string {
  return usd.format(amount);
}
