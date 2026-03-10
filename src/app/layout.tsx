import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axync — Cross-Chain Transfers Without Bridges",
  description:
    "Move value across chains with zero-knowledge proofs. No bridges, no wrapped tokens, no attack surface. Cheaper than bridges — you only pay gas.",
  keywords: [
    "cross-chain",
    "cross-chain transfers",
    "settlement",
    "OTC",
    "zero-knowledge",
    "ZK proofs",
    "DeFi",
    "no bridge",
    "blockchain",
  ],
  openGraph: {
    title: "Axync — Cross-Chain Transfers Without Bridges",
    description:
      "Move value across chains with zero-knowledge proofs. No bridges, no wrapped tokens, no attack surface.",
    url: "https://axync.xyz",
    siteName: "Axync",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axync — Cross-Chain Transfers Without Bridges",
    description:
      "Move value across chains with zero-knowledge proofs. No bridges, no wrapped tokens, no attack surface.",
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
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "vtqqbj1xxa");`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
