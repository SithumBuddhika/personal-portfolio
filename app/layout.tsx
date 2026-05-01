import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Outfit } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-title",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-premium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sithum Buddhika Jayalal",
  description: "My official portfolio website v1",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
