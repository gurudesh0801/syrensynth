"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="text-[#0C1B3A] overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-[#0C1B3A] to-[#1C2C4A] text-white text-center px-6 py-24 md:py-34"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          Beyond Marketing. We Sculpt Legacies
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-b-2 w-70 mx-auto border-white mb-6"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto text-lg font-light leading-relaxed"
        >
          Forget traditional agencies. We're not just about campaigns; we're
          about creating an unshakeable market presence for your brand. We fuse
          unparalleled creative vision with data-driven precision to transform
          brands into industry titans.
        </motion.p>
      </motion.section>

      {/* Why We Exist */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 py-16"
      >
        <motion.h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Our Unrivaled Approach
        </motion.h2>
        <motion.p className="max-w-4xl mx-auto text-gray-700">
          While others chase volume, we pursue{" "}
          <strong>transformative partnerships</strong>. We intentionally limit
          our client roster each year, ensuring every brand receives our
          undivided attention, proprietary strategies, and a relentless pursuit
          of excellence. This isn't just a promise; it's the foundation of our
          <strong>98% client retention rate since inception</strong>—a testament
          to the tangible impact we deliver
        </motion.p>
      </motion.section>

      {/* Ecosystem Section */}
      <section className="bg-white px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          What Sets Us Apart from the Industry
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto"
        >
          {/* Hyper-Exclusivity */}
          <motion.div
            variants={{ ...itemVariants, ...cardHoverVariants }}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(1)}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-[#F5F6FF] p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#0C1B3A]">
              Hyper-Exclusivity
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              We're not built for the masses. We partner with a select few,
              allowing for deep dives, bespoke strategies, and a level of
              dedication the industry simply can't match. This means your brand
              isn't just another project; it's our next success story
            </p>
          </motion.div>

          {/* Irrefutable Results */}
          <motion.div
            variants={{ ...itemVariants, ...cardHoverVariants }}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(2)}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-[#F5F6FF] p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#0C1B3A]">
              Irrefutable Results
            </h3>
            <p className="text-gray-600">
              Our 98% client retention rate isn't just a statistic; it's a
              direct reflection of consistently outperforming industry
              benchmarks and delivering quantifiable growth that translates to
              real business impact.
            </p>
          </motion.div>

          {/* Holistic Mastery */}
          <motion.div
            variants={{ ...itemVariants, ...cardHoverVariants }}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(3)}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-[#F5F6FF] p-6 rounded-lg shadow-md"
          >
            <h3>Holistic Mastery</h3>
            <p className="text-gray-600">
              Why juggle multiple vendors? We bring end-to-end expertise under
              one roof—from groundbreaking creative and strategic leadership to
              precision digital execution. Your brand's entire journey is
              meticulously managed by a single, high-performing team.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Comprehensive Services */}
      <section className="px-6 py-16 text-center bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Our Impact-Driven Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto text-gray-700 mb-10"
          >
            Leveraging the expertise gained from our in-house brands, we offer a
            powerful suite of services designed for your success:
          </motion.p>

          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold text-blue-800">
                    {service.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: openDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <ul className="space-y-3 text-left">
                        {service.items.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 + 0.2 }}
                          >
                            <span className="text-blue-500 mr-2">●</span>
                            <span className="text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Achievements */}
      <section className="px-6 py-16 text-center bg-[#F9FAFB]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Our Track Record: Brands Transformed
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <button
              onClick={() => toggleDropdown("achievements")}
              className="w-full p-6 text-left flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold text-blue-800">
                View Our Impact Metrics
              </h3>
              <motion.div
                animate={{ rotate: openDropdown === "achievements" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </button>

            <AnimatePresence>
              {openDropdown === "achievements" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-[#F5F6FF] p-6 rounded-lg"
                    >
                      <h4 className="font-bold text-lg mb-3">
                        98% Client Retention Rate
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">●</span>
                          <span>
                            Our deepest validation comes from the brands who
                            choose to grow with us, year after year.
                          </span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-[#F5F6FF] p-6 rounded-lg"
                    >
                      <h4 className="font-bold text-lg mb-3">
                        Category Leaders Created
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">●</span>
                          <span>
                            We don’t just grow brands; we forge them into
                            undisputed leaders within their respective
                            industries.
                          </span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* Industries We Serve */}
      <section className="px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Industries We Elevate
        </motion.h2>

        {/* Wrap grid in flex for centering last row */}
        <div className="flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl text-left"
          >
            {[
              "E-Commerce & D2C",
              "FMCG Brands",
              "Real Estate Visionaries",
              "Ambitious Startups & Entrepreneurs",
              "Media & Entertainment Trailblazers",
              "Education & Ed-Tech Innovators",
              "Manufacturing Powerhouses",
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition font-medium text-blue-900"
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-20 bg-gradient-to-br from-[#0C1B3A] to-[#1C2C4A] text-white text-center"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Redefine Your Brand's Future?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg font-light mb-10"
        >
          We don't just take on projects; we invest in partnerships that forge
          iconic growth.
          <br />
          The question isn't whether you need marketing, but whether you're
          ready for Seren Media's unparalleled impact.
          <br />
          Don't settle for average. Secure your competitive edge.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white text-[#0C1B3A] px-8 py-3 rounded-lg text-base font-semibold shadow hover:shadow-xl transition duration-300"
        >
          Schedule Your Exclusive Consultation Call Now
        </motion.button>
      </motion.section>
    </div>
  );
}
