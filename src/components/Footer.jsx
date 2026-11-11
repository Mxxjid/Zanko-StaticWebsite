import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const footerLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/antibacterial", label: "پرده آنتی باکتریال" },
  { href: "/shami", label: "پرده شمعی" },
  { href: "/office", label: "پرده اداری" },
  { href: "/colors", label: "رنگ بندی" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

const socialLinks = [
  { href: "https://t.me/nayeriaboozar", icon: FaTelegramPlane, label: "تلگرام", color: "hover:text-[#0088cc]" },
  { href: "https://instagram.com/zankodecor", icon: FaInstagram, label: "اینستاگرام", color: "hover:text-[#E4405F]" },
  { href: "https://wa.me/989122655585", icon: FaWhatsapp, label: "واتساپ", color: "hover:text-[#25D366]" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black text-[#37A0A2]">زانکو</span>
              <span className="text-lg font-bold"> دکور</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              تولیدکننده پرده‌های بیمارستانی آنتی‌باکتریال، زبرا و شمعی با کیفیت بالا و خدمات سراسری در ایران.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 ${s.color} hover:bg-gray-700 transition-all duration-300 hover:scale-110`}
                  aria-label={s.label}>
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">دسترسی سریع</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#37A0A2] transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">محصولات</h3>
            <ul className="space-y-2.5">
              <li><Link href="/antibacterial" className="text-gray-400 hover:text-[#37A0A2] transition-colors duration-200 text-sm">پرده آنتی باکتریال</Link></li>
              <li><Link href="/shami" className="text-gray-400 hover:text-[#37A0A2] transition-colors duration-200 text-sm">پرده شمعی بین تختی</Link></li>
              <li><Link href="/office" className="text-gray-400 hover:text-[#37A0A2] transition-colors duration-200 text-sm">پرده اداری</Link></li>
              <li><Link href="/colors" className="text-gray-400 hover:text-[#37A0A2] transition-colors duration-200 text-sm">رنگ بندی</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">تماس با ما</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+989122655585" className="flex items-center gap-2 hover:text-[#37A0A2] transition-colors">
                  <FaPhoneAlt className="text-[#37A0A2] shrink-0" size={14} />
                  ۰۹۱۲-۲۶۵۵۵۸۵
                </a>
              </li>
              <li>
                <a href="mailto:info@zankodekor.ir" className="flex items-center gap-2 hover:text-[#37A0A2] transition-colors">
                  <FaEnvelope className="text-[#37A0A2] shrink-0" size={14} />
                  info@zankodekor.ir
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#37A0A2] shrink-0 mt-0.5" size={14} />
                <span>البرز، کمالشهر، ولیعصر شمالی</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-[#37A0A2] shrink-0" size={14} />
                <span>شنبه تا پنج‌شنبه: ۹ صبح - ۶ عصر</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} زانکو دکور. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
