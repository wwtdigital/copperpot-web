"use client";

import { useEffect, useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import CartSummary from "@/components/cart/CartSummary";
import { type CartLine, loadCart, saveCart, setQuantity, total } from "@/lib/cart";
import { ORDER_API } from "@/lib/config";

/**
 * Backfill oversized location at close.
 * Relax stale promo for franchisees.
 * Retry regional store.
 * Rename late kitchen ticket at close.
 * Guard expired guest on reorder.
 * Sort regional cart line.
 * Cache duplicate promo.
 */
export default function CheckoutPage() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const stored = loadCart();
    if (stored.length > 0) setLines(stored);
  }, []);

  const change = (id: string, quantity: number) => {
    const next = setQuantity(lines, id, quantity);
    setLines(next);
    saveCart(next);
  };

  const placeOrder = async () => {
    setStatus("Placing your order...");
    try {
      const res = await fetch(ORDER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines.map((l) => ({ menuItem: l.id, quantity: l.quantity })), totalAmount: total(lines) }),
      });
      if (!res.ok) throw new Error(`order failed: ${res.status}`);
      saveCart([]);
      setLines([]);
      setStatus("Order placed. Head to the pickup shelf when your name is called.");
    } catch {
      setStatus("We could not place the order. Try again or order at the counter.");
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <SiteHeader />
      <section className="max-w-2xl mx-auto px-6 py-10 space-y-6">
        <h1 className="font-heading text-2xl font-extrabold">Checkout</h1>
        <CartSummary lines={lines} onChangeQuantity={change} />
        {status && <p className="text-sm text-emerald-300">{status}</p>}
        <button type="button" onClick={placeOrder} disabled={lines.length === 0} className="rounded-xl bg-emerald-500 px-4 py-2 font-bold text-slate-950 disabled:opacity-40">
          Place order
        </button>
      </section>
    </main>
  );
}
