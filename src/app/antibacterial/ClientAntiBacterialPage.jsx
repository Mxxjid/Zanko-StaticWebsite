"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaPhoneAlt, FaShieldAlt, FaTint, FaRecycle, FaCogs } from "react-icons/fa";

const features = [
  { icon: FaShieldAlt, text: "آنتی باکتریال ۹۹.۹٪" },
  { icon: FaTint, text: "شستشوی ۴۰+ بار" },
  { icon: FaCheckCircle, text: "ضد لک و ضد بو" },
  { icon: FaRecycle, text: "ریل آلومینیومی ضد زنگ" },
  { icon: FaCogs, text: "نصب آسان" },
  { icon: FaCheckCircle, text: "گارانتی ۲ ساله" },
];

const images = [
  { src: "/img/anti/پرده-بیمارستانی-10.jpg", alt: "پرده آنتی باکتریال - نصب در بیمارستان" },
  { src: "/img/anti/پرده-بیمارستانی-34.jpg", alt: "پرده آنتی باکتریال - ریل آلومینیومی" },
  { src: "/img/anti/پرده-بیمارستانی-17.jpg", alt: "پرده آنتی باکتریال - رنگ آبی" },
  { src: "/img/anti/پرده-بیمارستانی-13.jpg", alt: "پرده آنتی باکتریال - نصب در کلینیک" },
  { src: "/img/anti/پرده-بیمارستانی-54.jpg", alt: "نصب در ICU" },
  { src: "/img/anti/پرده-بیمارستانی-1.jpg", alt: "جزئیات ریل و پارچه" },
];

export default function ClientAntiBacterialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1" dir="rtl">
        <section className="bg-gradient-to-b from-[#229799]/5 to-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-[#229799]/10 text-[#229799] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">محصولات</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">پرده آنتی باکتریال بیمارستانی</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">بهداشت ۹۹.۹٪ + شستشوی ۴۰+ بار + زیبایی و دوام</p>
            </motion.div>
          </div>
        </section>

        {/* Image Grid */}
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

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg"><strong>پرده آنتی باکتریال بیمارستانی</strong> زانکو دکور با تکنولوژی پیشرفته، رشد باکتری و قارچ را تا <strong>۹۹.۹٪ مهار می‌کند</strong>.</p>
            <p className="text-lg">قابلیت <strong>شستشوی بیش از ۴۰ بار</strong>، <strong>ضد لک</strong>، <strong>ضد بو</strong> و مقاوم در برابر رطوبت.</p>
            <p className="text-lg">ریل <strong>آلومینیومی ضد زنگ</strong>، نصب آسان، رنگ‌بندی متنوع و <strong>گارانتی ۲ ساله</strong>.</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">ویژگی‌های کلیدی</h2>
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

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#229799] to-[#1a7a7c] text-white py-12 px-8 text-center rounded-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">سفارش و مشاوره رایگان</h3>
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
