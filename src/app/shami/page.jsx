"use client";

import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ShamiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white text-black font-sans" dir="rtl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#37A0A2]/10 to-[#37A0A2]/5 py-8 px-4 sm:px-6 md:px-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#229799] mb-4"
          >
            پرده بین تختی بیمارستانی (شمعی)
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-black max-w-3xl mx-auto">
            ایجاد حریم خصوصی و آرامش در محیط‌های درمانی و بیمارستانی
          </p>
        </section>

        {/* Image Carousel */}
        <section className="py-8 px-4 sm:px-6 md:px-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#229799] mb-6">
            پرده‌های بین تختی بیمارستانی
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="w-full sm:max-w-3/4 mx-auto"
          >
            <SwiperSlide>
              <img
                src="/img/shami/پرده-بیمارستانی-20.jpg"
                alt="پرده بین تختی 1"
                className="w-full h-72 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/shami/پرده-بیمارستانی-22.jpg"
                alt="پرده بین تختی 2"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/shami/پرده-بیمارستانی-24.jpg"
                alt="پرده بین تختی 3"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/shami/پرده-بیمارستانی-28.jpg"
                alt="پرده بین تختی 4"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Content Section */}
          <section className="py-8 px-4 sm:px-6 md:px-20 max-w-6xl mx-auto space-y-6 text-black text-justify leading-8 text-sm sm:text-lg">
          <p>
            پرده بین تختی بیمارستانی یکی از عناصر کلیدی در محیط‌های درمانی و بیمارستانی است که نقش مهمی در ایجاد حریم خصوصی، بهبود تجربه بیماران و افزایش کارایی کادر درمان دارد. این پرده‌ها مانعی بصری و صوتی میان تخت‌ها ایجاد می‌کنند و فضایی امن‌تر و آرام‌تر برای بیماران فراهم می‌آورند.
          </p>
          <p>
            از ویژگی‌های مهم این پرده‌ها می‌توان به جنس مقاوم و قابل شستشو، خاصیت ضد باکتری و ضدعفونی، و قابلیت نصب آسان روی ریل‌های مخصوص اشاره کرد. این ویژگی‌ها موجب می‌شود که پرده‌ها برای استفاده مداوم و شرایط بهداشتی بیمارستانی مناسب باشند.
          </p>
          <p>
            یکی دیگر از ویژگی‌های برجسته پرده‌های بین تختی، مقاومت آن‌ها در برابر رطوبت و شرایط محیطی مختلف است. این پرده‌ها از موادی ساخته می‌شوند که در برابر رطوبت مقاوم بوده و به راحتی خراب یا پوسیده نمی‌شوند، که این ویژگی آن‌ها را برای استفاده در محیط‌های مرطوب مانند بخش‌های بستری یا اتاق‌های با رطوبت بالا ایده‌آل می‌کند.
          </p>
          <p>
            از نظر طراحی، پرده‌های بین تختی به گونه‌ای ساخته می‌شوند که نور طبیعی را به طور مناسب عبور دهند و از ایجاد حس خفگی یا تاریکی در فضا جلوگیری کنند، در حالی که حریم خصوصی بیماران را حفظ می‌کنند. رنگ‌های ملایم و آرامش‌بخش این پرده‌ها به بهبود روحیه بیماران کمک کرده و به فضای درمانی حس آرامش و اطمینان می‌بخشد.
          </p>
          <p>
            علاوه بر این، پرده‌های بین تختی بیمارستانی معمولاً از مواد دوستدار محیط زیست تولید می‌شوند که قابل بازیافت هستند و تأثیر منفی بر محیط زیست ندارند. این پرده‌ها به دلیل ویژگی‌های ضد باکتری طبیعی خود، نیازی به استفاده از مواد شیمیایی مضر برای شستشو ندارند، که این امر به حفظ سلامت بیماران و محیط زیست کمک می‌کند.
          </p>
          <p>
            در نهایت، پرده‌های بین تختی بیمارستانی با ترکیبی از کارایی، دوام و زیبایی، انتخابی ایده‌آل برای بیمارستان‌ها، کلینیک‌ها و سایر مراکز درمانی هستند. این پرده‌ها نه تنها به حفظ حریم خصوصی و بهداشت کمک می‌کنند، بلکه با طراحی مناسب و رنگ‌بندی آرامش‌بخش، به بهبود تجربه بیماران و ایجاد محیطی دلپذیر کمک می‌کنند.
          </p>
        </section>

        {/* Side-by-Side Images */}
        <section className="py-8 px-4 sm:px-6 md:px-20  mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="/img/shami/پرده-بیمارستانی-37.jpg"
              alt="پرده بین تختی 5"
              className="w-full h-64 sm:h-80 md:h-100 object-cover rounded-lg"
            />
            <img
              src="/img/shami/پرده-بیمارستانی-44.jpg"
              alt="پرده بین تختی 6"
              className="w-full h-64 sm:h-80 md:h-100 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-8 px-4 sm:px-6 md:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start text-[#229799] mb-6">
            ویژگی‌های کلیدی
          </h2>
        <ul className="grid grid-cols-1  gap-4 text-sm sm:text-xl font-medium text-black list-disc pr-4 sm:pr-6">
            <li>حرکت بسیار آسان</li>
            <li>قابلیت بیش از ۴۰ بار شستشو</li>
            <li>رنگ‌بندی محدود</li>
            <li>قابلیت نصب بر روی سقف و دیوار</li>
            <li>دارای ریل از جنس استنلس استیل و آلومینیوم</li>
            <li>سهولت در باز کردن جهت تعویض و یا شستشو</li>
          </ul>
        </section>

           {/* Call to Action */}
        <section className="py-6 px-4 sm:px-6 md:px-20 text-center bg-gradient-to-r from-[#229799]/20 to-transparent">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">برای مشاوره رایگان تماس بگیرید</h3>
          <a
            href="tel:09122655585"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#229799] hover:underline"
          >
            0912-265-5585
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}