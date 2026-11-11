import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingSection() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  const Preloader = () => (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#229799] to-[#1a7a7c] z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="text-center">
        <motion.div
          className="text-white font-black text-5xl sm:text-7xl tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-6xl sm:text-8xl text-white/90">زانکو</span>
          <span className="text-4xl sm:text-6xl"> دکور</span>
        </motion.div>
        <motion.div
          className="mt-6 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white/80 rounded-full"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  const features = [
    "استفاده از مواد اولیه با کیفیت",
    "پشتیبانی کامل پس از فروش",
    "تیم متخصص و مجرب",
    "سرعت عمل و کیفیت بالا",
    "تضمین کیفیت محصول",
  ];

  return (
    <>
      <AnimatePresence>
        {!isReady && <Preloader />}
      </AnimatePresence>

      <section
        className={`relative min-h-screen flex items-center transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/img/anti/5776173926256937899.webp)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isReady ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-[#37A0A2] rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">تولیدکننده پرده بیمارستانی آنتی باکتریال</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              کار ما در{" "}
              <span className="text-[#37A0A2]">زانکو دکور</span>{" "}
              چیست؟
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
              زانکو دکور تولید کننده و مجری انواع پرده بیمارستانی و پرده بین تختی می‌باشد
            </p>
            <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              ما با تکیه بر تجربه و توان خود در کوشش ایجاد محیط عاری از باکتری در کنار حفظ حریم شخصی بیماران هستیم
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
            >
              {[
                { num: "+۱۲", label: "سال تجربه" },
                { num: "+۵۰۰", label: "پروژه موفق" },
                { num: "۱۰۰٪", label: "رضایت مشتری" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-[#37A0A2]">{stat.num}</div>
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isReady ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">ویژگی‌هایی که ما را متمایز می‌کند</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-right">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isReady ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                  >
                    <span className="w-2 h-2 bg-[#37A0A2] rounded-full shrink-0" />
                    <span className="text-white/80 text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#229799] hover:bg-[#1a7a7c] text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#229799]/25 hover:-translate-y-0.5"
              >
                تماس با ما
              </a>
              <a
                href="/antibacterial"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm"
              >
                مشاهده محصولات
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
