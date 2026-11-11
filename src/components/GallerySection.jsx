"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import images from "../utils/imgSrc";

const categoryLabels = {
  all: "همه",
  antibacterial: "آنتی‌باکتریال",
  wax: "شمعی",
  zebra: "زبرا",
};

const categories = ["all", "antibacterial", "wax", "zebra"];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="w-full py-16 sm:py-20 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#229799] font-semibold text-sm mb-2">نمونه کارها</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">گالری تصاویر</h2>
          <p className="text-gray-500 max-w-xl mx-auto">نمونه پروژه‌های اجرایی ما در سراسر ایران</p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#229799] text-white shadow-lg shadow-[#229799]/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">تصویری در این دسته‌بندی موجود نیست.</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer bg-gray-200 aspect-[4/3]"
                  onClick={() => setLightbox(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-sm">{image.alt}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
