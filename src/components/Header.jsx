"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  // تشخیص اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // بستن منو با کلیک روی overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
      setIsProductsOpen(false);
    }
  };

  // انیمیشن منوی موبایل
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* هدر شیشه‌ای و چسبنده */}
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-md shadow-lg"
            : "bg-white/20 backdrop-blur-sm"
        }`}
        dir="rtl"
      >
        {/* نوار بالا */}
        <div className="flex items-center justify-between px-6 sm:px-12 py-4">
          {/* نام برند */}
          <div className="font-extrabold text-2xl sm:text-3xl text-black tracking-tight">
            <span className="text-4xl sm:text-5xl text-[#229799]">زانکو</span>
            <span className="text-2xl sm:text-3xl font-bold"> دکور</span>
            <span className="text-2xl sm:text-3xl font-bold"> (نیری)</span>
          </div>

          {/* دکمه منوی موبایل */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-black hover:text-[#37A0A2] transition-colors duration-300"
            aria-label="باز کردن منو"
          >
            <HiMenu size={32} />
          </button>

          {/* اطلاعات تماس و شبکه‌های اجتماعی (دسکتاپ) */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-black text-base md:text-lg font-bold">
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#37A0A2]" size={25} />
                09122655585 / 09190303033
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

            <div className="flex space-x-5 text-[#37A0A2]">
              <a
                href="https://t.me/nayeriaboozar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="تلگرام"
              >
                <FaTelegramPlane size={32} />
              </a>
              <a
                href="https://instagram.com/zankodecor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="اینستاگرام"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://wa.me/989122655585"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="واتساپ"
              >
                <FaWhatsapp size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* نوار پایین (منوی دسکتاپ) */}
        <div className="hidden md:flex items-center justify-center px-6 sm:px-12 py-3 bg-white/60 backdrop-blur-sm">
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
                    className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md shadow-xl rounded-md py-2 z-10 border border-gray-100"
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
          </nav>
        </div>
      </header>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-xl shadow-2xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="absolute top-6 left-6 text-gray-800 hover:text-[#37A0A2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="بستن منو"
              >
                <HiX size={32} />
              </button>

              <nav className="flex flex-col space-y-6 p-6 pt-20 text-black text-lg font-semibold text-right">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#37A0A2] transition-colors"
                >
                  خانه
                </Link>

                <div>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="hover:text-[#37A0A2] transition-colors w-full text-right"
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
                          className="hover:text-[#37A0A2] transition-colors text-base"
                        >
                          پرده آنتی باکتریال
                        </Link>
                        <Link
                          href="/shami"
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-[#37A0A2] transition-colors text-base"
                        >
                          پرده شمعی
                        </Link>
                        <Link
                          href="/office"
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-[#37A0A2] transition-colors text-base"
                        >
                          پرده اداری
                        </Link>
                        <Link
                          href="/colors"
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-[#37A0A2] transition-colors text-base"
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
                  className="hover:text-[#37A0A2] transition-colors"
                >
                  درباره ما
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#37A0A2] transition-colors"
                >
                  ارتباط با ما
                </Link>

                {/* اطلاعات تماس (موبایل) */}
                <div className="border-t border-gray-300 pt-6 mt-6">
                  <div className="flex flex-col gap-4 text-black text-base font-bold">
                    <span className="flex items-center gap-2">
                      <FaPhoneAlt className="text-[#37A0A2]" size={25} />
                      09122655585 / 09190303033
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

                {/* شبکه‌های اجتماعی (موبایل) */}
                <div className="flex space-x-5 text-[#37A0A2] pt-4">
                  <a
                    href="https://t.me/nayeriaboozar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <FaTelegramPlane size={30} />
                  </a>
                  <a
                    href="https://instagram.com/zankodecor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <FaInstagram size={30} />
                  </a>
                  <a
                    href="https://wa.me/989122655585"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <FaWhatsapp size={30} />
                  </a>
                </div>

                <div className="font-extrabold text-2xl text-black mt-6 tracking-tight">
                  <span className="text-4xl text-[#229799]">زانکو</span>
                  <span className="text-2xl font-bold"> دکور</span>
                  <span className="text-2xl font-bold"> (نیری)</span>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* فاصله برای محتوای اصلی (به خاطر fixed بودن هدر) */}
      <div className="h-32 md:h-28"></div>
    </>
  );
}