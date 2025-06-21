"use client";

import React from "react";

export default function WhoWeAre() {
  return (
    <div className="text-[#0C1B3A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1B3A] to-[#1C2C4A] text-white text-center px-4 sm:px-6 py-34 sm:py-34">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6">
          Architects of Tomorrow's Brands
        </h1>
        <div className="border-b-2 w-40 sm:w-72 mx-auto border-white mb-4 sm:mb-6"></div>
        <p className="max-w-4xl mx-auto text-base sm:text-lg font-light leading-relaxed">
          At Serenynth Labs Pvt Ltd, we don't just consult;{" "}
          <span className="font-bold">
            we build, operate, and accelerate brands for the future
          </span>
          . Our philosophy transcends traditional advisory roles. We believe in
          proving our strategies in the crucible of the real world. We actively
          create, launch, and scale our own in-house brands, meticulously
          testing and refining our approaches, before bringing these proven
          solutions to our clients.
        </p>
      </section>

      {/* Why We Exist */}
      <section className="text-center px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          Our Unique Approach: Real-World Proven Strategies
        </h2>
        <p className="text-base sm:text-xl font-medium text-blue-700 mb-3 sm:mb-4">
          The market is full of consultants who talk.{" "}
          <span className="underline">We execute.</span>
        </p>
        <p className="max-w-4xl mx-auto text-sm sm:text-base text-gray-700">
          What sets us apart is our commitment to real-world validation. We are
          a living laboratory of brand growth. By developing and nurturing our
          own ventures, we gain unparalleled insights into market dynamics,
          consumer behavior, and the most effective growth levers.
        </p>
      </section>

      {/* Ecosystem Section */}
      <section className="bg-white px-4 sm:px-6 py-14 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
          Our Ecosystem of Excellence: In-House Brands Driving Innovation
        </h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 mb-6 sm:mb-10">
          Our integrated ecosystem of specialized in-house brands exemplifies
          our capabilities and provides a comprehensive suite of solutions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 text-left max-w-6xl mx-auto">
          {/* Seren Express */}
          <div className="bg-[#F5F6FF] p-5 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0C1B3A]">
              Seren Express: Logistics & Fulfillment Mastery
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-2">
              <strong>Impact:</strong> Delivered 13,000+ shipments for 30+
              businesses, saving 28% per shipment and reducing delivery time by
              50%.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              From domestic shipping to commercial warehousing—we simplify
              complex supply chains.
            </p>
          </div>

          {/* Seren Media */}
          <div className="bg-[#F5F6FF] p-5 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0C1B3A]">
              Seren Media: Brand Elevation & Performance Marketing
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Where brands become icons. We specialize in creative strategy and
              digital precision to amplify brands—delivering top campaign
              performance.
            </p>
          </div>

          {/* Seren Nest */}
          <div className="bg-[#F5F6FF] p-5 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0C1B3A]">
              Seren Nest: Asset Under Management
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-2">
              <strong>Impact:</strong> Achieved 130% revenue and 1400% returns
              for managed assets.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Strategic asset management to optimize value and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Services */}
      <section className="px-4 sm:px-6 py-14 sm:py-16 text-center bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
          Our Comprehensive Services: Empowering Your Growth
        </h2>
        <p className="max-w-4xl mx-auto text-sm sm:text-base text-gray-700 mb-8 sm:mb-10">
          Leveraging our in-house expertise, we offer a powerful suite of
          services tailored to your success:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto text-left">
          {[
            {
              title: "E-commerce Acceleration",
              desc: "Propelling your online business to new heights with optimized strategies.",
            },
            {
              title: "Consultancy",
              desc: "Strategic guidance backed by hands-on experience in scaling brands.",
            },
            {
              title: "Digital & Tech Solutions",
              desc: "Using digital tools and tech to improve operations and market reach.",
            },
            {
              title: "Virtual & On-Site C-Suite",
              desc: "Executive leadership, campaign oversight, and integrated strategy.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Achievements */}
      <section className="px-4 sm:px-6 py-14 sm:py-16 text-center bg-[#F9FAFB]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
          Brand Achievements: Our Collective Impact
        </h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 mb-8 sm:mb-10">
          Real-world success stories from across our in-house brand ecosystem:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto text-left">
          {[
            {
              highlight: "13000+ shipments for 30+ businesses",
              impact:
                "Saved 28% per shipment and cut delivery time in half for our clients.",
            },
            {
              highlight: "130% Revenue and 1400% Returns",
              impact:
                "Achieved through strategic growth and smart asset management.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
                {item.highlight}
              </h3>
              <p className="text-sm text-gray-700">{item.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="px-4 sm:px-6 py-14 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
          Industries We Serve
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto">
          We apply our proven strategies across these diverse sectors:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto text-left">
          {[
            "E-Commerce",
            "D2C & FMCG Brands",
            "Real Estate",
            "Startups & Entrepreneurs",
            "Media & Entertainment",
            "Education & Ed-Tech",
            "Manufacturing",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow hover:shadow-md transition font-medium text-blue-900 text-sm sm:text-base"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-6 py-14 sm:py-20 bg-gradient-to-br from-[#0C1B3A] to-[#1C2C4A] text-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Ready to Partner with a Team that Builds & Delivers Real Results?
        </h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-lg font-light mb-8 sm:mb-10">
          We’re not just a service provider—we’re your strategic partner in
          building iconic brands. Let’s create the future—together.
        </p>
        <button className="bg-white text-[#0C1B3A] px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold shadow hover:shadow-xl transition duration-300">
          Start Your Journey
        </button>
      </section>
    </div>
  );
}
