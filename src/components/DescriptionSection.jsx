"use client";

import { MotionDiv } from "./Motion";
import Image from "next/image";

export default function DescriptionSection() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <h2 className="text-3xl sm:text-6xl font-extrabold text-[#37A0A2] text-center mb-16">
        درباره پرده‌های زانکو دکور
      </h2>
      <div className="mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <MotionDiv
          className="flex flex-col items-end text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full md:w-5/6 h-[22em] mb-6 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/img/others/پارچه-آنتی-باکتریال-2.jpg"
              alt="پرده آنتی‌باکتریال زانکو دکور"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl sm:text-2xl text-black pr-[17%] text-start">
            زانکو دکور با استفاده از تکنولوژی روز دنیا همواره در تلاش بوده تا مرغوب ترین جنس پرده را به تولید برساند
          </p>
        </MotionDiv>

        <MotionDiv
          className="flex flex-col items-start space-y-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-extrabold text-[#37A0A2] mb-4">پارچه های آنتی باکتریال</h3>
          <h4 className="text-4xl lg:text-6xl font-extrabold text-gray-700 mb-4">بافت پارچه های زانکو دکو</h4>
          <p className="text-xl sm:text-2xl text-black text-start">
            در صنعت نساجی پارچه، ما با استفاده از بهترین مواد اولیه و بهره‌گیری از فناوری‌های روز دنیا، پارچه‌هایی با کیفیت بالا و متنوع تولید می‌کنیم...
          </p>
          <div className="relative w-full md:w-5/6 h-[22em] mb-6 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/img/others/پارچه-آنتی-باکتریال.jpg"
              alt="پرده زبرا زانکو دکور"
              fill
              className="object-cover"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}