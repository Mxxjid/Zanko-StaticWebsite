// app/about/ClientAboutPage.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaUsers, FaAward, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function ClientAboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 w-full mx-auto px-4 sm:px-6 md:px-8 py-8 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#229799] mb-6 leading-tight">
              درباره زانکو دکور
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              تولید کننده تخصصی <strong>پرده بیمارستانی آنتی باکتریال</strong>، <strong>پرده بین تختی</strong> و <strong>پرده زبرا</strong> با بیش از ۱۲ سال تجربه.
            </p>
            <Image
              src="/img/others/cropped-photo_2024-09-17_17-26-59-1.png"
              alt="لوگو زانکو دکور"
              width={200}
              height={200}
              className="mx-auto rounded-full shadow-xl"
              loading="eager"
            />
          </motion.section>

          {/* تاریخچه */}
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#229799] mb-6 flex items-center gap-3">
              <FaClock className="text-xl" /> تاریخچه ما
            </h2>
            <div className="prose prose-lg max-w-none text-justify leading-8 text-gray-700 space-y-5">
              <p>
                <strong>زانکو دکور</strong> از سال <strong>۱۳۹۱</strong> با هدف ارتقای استانداردهای بهداشتی و زیبایی در محیط‌های درمانی و اداری آغاز به کار کرد. ما با تکیه بر تیمی مجرب و متخصص، اولین گام را در تولید <strong>پرده‌های بیمارستانی آنتی باکتریال</strong> با کیفیت بالا برداشتیم.
              </p>
              <p>
                در طول بیش از یک دهه فعالیت، موفق به همکاری با صدها بیمارستان، کلینیک، مطب و مرکز درمانی در سراسر ایران شدیم. از بیمارستان‌های بزرگ تهران تا کلینیک‌های کوچک شهرهای دورافتاده — همه از کیفیت و خدمات <strong>زانکو دکور</strong> رضایت داشته‌اند.
              </p>
            </div>
          </section>

          {/* مأموریت و چشم‌انداز */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-[#229799] to-teal-600 text-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaCheckCircle /> مأموریت ما
              </h3>
              <p className="leading-7">
                ارائه <strong>پرده‌های بیمارستانی با کیفیت بالا</strong>، آنتی باکتریال، قابل شستشو و زیبا که ضمن حفظ حریم خصوصی، به کاهش انتقال عفونت و بهبود روحیه بیماران و پرسنل کمک کند.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-teal-600 to-[#229799] text-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaAward /> چشم‌انداز ما
              </h3>
              <p className="leading-7">
                تبدیل شدن به <strong>برند اول تولید پرده بیمارستانی در ایران</strong> و گسترش فعالیت به بازارهای بین‌المللی با حفظ کیفیت و نوآوری.
              </p>
            </motion.div>
          </section>

          {/* چرا ما؟ */}
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#229799] mb-8 text-center flex items-center justify-center gap-3">
              <FaUsers className="text-2xl" /> چرا زانکو دکور؟
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "تجربه ۱۲ ساله", desc: "از سال ۱۳۹۱ در خدمت شما" },
                { title: "کیفیت تضمینی", desc: "گواهی بهداشت و گارانتی ۲ ساله" },
                { title: "خدمات سراسری", desc: "ارسال و نصب در تمام ایران" },
                { title: "طراحی سفارشی", desc: "رنگ و اندازه دلخواه شما" },
                { title: "پشتیبانی ۲۴/۷", desc: "مشاوره رایگان در واتساپ" },
                { title: "قیمت رقابتی", desc: "بهترین کیفیت با مناسب‌ترین قیمت" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-[#229799] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-[#229799] to-teal-600 text-white rounded-2xl p-8 text-center shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              آماده همکاری با زانکو دکور هستید؟
            </h2>
            <p className="text-lg mb-6">
              همین حالا با ما تماس بگیرید و مشاوره رایگان دریافت کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+989122655585"
                className="flex items-center justify-center gap-2 bg-white text-[#229799] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                <FaPhoneAlt /> ۰۹۱۲-۲۶۵۵۵۸۵
              </a>
              <a
                href="https://wa.me/989122655585"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 bg-green-500 px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
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