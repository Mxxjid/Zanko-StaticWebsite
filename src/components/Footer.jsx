"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Animation variants for footer
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for footer items
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12" dir="rtl">
      <motion.div
        className="max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
          <div className="relative w-32 h-16 mb-4">
            <Image
              src="/img/others/cropped-photo_2024-09-17_17-26-59-1.png"
              alt="لوگوی زانکو دکور"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base sm:text-lg text-gray-300 text-right">
            زانکو دکور، تولیدکننده پرده‌های بیمارستانی آنتی‌باکتریال، زبرا و شمعی با کیفیت بالا و خدمات سراسری در ایران.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div variants={itemVariants} className="flex flex-col  items-start ">
          <h3 className="text-xl font-bold text-[#37A0A2] mb-4">لینک‌های مفید</h3>
          <nav>
            <ul className="space-y-2 text-base sm:text-lg">
              <li>
                <Link href="/" className="hover:text-[#37A0A2] transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#37A0A2] transition-colors">
                  گالری تصاویر
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#37A0A2] transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#37A0A2] transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-start">
          <h3 className="text-xl font-bold text-[#37A0A2] mb-4">تماس با ما</h3>
          <ul className="space-y-2 text-base sm:text-lg text-gray-300">
            <li>
              تلفن: <a href="tel:+989122655585" className="hover:text-[#37A0A2] transition-colors">09122655585</a>
            </li>
            <li>
              ایمیل: <a href="mailto:info@zankodekor.ir" className="hover:text-[#37A0A2] transition-colors">info@zankodekor.ir</a>
            </li>
            <li>آدرس: تهران، البرز، کمالشهر، ولیعصر شمالی</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a
              href="https://t.me/nayeriaboozar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تلگرام زانکو دکور"
              className="hover:text-[#37A0A2] transition-colors"
            >
              <FaTelegramPlane className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/zankodecor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="اینستاگرام زانکو دکور"
              className="hover:text-[#37A0A2] transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/989122655585"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتس‌اپ زانکو دکور"
              className="hover:text-[#37A0A2] transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="max-w-6xl mx-auto px-6 sm:px-12 text-center mt-8 border-t border-gray-700 pt-4"
        variants={itemVariants}
      >
        <p className="text-base text-gray-400">
          © {new Date().getFullYear()} زانکو دکور. تمامی حقوق محفوظ است.
        </p>
      </motion.div>
    </footer>
  );
}