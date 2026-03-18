import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axync — Permissionless Locked Token Marketplace",
  description:
    "Trade locked tokens without permission. The first permissionless marketplace for vesting positions. Sell your locked tokens today, buy them at a discount. Trustless escrow, instant settlement.",
  keywords: [
    "Axync",
    "axync",
    "locked tokens",
    "vesting marketplace",
    "vesting OTC",
    "token vesting",
    "Sablier",
    "Hedgey",
    "locked token trading",
    "DeFi",
    "permissionless",
    "trustless escrow",
  ],
  openGraph: {
    title: "Axync — Permissionless Locked Token Marketplace",
    description:
      "Trade locked tokens without permission. Sell your vesting positions today, buy them at a discount. Trustless escrow, instant settlement.",
    url: "https://axync.xyz",
    siteName: "Axync",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axync — Permissionless Locked Token Marketplace",
    description:
      "Trade locked tokens without permission. Sell your vesting positions today, buy them at a discount. Trustless escrow, instant settlement.",
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
                "Permissionless marketplace for trading locked and vesting token positions.",
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
