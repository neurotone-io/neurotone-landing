import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata (your existing metadata remains unchanged)
export const metadata: Metadata = {
  title: "BeyondLink - Seamless Deep Linking & Data Migration",
  description:
    "BeyondLink is an advanced deep linking platform that streamlines data migration, delivering seamless user experiences across web and mobile applications. Connect your users with the right content effortlessly.",
  keywords: [
    "Deep Linking",
    "Data Migration",
    "Firebase Dynamic Links",
    "BeyondLink",
    "Cross-Platform Integration",
    "User Experience",
  ],
  authors: [{ name: "BeyondLink", url: "https://www.beyond-link.io" }],
  openGraph: {
    title: "BeyondLink - Firebase Dynamic Links Alternative",
    description:
      "Experience next-generation deep linking with BeyondLink. Effortlessly migrate your data while enhancing user engagement across all platforms.",
    url: "https://www.beyond-link.io",
    siteName: "BeyondLink",
    images: [
      {
        url: "https://www.beyond-link.io/images/bl-logo.png",
        width: 1200,
        height: 630,
        alt: "BeyondLink - Deep Linking and Data Migration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeyondLink - Firebase Dynamic Links Alternative",
    description:
      "Discover BeyondLink, the advanced platform for seamless deep linking and efficient data migration across devices.",
    images: ["https://www.beyond-link.io/images/bl-logo.png"],
    creator: "@beyondlink",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://www.beyond-link.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-394525042"
        />
        <Script id="google-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-394525042');
          `}
        </Script>
      </body>
    </html>
  );
}
