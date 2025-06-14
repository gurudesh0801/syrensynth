"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0C1B3A] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white pb-8">
        {/* Logo and Socials */}
        <div className="space-y-6 border-r border-gray900 pr-6">
          <Link href="/">
            <Image
              src="/image/Logo.png"
              alt="Serensynth Logo"
              width={128}
              height={48}
              className="w-32 h-auto cursor-pointer"
            />
          </Link>
          <div>
            <p className="mb-2">Follow us on</p>
            <div className="flex gap-4 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a href="mailto:abc@gmail.com">
                <FaEnvelope />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Menu 1 */}
        <div className="space-y-2">
          <p className="font-medium mb-2">Menu</p>
          <Link href="/" className="block hover:underline">
            Home
          </Link>
          <Link href="/seren-media" className="block hover:underline">
            Seren Media
          </Link>
          <Link href="/seren-express" className="block hover:underline">
            Seren Express
          </Link>
          <Link href="/terms" className="block hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="block hover:underline">
            Privacy & Policy
          </Link>
        </div>

        {/* Menu 2 */}
        <div className="space-y-2">
          <p className="font-medium mb-2">Who we Are</p>
          <Link href="/careers" className="block hover:underline">
            Careers
          </Link>
          <Link href="/seren-media" className="block hover:underline">
            Seren Media
          </Link>
          <Link href="/support" className="block hover:underline">
            Support
          </Link>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <p className="font-medium mb-2">Terms & Conditions</p>
          <p>
            Address: 301,BALEWADI PLAZA,NEAR MITCON INSTITUTE,BALEWADI, PUNE
            CITY, MAHARASHTRA, PIN: 411045
          </p>
          <a href="mailto:abc@gmail.com" className="block hover:underline">
            Gmail: assist@serensynthlabs.com
          </a>
          <a href="tel:0000000000" className="block hover:underline">
            Mob No: +91 8062179313
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-white pt-6">
        Copyrights Serensynth Labs Private Limited © All Rights Reserved 2025
      </div>
    </footer>
  );
}
