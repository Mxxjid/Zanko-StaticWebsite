"use client";

import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const contactMethods = [
  { icon: FaPhoneAlt, title: "تلفن تماس", lines: ["۰۹۱۲-۲۶۵۵۵۸۵ (مشاوره مستقیم)", "۰۹۱۹-۰۳۰-۳۰۳۳", "۰۲۶-۳۴۷۲۵۳۲۲"], href: "tel:+989122655585", color: "text-[#229799]" },
  { icon: FaEnvelope, title: "ایمیل", lines: ["info@zankodekor.ir"], href: "mailto:info@zankodekor.ir", color: "text-[#229799]" },
  { icon: FaMapMarkerAlt, title: "آدرس", lines: ["استان البرز - کرج - کمالشهر - ولیعصر شمالی"], href: null, color: "text-[#229799]" },
  { icon: FaClock, title: "ساعات کاری", lines: ["شنبه تا پنج‌شنبه: ۹ صبح - ۶ عصر"], href: null, color: "text-[#229799]" },
];

const socials = [
  { href: "https://wa.me/989122655585", icon: FaWhatsapp, label: "واتساپ", color: "text-[#25D366] hover:bg-[#25D366]/10" },
  { href: "https://t.me/nayeriaboozar", icon: FaTelegramPlane, label: "تلگرام", color: "text-[#0088cc] hover:bg-[#0088cc]/10" },
  { href: "https://instagram.com/zankodekor", icon: FaInstagram, label: "اینستاگرام", color: "text-[#E4405F] hover:bg-[#E4405F]/10" },
];

export default function ClientContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1" dir="rtl">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#229799]/5 to-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-[#229799]/10 text-[#229799] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">تماس با ما</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">ارتباط با زانکو دکور</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">مشاوره رایگان برای پرده آنتی باکتریال، بین تختی و اداری</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#229799]/10 rounded-xl flex items-center justify-center shrink-0">
                      <method.icon className="text-[#229799]" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{method.title}</h3>
                      {method.lines.map((line, j) => (
                        method.href && j === 0 ? (
                          <a key={j} href={method.href} className="block text-gray-600 hover:text-[#229799] transition-colors">{line}</a>
                        ) : (
                          <p key={j} className="text-gray-600">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social + Map */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">شبکه‌های اجتماعی</h3>
                <div className="space-y-4">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${s.color}`}>
                      <s.icon size={28} />
                      <span className="font-medium text-lg">{s.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-80 lg:h-auto"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.614602784364!2d50.86511731525876!3d35.838829980159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8d9b6f6a4c4b7b%3A0x8b1e0e8f6a4c4b7b!2sKamalshahr%2C%20Alborz%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="مکان زانکو دکور روی نقشه"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#229799] to-[#1a7a7c] text-white py-12 px-8 text-center rounded-3xl"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">همین حالا تماس بگیرید!</h3>
              <p className="text-white/80 mb-8 text-lg">مشاوره رایگان + بازدید از نمونه محصولات</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+989122655585"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#229799] px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300">
                  <FaPhoneAlt /> ۰۹۱۲-۲۶۵۵۵۸۵
                </a>
                <a href="https://wa.me/989122655585" target="_blank" rel="noopener"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 px-8 py-3.5 rounded-xl font-bold hover:bg-green-600 transition-all duration-300">
                  واتساپ
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
