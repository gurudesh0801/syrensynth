"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaTimes,
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
} from "react-icons/fa";
import { useState } from "react";

const jobs = [
  {
    title: "Key Account Manager – E-commerce",
    tags: ["Hybrid", "Full-time"],
    desc: "Manage and grow key e-commerce client accounts across platforms like Amazon, Flipkart, Zepto, and Shopify. Ensure success across listings, performance marketing, logistics, and growth planning.",
    details: {
      location: "Mumbai, India",
      experience: "3+ years",
      responsibilities: [
        "Build and maintain strong relationships with key e-commerce clients",
        "Develop and execute account growth strategies",
        "Coordinate with cross-functional teams to ensure client success",
        "Analyze performance metrics and optimize account performance",
      ],
      requirements: [
        "Proven experience in e-commerce account management",
        "Deep understanding of Amazon, Flipkart and other marketplaces",
        "Strong analytical and problem-solving skills",
        "Excellent communication and negotiation abilities",
      ],
    },
  },
  {
    title: "Tele Sales Executive",
    tags: ["Remote", "Full-time"],
    desc: "Your job is to connect, convince, and convert leads over calls. Be the first voice of our company for inbound & outbound calls.",
    details: {
      location: "Remote (India)",
      experience: "1+ years",
      responsibilities: [
        "Handle inbound and outbound sales calls",
        "Understand customer needs and recommend solutions",
        "Achieve sales targets and KPIs",
        "Maintain accurate records of customer interactions",
      ],
      requirements: [
        "Excellent communication and interpersonal skills",
        "Proven experience in tele-sales or tele-marketing",
        "Ability to handle rejection and stay motivated",
        "Basic computer knowledge and CRM experience",
      ],
    },
  },
  {
    title: "Graphic Designer",
    tags: ["Hybrid", "Full-time"],
    desc: "We need a designer who brings ideas to life — from digital ads to brand identity and packaging.",
    details: {
      location: "Delhi, India",
      experience: "2+ years",
      responsibilities: [
        "Create visual content for digital and print media",
        "Develop brand identity systems and guidelines",
        "Design marketing materials and social media graphics",
        "Collaborate with marketing team on creative projects",
      ],
      requirements: [
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator)",
        "Strong portfolio showcasing design skills",
        "Understanding of typography, color theory",
        "Ability to work on multiple projects simultaneously",
      ],
    },
  },
  {
    title: "Video Editor",
    tags: ["Remote", "Full-time"],
    desc: "Create high-impact videos — from short reels and brand films to explainer videos. If you know how to keep attention and drive action, we want you.",
    details: {
      location: "Remote (India)",
      experience: "2+ years",
      responsibilities: [
        "Edit raw footage into polished finished products",
        "Create motion graphics and animations",
        "Optimize videos for different platforms",
        "Manage and organize video assets",
      ],
      requirements: [
        "Proficiency in Premiere Pro, After Effects",
        "Understanding of video formats and codecs",
        "Creative storytelling skills",
        "Ability to work under tight deadlines",
      ],
    },
  },
  {
    title: "Meta Ads Executive",
    tags: ["Remote", "Full-time"],
    desc: "We're seeking a creative & data-driven Meta Ads Executive to drive paid growth across Facebook & Instagram.",
    details: {
      location: "Remote (India)",
      experience: "1+ years",
      responsibilities: [
        "Plan and execute Meta ad campaigns",
        "Monitor and optimize campaign performance",
        "Create and test ad creatives and copy",
        "Analyze data and provide actionable insights",
      ],
      requirements: [
        "Experience running Facebook/Instagram ads",
        "Understanding of Meta Ads Manager",
        "Analytical mindset with attention to detail",
        "Creative thinking for ad concepts",
      ],
    },
  },
  {
    title: "PPC Advertiser",
    tags: ["Remote", "Full-time"],
    desc: "You'll run performance-driven ad campaigns across platforms — especially Google and Meta. Ideal for someone who understands CPL, ROAS, and funnel optimization deeply.",
    details: {
      location: "Remote (India)",
      experience: "2+ years",
      responsibilities: [
        "Manage PPC campaigns across multiple platforms",
        "Conduct keyword research and audience targeting",
        "Optimize campaigns for maximum ROI",
        "Prepare and present performance reports",
      ],
      requirements: [
        "Experience with Google Ads and Meta Ads",
        "Understanding of conversion tracking",
        "Data analysis and reporting skills",
        "Up-to-date with PPC trends and best practices",
      ],
    },
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openJobModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeJobModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-white text-[#0C1B3A]">
      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-b from-[#0C1B3A] to-[#19294F] text-white py-20 pt-30 md:py-40 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Work With US
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed"
        >
          We offer comprehensive solutions in business acceleration, technology
          enablement, eCommerce, logistics, and career advancement.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 md:mt-8 bg-white text-[#0C1B3A] font-semibold py-2 px-6 rounded text-sm md:text-base"
        >
          Apply Here
        </motion.button>
      </section>

      {/* Consultant Invitation - Mobile Optimized */}
      <section className="py-10 md:py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-[#0C1B3A] mb-6 md:mb-8">
          Join us as a Consultant
        </h2>
        <div className="flex justify-end mb-4 md:mb-6">
          <button className="border border-[#0C1B3A] text-[#0C1B3A] rounded-full px-3 py-1 text-xs md:text-sm font-medium">
            Open positions ↓
          </button>
        </div>

        {/* Job Cards - Mobile Optimized */}
        <div className="space-y-4 md:space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-6 p-4 md:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-base md:text-lg">
                {job.title}
              </h3>
              <div className="flex gap-1 md:gap-2 mt-1 md:mt-2 mb-2 md:mb-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gray-400 rounded-full px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-700 mb-2 line-clamp-2">
                {job.desc}
              </p>
              <button
                onClick={() => openJobModal(job)}
                className="w-full flex justify-end items-center text-xs md:text-sm text-[#0C1B3A] font-medium hover:underline group"
              >
                See positions
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-1 md:ml-2 text-[10px] md:text-xs"
                >
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Details Modal - Mobile Optimized */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4"
            onClick={closeJobModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto text-sm md:text-base"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {selectedJob?.title}
                  </h2>
                  <button
                    onClick={closeJobModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="flex items-center text-gray-600 text-xs md:text-sm">
                    <FaMapMarkerAlt className="mr-1 md:mr-2" />
                    <span>{selectedJob?.details?.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs md:text-sm">
                    <FaClock className="mr-1 md:mr-2" />
                    <span>{selectedJob?.tags.join(", ")}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs md:text-sm">
                    <FaUserTie className="mr-1 md:mr-2" />
                    <span>{selectedJob?.details?.experience}</span>
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                    Job Description
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {selectedJob?.desc}
                  </p>
                </div>

                <div className="mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-1 md:space-y-2">
                    {selectedJob?.details?.responsibilities?.map(
                      (item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-1 md:mr-2">•</span>
                          <span className="text-gray-700 text-sm md:text-base">
                            {item}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                    Requirements
                  </h3>
                  <ul className="space-y-1 md:space-y-2">
                    {selectedJob?.details?.requirements?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-1 md:mr-2">•</span>
                        <span className="text-gray-700 text-sm md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#0C1B3A] text-white py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
