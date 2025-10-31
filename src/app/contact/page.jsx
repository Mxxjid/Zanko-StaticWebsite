// app/contact/page.jsx
import ClientContactPage from "./ClientContactPage";
import { Metadata } from "next";

// متادیتای سئو شده
export const generateMetadata = () => {
  return {
    title: "تماس با ما | زانکو دکور - مشاوره رایگان پرده بیمارستانی",
    description:
      "تماس با زانکو دکور: 0912-265-5585 | مشاوره رایگان پرده آنتی باکتریال، بین تختی و اداری. کرج - کمالشهر.",
    keywords:
      "تماس با زانکو دکور, مشاوره رایگان پرده, پرده بیمارستانی, پرده اداری, کرج, کمالشهر, زانکو دکور",
    openGraph: {
      title: "تماس با زانکو دکور | مشاوره رایگان",
      description: "0912-265-5585 | مشاوره رایگان برای پرده آنتی باکتریال، بین تختی و اداری",
      url: "https://www.zankodekor.ir/contact",
      siteName: "زانکو دکور",
      images: [
        {
          url: "https://www.zankodekor.ir/img/others/cropped-photo_2024-09-17_17-26-59-1.png",
          width: 1200,
          height: 630,
          alt: "زانکو دکور - تماس با ما",
        },
      ],
      locale: "fa_IR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "تماس با زانکو دکور",
      description: "مشاوره رایگان: 0912-265-5585",
      images: ["https://www.zankodekor.ir/img/others/cropped-photo_2024-09-17_17-26-59-1.png"],
    },
    alternates: {
      canonical: "https://www.zankodekor.ir/contact",
    },
    robots: "index, follow",
  };
};

// Structured Data - Organization + LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "زانکو دکور",
  image: "https://www.zankodekor.ir/img/others/cropped-photo_2024-09-17_17-26-59-1.png",
  url: "https://www.zankodekor.ir",
  telephone: ["+989122655585", "+989190303033", "+982634725322"],
  email: "info@zankodekor.ir",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ولیعصر شمالی",
    addressLocality: "کمالشهر",
    addressRegion: "البرز",
    addressCountry: "IR"
  },
  openingHours: "Mo-Su 09:00-18:00",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+989122655585"
  },
  sameAs: [
    "https://instagram.com/zankodekor",
    "https://t.me/nayeriaboozar",
    "https://wa.me/989122655585"
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientContactPage />
    </>
  );
}