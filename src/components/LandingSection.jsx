"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  MotionH1,
  MotionP,
  MotionH2,
  MotionUl,
  MotionLi,
} from "./Motion";
import {
  headingVariants,
  paragraphVariants,
  scaleVariants,
  listVariants,
  listItemVariants,
} from "../utils/animations";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingSection() {
  const [isReady, setIsReady] = useState(false);

  // پرلودر دقیقاً ۲ ثانیه نمایش داده شود
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000); // 2000ms = ۲ ثانیه

    return () => clearTimeout(timer); // پاکسازی در صورت unmount
  }, []);

  // پرلودر باحال
  const Preloader = () => (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#37A0A2] to-[#229799] z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* لوگو یا متن */}
        <motion.div
          className="text-white font-extrabold text-5xl sm:text-7xl tracking-tighter"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-6xl sm:text-8xl text-white/90">زانکو</span>
          <span className="text-4xl sm:text-6xl"> دکور</span>
        </motion.div>

        {/* دایره چرخان */}
        <motion.div
          className="absolute -inset-10 border-8 border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-16 border-4 border-dashed border-white/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* نقاط متحرک */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/80 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              x: [0, Math.cos((i * Math.PI) / 4) * 80, 0],
              y: [0, Math.sin((i * Math.PI) / 4) * 80, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <>
      {/* پرلودر */}
      <AnimatePresence>
        {!isReady && <Preloader />}
      </AnimatePresence>

      {/* محتوای اصلی */}
      <section
        className={`w-full relative flex items-center justify-center min-h-screen bg-cover bg-center transition-opacity duration-1000 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(/img/anti/5776173926256937899.jpg)`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* لایه تیره */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* محتوا */}
        <motion.div
          className="relative max-w-4xl mx-auto px-6 sm:px-12 py-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MotionH1
            className="text-3xl sm:text-5xl font-extrabold text-[#37A0A2] shadow-md mb-6"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            کار ما در زانکو دکور چیست؟
          </MotionH1>

          <MotionP
            className="text-lg sm:text-xl text-white shadow-md mb-4"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            زانکو دکور تولید کننده و مجری انواع پرده بیمارستانی و پرده بین تختی می‌باشد
          </MotionP>

          <MotionP
            className="text-lg sm:text-xl text-white shadow-md mb-6"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            ما با تکیه بر تجربه و توان خود در کوشش ایجاد محیط عاری از باکتری در کنار حفظ حریم شخصی بیماران هستیم
          </MotionP>

          <MotionH2
            className="text-2xl sm:text-3xl font-bold text-[#37A0A2] shadow-md mb-4"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            زانکو دکور محدود به یک شهر نمی‌شود
          </MotionH2>

          <MotionP
            className="text-lg sm:text-xl text-white shadow-md mb-6"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            تیم ما در سریع‌ترین زمان و با تجربه بالا که تضمین کیفیت کار را می‌دهد آماده انجام پروژه پرده‌های بیمارستانی در تمامی نقاط ایران عزیزمان می‌باشد تا با توکل به پروردگار و تکیه بر توانمان نقش کوچکی در آبادانی این مرز و بوم داشته باشیم
          </MotionP>

          <MotionH2
            className="text-2xl sm:text-3xl font-bold text-[#37A0A2] shadow-md mb-4"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            ویژگی‌هایی که ما را متمایز می‌کند
          </MotionH2>

          <MotionUl
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
              <MotionLi
                key={index}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
              >
                {item}
              </MotionLi>
            ))}
          </MotionUl>
        </motion.div>
      </section>
    </>
  );
}