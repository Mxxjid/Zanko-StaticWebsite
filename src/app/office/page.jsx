"use client";

import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function OfficeCurtainPage() {
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
            پرده اداری
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-black max-w-3xl mx-auto">
            پرده زبرا، کرکره چوبی و فلزی؛ ترکیبی از زیبایی، کارایی و مدرن بودن برای فضای اداری و بیمارستانی
          </p>
        </section>

        {/* Image Carousel */}
        <section className="py-8 px-4 sm:px-6 md:px-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#229799] mb-6">
            انواع پرده‌های اداری و بیمارستانی
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
                src="img/others/پرده-بیمارستانی-23.jpg"
                alt="پرده زبرا"
                className="w-full h-72 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/others/پرده-بیمارستانی-11.jpg"
                alt="پرده کرکره چوبی"
                className="w-full h-72 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/others/پرده-بیمارستانی-48.jpg"
                alt="پرده کرکره فلزی"
                className="w-full h-72 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/img/others/پرده-بیمارستانی-49.jpg"
                alt="پرده اداری و بیمارستانی"
                className="w-full h-72 sm:h-80 md:h-100 object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Content Section */}
        <section className="py-8 px-4 sm:px-6 md:px-20 max-w-6xl mx-auto space-y-6 text-black text-justify leading-8 text-sm sm:text-lg">
          <p>
            پرده زبرا یکی از محبوب‌ترین و مدرن‌ترین انواع پرده‌ها است که به دلیل طراحی زیبا و کاربری آسان، در بسیاری از فضاها استفاده می‌شود و به عنوان پرده بیمارستانی برای پنجره‌ها نیز کاربرد دارد. این پرده‌ها از دو لایه موازی پارچه‌های شفاف و مات تشکیل شده‌اند که با تغییر وضعیت آن‌ها می‌توان میزان نور ورودی را کنترل کرد و فضایی خصوصی‌تر ایجاد کرد.
          </p>
          <p>
            پرده‌های زبرا قابلیت تنظیم نور بدون نیاز به جمع کردن کامل پرده را دارند و طراحی مینیمال و شیک آن‌ها باعث شده گزینه‌ای جذاب برای دکوراسیون‌های مدرن باشند. همچنین در رنگ‌ها و طرح‌های متنوع عرضه شده و از دوام و قابلیت شستشوی آسان برخوردارند.
          </p>
          <p>
            این پرده‌ها به دو روش مکانیزم دستی (با زنجیر) و موتوری (ریموت کنترل) قابل استفاده هستند که امکان تنظیم راحت نور و سایه را به کاربران می‌دهد. این ویژگی‌ها باعث می‌شود که پرده‌های زبرا برای محیط‌های اداری و بیمارستانی که نیاز به کنترل دقیق نور و حفظ حریم خصوصی دارند، بسیار مناسب باشند.
          </p>
          <h3 className="font-bold text-lg sm:text-xl mt-8 mb-4">پرده کرکره چوبی</h3>
          <p>
            پرده کرکره چوبی از تیغه‌های چوبی افقی ساخته شده و در سایزهای ۵ و ۵۰ میلی‌متر عرضه می‌شود. این نوع کرکره‌ها قابلیت سایه روشن شدن داشته و جزو زیباترین و مدرن‌ترین پرده‌ها محسوب می‌شوند. بافت طبیعی چوب به این پرده‌ها ظاهری گرم و لوکس می‌بخشد که برای دفاتر مدیریتی و فضاهای رسمی بسیار مناسب است.
          </p>
          <p>
            پرده‌های کرکره چوبی همچنین در برابر رطوبت و تغییرات دمایی مقاوم هستند و با مراقبت مناسب، دوام بالایی دارند. این پرده‌ها امکان تنظیم زاویه تیغه‌ها را فراهم می‌کنند تا نور به‌صورت دلخواه وارد فضا شود، در حالی که حریم خصوصی حفظ می‌شود.
          </p>
          <h3 className="font-bold text-lg sm:text-xl mt-8 mb-4">پرده کرکره فلزی</h3>
          <p>
            پرده کرکره فلزی نیز یکی از گزینه‌های محبوب برای فضاهای اداری و بیمارستانی است. این پرده‌ها از تیغه‌های آلومینیومی مقاوم ساخته شده‌اند که در برابر زنگ‌زدگی و خوردگی مقاوم هستند. طراحی ساده و کاربردی آن‌ها باعث می‌شود که برای محیط‌های پرتردد و با نیازهای بهداشتی بالا، مانند بیمارستان‌ها، بسیار مناسب باشند.
          </p>
          <p>
            پرده‌های کرکره فلزی به دلیل وزن سبک و مقاومت بالا، نصب و نگهداری آسانی دارند. همچنین این پرده‌ها در رنگ‌های متنوع عرضه می‌شوند تا با دکوراسیون محیط هماهنگ شوند. قابلیت تنظیم نور و دوام بالای آن‌ها، این نوع پرده را به گزینه‌ای اقتصادی و کارآمد برای فضاهای مدرن تبدیل کرده است.
          </p>
          <p>
            علاوه بر این، هر سه نوع پرده (زبرا، کرکره چوبی و فلزی) از مواد باکیفیت و اغلب قابل بازیافت ساخته می‌شوند که تأثیر منفی بر محیط زیست را کاهش می‌دهد. این پرده‌ها با توجه به نیازهای محیط‌های مختلف، از جمله ادارات، بیمارستان‌ها و کلینیک‌ها، طراحی شده‌اند تا ترکیبی از زیبایی، کارایی و دوام را ارائه دهند.
          </p>
          <p>
            در نتیجه، پرده‌های اداری با ارائه گزینه‌های متنوع مانند زبرا، کرکره چوبی و فلزی، می‌توانند نیازهای مختلف فضاهای کاری و درمانی را برآورده کنند. این پرده‌ها نه تنها به بهبود زیبایی و کارایی محیط کمک می‌کنند، بلکه با ویژگی‌هایی مانند تنظیم نور، دوام بالا و نگهداری آسان، انتخابی ایده‌آل برای هر فضای حرفه‌ای هستند.
          </p>
        </section>

       

        {/* Features Section */}
        <section className="bg-gray-50 py-8 px-4 sm:px-6 md:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start text-[#229799] mb-6">
            ویژگی‌های کلیدی
          </h2>
        <ul className="grid grid-cols-1   gap-4 text-sm sm:text-xl font-medium text-black list-disc pr-4 sm:pr-6">
            <li>کنترل آسان نور و سایه</li>
            <li>قابلیت شستشوی آسان (پرده زبرا)</li>
            <li>تنوع در رنگ و طرح</li>
            <li>مقاومت در برابر رطوبت و خوردگی (کرکره فلزی)</li>
            <li>دوام بالا و نگهداری آسان</li>
            <li>قابلیت نصب دستی و موتوری</li>
            <li>طراحی مینیمال و مدرن</li>
            <li>مناسب برای فضاهای اداری و بیمارستانی</li>
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