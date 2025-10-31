// pages/api/gallery.js
import { client } from "../lib/sanityClient";

export default async function handler(req, res) {
  try {
    // فچ تصاویر گالری
    const images = await client.fetch(`*[_type == "galleryImage"]{
      _id,
      alt,
      category,
      "src": image.asset->url
    }`);

    // فچ تصویر پس‌زمینه
    const bg = await client.fetch(`*[_type == "backgroundImage"][0]{
      "src": image.asset->url
    }`);

    res.status(200).json({
      images: images || [],
      backgroundImage: bg?.src || "/img/anti/پرده-بیمارستانی-1.jpg",
    });
  } catch (error) {
    res.status(500).json({
      images: [],
      backgroundImage: "/img/anti/پرده-بیمارستانی-1.jpg",
      error: error.message,
    });
  }
}
