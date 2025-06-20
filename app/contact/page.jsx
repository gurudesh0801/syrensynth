"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="relative bg-gradient-to-tr from-[#F5F7FA] to-[#E4ECF7] text-[#0C1B3A] px-4 md:px-16 py-34 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-100px] left-[-80px] w-[250px] h-[250px] bg-[#0C1B3A] opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#D6B68E] opacity-20 rounded-full blur-3xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-8 leading-tight">
          Book a <span className="text-[#471396]">Meeting</span> with Us
        </h1>
        <p className="text-gray-700 mb-12 text-base md:text-lg max-w-xl mx-auto">
          Let's connect and discuss how we can grow together. Choose a time that
          works best for you.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Link 1 */}
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(12,27,58,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            href="https://calendar.app.google/ZNrR7fb2Kat6ioDa6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-[#0C1B3A] hover:bg-[#0C1B3A] hover:text-white text-[#0C1B3A] transition-colors duration-300 px-6 py-3 rounded-2xl w-full max-w-xs flex items-center justify-center gap-3 shadow-md"
          >
            <FaCalendarAlt className="text-2xl" />
            <span className="font-semibold text-lg">Book 45-Min Call</span>
          </motion.a>

          {/* Link 2 */}
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(12,27,58,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            href="https://calendar.app.google/ZNrR7fb2Kat6ioDa6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-[#0C1B3A] hover:bg-[#0C1B3A] hover:text-white text-[#0C1B3A] transition-colors duration-300 px-6 py-3 rounded-2xl w-full max-w-xs flex items-center justify-center gap-3 shadow-md"
          >
            <FaCalendarAlt className="text-2xl" />
            <span className="font-semibold text-lg">Book Strategy Session</span>
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
}
