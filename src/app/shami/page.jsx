// app/pardeh-shami/page.jsx
import ClientShamiPage from "./ClientShamiPage";
import { Metadata } from "next";

// متادیتای سئو شده (در Server Component)
export const generateMetadata = () => {
  return {
    title: "پرده بین تختی بیمارستانی (شمعی) | زانکو دکور - حریم خصوصی + شستشوی آسان",
    description:
      "پرده شمعی بین تختی با قابلیت شستشوی بیش از ۴۰ بار، ریل استیل/آلومینیوم، نصب آسان. مناسب بیمارستان، کلینیک و بخش بستری.",
    keywords:
      "پرده بین تختی, پرده شمعی بیمارستانی, پرده بین تختی بیمارستانی, خرید پرده شمعی, پرده حریم خصوصی, زانکو دکور, پرده بیمارستانی",
    openGraph: {
      title: "پرده شمعی بین تختی | زانکو دکور",
      description:
        "حریم خصوصی کامل، شستشوی ۴۰+ بار، ریل استیل/آلومینیوم، نصب روی سقف و دیوار. تضمین کیفیت.",
      url: "https://www.zankodekor.ir/pardeh-shami",
      siteName: "زانکو دکور",
      images: [
        {
          url: "https://www.zankodekor.ir/img/shami/پرده-بیمارستانی-20.jpg",
          width: 1200,
          height: 630,
          alt: "پرده شمعی بین تختی زانکو دکور",
        },
      ],
      locale: "fa_IR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "پرده بین تختی شمعی | زانکو دکور",
      description: "شستشوی ۴۰+ بار، ریل استیل، نصب آسان، حریم خصوصی",
      images: ["https://www.zankodekor.ir/img/shami/پرده-بیمارستانی-20.jpg"],
    },
    alternates: {
      canonical: "https://www.zankodekor.ir/pardeh-shami",
    },
    robots: "index, follow",
  };
};

// Structured Data - Product (درست: @type: "Product")
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product", // درست: Product نه website
  name: "پرده بین تختی بیمارستانی (شمعی)",
  image: [
    "https://www.zankodekor.ir/img/shami/پرده-بیمارستانی-20.jpg",
    "https://www.zankodekor.ir/img/shami/پرده-بیمارستانی-22.jpg",
  ],
  description:
    "پرده شمعی بین تختی با قابلیت شستشوی بیش از ۴۰ بار، ریل استیل/آلومینیوم، نصب آسان روی سقف و دیوار. مناسب برای بیمارستان و کلینیک.",
  brand: { "@type": "Brand", name: "زانکو دکور" },
  offers: {
    "@type": "Offer",
    url: "https://www.zankodekor.ir/pardeh-shami",
    priceCurrency: "IRR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "زانکو دکور" } // بدون کاما در آخر
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "73"
  }
};

export default function ShamiPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* UI در Client Component */}
      <ClientShamiPage />
    </>
  );
}