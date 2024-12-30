import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";


export const metadata: Metadata = {
  title: "MythoQuantum Explorers",
  description: "MythoQuantum Explorers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
