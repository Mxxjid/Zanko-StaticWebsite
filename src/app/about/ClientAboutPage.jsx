"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaUsers, FaAward, FaClock, FaPhoneAlt, FaShieldAlt, FaTruck, FaPaintBrush, FaHeadset } from "react-icons/fa";

const reasons = [
  { icon: FaClock, title: "تجربه ۱۲ ساله", desc: "از سال ۱۳۹۱ در خدمت شما" },
  { icon: FaShieldAlt, title: "کیفیت تضمینی", desc: "گواهی بهداشت و گارانتی ۲ ساله" },
  { icon: FaTruck, title: "خدمات سراسری", desc: "ارسال و نصب در تمام ایران" },
  { icon: FaPaintBrush, title: "طراحی سفارشی", desc: "رنگ و اندازه دلخواه شما" },
  { icon: FaHeadset, title: "پشتیبانی ۲۴/۷", desc: "مشاوره رایگان در واتساپ" },
  { icon: FaAward, title: "قیمت رقابتی", desc: "بهترین کیفیت با مناسب‌ترین قیمت" },
];

export default function ClientAboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1" dir="rtl">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[#229799]/5 to-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#229799]/10 text-[#229799] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">درباره ما</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
                درباره <span className="text-[#229799]">زانکو دکور</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                تولید کننده تخصصی <strong>پرده بیمارستانی آنتی باکتریال</strong>، <strong>پرده بین تختی</strong> و <strong>پرده زبرا</strong> با بیش از ۱۲ سال تجربه.
              </p>
            </motion.div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-[#229799] font-semibold text-sm mb-2">تاریخچه</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FaClock className="text-[#229799]" /> داستان ما
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong>زانکو دکور</strong> از سال <strong>۱۳۹۱</strong> با هدف ارتقای استانداردهای بهداشتی و زیبایی در محیط‌های درمانی و اداری آغاز به کار کرد.
                  </p>
                  <p>
                    در طول بیش از یک دهه فعالیت، موفق به همکاری با صدها بیمارستان، کلینیک، مطب و مرکز درمانی در سراسر ایران شدیم.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src="/img/others/cropped-photo_2024-09-17_17-26-59-1.png"
                    alt="لوگو زانکو دکور"
                    fill
                    className="object-contain bg-gray-50 p-8"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#229799] to-[#1a7a7c] text-white p-8 sm:p-10 rounded-3xl"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <FaCheckCircle /> مأموریت ما
                </h3>
                <p className="leading-relaxed text-white/90">
                  ارائه پرده‌های بیمارستانی با کیفیت بالا، آنتی باکتریال، قابل شستشو و زیبا که ضمن حفظ حریم خصوصی، به کاهش انتقال عفونت و بهبود روحیه بیماران و پرسنل کمک کند.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a7a7c] to-[#229799] text-white p-8 sm:p-10 rounded-3xl"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <FaAward /> چشم‌انداز ما
                </h3>
                <p className="leading-relaxed text-white/90">
                  تبدیل شدن به برند اول تولید پرده بیمارستانی در ایران و گسترش فعالیت به بازارهای بین‌المللی با حفظ کیفیت و نوآوری.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-[#229799] font-semibold text-sm mb-2">چرا ما؟</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <FaUsers className="text-[#229799]" /> چرا زانکو دکور؟
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-[#229799]/10 text-[#229799] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#229799] to-[#1a7a7c] text-white rounded-3xl p-8 sm:p-12 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">آماده همکاری با زانکو دکور هستید؟</h2>
              <p className="text-white/80 mb-8 text-lg">همین حالا با ما تماس بگیرید و مشاوره رایگان دریافت کنید.</p>
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
