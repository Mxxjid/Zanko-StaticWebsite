"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const colors = [
  "#79D2D8",
  "#B5CF45",
  "#A591D6",
  "#54A9BE",
  "#FFFFFF",
  "#A6A4AB",
  "#342AAD",
  "#268116",
  "#D08CC4",
];

const text = [
  "Code 101",
  "Code 102",
  "Code 103",
  "Code 104",
  "Code 105",
  "Code 106",
  "Code 107",
  "Code 108",
  "Code 109",
];

export default function ColorsPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-black p-8" dir="rtl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-[#229799]">
          رنگ‌بندی محصولات
        </h1>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div
              key={color}
              className="rounded-lg h-60 sm:h-80 shadow-md flex flex-col items-end justify-end p-6"
              style={{ backgroundColor: color }}
            >
              <span
                className={`text-lg font-semibold ${
                  isColorDark(color) ? "text-white" : "text-black"
                }`}
              >
                {text[index]}
              </span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// تابع برای تشخیص تاریکی رنگ
function isColorDark(color) {
  const c = color.charAt(0) === "#" ? color.substring(1) : color;
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 140;
}
