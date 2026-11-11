import { motion } from "framer-motion";
import Image from "next/image";

export default function DescriptionSection() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#229799] font-semibold text-sm mb-2">درباره محصولات</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">درباره پرده‌های زانکو دکور</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">ترکیبی از کیفیت، زیبایی و عملکرد برای محیط‌های درمانی و اداری</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/img/others/پارچه-آنتی-باکتریال-2.webp"
                alt="پرده آنتی‌باکتریال زانکو دکور"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#229799] text-white rounded-2xl px-6 py-3 shadow-lg">
              <span className="font-bold">+۱۲ سال تجربه</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              پارچه‌های <span className="text-[#229799]">آنتی باکتریال</span> با کیفیت بالا
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              زانکو دکور با استفاده از تکنولوژی روز دنیا همواره در تلاش بوده تا مرغوب‌ترین جنس پرده را به تولید برساند. در صنعت نساجی پارچه، ما با استفاده از بهترین مواد اولیه و بهره‌گیری از فناوری‌های روز دنیا، پارچه‌هایی با کیفیت بالا و متنوع تولید می‌کنیم.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "شستشو", value: "+۴۰ بار" },
                { label: "ضمانت", value: "۲ سال" },
                { label: "ارسال", value: "سراسر ایران" },
                { label: "نصب", value: "حرفه‌ای" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-[#229799]">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              بافت پارچه‌های <span className="text-[#229799]">زانکو دکور</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              ما با استفاده از بهترین مواد اولیه و بهره‌گیری از فناوری‌های روز دنیا، پارچه‌هایی با کیفیت بالا و متنوع تولید می‌کنیم. بافت پارچه‌های ما تضمین‌کننده دوام و زیبایی در محیط‌های پراستفاده است.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/img/others/پارچه-آنتی-باکتریال.webp"
                alt="پرده زبرا زانکو دکور"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
