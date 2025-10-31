/// app/pardeh-shami/ClientShamiPage.jsx
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
import { FaCheckCircle, FaPhoneAlt, FaShieldAlt, FaRecycle, FaDoorOpen } from "react-icons/fa";

export default function ClientShamiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[#37A0A2]/10 to-[#37A0A2]/5 py-12 px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#229799] mb-4 leading-tight"
            >
              پرده بین تختی بیمارستانی (شمعی)
            </motion.h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              حریم خصوصی کامل + شستشوی آسان + نصب سریع در بیمارستان و کلینیک
            </p>
          </section>
          {/* Image Carousel */}
          <section className="py-8 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#229799] mb-8">
              گالری پرده‌های شمعی
            </h2>
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
                { src: "/img/shami/پرده-بیمارستانی-20.jpg", alt: "پرده شمعی بین تختی - نصب در بخش بستری" },
                { src: "/img/shami/پرده-بیمارستانی-22.jpg", alt: "پرده بین تختی با ریل استیل" },
                { src: "/img/shami/پرده-بیمارستانی-24.jpg", alt: "پرده شمعی - رنگ آبی ملایم" },
                { src: "/img/shami/پرده-بیمارستانی-28.jpg", alt: "پرده بین تختی - نصب روی سقف" },
              ].map((slide, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1200}
                    height={600}
                    className="w-full h-72 sm:h-96 object-cover rounded-xl"
                    loading="eager"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* Content Section */}
          <section className="py-10 px-4 max-w-5xl mx-auto text-justify leading-8 space-y-6 text-gray-700">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg"
            >
              <strong>پرده بین تختی بیمارستانی (شمعی)</strong> یکی از مهم‌ترین تجهیزات برای حفظ <strong>حریم خصوصی بیماران</strong> در بخش‌های بستری است. این پرده‌ها با ایجاد مانع بصری و صوتی، آرامش و امنیت را به بیماران بازمی‌گردانند.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              زانکو دکور این پرده‌ها را با <strong>قابلیت شستشوی بیش از ۴۰ بار</strong>، <strong>ریل استیل یا آلومینیوم</strong> و <strong>نصب آسان روی سقف و دیوار</strong> تولید می‌کند.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              پارچه مقاوم در برابر رطوبت، <strong>ضد لک</strong> و <strong>قابل شستشو با شوینده‌های بیمارستانی</strong> — بدون افت کیفیت.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              رنگ‌های ملایم (آبی، سبز، کرم) برای ایجاد حس آرامش، عبور مناسب نور و <strong>گارانتی ۲ ساله</strong>.
            </motion.p>
          </section>

          {/* Side-by-Side Images */}
          <section className="py-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Image
                src="/img/shami/پرده-بیمارستانی-37.jpg"
                alt="پرده شمعی - نصب در بخش زنان"
                width={600}
                height={400}
                className="rounded-xl shadow-lg hover:scale-105 transition"
              />
              <Image
                src="/img/shami/پرده-بیمارستانی-44.jpg"
                alt="جزئیات ریل استیل و پارچه شمعی"
                width={600}
                height={400}
                className="rounded-xl shadow-lg hover:scale-105 transition"
              />
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-white py-12 px-4 rounded-2xl shadow-xl my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#229799] mb-8 text-center">
              ویژگی‌های کلیدی پرده شمعی
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <FaDoorOpen />, text: "حریم خصوصی کامل" },
                { icon: <FaCheckCircle />, text: "شستشوی بیش از ۴۰ بار" },
                { icon: <FaRecycle />, text: "ریل استیل/آلومینیوم" },
                { icon: <FaCheckCircle />, text: "نصب روی سقف و دیوار" },
                { icon: <FaCheckCircle />, text: "باز و بسته شدن آسان" },
                { icon: <FaCheckCircle />, text: "گارانتی ۲ ساله" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-lg bg-gray-50 p-4 rounded-xl"
                >
                  <div className="text-2xl text-[#229799]">{item.icon}</div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-[#229799] to-teal-600 text-white py-12 px-4 text-center rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              برای مشاوره رایگان و سفارش تماس بگیرید
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+989122655585"
                className="flex items-center gap-2 bg-white text-[#229799] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              >
                <FaPhoneAlt /> ۰۹۱۲-۲۶۵۵۵۸۵
              </a>
              <a
                href="https://wa.me/989122655585"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 bg-green-500 px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition"
              >
                واتساپ
              </a>
            </div>
          </motion.section>

        </div>
      </main> {/* این خط رو اضافه کن! */}

      <Footer />
    </div>
  );
}