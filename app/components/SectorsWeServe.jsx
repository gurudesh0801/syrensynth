"use client";

import { motion } from "framer-motion";

const sectors = [
  "E-Commerce & D2C",
  "FMCG Brands",
  "Real Estate Visionaries",
  "Ambitious Startups & Entrepreneurs",
  "Media & Entertainment Trailblazers",
  "Education & Ed-Tech Innovators",
  "Manufacturing Powerhouses",
];

export default function SectorsWeServe() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 bg-white">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#0C1B3A] mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Industries We Elevate
        <div className="mx-auto mt-2 h-[2px] w-32 sm:w-40 bg-gray-300" />
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {sectors.map((sector, i) => {
          const isLastOdd =
            sectors.length % 2 !== 0 && i === sectors.length - 1;

          return (
            <motion.div
              key={i}
              className={`text-sm sm:text-base text-gray-800 font-medium px-2 py-3 rounded-md text-center bg-gray-50 shadow-sm ${
                isLastOdd ? "col-span-2 flex justify-center" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {sector}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
