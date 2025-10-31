"use client";

import {
  MotionH2,
  MotionP,
  MotionH3,
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

export default function HospitalRoleSection() {
  return (
    <section className="w-full py-12 px-5 sm:px-28 bg-white">
      <div className="mx-auto sm:px-12 text-start">
        <MotionH2
          className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-6"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          نقش و اهمیت پرده‌ بیمارستانی در حفظ حریم خصوصی و کنترل عفونت
        </MotionH2>

        <MotionP
          className="text-lg sm:text-xl text-black mb-6 leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          پرده‌ بیمارستانی یکی از اجزای مهم و ضروری در محیط‌های درمانی است که نقش مهمی در حفظ حریم خصوصی بیماران، کنترل عفونت و ایجاد محیطی آرام و امن برای بیماران و کارکنان دارد...
        </MotionP>

        <MotionH3
          className="text-2xl sm:text-3xl font-bold text-[#37A0A2] mb-4"
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          ویژگی‌های کلیدی پرده‌های بیمارستانی
        </MotionH3>
        <MotionUl
          className="text-lg sm:text-xl text-black list-disc list-inside space-y-2 mb-6"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            "حفظ حریم خصوصی بیماران در زمان معاینه یا درمان",
            "خاصیت ضد میکروب و کمک به کنترل عفونت",
            "قابلیت شست‌وشو و ضدعفونی شدن آسان",
            "دوام و استحکام در برابر سایش و پارگی",
            "عایق صدا و نور برای ایجاد محیطی آرام‌تر",
          ].map((item, i) => (
            <MotionLi key={i} variants={listItemVariants}>
              {item}
            </MotionLi>
          ))}
        </MotionUl>

        <MotionH3
          className="text-2xl sm:text-3xl font-bold text-[#37A0A2] mb-4"
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          انواع پرده‌های بیمارستانی
        </MotionH3>
        <MotionUl
          className="text-lg sm:text-xl text-black list-disc list-inside space-y-2 mb-6"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
        >
          {[
            "پرده‌های ضد باکتریال برای اتاق عمل و بخش‌های ویژه",
            "پرده‌های ضد آب و مقاوم به مواد شیمیایی",
            "پرده‌های الکتریکی یا مکانیکی با قابلیت باز و بسته شدن آسان",
          ].map((item, i) => (
            <MotionLi key={i} variants={listItemVariants}>
              {item}
            </MotionLi>
          ))}
        </MotionUl>

        <MotionH3
          className="text-2xl sm:text-3xl font-bold text-[#37A0A2] mb-4"
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          نکات مهم در انتخاب پرده بیمارستانی
        </MotionH3>
        <MotionUl
          className="text-lg sm:text-xl text-black list-disc list-inside space-y-2 mb-6"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
        >
          {[
            "کیفیت بالای پارچه مقاوم به شست‌وشو و ضدعفونی",
            "رعایت استانداردهای بهداشتی برای جلوگیری از گسترش بیماری",
            "طراحی ساده با رنگ‌های آرام‌بخش برای بهبود روحیه بیماران",
          ].map((item, i) => (
            <MotionLi
              key={i}
              custom={i}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {item}
            </MotionLi>
          ))}
        </MotionUl>

        <MotionH3
          className="text-2xl sm:text-3xl font-bold text-[#37A0A2] mb-4"
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.6 }}
        >
          زانکو را بیشتر بشناسید
        </MotionH3>
        <MotionP
          className="text-lg sm:text-xl text-black leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        >
          ما توانسته‌ایم با تکیه بر نیروهای مجرب در تولید و اجرای پرده‌های بیمارستانی و اداری، سهمی کوچک در آبادانی میهن عزیزمان داشته باشیم...
        </MotionP>
      </div>
    </section>
  );
}