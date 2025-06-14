"use client";

import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="bg-gradient-to-b from-[#0C1B3A] to-[#1C2C4A] min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" text-center px-6 pt-30 pb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-red-500">
          Terms and conditions
        </h1>
      </motion.section>

      {/* Terms Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-10 md: px-6 text-sm md:text-base text-white space-y-4"
      >
        <p>
          <strong>These</strong> Terms and Conditions, along with privacy policy
          or other terms (“Terms”) constitute a binding agreement by and between
          SERENSYNTH LABS PRIVATE LIMITED, (“Website Owner” or “we” or “us” or
          “our”) and you (“you” or “your”) and relate to your use of our
          website, goods (as applicable) or services (as applicable)
          (collectively, “Services”).
        </p>

        <p>
          By using our website and availing the Services, you agree that you
          have read and accepted these Terms (including the Privacy Policy). We
          reserve the right to modify these Terms at any time and without
          assigning any reason. It is your responsibility to periodically review
          these Terms to stay informed of updates.
        </p>

        <p className="font-semibold">
          The use of this website or availing of our Services is subject to the
          following terms of use:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            To access and use the Services, you agree to provide true, accurate
            and complete information to us during and after registration...
          </li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness...
          </li>
          <li>
            Your use of our Services and the website is solely at your own
            risk...
          </li>
          <li>
            The contents of the Website and the Services are proprietary to
            Us...
          </li>
          <li>
            You acknowledge that unauthorized use of the Website or the Services
            may lead to action against you...
          </li>
          <li>
            You agree to pay us the charges associated with availing the
            Services.
          </li>
          <li>
            You agree not to use the website and/or Services for any purpose
            that is unlawful...
          </li>
          <li>
            You agree and acknowledge that website and the Services may contain
            links to other third party websites...
          </li>
          <li>
            You understand that upon initiating a transaction for availing the
            Services you are entering into a legally binding...
          </li>
          <li>
            You shall be entitled to claim a refund of the payment made by
            you...
          </li>
          <li>
            Notwithstanding anything contained in these Terms, the parties shall
            not be liable...
          </li>
          <li>
            These Terms and any dispute or claim relating to it shall be
            governed by the laws of India.
          </li>
          <li>
            All disputes shall be subject to the exclusive jurisdiction of the
            courts in PUNE CITY, MAHARASHTRA.
          </li>
          <li>
            All concerns relating to these Terms must be communicated to us
            using the contact information provided on this website.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
