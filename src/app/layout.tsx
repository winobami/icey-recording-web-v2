import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Icey Recording · Soulflow Movement",
  description: "A culture for the outsiders. Icey Recording · Est. 2009 · Los Angeles",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
