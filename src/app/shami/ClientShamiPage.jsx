"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaPhoneAlt, FaDoorOpen, FaRecycle, FaCogs, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: FaDoorOpen, text: "حریم خصوصی کامل" },
  { icon: FaCheckCircle, text: "شستشوی بیش از ۴۰ بار" },
  { icon: FaRecycle, text: "ریل استیل/آلومینیوم" },
  { icon: FaCogs, text: "نصب روی سقف و دیوار" },
  { icon: FaCheckCircle, text: "باز و بسته شدن آسان" },
  { icon: FaShieldAlt, text: "گارانتی ۲ ساله" },
];

const images = [
  { src: "/img/shami/پرده-بیمارستانی-20.jpg", alt: "پرده شمعی بین تختی - نصب در بخش بستری" },
  { src: "/img/shami/پرده-بیمارستانی-22.jpg", alt: "پرده بین تختی با ریل استیل" },
  { src: "/img/shami/پرده-بیمارستانی-24.jpg", alt: "پرده شمعی - رنگ آبی ملایم" },
  { src: "/img/shami/پرده-بیمارستانی-28.jpg", alt: "پرده بین تختی - نصب روی سقف" },
  { src: "/img/shami/پرده-بیمارستانی-37.jpg", alt: "پرده شمعی - نصب در بخش زنان" },
  { src: "/img/shami/پرده-بیمارستانی-44.jpg", alt: "جزئیات ریل استیل و پارچه شمعی" },
];

export default function ClientShamiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1" dir="rtl">
        <section className="bg-gradient-to-b from-[#229799]/5 to-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-[#229799]/10 text-[#229799] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">محصولات</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">پرده بین تختی بیمارستانی (شمعی)</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">حریم خصوصی کامل + شستشوی آسان + نصب سریع در بیمارستان و کلینیک</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {images.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{img.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg"><strong>پرده بین تختی بیمارستانی (شمعی)</strong> یکی از مهم‌ترین تجهیزات برای حفظ <strong>حریم خصوصی بیماران</strong> در بخش‌های بستری است.</p>
            <p className="text-lg">زانکو دکور این پرده‌ها را با <strong>قابلیت شستشوی بیش از ۴۰ بار</strong>، <strong>ریل استیل یا آلومینیوم</strong> و <strong>نصب آسان روی سقف و دیوار</strong> تولید می‌کند.</p>
            <p className="text-lg">پارچه مقاوم در برابر رطوبت، <strong>ضد لک</strong> و <strong>قابل شستشو با شوینده‌های بیمارستانی</strong> — بدون افت کیفیت. رنگ‌های ملایم برای ایجاد حس آرامش و <strong>گارانتی ۲ ساله</strong>.</p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">ویژگی‌های کلیدی پرده شمعی</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-[#229799]/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="text-[#229799]" size={20} />
                  </div>
                  <span className="font-medium text-gray-800">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#229799] to-[#1a7a7c] text-white py-12 px-8 text-center rounded-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">برای مشاوره رایگان و سفارش تماس بگیرید</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+989122655585" className="inline-flex items-center justify-center gap-2 bg-white text-[#229799] px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300">
                  <FaPhoneAlt /> ۰۹۱۲-۲۶۵۵۵۸۵
                </a>
                <a href="https://wa.me/989122655585" target="_blank" rel="noopener"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 px-8 py-3.5 rounded-xl font-bold hover:bg-green-600 transition-all duration-300">
                  واتساپ
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
