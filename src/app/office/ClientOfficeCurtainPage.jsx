// app/pardeh-edari/ClientOfficeCurtainPage.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaCheckCircle, FaPhoneAlt, FaLightbulb, FaCogs, FaPalette, FaShieldAlt } from "react-icons/fa";

export default function ClientOfficeCurtainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <section className="bg-gradient-to-r from-[#37A0A2]/10 to-[#37A0A2]/5 py-12 px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#229799] mb-4"
            >
              پرده اداری
            </motion.h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
              زبرا، کرکره چوبی و فلزی — ترکیبی از <strong>زیبایی</strong>، <strong>کارایی</strong> و <strong>مدرنیته</strong>
            </p>
          </section>

          {/* Carousel */}
          <section className="py-8 px-4">
            <h2 className="text-2xl font-bold text-center text-[#229799] mb-8">گالری پرده‌های اداری</h2>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation
              className="rounded-xl shadow-xl"
            >
              {[
                { src: "/img/others/پرده-بیمارستانی-23.jpg", alt: "پرده زبرا اداری - کنترل نور" },
                { src: "/img/others/پرده-بیمارستانی-11.jpg", alt: "کرکره چوبی لوکس - فضای مدیریتی" },
                { src: "/img/others/پرده-بیمارستانی-48.jpg", alt: "کرکره فلزی - مقاوم و مدرن" },
                { src: "/img/others/پرده-بیمارستانی-49.jpg", alt: "پرده اداری در بیمارستان" },
              ].map((s, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={1200}
                    height={600}
                    className="w-full h-72 sm:h-96 object-cover rounded-xl"
                    loading="eager"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* محتوا */}
          <section className="py-10 px-4 max-w-5xl mx-auto text-justify leading-8 space-y-6 text-gray-700">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg"
            >
              <strong>پرده اداری</strong> یکی از مهم‌ترین عناصر در دکوراسیون فضاهای کاری و درمانی است. زانکو دکور با ارائه <strong>پرده زبرا</strong>، <strong>کرکره چوبی</strong> و <strong>کرکره فلزی</strong>، بهترین گزینه‌ها را برای کنترل نور، زیبایی و کارایی ارائه می‌دهد.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#229799] mb-3">پرده زبرا</h3>
              <p>
                از دو لایه پارچه شفاف و مات تشکیل شده و با <strong>کنترل دقیق نور</strong> بدون جمع شدن کامل، حریم خصوصی و زیبایی را تضمین می‌کند. قابل شستشو، نصب دستی یا موتوری.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-[#229799] mb-3">کرکره چوبی</h3>
              <p>
                تیغه‌های ۲۵ یا ۵۰ میلی‌متری از چوب طبیعی، با بافت گرم و لوکس. مقاوم در برابر رطوبت، مناسب برای <strong>دفاتر مدیریتی</strong> و فضاهای رسمی.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-[#229799] mb-3">کرکره فلزی</h3>
              <p>
                آلومینیومی، <strong>ضد زنگ</strong>، سبک و مقاوم. ایده‌آل برای <strong>بیمارستان‌ها</strong>، کلینیک‌ها و محیط‌های پرتردد.
              </p>
            </motion.div>
          </section>

          {/* ویژگی‌ها */}
          <section className="bg-white py-12 px-4 rounded-2xl shadow-xl my-12">
            <h2 className="text-2xl font-bold text-[#229799] mb-8 text-center">ویژگی‌های کلیدی</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <FaLightbulb />, text: "کنترل آسان نور و سایه" },
                { icon: <FaCheckCircle />, text: "شستشوی آسان (زبرا)" },
                { icon: <FaPalette />, text: "تنوع رنگ و طرح" },
                { icon: <FaShieldAlt />, text: "مقاوم در برابر رطوبت و خوردگی" },
                { icon: <FaCogs />, text: "نصب دستی و موتوری" },
                { icon: <FaCheckCircle />, text: "دوام بالا و نگهداری آسان" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl text-[#229799]">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-[#229799] to-teal-600 text-white py-12 px-4 text-center rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">مشاوره رایگان و سفارش فوری</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+989122655585"
                className="flex items-center gap-2 bg-white text-[#229799] px-8 py-3 rounded-lg font-bold"
              >
                <FaPhoneAlt /> ۰۹۱۲-۲۶۵۵۵۸۵
              </a>
              <a
                href="https://wa.me/989122655585"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 bg-green-500 px-8 py-3 rounded-lg font-bold"
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