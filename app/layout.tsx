import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-title",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sithum Buddhika Jayalal",
  description: "My official portfolio website v1",
  icons: {
    icon: "/about.jpg",
    apple: "/about.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
