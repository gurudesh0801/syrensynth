"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SerenExpressLogos from "../components/SerenExpressLogos";

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
          Your All-in-One Logistics Protocol for Enterprises
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
          Simplify, Streamline, Succeed. Experience seamless domestic shipping,
          rapid commercial solutions, and comprehensive warehouse fulfillment –
          all under one roof.
        </motion.p>
      </motion.section>

      <motion.div>
        <SerenExpressLogos />
      </motion.div>

      {/* Why We Exist */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 py-16 text-black"
      >
        <motion.h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Our Unbeatable Promise
        </motion.h2>
        <motion.p className="max-w-4xl mx-auto text-gray-700">
          <strong>No Commissions. Save Up To 30%.</strong> Seren Express isn't
          just a logistics provider; we're your strategic partner in efficiency.
          We eliminate hidden costs and streamline your operations, allowing you
          to maximize savings and focus on what you do best
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
          Discover The Seren Experience
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
              Domestic Shipping
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Seamless Start, Swift Delivery. Get your shipments moving today
              with our reliable and efficient domestic shipping solutions. From
              local to nationwide, we ensure your products reach their
              destination on time, every time.
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
              Quick Commercial Solutions
            </h3>
            <p className="text-gray-600">
              Agility for Your Business. Navigate the complexities of commercial
              logistics with ease. Our tailored solutions are designed for speed
              and precision, empowering your business to respond rapidly to
              market demands and maintain a competitive edge.
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
            <h3 className="text-xl font-semibold mb-2 text-[#0C1B3A]">
              Warehouse & Fulfillment
            </h3>
            <p className="text-gray-600">
              Optimize Your Supply Chain. Unlock peak performance with our
              integrated warehouse and fulfillment services. From storage and
              inventory management to pick-and-pack and dispatch, we handle
              every detail with expertise, ensuring smooth operations and
              satisfied customers.
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
            Why Choose Seren Express?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto text-gray-700 mb-10"
          >
            Your complete logistics solution designed for e-commerce excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {/* Integrated Logistics */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Integrated Logistics
              </h3>
              <p className="text-gray-600">
                Your entire supply chain, managed by one trusted partner
              </p>
            </motion.div>

            {/* Cost Efficiency */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Cost Efficiency
              </h3>
              <p className="text-gray-600">
                Save up to 30% with our commission-free model
              </p>
            </motion.div>

            {/* Speed & Reliability */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Speed & Reliability
              </h3>
              <p className="text-gray-600">
                Next-day to same-day delivery options available
              </p>
            </motion.div>

            {/* Dedicated Support */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Dedicated Support
              </h3>
              <p className="text-gray-600">
                Seren Support ensures smooth operations and quick resolutions
              </p>
            </motion.div>

            {/* Order Verification */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Order Verification
              </h3>
              <p className="text-gray-600">
                Added security and accuracy for every shipment
              </p>
            </motion.div>

            {/* Trusted Carriers */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1h1m-6 0H7m0 0H4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Trusted Carriers
              </h3>
              <p className="text-gray-600">
                Partnering with Bluedart, Delhivery, DTDC and other industry
                leaders
              </p>
            </motion.div>
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
          Ready to Transform Your Logistics?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg font-light mb-10"
        >
          Experience the Seren difference. It's more than just shipping; it's a
          strategic advantage.
          <br />
          Book a FREE Efficiency Strategy Session Today! Let's analyze your
          current logistics, identify pain points, and design a custom solution
          that drives efficiency and savings for your enterprise.
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
          Book Now
        </motion.button>
      </motion.section>
    </div>
  );
}
