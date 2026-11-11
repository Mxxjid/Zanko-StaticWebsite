import Header from "../../components/Header";
import Footer from "../../components/Footer";

const colors = [
  { hex: "#79D2D8", code: "Code 101", name: "آبی فیروزه‌ای" },
  { hex: "#B5CF45", code: "Code 102", name: "سبز لیمویی" },
  { hex: "#A591D6", code: "Code 103", name: "بنفش ملایم" },
  { hex: "#54A9BE", code: "Code 104", name: "آبی آسمانی" },
  { hex: "#FFFFFF", code: "Code 105", name: "سفید" },
  { hex: "#A6A4AB", code: "Code 106", name: "خاکستری" },
  { hex: "#342AAD", code: "Code 107", name: "آبی تیره" },
  { hex: "#268116", code: "Code 108", name: "سبز پررنگ" },
  { hex: "#D08CC4", code: "Code 109", name: "صورتی" },
];

function isColorDark(color) {
  const c = color.charAt(0) === "#" ? color.substring(1) : color;
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 140;
}

export default function ColorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <span className="inline-block text-[#229799] font-semibold text-sm mb-2">رنگ‌بندی</span>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">رنگ‌بندی محصولات</h1>
            <p className="text-gray-500 max-w-xl mx-auto">رنگ‌های متنوع برای انتخاب بهترین ترکیب برای فضای شما</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div
                key={color.code}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className="h-48 sm:h-56 w-full transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900">{color.name}</h3>
                      <p className="text-sm text-gray-500">{color.code}</p>
                    </div>
                    <span className="text-sm font-mono text-gray-400">{color.hex}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
