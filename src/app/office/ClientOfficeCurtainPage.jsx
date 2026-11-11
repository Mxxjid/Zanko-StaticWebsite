"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaPhoneAlt, FaLightbulb, FaCogs, FaPalette, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: FaLightbulb, text: "کنترل آسان نور و سایه" },
  { icon: FaCheckCircle, text: "شستشوی آسان (زبرا)" },
  { icon: FaPalette, text: "تنوع رنگ و طرح" },
  { icon: FaShieldAlt, text: "مقاوم در برابر رطوبت و خوردگی" },
  { icon: FaCogs, text: "نصب دستی و موتوری" },
  { icon: FaCheckCircle, text: "دوام بالا و نگهداری آسان" },
];

const images = [
  { src: "/img/others/پرده-بیمارستانی-23.jpg", alt: "پرده زبرا اداری - کنترل نور" },
  { src: "/img/others/پرده-بیمارستانی-11.jpg", alt: "کرکره چوبی لوکس - فضای مدیریتی" },
  { src: "/img/others/پرده-بیمارستانی-48.jpg", alt: "کرکره فلزی - مقاوم و مدرن" },
  { src: "/img/others/پرده-بیمارستانی-49.jpg", alt: "پرده اداری در بیمارستان" },
];

export default function ClientOfficeCurtainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1" dir="rtl">
        <section className="bg-gradient-to-b from-[#229799]/5 to-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-[#229799]/10 text-[#229799] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">محصولات</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">پرده اداری</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">زبرا، کرکره چوبی و فلزی — ترکیبی از زیبایی، کارایی و مدرنیته</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {images.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{img.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-600 leading-relaxed">
            <p className="text-lg"><strong>پرده اداری</strong> یکی از مهم‌ترین عناصر در دکوراسیون فضاهای کاری و درمانی است. زانکو دکور با ارائه <strong>پرده زبرا</strong>، <strong>کرکره چوبی</strong> و <strong>کرکره فلزی</strong>، بهترین گزینه‌ها را برای کنترل نور، زیبایی و کارایی ارائه می‌دهد.</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#229799] mb-2">پرده زبرا</h3>
                <p>از دو لایه پارچه شفاف و مات تشکیل شده و با <strong>کنترل دقیق نور</strong> بدون جمع شدن کامل، حریم خصوصی و زیبایی را تضمین می‌کند.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#229799] mb-2">کرکره چوبی</h3>
                <p>تیغه‌های ۲۵ یا ۵۰ میلی‌متری از چوب طبیعی، با بافت گرم و لوکس. مقاوم در برابر رطوبت.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#229799] mb-2">کرکره فلزی</h3>
                <p>آلومینیومی، <strong>ضد زنگ</strong>، سبک و مقاوم. ایده‌آل برای بیمارستان‌ها و محیط‌های پرتردد.</p>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#229799] to-[#1a7a7c] text-white py-12 px-8 text-center rounded-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">مشاوره رایگان و سفارش فوری</h3>
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
