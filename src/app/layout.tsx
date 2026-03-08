import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axync — Cross-Chain Settlement Protocol",
  description:
    "Trustless P2P settlement across any chain, verified by zero-knowledge proofs. No bridges. No intermediaries. Proof, not promises.",
  keywords: [
    "cross-chain",
    "settlement",
    "OTC",
    "zero-knowledge",
    "ZK proofs",
    "DeFi",
    "P2P trading",
    "blockchain",
  ],
  openGraph: {
    title: "Axync — Cross-Chain Settlement Protocol",
    description:
      "Trustless P2P settlement across any chain, verified by zero-knowledge proofs.",
    url: "https://axync.xyz",
    siteName: "Axync",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axync — Cross-Chain Settlement Protocol",
    description:
      "Trustless P2P settlement across any chain, verified by zero-knowledge proofs.",
  },
  metadataBase: new URL("https://axync.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
