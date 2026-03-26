import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axync — Cross-Chain Token Marketplace",
  description:
    "Trade any token across any chain. Cross-chain marketplace for tokens tokens and vesting positions. ZK-powered settlement, trustless escrow, no bridges.",
  keywords: [
    "Axync",
    "cross-chain",
    "token marketplace",
    "tokens",
    "vesting NFT",
    "ZK proofs",
    "Sablier",
    "Hedgey",
    "DeFi",
    "permissionless",
    "trustless escrow",
    "Ethereum",
    "Base",
  ],
  openGraph: {
    title: "Axync — Cross-Chain Token Marketplace",
    description:
      "Trade any token across any chain. tokens and vesting marketplace with ZK-powered cross-chain settlement.",
    url: "https://axync.xyz",
    siteName: "Axync",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axync — Cross-Chain Token Marketplace",
    description:
      "Trade any token across any chain. tokens and vesting marketplace with ZK-powered cross-chain settlement.",
    site: "@axync_xyz",
    creator: "@axync_xyz",
  },
  alternates: {
    canonical: "https://axync.xyz",
  },
  metadataBase: new URL("https://axync.xyz"),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Axync",
              url: "https://axync.xyz",
              logo: "https://axync.xyz/icon.svg",
              sameAs: [
                "https://x.com/axync_xyz",
                "https://github.com/axync",
              ],
              description:
                "Cross-chain marketplace for tokens tokens and vesting positions with ZK-powered settlement.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Axync",
              url: "https://axync.xyz",
            }),
          }}
        />
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
