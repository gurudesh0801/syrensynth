import React from "react";

export default function WhoWeAre() {
  return (
    <div className="text-[#0C1B3A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1B3A] to-[#1C2C4A] text-white text-center px-6 py-34">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Architects of Tomorrow's Brands
        </h1>
        <div className="border-b-2 w-70 mx-auto border-white mb-6"></div>
        <p className="max-w-4xl mx-auto text-lg font-light leading-relaxed">
          At Serenynth Labs Pvt Ltd, we don't just consult;{" "}
          <span className="font-bold">
            we build, operate, and accelerate brands for the future
          </span>
          . Our philosophy transcends traditional advisory roles. We believe in
          proving our strategies in the crucible of the real world. We actively
          create, launch, and scale our own in-house brands, meticulously
          testing and refining our approaches, before bringing these proven
          solutions to our clients. This hands-on, results-driven methodology
          ensures we deliver solutions that actually work, not just theoretical
          presentations.
        </p>
      </section>

      {/* Why We Exist */}
      <section className="text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Our Unique Approach: Real-World Proven Strategies
        </h2>
        <p className="text-xl font-medium text-blue-700 mb-4">
          The market is full of consultants who talk.{" "}
          <span className="underline">We execute.</span>
        </p>
        <p className="max-w-4xl mx-auto text-gray-700">
          What sets us apart is our commitment to real-world validation. We are
          a living laboratory of brand growth. By developing and nurturing our
          own ventures, we gain unparalleled insights into market dynamics,
          consumer behavior, and the most effective growth levers. This direct
          experience allows us to offer our partners not just advice, but
          battle-tested, data-backed strategies that have already driven
          tangible success.
        </p>
      </section>

      {/* Ecosystem Section */}
      <section className="bg-white px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Our Ecosystem of Excellence: In-House Brands Driving Innovation
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
          Our integrated ecosystem of specialized in-house brands exemplifies
          our capabilities and provides a comprehensive suite of solutions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {/* Seren Express */}
          <div className="bg-[#F5F6FF] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#0C1B3A]">
              Seren Express: Logistics & Fulfillment Mastery
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Impact:</strong> Delivered 13,000+ shipments for 30+
              businesses, saving 28% per shipment and reducing delivery time by
              50%.
            </p>
            <p className="text-gray-600">
              Your all-in-one logistics protocol for enterprises. From seamless
              domestic shipping to commercial solutions and warehouse
              fulfillment—we simplify complex supply chains.
            </p>
          </div>

          {/* Seren Media */}
          <div className="bg-[#F5F6FF] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#0C1B3A]">
              Seren Media: Brand Elevation & Performance Marketing
            </h3>
            <p className="text-gray-600">
              Where brands become icons. We specialize in creative strategy and
              digital precision to create, amplify, and elevate
              brands—delivering industry-leading campaign performance and client
              retention.
            </p>
          </div>

          {/* Seren Nest */}
          <div className="bg-[#F5F6FF] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#0C1B3A]">
              Seren Nest: Asset Under Management
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Impact:</strong> Achieved 130% revenue and 1400% returns
              for managed assets.
            </p>
            <p className="text-gray-600">
              Our dedicated arm for strategic asset management, optimizing value
              and driving venture growth through expert oversight and
              data-backed decision-making.
            </p>
          </div>
        </div>
      </section>
      {/* Our Comprehensive Services */}
      <section className="px-6 py-16 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Our Comprehensive Services: Empowering Your Growth
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 mb-10">
          Leveraging the expertise gained from our in-house brands, we offer a
          powerful suite of services designed for your success:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {[
            {
              title: "E-commerce Acceleration",
              desc: "Propelling your online business to new heights with optimized strategies and execution.",
            },
            {
              title: "Consultancy",
              desc: "Strategic guidance and actionable insights backed by our hands-on experience in building and scaling brands.",
            },
            {
              title: "Digital & Tech Solutions",
              desc: "Implementing cutting-edge digital tools and technological advancements to enhance your operations and market reach.",
            },
            {
              title: "Virtual and On-Site C-Suite Services",
              desc: "Providing executive-level strategic leadership, campaign oversight, and marketing transformation, seamlessly integrating with your team.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Achievements */}
      <section className="px-6 py-16 text-center bg-[#F9FAFB]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Brand Achievements: Our Collective Impact
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
          Our commitment to real-world results is reflected in the achievements
          across our ecosystem:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {[
            {
              highlight: "13000+ shipments for 30+ businesses",
              impact:
                "Saved 28% per shipment and reduced delivery time by 50% for our clients.",
            },
            {
              highlight: "130% Revenue and 1400% Returns",
              impact:
                "Achieved for managed assets through our strategic asset management arm.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.highlight}
              </h3>
              <p className="text-gray-700">{item.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Industries We Serve
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          We apply our proven methodologies and deep industry expertise to a
          diverse range of sectors:
        </p>

        {/* Wrap grid in flex for centering last row */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl text-left">
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
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition font-medium text-blue-900"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-[#0C1B3A] to-[#1C2C4A] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Partner with a Team that Builds, Scales & Delivers Real-World
          Results?
        </h2>
        <p className="max-w-3xl mx-auto text-lg font-light mb-10">
          We are not just a service provider; we are your strategic partner in
          building iconic brands.
          <br />
          Let&apos;s create the future—together.
        </p>
        <button className="bg-white text-[#0C1B3A] px-8 py-3 rounded-lg text-base font-semibold shadow hover:shadow-xl transition duration-300">
          Start Your Journey
        </button>
      </section>
    </div>
  );
}
