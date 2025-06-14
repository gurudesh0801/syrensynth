"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-gradient-to-b from-[#0C1B3A] to-[#1C2C4A] min-h-screen text-[#0C1B3A] px-4 md:px-20 py-12 pt-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#FF5E5B] mb-8">
          Terms and conditions
        </h1>

        <section className="space-y-6 text-sm md:text-base">
          <div>
            <h2 className="font-semibold text-white">
              Cancellation and Refund Policy:
            </h2>
            <p className="text-xs text-gray-500">
              Last updated on 07-03-2025 08:41:28
            </p>
            <p className="mt-2 text-white">
              SERENSYNTH LABS PRIVATE LIMITED believes in helping its customers
              as far as possible, and has therefore a liberal cancellation
              policy. Under this policy:
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-4 text-white">
            <li>
              Cancellations will be considered only if the request is made
              immediately after placing the order. However, the cancellation
              request may not be entertained if the orders have been
              communicated to the vendors/merchants and they have initiated the
              process of shipping them.
            </li>
            <li>
              SERENSYNTH LABS PRIVATE LIMITED does not accept cancellation
              requests for perishable items like flowers, eatables etc. However,
              refund/replacement can be made if the customer establishes that
              the quality of product delivered is not good.
            </li>
            <li>
              In case of receipt of damaged or defective items please report the
              same to our Customer Service team. The request will, however, be
              entertained once the merchant has checked and determined the same
              at his own end. This should be reported within{" "}
              <strong>Only same day</strong> days of receipt of the products. In
              case you feel that the product received is not as shown on the
              site or as per your expectations, you must bring it to the notice
              of our customer service within <strong>Only same day</strong> days
              of receiving the product. The Customer Service Team after looking
              into your complaint will take an appropriate decision.
            </li>
            <li>
              In case of complaints regarding products that come with a warranty
              from manufacturers, please refer the issue to them. In case of any
              Refunds approved by the SERENSYNTH LABS PRIVATE LIMITED, it'll
              take <strong>1-2 Days</strong> days for the refund to be processed
              to the end customer.
            </li>
          </ul>

          <div className="pt-4 text-white">
            <p>
              <strong>CIN:</strong> U62090MH2023PTC416330
            </p>
            <p>
              <strong>Registered Office:</strong> Flat No 18, 5th Floor,
              Mahalaxmi Down Town, Savarkar Nagar, Gangapur Road, Udhji Maratha
              Boarding, Nashik, Nashik, Maharashtra, India,{" "}
              <a className="text-blue-600 underline" href="#">
                422007
              </a>
            </p>
            <p>
              <strong>Corporate Office:</strong> 301, BALEWADI PLAZA, NEAR
              MITCON INSTITUTE, BALEWADI, PUNE CITY, MAHARASHTRA, PIN: 411045
            </p>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
