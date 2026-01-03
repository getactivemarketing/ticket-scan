import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
