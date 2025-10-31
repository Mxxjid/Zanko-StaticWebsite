"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MotionDiv } from "./Motion";
import { imageVariants } from "../utils/animations";
import images from "../utils/imgSrc"
// آرایه تصاویر (هاردکد شده)


// برچسب دسته‌بندی‌ها
const categoryLabels = {
  all: "همه",
  antibacterial: "آنتی‌باکتریال",
  wax: "شمعی",
  zebra: "زبرا",
};

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // فیلتر تصاویر
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="w-full py-12 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
        گالری تصاویر
      </h2>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* دکمه‌های دسته‌بندی */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "antibacterial", "wax", "zebra"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat
                  ? "bg-[#37A0A2] text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* گالری تصاویر */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500">تصویری در این دسته‌بندی موجود نیست.</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {filteredImages.map((image) => (
                <MotionDiv
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -8 }}
                  layout
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OnPfQAJJQP3g2k3XAAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-white text-lg font-semibold">{image.alt}</span>
                  </div>
                </MotionDiv>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}