import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axync | Institutional Cross-Chain P2P Protocol",
  description: "The zero-trust P2P marketplace for instant token swaps across any chain. No bridges, no wrapping, high finality. Axync decouples assets from native chains for seamless liquidity.",
  keywords: ["Web3", "Cross-Chain", "P2P Marketplace", "DeFi", "DeFi Protocol", "Atomic Swaps", "Zero-Trust", "Blockchain Infrastructure"],
  authors: [{ name: "Axync Protocol Team" }],
  openGraph: {
    title: "Axync | Institutional Cross-Chain P2P Protocol",
    description: "Instant cross-chain liquidity without bridges. Trade any token on any chain securely.",
    url: "https://axync.xyz",
    siteName: "Axync Protocol",
    images: [
      {
        url: "/og-image.png", // Recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "Axync Protocol - Unified Liquidity Layer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axync | Institutional Cross-Chain P2P Protocol",
    description: "The next evolution of cross-chain liquidity. Trade tokens across any chain with zero trust.",
    creator: "@axync_xyz",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
