import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });

const title = "Vineeth Mantri — Cinematic Wedding Photographer & Filmmaker in Hyderabad";
const description =
  "Vineeth Mantri is a Hyderabad-based wedding photographer and cinematographer creating timeless, cinematic stories for weddings, pre-weddings, receptions and brands.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["wedding photographer Hyderabad", "cinematic wedding film", "pre-wedding shoot", "Vineeth Mantri"],
  openGraph: { title, description, type: "website", locale: "en_IN", siteName: "Vineeth Mantri Photography" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#0b0a09" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
