import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Copperpot Bowls",
  description: "Order bowls and burritos for pickup",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
