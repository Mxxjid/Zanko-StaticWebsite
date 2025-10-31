"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryImages } from "../store/gallerySlice";
import { MotionDiv } from "./Motion";
import { imageVariants } from "../utils/animations";

const categoryLabels = {
  all: "همه",
  antibacterial: "آنتی‌باکتریال",
  wax: "شمعی",
  office: "اداری",
};

// کامپوننت Spinner
const Spinner = () => (
  <div className="flex justify-center items-center py-16">
    <div className="w-12 h-12 border-4 border-t-[#37A0A2] border-gray-200 rounded-full animate-spin"></div>
  </div>
);

// کامپوننت اسکلتون گالری
const GallerySkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="bg-gray-200 rounded-lg shadow-lg h-64 animate-pulse"
      />
    ))}
  </div>
);

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.gallery);
console.log(images);

  useEffect(() => {
    dispatch(fetchGalleryImages());
  }, [dispatch]);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // وضعیت: لودینگ
  if (loading) {
    return (
      <section className="w-full py-12 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
          گالری تصاویر
        </h2>
        <div className="mx-auto px-6 sm:px-12">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {["all", "antibacterial", "wax", "office"].map((cat) => (
              <div
                key={cat}
                className="px-6 py-2 bg-gray-200 rounded-full h-10 w-24 animate-pulse"
              />
            ))}
          </div>
          <Spinner />
        </div>
      </section>
    );
  }

  // وضعیت: خطا یا خالی بودن
  const isEmpty = !loading && (!images || images.length === 0);
  const hasError = !loading && error;

  if (hasError || isEmpty) {
    return (
      <section className="w-full py-12 bg-gray-50">
        <h2 className="text-3xl sm:text--As4xl font-extrabold text-gray-900 text-center mb-8">
          گالری تصاویر
        </h2>
        <div className="mx-auto px-6 sm:px-12">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {["all", "antibacterial", "wax", "office"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                disabled
                className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors-none ${
                  selectedCategory === cat
                    ? "bg-[#37A0A2] text-white"
                    : "bg-gray-200 text-gray-700"
                } opacity-50 cursor-not-allowed`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="text-center py-12">
            <GallerySkeleton />
            <p className="mt-8 text-lg text-gray-500">
              {hasError
                ? "خطایی در بارگذاری تصاویر رخ داد."
                : "تصویری در این دسته‌بندی موجود نیست."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // وضعیت: نمایش تصاویر
  return (
    <section className="w-full py-12 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
        گالری تصاویر
      </h2>

      <div className="mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {["all", "antibacterial", "wax", "office"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300 ${
                selectedCategory === cat
                  ? "bg-[#37A0A2] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {filteredImages.length === 0 ? (
          <div className="text-center py-12">
            <GallerySkeleton />
            <p className="mt-8 text-lg text-gray-500">
              تصویری در این دسته‌بندی موجود نیست.
            </p>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" layout>
              {filteredImages.map((image) => (
                <MotionDiv
                  key={image._id}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">{image.alt}</span>
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