// src/store/gallery.js
import { client } from "../lib/sanityClient"; // مسیر درست sanityClient

// فچ تصاویر گالری
export const fetchGalleryImages = async () => {
  try {
    const images = await client.fetch(`
      *[_type == "galleryImage"]{
        _id,
        alt,
        category,
        "src": image.asset->url
      }
    `);

    const bg = await client.fetch(`
      *[_type == "backgroundImage"][0]{
        "src": image.asset->url
      }
    `);

    return {
      images: images || [],
      backgroundImage: bg?.src || "/img/anti/پرده-بیمارستانی-1.jpg",
    };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return {
      images: [],
      backgroundImage: "/img/anti/پرده-بیمارستانی-1.jpg",
    };
  }
};