import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

// Google Analytics ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WZX1SGZK3W";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#7c3aed",
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
  metadataBase: new URL("https://ticketscan.io"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ticket Scan",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ticketscan.io",
    siteName: "Ticket Scan",
    title: "Ticket Scan - Compare Ticket Prices",
    description: "Never overpay for tickets again. Compare prices across multiple platforms and find the best deals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticket Scan - Compare Ticket Prices",
    description: "Compare ticket prices from Ticketmaster, SeatGeek, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "impact-site-verification": ["4977494d-2fb2-44eb-9de7-7cb8f0c91857"],
    },
  },
};

// Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ticket Scan",
  url: "https://ticketscan.io",
  logo: "https://ticketscan.io/logo.png",
  description: "Compare ticket prices across multiple platforms. Find the best deals on concerts, sports, and theater events.",
  sameAs: [],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* PWA Icons */}
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/icon.svg" />
        {/* iOS Splash Screens */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ticket Scan" />
        {/* Impact Affiliate Verification */}
        <meta name="impact-site-verification" content="4977494d-2fb2-44eb-9de7-7cb8f0c91857" />
        {/* Google Analytics */}
        {GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
