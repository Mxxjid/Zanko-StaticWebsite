"use client";

import { useState } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Function to close menu on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
      setIsProductsOpen(false);
    }
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation variants for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <header
      className="w-full shadow-lg bg-gradient-to-r from-white to-gray-300 "
      dir="rtl"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 sm:px-12 py-4">
        {/* Brand name */}
        <div className="font-extrabold text-2xl sm:text-3xl text-black tracking-tight">
          <span className="text-4xl sm:text-5xl text-[#229799]">زانکو</span>
          <span className="text-2xl sm:text-3xl font-bold"> دکور</span>
          <span className="text-2xl sm:text-3xl font-bold"> (نیری)</span>
        </div>

        {/* Mobile menu button (visible on mobile only) */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-black hover:text-[#37A0A2] transition-colors duration-300"
          aria-label="Open menu"
        >
          <HiMenu size={32} />
        </button>

        {/* Contact info and social icons (desktop only) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Contact info */}
          <div className="flex items-center gap-6 text-black text-base md:text-lg font-bold">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#37A0A2]" size={25} />
              0912-265-5585
            </span>
            <span className="flex items-center gap-2">
              <FaClock className="text-[#37A0A2]" size={25} />
              شنبه تا پنج‌شنبه: ۹ صبح - ۶ عصر
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#37A0A2]" size={25} />
              تهران، البرز، کمالشهر، ولیعصر شمالی
            </span>
          </div>

          {/* Social icons */}
          <div className="flex space-x-5 text-[#37A0A2]">
            <a
              href="#"
              className="hover:text-[#37A0A2] transform hover:scale-110 transition-all duration-300"
              aria-label="Telegram"
            >
              <FaTelegramPlane size={32} />
            </a>
            <a
              href="#"
              className="hover:text-[#37A0A2] transform hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="#"
              className="hover:text-[#37A0A2] transform hover:scale-110 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={32} />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom bar (desktop navigation) */}
      <div className="hidden md:flex items-center justify-center px-6 sm:px-12 py-4 bg-white ">
        <nav className="flex space-x-10 text-black text-lg font-semibold">
          <Link
            href="/"
            className="relative group hover:text-[#37A0A2] transition-colors duration-300"
          >
            خانه
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#37A0A2] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <span className="cursor-pointer hover:text-[#37A0A2] transition-colors duration-300">
              محصولات
            </span>
            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link
                    href="/antibacterial"
                    className="block px-4 py-2 text-black hover:bg-[#37A0A2] hover:text-white transition-colors duration-200"
                  >
                    پرده آنتی باکتریال
                  </Link>
                  <Link
                    href="/shami"
                    className="block px-4 py-2 text-black hover:bg-[#37A0A2] hover:text-white transition-colors duration-200"
                  >
                    پرده شمعی
                  </Link>
                  <Link
                    href="/office"
                    className="block px-4 py-2 text-black hover:bg-[#37A0A2] hover:text-white transition-colors duration-200"
                  >
                    پرده اداری
                  </Link>
                  <Link
                    href="/colors"
                    className="block px-4 py-2 text-black hover:bg-[#37A0A2] hover:text-white transition-colors duration-200"
                  >
                    رنگ بندی
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#37A0A2] group-hover:w-full transition-all duration-300"></span>
          </div>
          <Link
            href="/about"
            className="relative group hover:text-[#37A0A2] transition-colors duration-300"
          >
            درباره ما
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#37A0A2] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="relative group hover:text-[#37A0A2] transition-colors duration-300"
          >
            ارتباط با ما
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#37A0A2] group-hover:w-full transition-all duration-300"></span>
          </Link>
          {/* <Link
            href="/services"
            className="relative group hover:text-[#37A0A2] transition-colors duration-300"
          >
            خدمات
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#37A0A2] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/blog"
            className="relative group hover:text-[#37A0A2] transition-colors duration-300"
          >
            وبلاگ
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#37A0A2] group-hover:w-full transition-all duration-300"></span>
          </Link> */}
        </nav>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="fixed top-0 right-0 w-80 h-full bg-gray-300 shadow-2xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close button */}
              <button
                className="self-end p-6 text-gray-800 hover:text-[#37A0A2] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <HiX size={32} />
              </button>

              {/* Menu links */}
              <nav className="flex flex-col space-y-6 p-6 text-black text-lg font-semibold unevent text-right">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#37A0A2] transition-colors duration-300"
                >
                  خانه
                </Link>
                <div>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="hover:text-[#37A0A2] transition-colors duration-300 text-right w-full"
                  >
                    محصولات
                  </button>
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        className="flex flex-col pr-4 pt-2 space-y-2"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <Link
                          href="/antibacterial"
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-[#37A0A2] transition-colors duration-300 text-base"
                        >
                          پرده آنتی باکتریال
                        </Link>
                        <Link
                          href="/shami"
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-[#37A0A2] transition-colors duration-300 text-base"
                        >
                          پرده شمعی
                        </Link>
                        <Link
                          href="/office"
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-[#37A0A2] transition-colors duration-300 text-base"
                        >
                          پرده اداری
                        </Link>
                        <Link
                          href="/colors"
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-[#37A0A2] transition-colors duration-300 text-base"
                        >
                          رنگ بندی
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#37A0A2] transition-colors duration-300"
                >
                  درباره ما
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#37A0A2] transition-colors duration-300"
                >
                  ارتباط با ما
                </Link>
                {/* <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#37A0A2] transition-colors duration-300"
                >
                  خدمات
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#37A0A2] transition-colors duration-300"
                >
                  وبلاگ
                </Link> */}
                {/* Contact info (mobile only) */}
                <div className="border-t border-gray-500 pt-6 mt-6">
                  <div className="flex flex-col gap-4 text-black text-base font-bold">
                    <span className="flex items-center gap-2">
                      <FaPhoneAlt className="text-[#37A0A2]" size={25} />
                      0912-265-5585
                    </span>
                    <span className="flex items-center gap-2">
                      <FaClock className="text-[#37A0A2]" size={25} />
                      شنبه تا پنج‌شنبه: ۹ صبح - ۶ عصر
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#37A0A2]" size={25} />
                      تهران، البرز، کمالشهر، ولیعصر شمالی
                    </span>
                  </div>
                </div>
                {/* Social icons (mobile only) */}
                <div className="flex space-x-5 text-[#37A0A2] pt-4">
                  <a
                    href="https://t.me/nayeriaboozar"
                    className="hover:text-[#37A0A2] transform hover:scale-110 transition-all duration-300"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane size={30} />
                  </a>
                  <a
                    href="https://instagram.com/zankodecor"
                    className="hover:text-[#37A0A2] transform hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={30} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#37A0A2] transform hover:scale-110 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={30} />
                  </a>
                </div>
                <div className="font-extrabold text-2xl sm:text-3xl text-black mt-5 tracking-tight">
                  <span className="text-4xl sm:text-5xl text-[#229799]">
                    زانکو
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold"> دکور</span>
                  <span className="text-2xl sm:text-3xl font-bold">
                    {" "}
                    (نیری)
                  </span>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
