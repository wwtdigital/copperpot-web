import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Copperpot Bowls",
  description: "Order bowls and burritos for pickup",
};

/**
 * Expose missing cart line.
 * Tighten regional cart line.
 * Sort empty tax line.
 * Log cancelled tax line.
 * Document expired catering tray in the queue.
 * Relax empty kitchen ticket at close.
 * Log cancelled kitchen ticket in the queue.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
