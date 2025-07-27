"use client";

import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AntibacterialPage() {
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
            پرده‌های آنتی باکتریال
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-black  mx-auto">
            ترکیبی از بهداشت، کارایی و دوام در محیط‌های حساس مانند بیمارستان‌ها و صنایع غذایی
          </p>
        </section>

        {/* Image Carousel */}
        <section className="py-8 px-4 sm:px-6 md:px-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#229799] mb-6">
            پرده‌های آنتی باکتریال بیمارستانی
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
                src="/img/anti/پرده-بیمارستانی-10.jpg"
                alt="پرده آنتی باکتریال 1"
                className="w-full h-72 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/anti/پرده-بیمارستانی-34.jpg"
                alt="پرده آنتی باکتریال 2"
                className="w-full h-64 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/anti/پرده-بیمارستانی-17.jpg"
                alt="پرده آنتی باکتریال 3"
                className="w-full h-64 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/anti/پرده-بیمارستانی-13.jpg"
                alt="پرده آنتی باکتریال 4"
                className="w-full h-64 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Content Section */}
        <section className="py-8 px-4 sm:px-6 md:px-20 max-w-6xl mx-auto space-y-6 text-black text-justify leading-8 text-sm sm:text-lg">
          <p>
            پرده‌های آنتی باکتریال یکی از نوآوری‌های مهم در صنایع مختلف، به ویژه در محیط‌های درمانی و بیمارستان‌ها هستند. این پرده‌ها با داشتن ویژگی‌های ضد باکتری و ضد میکروب، نقشی بسیار حیاتی در کاهش انتشار عفونت‌ها و باکتری‌ها ایفا می‌کنند و به طور گسترده در محیط‌های حساس به بهداشت مورد استفاده قرار می‌گیرند.
          </p>
          <p>
            این پرده‌ها با تکنولوژی‌های پیشرفته تولید می‌شوند که رشد و تکثیر باکتری‌ها را کاهش داده و برای بخش‌های حساس مانند اتاق‌های جراحی، مراقبت ویژه و بستری بیماران مناسب‌اند.
          </p>
          <p>
            یکی دیگر از ویژگی‌های مهم پرده‌های آنتی باکتریال، مقاومت آن‌ها در برابر رطوبت و شرایط آب و هوایی مختلف است. این پرده‌ها معمولاً از موادی ساخته می‌شوند که در برابر رطوبت مقاوم هستند و به راحتی خراب یا پوسیده نمی‌شوند. این ویژگی باعث می‌شود که پرده‌های آنتی باکتریال در محیط‌های مرطوب مانند حمام‌ها، اتاق‌های بخار و محیط‌های با رطوبت بالا نیز کارایی خود را حفظ کنند.
          </p>
          <p>
            از لحاظ طراحی و زیبایی، پرده‌های آنتی باکتریال می‌توانند به گونه‌ای سفارشی‌سازی شوند که با دکوراسیون داخلی محیط هماهنگی داشته باشند. برخلاف تصور عمومی که این نوع پرده‌ها ممکن است ظاهری ساده و کاربردی داشته باشند، امروزه تولیدکنندگان پرده‌های آنتی باکتریال به طراحی و ظاهر این محصولات توجه ویژه‌ای دارند. این پرده‌ها در انواع رنگ‌ها و طرح‌ها عرضه می‌شوند تا علاوه بر کارایی بالا، زیبایی محیط را نیز حفظ کنند. بنابراین، پرده‌های آنتی باکتریال نه تنها از نظر عملکرد، بلکه از نظر ظاهری نیز می‌توانند انتخابی مناسب برای فضاهای مختلف باشند.
          </p>
          <p>
            علاوه بر این، پرده‌های آنتی باکتریال معمولاً از موادی ساخته می‌شوند که دوستدار محیط زیست هستند. این پرده‌ها عموماً قابل بازیافت بوده و تأثیر منفی بر محیط زیست ندارند. از آنجا که مواد به کار رفته در پرده‌های آنتی باکتریال به طور طبیعی مقاوم به رشد میکروب‌ها هستند، نیازی به استفاده از مواد شیمیایی مضر برای تمیز کردن آن‌ها وجود ندارد. این امر باعث می‌شود که استفاده از پرده‌های آنتی باکتریال به طور همزمان به حفظ سلامت انسان و محیط زیست کمک کند.
          </p>
          <p>
            در نتیجه، پرده‌های آنتی باکتریال یکی از بهترین انتخاب‌ها برای محیط‌هایی هستند که نیاز به کنترل بهداشتی بالایی دارند. از بیمارستان‌ها و کلینیک‌ها گرفته تا صنایع غذایی و داروسازی، این پرده‌ها با ارائه حفاظت مؤثر در برابر باکتری‌ها و ویروس‌ها، نقش مهمی در حفظ سلامت افراد ایفا می‌کنند. با توجه به ویژگی‌های منحصر به فرد پرده‌های آنتی باکتریال مانند ماندگاری بالا، مقاومت در برابر رطوبت و حفظ کیفیت هوا، این محصولات توانسته‌اند جایگاه ویژه‌ای در میان تجهیزات بهداشتی و صنعتی پیدا کنند. به طور کلی، پرده‌های آنتی باکتریال ترکیبی از کارایی، دوام و زیبایی را ارائه می‌دهند که آن‌ها را به یک انتخاب ایده‌آل برای محیط‌های مختلف تبدیل کرده است.
          </p>
        </section>

        {/* Side-by-Side Images */}
        <section className="py-8 px-4 sm:px-6 md:px-20  mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="/img/anti/پرده-بیمارستانی-54.jpg"
              alt="پرده آنتی باکتریال 5"
              className="w-full h-64 sm:h-80 md:h-100 object-cover rounded-lg"
            />
            <img
              src="/img/anti/پرده-بیمارستانی-1.jpg"
              alt="پرده آنتی باکتریال 6"
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
            <li>تنوع در رنگ</li>
            <li>ضد لک و ضد بو</li>
            <li>قابلیت نصب بر روی سقف و دیوار</li>
            <li>ریل از جنس استیل و آلومینیوم</li>
            <li>عدم کشت مولتی اورگانیسم‌ها</li>
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