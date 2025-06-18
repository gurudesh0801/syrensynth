"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/image/Air_India.png",
  "/image/Amazon-Shipping.png",
  "/image/Blue_Dart.png",
  "/image/Delhivery_Logo.png",
  "/image/DHL.png",
  "/image/DTDC.png",
  "/image/Ecom-Express.png",
  "/image/EKART.png",
  "/image/GATI.png",
  "/image/Indigo_Air.png",
  "/image/SAFE-EXPRESS.png",
  "/image/SEREN.png",
  "/image/Spice-Jet.png",
  "/image/Xpressbees.png",
];

export default function SerenExpressLogos() {
  return (
    <div className="mt-14 mb-20">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center text-[#0C1B3A] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Shipping Partners
        <div className="mx-auto mt-2 h-[2px] w-40 bg-gray-300" />
      </motion.h2>

      <motion.div
        className="relative overflow-hidden w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <motion.div
          className="flex gap-6 w-max"
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
              className="min-w-[10rem] h-[80px] bg-white/90 rounded-xl shadow flex items-center justify-center p-4"
            >
              <Image
                src={src}
                alt={`logo-${index}`}
                width={100}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
