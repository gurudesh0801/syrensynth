"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiInstagram, FiFacebook, FiLinkedin, FiX } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="bg-white text-[#0C1B3A] px-4 md:px-16 py-12 pt-30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">
          Contact Us
        </h1>
        <div className="w-50 h-0.5 bg-gray-700 mx-auto mb-10" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Contact Info */}
          <div className="bg-[#0C1B3A] text-white p-8 rounded-2xl flex-1 shadow-lg">
            <h2 className="text-lg font-semibold mb-1">Contact Information</h2>
            <p className="text-sm mb-6 text-gray-300">
              Say something to start a live chat!
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg" />
                <span>+91 8062791313</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lg" />
                <span>assist@serensynthlabs.com</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-lg mt-1" />
                <span>
                  301, Balewadi Plaza, near MITCON Institute, Balewadi, Pune
                  City, Maharashtra, PIN: 411045
                </span>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-300">Operational Address:</p>
                <p>
                  Flat No 18, 5th Floor, Mahalaxmi Down Town, Savarkar Nagar,
                  Gangapur Road, Udhaji Maratha Boarding, Nashik, Maharashtra,
                  India,{" "}
                  <a className="text-blue-400 underline" href="#">
                    422007
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-6 text-lg">
              <FiFacebook />
              <FiInstagram />
              <FiLinkedin />
              <FiX />
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white p-8 rounded-2xl flex-2 shadow-lg border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b p-2 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border-b p-2 outline-none"
                />
              </div>

              <div>
                <p className="text-sm mb-2">Select Subject?</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="subject"
                      className="accent-[#0C1B3A]"
                      defaultChecked
                    />
                    General
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="subject"
                      className="accent-[#0C1B3A]"
                    />
                    Support
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="subject"
                      className="accent-[#0C1B3A]"
                    />
                    Other
                  </label>
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Write your message.."
                  className="w-full border-b p-2 outline-none resize-none"
                  rows={4}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#0C1B3A] text-white px-6 py-2 rounded-full text-sm hover:bg-opacity-90 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
