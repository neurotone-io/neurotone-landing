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
  title: "neurotone - Where tone meets intelligence",
  description:
    "neurotone turns raw audio into emotional and behavioral insight, with powerful voice analysis made simple and scalable.",
  keywords: [
    "neurotone",
    "Voice Analysis",
    "Speech Emotion Recognition",
    "Tone Detection",
    "AI Voice Insights",
    "Emotional Intelligence",
    "Voice Tech",
    "Human-AI Interaction",
    "Vocal Biomarkers",
    "Real-time Emotion Detection",
  ],
  authors: [{ name: "neurotone", url: "https://www.neurotone.io" }],
  openGraph: {
    title: "neurotone - Where tone meets intelligence",
    description:
      "neurotone turns raw audio into emotional and behavioral insight, with powerful voice analysis made simple and scalable.",
    url: "https://www.neurotone.io",
    siteName: "neurotone",
    images: [
      {
        url: "https://www.neurotone.io/images/bl-logo.png",
        width: 1200,
        height: 630,
        alt: "neurotone - Where tone meets intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "neurotone - Where tone meets intelligence",
    description:
      "neurotone turns raw audio into emotional and behavioral insight, with powerful voice analysis made simple and scalable.",
    images: ["https://www.neurotone.io/images/bl-logo.png"],
    creator: "@neurotone",
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
  metadataBase: new URL("https://www.neurotone.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KD584BCM');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KD584BCM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
