export type CartLine = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
};

export const TAX_RATE = 0.0825;

export function addLine(lines: CartLine[], item: { id: string; name: string; price: number }): CartLine[] {
  const existing = lines.find((l) => l.id === item.id);
  if (existing) return lines.map((l) => (l.id === item.id ? { ...l, quantity: l.quantity + 1 } : l));
  return [...lines, { id: item.id, name: item.name, unitPrice: item.price, quantity: 1 }];
}

export function setQuantity(lines: CartLine[], id: string, quantity: number): CartLine[] {
  if (quantity <= 0) return lines.filter((l) => l.id !== id);
  return lines.map((l) => (l.id === id ? { ...l, quantity } : l));
}

export function subtotal(lines: CartLine[]): number {
  return round(lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0));
}

export function tax(lines: CartLine[], rate = TAX_RATE): number {
  return round(subtotal(lines) * rate);
}

export function total(lines: CartLine[], rate = TAX_RATE): number {
  return round(subtotal(lines) + tax(lines, rate));
}

export function itemCount(lines: CartLine[]): number {
  return lines.reduce((n, l) => n + l.quantity, 0);
}

const STORAGE_KEY = "cpb_cart";

export function loadCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? "[]") as CartLine[];
  } catch {
    return [];
  }
}

export function saveCart(lines: CartLine[]): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}
