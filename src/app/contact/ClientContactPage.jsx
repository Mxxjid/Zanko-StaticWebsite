// app/contact/ClientContactPage.jsx
"use client";

import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ClientContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white py-12 px-4" dir="rtl">
        <div className="max-w-5xl mx-auto">

          {/* Hero */}
          <section className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#229799] mb-4"
            >
              تماس با زانکو دکور
            </motion.h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              مشاوره رایگان برای <strong>پرده آنتی باکتریال</strong>، <strong>بین تختی</strong> و <strong>اداری</strong>
            </p>
          </section>

          {/* Contact Info */}
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#229799] mb-8 text-center">راه‌های ارتباطی</h2>
            <div className="space-y-8 text-lg">

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4"
              >
                <FaPhoneAlt size={28} className="text-[#229799] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-xl mb-1">تلفن تماس:</p>
                  <p className="text-gray-700">
                    <a href="tel:+989122655585" className="font-bold text-[#229799] hover:underline">۰۹۱۲-۲۶۵۵۵۸۵</a> (مشاوره مستقیم)
                    <br />
                    <a href="tel:+989190303033" className="text-gray-600 hover:underline">۰۹۱۹-۰۳۰-۳۰۳۳</a>
                    <br />
                    <a href="tel:+982634725322" className="text-gray-600 hover:underline">۰۲۶-۳۴۷۲۵۳۲۲</a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <FaEnvelope size={28} className="text-[#229799] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-xl mb-1">ایمیل:</p>
                  <a href="mailto:info@zankodekor.ir" className="text-[#229799] hover:underline font-bold">
                    info@zankodekor.ir
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <FaMapMarkerAlt size={28} className="text-[#229799] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-xl mb-1">آدرس:</p>
                  <p className="text-gray-700 leading-relaxed">
                    استان البرز - کرج - کمالشهر - ولیعصر شمالی
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="font-bold text-xl mb-4">شبکه‌های اجتماعی:</p>
                <div className="flex gap-6 text-4xl">
                  <a
                    href="https://wa.me/989122655585"
                    target="_blank"
                    rel="noopener"
                    className="text-[#25D366] hover:scale-110 transition"
                    aria-label="واتساپ"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://t.me/nayeriaboozar"
                    target="_blank"
                    rel="noopener"
                    className="text-[#0088cc] hover:scale-110 transition"
                    aria-label="تلگرام"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href="https://instagram.com/zankodekor"
                    target="_blank"
                    rel="noopener"
                    className="text-[#E4405F] hover:scale-110 transition"
                    aria-label="اینستاگرام"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </motion.div>

            </div>
          </section>

          {/* Google Map */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#229799] mb-6 text-center">مکان ما روی نقشه</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.614602784364!2d50.86511731525876!3d35.838829980159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8d9b6f6a4c4b7b%3A0x8b1e0e8f6a4c4b7b!2sKamalshahr%2C%20Alborz%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="مکان زانکو دکور روی نقشه"
              />
            </motion.div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#229799] to-teal-600 text-white py-12 px-8 text-center rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">همین حالا تماس بگیرید!</h3>
            <p className="text-lg mb-6">مشاوره رایگان + بازدید از نمونه محصولات</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+989122655585"
                className="flex items-center justify-center gap-2 bg-white text-[#229799] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              >
                <FaPhoneAlt /> ۰۹۱۲-۲۶۵۵۵۸۵
              </a>
              <a
                href="https://wa.me/989122655585"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 bg-green-500 px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition"
              >
                واتساپ
              </a>
            </div>
          </motion.section>

        </div>
      </main>

      <Footer />
    </div>
  );
}