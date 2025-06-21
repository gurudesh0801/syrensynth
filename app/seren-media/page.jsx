"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const services = [
    {
      title: "Creative Strategy & Brand Amplification",
      items: [
        "Brand Positioning & Storytelling that Resonates",
        "Viral Campaigns & Influencer Collaborations that Dominate Feeds",
        "Community Building & Engagement Architectures",
        "Social Media Outreach that Converts",
      ],
    },
    {
      title: "Performance Marketing & Digital Domination",
      items: [
        "Unrivaled Pay Per Click (PPC) Campaigns",
        "Google & E-Commerce Shopping Advertisements with High ROI",
        "GMB Smart Ads & Display Advertisements for Maximum Visibility",
        "Advanced Remarketing Strategies that Capture Lost Opportunities",
      ],
    },
    {
      title: "Content Advisory & Production Excellence",
      items: [
        "Custom Illustrations & Visual Content that Captivate",
        "Strategic Social Media Content Calendars",
        "Offline Activations & Experiential Marketing that Leave a Mark",
        "3D Modelling & Cutting-Edge Design",
        "High-Converting Website & Landing Page Design",
      ],
    },
    {
      title: "Leadership as a Service (CMO-as-a-Service)",
      items: [
        "Virtual & On-Site CMO Services: Elevate your marketing with strategic leadership, comprehensive campaign oversight, and transformative marketing solutions from industry veterans.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="text-[#0C1B3A] overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-[#0C1B3A] to-[#1C2C4A] text-white text-center px-4 sm:px-6 py-34 sm:py-40"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6"
        >
          Beyond Marketing. We Sculpt Legacies
        </motion.h1>
        <motion.div
          className="border-b-2 w-16 sm:w-40 mx-auto border-white mb-4 sm:mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm sm:text-base max-w-3xl mx-auto font-light"
        >
          Forget traditional agencies. We're not just about campaigns; we're
          about creating an unshakeable market presence for your brand...
        </motion.p>
      </motion.section>

      {/* Why We Exist */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 sm:px-6 py-10 sm:py-16"
      >
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
          Our Unrivaled Approach
        </motion.h2>
        <motion.p className="text-sm sm:text-base max-w-3xl mx-auto text-gray-700">
          While others chase volume, we pursue{" "}
          <strong>transformative partnerships</strong>...
        </motion.p>
      </motion.section>

      {/* What Sets Us Apart */}
      <section className="bg-white px-4 sm:px-6 py-14 sm:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6"
        >
          What Sets Us Apart
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto text-left"
        >
          {[
            {
              title: "Hyper-Exclusivity",
              text: "We're not built for the masses...",
            },
            {
              title: "Irrefutable Results",
              text: "98% retention is a direct reflection...",
            },
            {
              title: "Holistic Mastery",
              text: "We bring end-to-end expertise under one roof...",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-[#F5F6FF] p-4 sm:p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0C1B3A]">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 py-14 sm:py-16 text-center bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
          Our Impact-Driven Services
        </h2>
        <p className="text-sm sm:text-base max-w-3xl mx-auto text-gray-700 mb-6 sm:mb-10">
          Leveraging our in-house brands, we offer powerful services...
        </p>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleDropdown(idx)}
                className="w-full p-4 sm:p-6 text-left flex justify-between items-center"
              >
                <h3 className="text-base sm:text-xl font-semibold text-blue-800">
                  {service.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openDropdown === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-6 pb-4 sm:pb-6 text-left"
                  >
                    <ul className="space-y-3 text-sm sm:text-base">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">●</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-[#0C1B3A] to-[#1C2C4A] text-white text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Ready to Redefine Your Brand's Future?
        </h2>
        <p className="text-sm sm:text-base max-w-3xl mx-auto font-light mb-6 sm:mb-10">
          We don’t just take projects — we invest in outcomes.
        </p>
        <button className="bg-white text-[#0C1B3A] px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold shadow hover:shadow-xl transition duration-300">
          Schedule Your Exclusive Consultation Call Now
        </button>
      </motion.section>
    </div>
  );
}
