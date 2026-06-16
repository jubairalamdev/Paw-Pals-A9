import { Lilita_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lilita",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "Paw Pals - Find Your Best Friend",
  description: "Adopt pets, view listings, and find your new companion at Paw Pals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lilita.variable} ${openSans.variable}`}>
      <body className="font-open-sans antialiased bg-[#E7F0F7]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}