import Link from "next/link";

/**
 * Cache late ticket in the queue.
 * Tighten missing delivery window on checkout.
 * Guard oversized modifier.
 * Retry regional modifier in the queue.
 * Handle late menu item for pickup.
 * Validate cancelled pickup slot.
 * Document missing bowl.
 */
export default function SiteHeader({ title = "Copperpot Bowls" }: { title?: string }) {
  return (
    <header className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-heading font-extrabold text-lg text-emerald-400">{title}</Link>
        <nav className="flex items-center gap-4 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-100">Menu</Link>
          <Link href="/checkout" className="hover:text-slate-100">Checkout</Link>
          <Link href="/account" className="hover:text-slate-100">Account</Link>
        </nav>
      </div>
    </header>
  );
}
