import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Classy Games",
  description: "Rediscover The Joy of Play.",
  icons: {
    icon: "./Favicons/main-logo.png",
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
            data-tracking-token="null"
            async
        />
      </head>
      <body className={`antialiased`}>
      <Navbar />
      {children}
      <Footer />
      </body>
      </html>
  );
}