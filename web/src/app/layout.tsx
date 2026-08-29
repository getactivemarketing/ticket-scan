import type { Metadata, Viewport } from "next";
import { Inter, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // 600 is required by the 2.0 scale — card titles (17px/600) and caps
  // labels (11px/600). Without it those silently render as 500 and the
  // hierarchy the scale depends on never appears.
  weight: ["400", "500", "600"],
});

// Display typeface. A grotesque that tightens properly, unlike the prior
// friendly geometric. Displays soft and generic at large sizes damage the
// brand; Archivo reads confident and tightly fitted where it matters most.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

// Dates, times, capacities and section numbers are the substance of this
// site, so they are monospaced and tabular.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const viewport: Viewport = {
  themeColor: "#1E63FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Ticket Scan - Compare Ticket Prices",
    template: "%s | Ticket Scan",
  },
  description: "Compare ticket prices from Ticketmaster, SeatGeek, and more. Track prices, get alerts, and find the best deals on concerts, sports, and theater events.",
  keywords: ["tickets", "concert tickets", "sports tickets", "ticket prices", "compare tickets", "cheap tickets"],
  authors: [{ name: "Ticket Scan" }],
  creator: "Ticket Scan",
  metadataBase: new URL("https://www.ticketscan.io"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ticket Scan",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ticketscan.io",
    siteName: "Ticket Scan",
    title: "Ticket Scan - Compare Ticket Prices",
    description: "Never overpay for tickets again. Compare prices across multiple platforms and find the best deals.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ticketscan_io",
    creator: "@ticketscan_io",
    title: "Ticket Scan - Compare Ticket Prices",
    description: "Compare ticket prices from Ticketmaster, SeatGeek, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Note: Impact verification is in head with non-standard 'value' attribute
};

// Site-wide structured data: Organization + WebSite.
// The WebSite node (#website) is referenced via `isPartOf` by the dashboard and
// compare WebApplication schemas; without it those references dangle. No
// SearchAction/Sitelinks Searchbox is declared because site search is
// client-side only (no `?q=` deep-link URL exists to target).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ticketscan.io/#organization",
      name: "Ticket Scan",
      url: "https://www.ticketscan.io",
      logo: "https://www.ticketscan.io/logo.png",
      description: "Compare ticket prices across multiple platforms. Find the best deals on concerts, sports, and theater events.",
      // Handles verified against marketing-agents/blotato-accounts.json, which
      // records the accounts the posting automation is connected to. sameAs is
      // how search engines tie these profiles to the brand entity, so a wrong
      // handle here misattributes the brand, not just a dead link.
      sameAs: [
        "https://x.com/ticketscan_io",
        "https://instagram.com/ticketscanapp",
        "https://threads.net/@ticketscanapp",
        "https://tiktok.com/@ticketscan_io",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ticketscan.io/#website",
      url: "https://www.ticketscan.io",
      name: "Ticket Scan",
      description: "Compare ticket prices across Ticketmaster, SeatGeek, and more. Track price history and get alerts when tickets drop.",
      publisher: { "@id": "https://www.ticketscan.io/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Impact Affiliate Verification - must be first meta tag */}
        <meta
          name="impact-site-verification"
          // @ts-ignore - Impact requires non-standard 'value' attribute
          value="d9cb8a0f-4d31-4b67-8062-a2af6f138e3d"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* PWA Icons */}
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/icon.svg" />
        {/* iOS Splash Screens */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ticket Scan" />
        {/* Fanatics Verification */}
        <meta name="fo-verify" content="33d3aa89-9ae2-4eb7-89ab-acf9c05cc526" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T476F9S4');`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${archivo.variable} ${plexMono.variable} antialiased bg-gray-50`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T476F9S4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
