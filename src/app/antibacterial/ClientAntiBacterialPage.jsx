// app/pardeh-anti-bacterial/ClientAntiBacterialPage.jsx
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
import { FaCheckCircle, FaPhoneAlt, FaShieldAlt, FaTint, FaRecycle } from "react-icons/fa";

export default function ClientAntiBacterialPage() {
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
              پرده آنتی باکتریال بیمارستانی
            </motion.h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
              بهداشت ۹۹.۹٪ + شستشوی ۴۰+ بار + زیبایی و دوام
            </p>
          </section>

          {/* Carousel */}
          <section className="py-8 px-4">
            <h2 className="text-2xl font-bold text-center text-[#229799] mb-6">گالری محصول</h2>
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
                { src: "/img/anti/پرده-بیمارستانی-10.jpg", alt: "پرده آنتی باکتریال - نصب در بیمارستان" },
                { src: "/img/anti/پرده-بیمارستانی-34.jpg", alt: "پرده آنتی باکتریال - ریل آلومینیومی" },
                { src: "/img/anti/پرده-بیمارستانی-17.jpg", alt: "پرده آنتی باکتریال - رنگ آبی" },
                { src: "/img/anti/پرده-بیمارستانی-13.jpg", alt: "پرده آنتی باکتریال - نصب در کلینیک" },
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
            <p>
              <strong>پرده آنتی باکتریال بیمارستانی</strong> زانکو دکور با تکنولوژی پیشرفته، رشد باکتری و قارچ را تا <strong>۹۹.۹٪ مهار می‌کند</strong>.
            </p>
            <p>
              قابلیت <strong>شستشوی بیش از ۴۰ بار</strong>، <strong>ضد لک</strong>، <strong>ضد بو</strong> و مقاوم در برابر رطوبت.
            </p>
            <p>
              ریل <strong>آلومینیومی ضد زنگ</strong>، نصب آسان، رنگ‌بندی متنوع و <strong>گارانتی ۲ ساله</strong>.
            </p>
          </section>

          {/* تصاویر کنار هم */}
          <section className="py-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Image
                src="/img/anti/پرده-بیمارستانی-54.jpg"
                alt="نصب در ICU"
                width={600}
                height={400}
                className="rounded-xl shadow-lg hover:scale-105 transition"
              />
              <Image
                src="/img/anti/پرده-بیمارستانی-1.jpg"
                alt="جزئیات ریل و پارچه"
                width={600}
                height={400}
                className="rounded-xl shadow-lg hover:scale-105 transition"
              />
            </div>
          </section>

          {/* ویژگی‌ها */}
          <section className="bg-white py-12 px-4 rounded-2xl shadow-xl my-12">
            <h2 className="text-2xl font-bold text-[#229799] mb-8 text-center">ویژگی‌های کلیدی</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <FaShieldAlt />, text: "آنتی باکتریال ۹۹.۹٪" },
                { icon: <FaTint />, text: "شستشوی ۴۰+ بار" },
                { icon: <FaCheckCircle />, text: "ضد لک و ضد بو" },
                { icon: <FaRecycle />, text: "ریل آلومینیومی" },
                { icon: <FaCheckCircle />, text: "نصب آسان" },
                { icon: <FaCheckCircle />, text: "گارانتی ۲ ساله" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl text-[#229799]">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-[#229799] to-teal-600 text-white py-12 px-4 text-center rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">سفارش و مشاوره رایگان</h3>
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
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}