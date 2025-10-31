// src/utils/sanityImageLoader.js
export default function sanityImageLoader({ src, width, quality }) {
  // اگر URL از Sanity باشه، همون رو برگردون
  if (src.startsWith("https://cdn.sanity.io")) {
    const url = new URL(src);
    url.searchParams.set("w", width);
    url.searchParams.set("q", quality || 75);
    return url.toString();
  }

  // برای تصاویر محلی
  return src;
}