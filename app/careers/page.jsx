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
    title: "Digital Marketing Specialist",
    tags: ["Remote", "Full-time"],
    desc: "Develop and implement digital marketing strategies to enhance our online presence and drive customer engagement.",
    details: {
      location: "Remote (India)",
      experience: "2+ years",
      responsibilities: [
        "Manage SEO/SEM, marketing database, email, and social media campaigns",
        "Design and oversee digital ad campaigns",
        "Measure and report performance of all digital marketing campaigns",
        "Identify trends and optimize spend based on insights",
      ],
      requirements: [
        "Proven experience in digital marketing",
        "Experience with Google Ads, Facebook Ads, and analytics tools",
        "Creative with excellent analytical abilities",
        "Up-to-date with latest digital marketing trends",
      ],
    },
  },
  {
    title: "Frontend Developer (React)",
    tags: ["Remote", "Full-time"],
    desc: "Build responsive and interactive user interfaces for our web applications using modern React.js.",
    details: {
      location: "Bangalore, India",
      experience: "2+ years",
      responsibilities: [
        "Develop new user-facing features using React.js",
        "Build reusable components and front-end libraries",
        "Optimize components for maximum performance",
        "Collaborate with UI/UX designers and backend developers",
      ],
      requirements: [
        "Strong proficiency in JavaScript, including DOM manipulation",
        "Thorough understanding of React.js and its core principles",
        "Experience with popular React workflows (Redux, Context API)",
        "Familiarity with modern front-end build pipelines and tools",
      ],
    },
  },
  {
    title: "Content Strategist",
    tags: ["Hybrid", "Full-time"],
    desc: "Develop content strategies that align with our brand voice and drive engagement across all digital platforms.",
    details: {
      location: "Delhi, India",
      experience: "3+ years",
      responsibilities: [
        "Create and implement content strategies to meet business objectives",
        "Oversee content production and distribution",
        "Analyze content performance and optimize accordingly",
        "Manage content calendar and ensure brand consistency",
      ],
      requirements: [
        "Proven content strategy or editorial experience",
        "Excellent writing and editing skills",
        "Understanding of SEO and web traffic metrics",
        "Ability to interpret customer needs",
      ],
    },
  },
  {
    title: "Data Analyst",
    tags: ["Remote", "Full-time"],
    desc: "Transform complex data into actionable insights that drive business decisions and strategies.",
    details: {
      location: "Remote (India)",
      experience: "2+ years",
      responsibilities: [
        "Interpret data and analyze results using statistical techniques",
        "Develop and implement databases and data collection systems",
        "Identify trends and patterns in complex data sets",
        "Create visualizations to communicate findings",
      ],
      requirements: [
        "Strong knowledge of SQL and Excel",
        "Experience with data visualization tools (Tableau, Power BI)",
        "Strong analytical skills with attention to detail",
        "Knowledge of statistics and experience using statistical packages",
      ],
    },
  },
  {
    title: "HR Business Partner",
    tags: ["On-site", "Full-time"],
    desc: "Align HR initiatives with business objectives and provide strategic HR guidance to leadership.",
    details: {
      location: "Hyderabad, India",
      experience: "5+ years",
      responsibilities: [
        "Consult with leadership on HR policies and processes",
        "Manage talent acquisition and onboarding processes",
        "Address employee relations issues and resolve conflicts",
        "Develop and implement HR strategies and initiatives",
      ],
      requirements: [
        "Proven experience as HR business partner",
        "Excellent knowledge of HR functions and best practices",
        "Understanding of labor laws and disciplinary procedures",
        "Outstanding communication and interpersonal skills",
      ],
    },
  },
  {
    title: "UX/UI Designer",
    tags: ["Hybrid", "Full-time"],
    desc: "Create amazing user experiences and beautiful interfaces for our digital products.",
    details: {
      location: "Pune, India",
      experience: "3+ years",
      responsibilities: [
        "Gather and evaluate user requirements in collaboration with product managers",
        "Illustrate design ideas using storyboards, process flows and sitemaps",
        "Design graphic user interface elements like menus and tabs",
        "Create original graphic designs and prototypes",
      ],
      requirements: [
        "Proven UI/UX design experience with portfolio",
        "Proficiency in Figma, Adobe XD or similar",
        "Knowledge of HTML/CSS; JavaScript is a plus",
        "Team spirit with strong communication skills",
      ],
    },
  },
  {
    title: "DevOps Engineer",
    tags: ["Remote", "Full-time"],
    desc: "Implement and maintain CI/CD pipelines and cloud infrastructure to support our development teams.",
    details: {
      location: "Remote (India)",
      experience: "3+ years",
      responsibilities: [
        "Implement CI/CD pipelines using Jenkins/GitHub Actions",
        "Manage AWS/GCP cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and troubleshoot issues",
      ],
      requirements: [
        "Experience with Docker, Kubernetes and Terraform",
        "Knowledge of scripting languages (Bash, Python)",
        "Experience with monitoring tools like Prometheus",
        "Understanding of networking and security best practices",
      ],
    },
  },
  {
    title: "Customer Success Manager",
    tags: ["Remote", "Full-time"],
    desc: "Build strong relationships with customers to ensure their success and satisfaction with our products.",
    details: {
      location: "Remote (India)",
      experience: "2+ years",
      responsibilities: [
        "Serve as primary point of contact for customer accounts",
        "Develop trusted advisor relationships with key accounts",
        "Ensure timely and successful delivery of solutions",
        "Forecast and track key account metrics",
      ],
      requirements: [
        "Proven account management or customer success experience",
        "Ability to communicate and influence at all levels",
        "Strong problem-solving and negotiation skills",
        "Ability to manage multiple projects at a time",
      ],
    },
  },
  {
    title: "Product Manager",
    tags: ["Hybrid", "Full-time"],
    desc: "Lead the development and execution of product strategies from conception to launch.",
    details: {
      location: "Bangalore, India",
      experience: "4+ years",
      responsibilities: [
        "Define product vision, strategy and roadmap",
        "Gather and prioritize product requirements",
        "Work closely with engineering, design and marketing teams",
        "Analyze market trends and competitive landscape",
      ],
      requirements: [
        "Proven work experience in product management",
        "Strong problem-solving skills and willingness to roll up sleeves",
        "Excellent written and verbal communication skills",
        "Technical background with understanding of software development",
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
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeJobModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div className="bg-white text-[#0C1B3A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1B3A] to-[#19294F] text-white py-40 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Work With US
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto text-base leading-relaxed"
        >
          We offer comprehensive solutions in business acceleration, technology
          enablement, eCommerce, logistics, and career advancement. Whether
          you're an entrepreneur, professional, or startup, we have the
          expertise to drive your success.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-white text-[#0C1B3A] font-semibold py-2 px-6 rounded"
        >
          Apply Here
        </motion.button>
      </section>

      {/* Consultant Invitation */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-semibold text-[#0C1B3A] mb-8">
          Join us as a Consultant
        </h2>
        <div className="flex justify-end mb-6">
          <button className="border border-[#0C1B3A] text-[#0C1B3A] rounded-full px-4 py-1 text-sm font-medium">
            Open positions ↓
          </button>
        </div>

        {/* Job Cards */}
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-10 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <div className="flex gap-2 mt-2 mb-4">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-gray-400 rounded-full px-2 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-2">{job.desc}</p>
            <button
              onClick={() => openJobModal(job)}
              className="w-full flex justify-end items-center text-sm text-[#0C1B3A] font-medium hover:underline group"
            >
              See positions
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2 text-xs"
              >
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </button>
          </motion.div>
        ))}
      </section>

      {/* Job Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeJobModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold">{selectedJob?.title}</h2>
                  <button
                    onClick={closeJobModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{selectedJob?.details?.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    <span>{selectedJob?.tags.join(", ")}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUserTie className="mr-2" />
                    <span>{selectedJob?.details?.experience}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Job Description
                  </h3>
                  <p className="text-gray-700">{selectedJob?.desc}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob?.details?.responsibilities?.map(
                      (item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob?.details?.requirements?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#0C1B3A] text-white py-3 rounded-lg font-semibold"
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
