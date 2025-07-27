"use client";

import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mt-5 w-full sm:max-w-3/4 mx-auto px-4 sm:px-6 md:px-8 py-8 bg-white text-black font-sans" dir="rtl">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#229799] mb-6"
          >
            پرده آنتی باکتریال بیمارستانی زانکو دکور
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-black max-w-3xl mx-auto">
            با زانکو دکور، کیفیت و زیبایی را به فضای درمانی و اداری خود بیاورید
          </p>
        </section>

        {/* Contact Section */}
       
        {/* Contact Section */}
        <section className="space-y-6 text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#229799] mb-4 text-center">
            با ما در ارتباط باشید
          </h2>
          <p className="text-justify text-black text-lg sm:text-xl leading-8">
            تیم زانکو دکور آماده ارائه مشاوره و خدمات در زمینه پرده‌های آنتی باکتریال بیمارستانی، پرده‌های بین تختی و پرده‌های اداری است. ما با بهره‌گیری از مواد باکیفیت و تکنولوژی‌های پیشرفته، محصولاتی با دوام و زیبا برای محیط‌های درمانی و حرفه‌ای ارائه می‌دهیم. برای کسب اطلاعات بیشتر یا سفارش محصولات، از طریق راه‌های ارتباطی زیر با ما تماس بگیرید.
          </p>

          <div className="flex items-start gap-4">
            <FaPhoneAlt size={24} className="text-[#229799] flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-lg sm:text-xl mb-2">تلفن تماس:</p>
              <p className="font-bold text-lg sm:text-xl ">
                0912-265-5585 <br />
                0919-030-3033 - 026-34725322
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope size={24} className="text-[#229799] flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-lg sm:text-xl mb-2">آدرس ایمیل:</p>
              <p className="font-bold text-lg sm:text-xl ">info@zankodekor.ir</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt size={24} className="text-[#229799] flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-lg sm:text-xl mb-2">آدرس:</p>
              <p className="font-bold text-lg sm:text-xl ">استان البرز - کرج - کمالشهر - ولیعصر شمالی</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg sm:text-xl mb-5">ما را در شبکه‌های اجتماعی دنبال کنید:</p>
            <div className="flex gap-6 text-[#229799] text-2xl sm:text-3xl">
              <a
                href="https://wa.me/09122655585"
                aria-label="WhatsApp"
                className="hover:text-[#37A0A2] transition-transform transform hover:scale-110"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://t.me/nayeriaboozar"
                aria-label="Telegram"
                className="hover:text-[#37A0A2] transition-transform transform hover:scale-110"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://instagram.com/zankodecor"
                aria-label="Instagram"
                className="hover:text-[#37A0A2] transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-8 space-y-6 text-base sm:text-xl text-justify leading-8">
          <p>
            زانکو دکور با سال‌ها تجربه در زمینه طراحی و تولید پرده‌های تخصصی، متعهد به ارائه محصولاتی با بالاترین استانداردهای بهداشتی و زیبایی‌شناختی است. پرده‌های ما نه تنها به بهبود حریم خصوصی و بهداشت محیط کمک می‌کنند، بلکه با طراحی‌های مدرن و متنوع، به زیبایی فضاهای شما نیز می‌افزایند.
          </p>
          <p>
            برای مشاوره رایگان یا بازدید از نمونه محصولات، می‌توانید با شماره‌های تماس ذکرشده ارتباط برقرار کنید یا از طریق ایمیل و شبکه‌های اجتماعی با ما در ارتباط باشید. تیم ما آماده پاسخگویی به سوالات شما و ارائه راهکارهای متناسب با نیازهای شماست.
          </p>
        </section>

        {/* Google Map Section */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#229799] mb-4 text-center">
            مکان ما روی نقشه
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.614602784364!2d50.86511731525876!3d35.838829980159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8d9b6f6a4c4b7b%3A0x8b1e0e8f6a4c4b7b!2sKamalshahr%2C%20Alborz%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </section>

        {/* Additional Information */}
        <section className="mt-8 space-y-6 text-base sm:text-xl text-justify leading-8">
          <p>
            زانکو دکور با تعهد به ارائه محصولاتی با کیفیت بالا و طراحی‌های مدرن، راهکارهایی منحصربه‌فرد برای محیط‌های درمانی و اداری ارائه می‌دهد. پرده‌های آنتی باکتریال، بین تختی و اداری ما با استفاده از مواد با دوام و استانداردهای بهداشتی تولید می‌شوند تا هم زیبایی و هم کارایی را به فضاهای شما اضافه کنند.
          </p>
          <p>
            برای دریافت مشاوره تخصصی، بازدید از نمونه محصولات یا ثبت سفارش، با ما تماس بگیرید یا از طریق ایمیل و شبکه‌های اجتماعی با تیم ما در ارتباط باشید. ما مشتاقیم تا به شما کمک کنیم بهترین انتخاب را برای نیازهای خود داشته باشید.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}