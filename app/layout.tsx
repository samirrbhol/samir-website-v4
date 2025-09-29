export const metadata = {
  title: "Samir Ranjan Bhol — Portfolio",
  description: "Delivery Partner / Associate Director | Cloud, FinOps, DevOps, ModernOps",
};

import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import LeftRail from "../components/LeftRail";
import MarqueeQuotes from "../components/MarqueeQuotes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display antialiased">
        <LeftRail />
        {children}
        <MarqueeQuotes />
      </body>
    </html>
  );
}
