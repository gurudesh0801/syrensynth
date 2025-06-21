"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative w-full flex items-center justify-center py-20 pt-40 sm:py-24 lg:py-32 lg:py-40 px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/image/bg-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white space-y-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering SME & D2C Brands with Scalable <br />
          E-Commerce & Marketing Solutions
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl max-w-3xl mx-auto"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          From logistics to digital growth, we manage everything you need to
          scale your business. Discover how our integrated approach and proven
          strategies can unlock your brand’s full potential.
        </motion.p>

        <Link href="/seren-media" passHref>
          <motion.a
            className="inline-block mt-4 sm:mt-6 bg-[#D6B68E] hover:bg-[#dcbf9c] text-black font-semibold py-2 px-6 rounded-lg shadow-lg flex items-center gap-2 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Explore Our Solution <span className="text-lg">→</span>
          </motion.a>
        </Link>
      </div>
    </div>
  );
}
