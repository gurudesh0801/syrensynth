"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const logos = [
    "/image/razorpay.png",
    "/image/Google-Ads.png",
    "/image/India-Mart.png",
    "/image/Meta.png",
    "/image/Microsoft.png",
    "/image/Shopify.png",
    "/image/Wix.png",
    "/image/ZOHO.png",
    "/image/Amazon-Ads.png",
  ];

  return (
    <div
      className="relative h-screen w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/image/bg-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-8 text-white max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-[3rem] font-bold leading-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering SEM, & D2C Brands With scalable <br /> E-Commerce &
          Marketing Solution
        </motion.h1>
        <motion.p
          className="mt-6 text-xl max-w-2xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          From logistics to digital growth we manage everything you need to
          scale your business. Discover how our integrated approach and proven
          strategies can unlock your brand's full potential.
        </motion.p>
        <Link href="/seren-media" passHref>
          <motion.a
            className="mt-8 inline-block bg-[#D6B68E] hover:bg-[#D6B68f] text-black font-semibold py-2 px-6 rounded-lg shadow-lg flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Explore Our Solution
            <span className="text-xl">→</span>
          </motion.a>
        </Link>
      </div>
    </div>
  );
}
