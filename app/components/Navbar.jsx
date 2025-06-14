"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Who we are", href: "/who-we-are" },
    { label: "Seren Media", href: "/seren-media" },
    { label: "Seren Express", href: "/seren-express" },
    { label: "Careers", href: "/careers" },
  ];
  const isContactPage = pathname === "/contact";
  const isSerenExpress = pathname === "/seren-express";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/Logo.png"
            alt="SerenSynth Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={i}
                href={item.href}
                className={classNames(
                  "text-sm font-medium relative group transition-colors duration-200",
                  isContactPage
                    ? "text-[#0C1B3A]"
                    : scrolled
                    ? "text-[#05143d]"
                    : "text-white",
                  isActive && !scrolled && !isContactPage && "text-[#d4b180]"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="block w-full h-[2px] bg-[#d4b180] absolute bottom-[-4px] left-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className={classNames(
            "hidden md:inline-block text-sm px-5 py-2 rounded-full font-medium transition-all duration-200",
            isContactPage
              ? "bg-[#0C1B3A] text-white"
              : scrolled
              ? "bg-[#05143d] text-white hover:opacity-90"
              : "bg-white text-[#05143d] hover:bg-[#f5f5f5]"
          )}
        >
          Consult with us
        </Link>

        {/* Hamburger */}
        <button
          className={classNames(
            "md:hidden text-2xl z-50 transition-colors",
            scrolled ? "text-black" : "text-red-700"
          )}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 px-6 pt-24 flex flex-col items-start gap-6"
          >
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={classNames(
                  "text-base font-medium",
                  pathname === item.href ? "text-[#d4b180]" : "text-[#05143d]"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 text-sm px-5 py-2 rounded-full font-medium bg-[#05143d] text-white"
            >
              Consult with us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
