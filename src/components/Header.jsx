"use client";

import { useState, useEffect, useCallback } from "react";
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

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "ارتباط با ما" },
];

const productLinks = [
  { href: "/antibacterial", label: "پرده آنتی باکتریال" },
  { href: "/shami", label: "پرده شمعی" },
  { href: "/office", label: "پرده اداری" },
  { href: "/colors", label: "رنگ بندی" },
];

const socialLinks = [
  { href: "https://t.me/nayeriaboozar", icon: FaTelegramPlane, label: "تلگرام", hover: "hover:text-[#0088cc]" },
  { href: "https://instagram.com/zankodecor", icon: FaInstagram, label: "اینستاگرام", hover: "hover:text-[#E4405F]" },
  { href: "https://wa.me/989122655585", icon: FaWhatsapp, label: "واتساپ", hover: "hover:text-[#25D366]" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100"
            : "bg-white/40 backdrop-blur-md"
        }`}
        dir="rtl"
      >
        <div className="hidden lg:block border-b border-gray-100/50">
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-gray-600">
              <a href="tel:+989122655585" className="flex items-center gap-2 hover:text-[#229799] transition-colors">
                <FaPhoneAlt className="text-[#37A0A2]" size={14} />
                <span>۰۹۱۲-۲۶۵۵۵۸۵ / ۰۹۱۹-۰۳۰-۳۰۳۳</span>
              </a>
              <span className="flex items-center gap-2">
                <FaClock className="text-[#37A0A2]" size={14} />
                <span>شنبه تا پنج‌شنبه: ۹ صبح - ۶ عصر</span>
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#37A0A2]" size={14} />
                <span>البرز، کمالشهر، ولیعصر شمالی</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`text-gray-500 ${s.hover} transition-all duration-300 hover:scale-110`}
                  aria-label={s.label}>
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link href="/" className="flex items-center gap-1 shrink-0">
              <span className="text-2xl sm:text-3xl font-black text-[#229799]">زانکو</span>
              <span className="text-lg sm:text-xl font-bold text-gray-800"> دکور</span>
              <span className="hidden sm:inline text-sm font-medium text-gray-400 mr-1">(نیری)</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-[#229799] hover:bg-[#229799]/5 transition-all duration-300">
                  {link.label}
                </Link>
              ))}
              <div className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}>
                <button className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-[#229799] hover:bg-[#229799]/5 transition-all duration-300 flex items-center gap-1">
                  محصولات
                  <svg className="w-3.5 h-3.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-xl shadow-black/10 py-2 z-50 border border-gray-100"
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } }}
                      exit={{ opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.15 } }}>
                      {productLinks.map((link) => (
                        <Link key={link.href} href={link.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-[#229799]/5 hover:text-[#229799] transition-colors duration-200 text-sm font-medium">
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <button onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-gray-700 hover:text-[#229799] hover:bg-gray-100 rounded-xl transition-all duration-300"
              aria-label="باز کردن منو">
              <HiMenu size={26} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />
            <motion.div
              className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }}
              exit={{ x: "100%", transition: { duration: 0.25 } }}>
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link href="/" onClick={closeMenu} className="flex items-center gap-1">
                  <span className="text-xl font-black text-[#229799]">زانکو</span>
                  <span className="text-base font-bold text-gray-800"> دکور</span>
                </Link>
                <button onClick={closeMenu} className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors" aria-label="بستن منو">
                  <HiX size={24} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenu}
                    className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-[#229799]/5 hover:text-[#229799] transition-all duration-200">
                    {link.label}
                  </Link>
                ))}
                <div>
                  <button onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-[#229799]/5 hover:text-[#229799] transition-all duration-200">
                    محصولات
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden">
                        <div className="pr-4 py-1 space-y-1">
                          {productLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={closeMenu}
                              className="block px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-[#229799]/5 hover:text-[#229799] transition-all duration-200">
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
              <div className="p-4 border-t border-gray-100 space-y-3">
                <div className="space-y-2 text-sm text-gray-600">
                  <a href="tel:+989122655585" className="flex items-center gap-2 hover:text-[#229799] transition-colors">
                    <FaPhoneAlt className="text-[#37A0A2]" size={14} />
                    ۰۹۱۲-۲۶۵۵۵۸۵ / ۰۹۱۹-۰۳۰-۳۰۳۳
                  </a>
                  <span className="flex items-center gap-2">
                    <FaClock className="text-[#37A0A2]" size={14} />
                    شنبه تا پنج‌شنبه: ۹ صبح - ۶ عصر
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#37A0A2]" size={14} />
                    البرز، کمالشهر، ولیعصر شمالی
                  </span>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  {socialLinks.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className={`text-gray-500 ${s.hover} transition-all duration-300 hover:scale-110`}
                      aria-label={s.label}>
                      <s.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-18 lg:h-[calc(4.5rem+41px)]" />
    </>
  );
}
