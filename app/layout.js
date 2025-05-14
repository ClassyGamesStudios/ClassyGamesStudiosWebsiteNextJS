import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Classy Games Studio",
  description: "Official website of Classy Games Studio.",
  icons: {
    icon: "./Favicons/main-logo.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
