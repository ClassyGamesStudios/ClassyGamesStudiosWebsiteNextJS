import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import Script from "next/script";
import "@/styles/globals.css";

export const metadata = {
    title: "Classy Games",
    description: "Rediscover The Joy of Play.",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon.ico" },
        ],
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        {/* Glitch Analytics Script */}
        <script
            src="https://api.glitch.fun/js/game-analytics.js"
            data-title-id="af3cddfe-1a50-48f3-a268-6339fac33fba"
            data-tracking-token="628d0ab2fb3c4f23f807d42bbafb81bc46261d5e44f47899b240756e9ae39254"
            async
        />
      </head>
      <body className={`antialiased`}>
      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FWJWQD4N11"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FWJWQD4N11');
        `}
      </Script>
      <ClarityAnalytics />
      <Navbar />
      {children}
      <Footer />
      </body>
      </html>
  );
}