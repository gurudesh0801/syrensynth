import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SerenSynth",
  description:
    "serenSynth is a leading e-commerce and marketing solutions provider, specializing in SEM and D2C brands. We empower businesses with scalable solutions for growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Navbar />
        {/* Main content area */}
        {children}
        {/* Footer can be added here if needed */}
        <Footer />
      </body>
    </html>
  );
}
