"use client";

import { motion } from "framer-motion";

export default function LaunchpadSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      {/* Section Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#0C1B3A] mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        SerenSynth Launchpad
        <div className="mx-auto mt-2 h-[2px] w-24 bg-gray-300" />
      </motion.h2>

      {/* Gradient Box */}
      <motion.div
        className="relative max-w-6xl mx-auto rounded-2xl p-6 sm:p-40 flex items-center justify-center text-center overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Animated Background Layer */}
        <div
          className="absolute inset-0 z-0 rounded-2xl animate-softPulse"
          style={{
            background:
              "linear-gradient(120deg, #8B0000 0%, #000066 50%, #FFDAB9 100%)",
            opacity: 0.85,
            filter: "blur(2px)",
          }}
        />

        {/* Foreground Content */}
        <div
          className="relative z-10 text-white text-left text-xl sm:text-xl md:text-xl font-normal space-y-6"
          style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)" }}
        >
          <motion.h2
            className="text-2xl sm:text-4xl md:text-4xl font-semibold text-center text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Co-Create Your Brand. Amplify Your Impact
          </motion.h2>

          <p>
            As an influencer, your audience trusts you, and your voice
            resonates. Imagine transforming that influence into a thriving
            brand, built from the ground up, with none of the operational
            headaches.
          </p>
          <p>
            The SerenSynth Launchpad is a unique partnership program designed
            exclusively for creators like you. We don't just offer services; we
            become your strategic partner, handling every complex detail so you
            can focus on what you do best: inspiring and connecting with your
            community.
          </p>
          <p className="font-bold">What We Handle, So You Don't Have To:</p>
          <p>
            -Product Sourcing & Innovation: Identifying trending products or
            developing unique offerings that align with your brand vision.
          </p>
          <p>
            -End-to-End Supply Chain: From manufacturing to warehousing and
            fulfillment, we manage it all.
          </p>
          <p>
            -Strategic Marketing & Ads: Crafting compelling campaigns to reach
            new audiences and drive sales.
          </p>
          <p>
            -Sales & E-commerce Management: Optimizing your online store and
            sales funnels for maximum conversions.
          </p>
          <p>
            -Customer Support: Providing seamless and professional support to
            your customers.
          </p>
          <p>
            -Compliance & Legal: Ensuring all aspects of your brand operate
            smoothly and legally. Your Influence. Our Expertise.
            One Powerful Brand.
          </p>

          <div className="text-center pt-4">
            <a
              href="https://forms.gle/aWX6GWNAxQL4PutC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-6 py-2 rounded-lg border border-[#e5c28c] hover:shadow-lg transition font-medium text-sm sm:text-base">
                Join Waitlist
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
