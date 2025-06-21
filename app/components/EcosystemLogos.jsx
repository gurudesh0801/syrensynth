"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function EcosystemSlider() {
  return (
    <div className="mt-12 mb-16 px-4 sm:px-8">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#0C1B3A] mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Ecosystem Partners
        <div className="mx-auto mt-2 h-[2px] w-32 sm:w-40 bg-gray-300" />
      </motion.h2>

      <motion.div
        className="relative overflow-hidden w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="flex gap-4 sm:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((src, index) => (
            <div
              key={index}
              className="min-w-[7rem] sm:min-w-[9rem] h-[60px] sm:h-[80px] bg-white/90 rounded-xl shadow flex items-center justify-center p-2 sm:p-4"
            >
              <Image
                src={src}
                alt={`logo-${index}`}
                width={80}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
