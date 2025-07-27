"use client";

import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="flex-1 mt-5 w-full sm:max-w-3/4 mx-auto px-4 sm:px-6 md:px-8 py-8 bg-white text-black font-sans"
        dir="rtl"
      >
        {/* Hero Section with Images */}
        <section className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#229799] mb-6"
          >
            پرده آنتی باکتریال بیمارستانی زانکو دکور
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <img
              src="/img/others/پرده-بیمارستانی-26.jpg"
              alt="پرده آنتی باکتریال 1"
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg"
            />
            <img
              src="/img/anti/پرده-بیمارستانی-14.jpg"
              alt="پرده آنتی باکتریال 2"
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg"
            />
            <img
              src="/img/shami/پرده-بیمارستانی-32.jpg"
              alt="پرده آنتی باکتریال 3"
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg"
            />
          </div>
        </section>
         {/* About Zanko Decor */}
        <section className="space-y-6 text-sm sm:text-base mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#229799] mb-4">زانکو دکور چیست؟</h2>
          <p className="text-justify leading-8">
            زانکو دکور از سال ۱۳۹۱ با توکل بر خدا و با تکیه بر تیمی مجرب و متخصص در زمینه طراحی و تولید پرده‌های بیمارستانی و اداری آغاز به کار کرد. ما با هدف ایجاد محیطی امن‌تر، آرام‌تر و با نشاط‌تر برای بیماران و پرسنل بیمارستان‌ها فعالیت می‌کنیم. پرده‌های ما نه تنها حریم خصوصی بیماران را حفظ می‌کنند، بلکه با استفاده از رنگ‌بندی‌های متنوع و زیبا، به بهبود روحیه افراد و هماهنگی با دکوراسیون محیط‌های درمانی کمک می‌کنند.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#229799] mb-4">هدف ما چیست؟</h2>
          <p className="text-justify leading-8">
            هدف زانکو دکور، ارائه محصولاتی با کیفیت بالا و طراحی‌های مدرن است که ضمن رعایت استانداردهای بهداشتی، به زیبایی و کارایی فضاهای درمانی و اداری بیفزاید. ما در تلاشیم تا با استفاده از مواد اولیه مرغوب و تکنولوژی‌های پیشرفته، پرده‌هایی تولید کنیم که هم دوام بالایی داشته باشند و هم حس آرامش و نشاط را به محیط القا کنند. رضایت مشتریان و ایجاد فضایی دلپذیر برای کاربران، اولویت اصلی ماست.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
