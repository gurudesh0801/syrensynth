"use client";

import { motion } from "framer-motion";

const stats = [
  "$2M+ Value Generated for Clients",
  "15+ Trusted Ecosystem Partners",
  "Zero Disruption Implementation Record",
];

const text = [
  "We focus on delivering quantifiable returns and significant business growth.",
  "Our robust network ensures comprehensive solutions and extended capabilities.",
  "We integrate seamlessly, ensuring your operations continue flawlessly while we drive transformation.",
];

export default function TransformationStats() {
  return (
    <section className="py-14 px-4 sm:px-6 md:px-12 bg-white">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#0C1B3A] mb-6 sm:mb-8 md:mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Transformation We’ve Driven
        <div className="mx-auto mt-2 h-[2px] w-32 sm:w-40 bg-gray-300" />
      </motion.h2>

      <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 text-center px-2">
        We don't just offer services; we deliver tangible, real-world
        transformation. Our deep expertise and hands-on approach are designed
        to:
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[#0C1B3A] text-white px-6 py-10 sm:px-8 sm:py-14 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <p className="text-xl sm:text-2xl font-bold leading-snug mb-3">
              {stat}
            </p>
            <p className="text-sm sm:text-base text-gray-200">{text[index]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
