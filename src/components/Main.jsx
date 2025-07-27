"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import images from "@/utils/imgSrc";

// Animation variants for main heading
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Animation variants for first paragraphs (slide from right)
const paragraphVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation variants for second heading + paragraph (scale)
const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Animation variants for features heading + list (slide from left)
const listVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation variants for list items (cascading)
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1, // Stagger each list item
    },
  }),
};

// Animation variants for images
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <main className="w-full" dir="rtl">
      {/* Landing Section */}
      <section
        className="w-full relative flex items-center justify-center min-h-[calc(100vh-120px)] bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url(/img/anti/پرده-بیمارستانی-1.jpg)" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-12 py-12 text-center">
          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold text-[#37A0A2] shadow-md mb-6"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            کار ما در زانکو دکور چیست؟
          </motion.h1>
          {/* First Paragraphs */}
          <motion.p
            className="text-lg sm:text-xl text-white shadow-md mb-4"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            زانکو دکور تولید کننده و مجری انواع پرده بیمارستانی و پرده بین تختی
            می‌باشد
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl text-white shadow-md mb-6"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            ما با تکیه بر تجربه و توان خود در کوشش ایجاد محیط عاری از باکتری در
            کنار حفظ حریم شخصی بیماران هستیم
          </motion.p>
          {/* Second Heading + Paragraph */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-[#37A0A2] shadow-md mb-4"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            زانکو دکور محدود به یک شهر نمی‌شود
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-white shadow-md mb-6"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            تیم ما در سریع‌ترین زمان و با تجربه بالا که تضمین کیفیت کار را
            می‌دهد آماده انجام پروژه پرده‌های بیمارستانی در تمامی نقاط ایران
            عزیزمان می‌باشد تا با توکل به پروردگار و تکیه بر توانمان نقش کوچکی
            در آبادانی این مرز و بوم داشته باشیم
          </motion.p>
          {/* Features Heading + List */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-[#37A0A2] shadow-md mb-4"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            ویژگی‌هایی که ما را متمایز می‌کند
          </motion.h2>
          <motion.ul
            className="text-lg sm:text-xl text-white shadow-md list-disc list-inside space-y-2"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            {[
              "استفاده از مواد اولیه با کیفیت در تولید محصولات",
              "پشتیبانی کامل در برابر خدمات ارائه شده و یا جنس فروخته شده",
              "داشتن تیم متخصص",
              "سرعت عمل در کنار کیفیت بالا",
              "تضمین کیفیت محصول",
            ].map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
          گالری تصاویر
        </h2>
        <div className=" mx-auto px-6 sm:px-12">
          {/* Category Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300 ${
                selectedCategory === "all"
                  ? "bg-[#37A0A2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              همه
            </button>
            <button
              onClick={() => setSelectedCategory("antibacterial")}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300 ${
                selectedCategory === "antibacterial"
                  ? "bg-[#37A0A2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              آنتی‌باکتریال
            </button>
            <button
              onClick={() => setSelectedCategory("wax")}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300 ${
                selectedCategory === "wax"
                  ? "bg-[#37A0A2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              شمعی
            </button>
            <button
              onClick={() => setSelectedCategory("zebra")}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300 ${
                selectedCategory === "zebra"
                  ? "bg-[#37A0A2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              زبرا
            </button>
          </div>

          {/* Image Grid */}
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold">
                      {image.alt}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Videos Section */}
      <section className="w-full py-12 bg-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
          ویدیوها
        </h2>
        <div className=" mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full pt-[56.25%]">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/yyerz9i/vt/frame?titleShow=true&recom=self"
                title="ویدیوی معرفی پرده بیمارستانی زانکو دکور ۱"
                aria-label="ویدیوی معرفی پرده بیمارستانی زانکو دکور ۱"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full pt-[56.25%]">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/fkqw011/vt/frame?titleShow=true&recom=self"
                title="ویدیوی معرفی پرده بیمارستانی زانکو دکور ۲"
                aria-label="ویدیوی معرفی پرده بیمارستانی زانکو دکور ۲"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="w-full py-12 bg-gray-50">
        <h2 className="text-3xl sm:text-6xl font-extrabold text-[#37A0A2] text-center mb-16">
          درباره پرده‌های زانکو دکور
        </h2>
        <div className=" mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* First Card */}
          <motion.div
            className="flex flex-col items-end text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-full md:w-5/6 h-[22em] mb-6 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/img/others/پارچه-آنتی-باکتریال-2.jpg"
                alt="پرده آنتی‌باکتریال زانکو دکور"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xl text-start sm:text-2xl text-black pr-[17%]">
              زانکو دکور با استفاده از تکنولوژی روز دنیا همواره در تلاش بوده تا
              مرغوب ترین جنس پرده را به تولید برساند{" "}
            </p>
          </motion.div>
          {/* Second Card */}
          <motion.div
            className="flex flex-col items-start space-y-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-3xl font-extrabold text-[#37A0A2] mb-4">
              پارچه های آنتی باکتریال{" "}
            </h3>
            <h4 className="text-4xl lg:text-6xl font-extrabold text-gray-700 mb-4">
              بافت پارچه های زانکو دکو{" "}
            </h4>
            <p className="text-xl text-start sm:text-2xl text-black">
              در صنعت نساجی پارچه، ما با استفاده از بهترین مواد اولیه و
              بهره‌گیری از فناوری‌های روز دنیا، پارچه‌هایی با کیفیت بالا و متنوع
              تولید می‌کنیم. تمرکز ما بر ارائه محصولاتی است که هم از نظر استحکام
              و هم از نظر طراحی و زیبایی، پاسخگوی نیازهای مشتریان باشد. با تکیه
              بر تجربه و تخصص، همواره در تلاشیم تا بهترین‌ها را به شما ارائه
              دهیم.
            </p>{" "}
            <div className="relative w-full md:w-5/6 h-[22em] mb-6 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/img/others/پارچه-آنتی-باکتریال.jpg"
                alt="پرده زبرا زانکو دکور"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Hospital Curtains Role Section */}
      <section className="w-full py-12 px-5 sm:px-28 bg-white">
        <div className="mx-auto sm:px-12 text-start">
          {/* Main Heading */}
          <motion.h2
            className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-6"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            نقش و اهمیت پرده‌ بیمارستانی در حفظ حریم خصوصی و کنترل عفونت
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            className="text-lg sm:text-xl text-black mb-6 leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            پرده‌ بیمارستانی یکی از اجزای مهم و ضروری در محیط‌های درمانی است که
            نقش مهمی در حفظ حریم خصوصی بیماران، کنترل عفونت و ایجاد محیطی آرام و
            امن برای بیماران و کارکنان دارد. این پرده‌ها معمولاً در بخش‌های
            مختلف بیمارستان مانند اتاق‌های بستری، اتاق‌های جراحی، بخش‌های
            اورژانس و بخش‌های مراقبت‌های ویژه استفاده می‌شوند.
          </motion.p>

          {/* Features */}
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-[#37A0A2] mb-4"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            ویژگی‌های کلیدی پرده‌های بیمارستانی
          </motion.h3>
          <motion.ul
            className="text-lg sm:text-xl text-black list-disc list-inside space-y-2 mb-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <motion.li variants={listItemVariants}>
              حفظ حریم خصوصی بیماران در زمان معاینه یا درمان
            </motion.li>
            <motion.li variants={listItemVariants}>
              خاصیت ضد میکروب و کمک به کنترل عفونت
            </motion.li>
            <motion.li variants={listItemVariants}>
              قابلیت شست‌وشو و ضدعفونی شدن آسان
            </motion.li>
            <motion.li variants={listItemVariants}>
              دوام و استحکام در برابر سایش و پارگی
            </motion.li>
            <motion.li variants={listItemVariants}>
              عایق صدا و نور برای ایجاد محیطی آرام‌تر
            </motion.li>
          </motion.ul>

          {/* Types */}
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-[#37A0A2] mb-4"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            انواع پرده‌های بیمارستانی
          </motion.h3>
          <motion.ul
            className="text-lg sm:text-xl text-black list-disc list-inside space-y-2 mb-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            <motion.li variants={listItemVariants}>
              پرده‌های ضد باکتریال برای اتاق عمل و بخش‌های ویژه
            </motion.li>
            <motion.li variants={listItemVariants}>
              پرده‌های ضد آب و مقاوم به مواد شیمیایی
            </motion.li>
            <motion.li variants={listItemVariants}>
              پرده‌های الکتریکی یا مکانیکی با قابلیت باز و بسته شدن آسان
            </motion.li>
          </motion.ul>

          {/* Tips for choosing */}
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-[#37A0A2] mb-4"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            نکات مهم در انتخاب پرده بیمارستانی
          </motion.h3>
          <motion.ul
            className="text-lg sm:text-xl text-black list-disc list-inside space-y-2 mb-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            {[
              "کیفیت بالای پارچه مقاوم به شست‌وشو و ضدعفونی",
              "رعایت استانداردهای بهداشتی برای جلوگیری از گسترش بیماری",
              "طراحی ساده با رنگ‌های آرام‌بخش برای بهبود روحیه بیماران",
            ].map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* About Section */}
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-[#37A0A2] mb-4"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            زانکو را بیشتر بشناسید
          </motion.h3>
          <motion.p
            className="text-lg sm:text-xl text-black leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            ما توانسته‌ایم با تکیه بر نیروهای مجرب در تولید و اجرای پرده‌های
            بیمارستانی و اداری، سهمی کوچک در آبادانی میهن عزیزمان داشته باشیم.
            تیم ما علاوه بر تولید پرده‌های بین تختی و پرده‌های اداری (مانند
            زبرا)، خدمات لوله‌کشی گازهای طبی و کنسول تخت بیمار را نیز ارائه
            می‌دهد. طی بیش از ۱۰ سال فعالیت، همواره ایمنی و شرافت کاری را در
            اولویت قرار داده‌ایم تا محصولات و خدمات ما حس آرامش و رضایت را برای
            مشتریان فراهم آورد. تمامی محصولات ما تولید ملی بوده و با کیفیتی
            رقابتی در برابر نمونه‌های خارجی عرضه می‌شوند.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
