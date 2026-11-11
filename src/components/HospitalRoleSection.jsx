import { motion } from "framer-motion";
import { FaShieldAlt, FaBroom, FaTint, FaVolumeDown, FaCogs, FaCheckCircle } from "react-icons/fa";

const features = [
  { icon: FaShieldAlt, text: "حفظ حریم خصوصی بیماران در زمان معاینه یا درمان" },
  { icon: FaBroom, text: "خاصیت ضد میکروب و کمک به کنترل عفونت" },
  { icon: FaTint, text: "قابلیت شست‌وشو و ضدعفونی شدن آسان" },
  { icon: FaCogs, text: "دوام و استحکام در برابر سایش و پارگی" },
  { icon: FaVolumeDown, text: "عایق صدا و نور برای ایجاد محیطی آرام‌تر" },
  { icon: FaCheckCircle, text: "طراحی ساده با رنگ‌های آرام‌بخش" },
];

const types = [
  "پرده‌های ضد باکتریال برای اتاق عمل و بخش‌های ویژه",
  "پرده‌های ضد آب و مقاوم به مواد شیمیایی",
  "پرده‌های الکتریکی یا مکانیکی با قابلیت باز و بسته شدن آسان",
];

export default function HospitalRoleSection() {
  return (
    <section className="w-full py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#229799] font-semibold text-sm mb-2">اهمیت پرده بیمارستانی</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
            نقش پرده بیمارستانی در حفظ حریم خصوصی و کنترل عفونت
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            پرده‌ بیمارستانی یکی از اجزای مهم و ضروری در محیط‌های درمانی است که نقش مهمی در حفظ حریم خصوصی بیماران، کنترل عفونت و ایجاد محیطی آرام و امن برای بیماران و کارکنان دارد.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#229799]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="text-[#229799]" size={22} />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">انواع پرده‌های بیمارستانی</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {types.map((type, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-[#229799] text-white rounded-lg flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</span>
                <p className="text-gray-700 text-sm leading-relaxed">{type}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#229799] to-[#1a7a7c] rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">زانکو را بیشتر بشناسید</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              ما توانسته‌ایم با تکیه بر نیروهای مجرب در تولید و اجرای پرده‌های بیمارستانی و اداری، سهمی کوچک در آبادانی میهن عزیزمان داشته باشیم.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#229799] px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
            >
              تماس با ما
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
