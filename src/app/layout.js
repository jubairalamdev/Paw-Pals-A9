import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4'])

import { Lilita_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Bounce, ToastContainer } from "react-toastify";

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
      <body className="font-open-sans antialiased bg-[#d3e4f1]">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}