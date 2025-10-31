// app/pardeh-edari/page.jsx
import ClientOfficeCurtainPage from "./ClientOfficeCurtainPage";
import { Metadata } from "next";

// متادیتای سئو شده
export const generateMetadata = () => {
  return {
    title: "پرده اداری | زبرا، کرکره چوبی و فلزی | زانکو دکور",
    description:
      "پرده اداری مدرن با کنترل نور، شستشوی آسان، نصب دستی/موتوری. مناسب دفتر، بیمارستان و کلینیک. زانکو دکور - کیفیت بالا.",
    keywords:
      "پرده اداری, پرده زبرا, کرکره چوبی, کرکره فلزی, پرده بیمارستانی, پرده اداری مدرن, زانکو دکور",
    openGraph: {
      title: "پرده اداری | زبرا، کرکره چوبی و فلزی | زانکو دکور",
      description: "کنترل نور، طراحی مدرن، دوام بالا، نصب آسان. مناسب فضای اداری و درمانی.",
      url: "https://www.zankodekor.ir/pardeh-edari",
      siteName: "زانکو دکور",
      images: [
        {
          url: "https://www.zankodekor.ir/img/others/پرده-بیمارستانی-23.jpg",
          width: 1200,
          height: 630,
          alt: "پرده زبرا اداری زانکو دکور",
        },
      ],
      locale: "fa_IR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "پرده اداری | زانکو دکور",
      description: "زبرا، کرکره چوبی و فلزی با کنترل نور و طراحی مدرن",
      images: ["https://www.zankodekor.ir/img/others/پرده-بیمارستانی-23.jpg"],
    },
    alternates: {
      canonical: "https://www.zankodekor.ir/pardeh-edari",
    },
    robots: "index, follow",
  };
};

// Structured Data - Product (برای مجموعه پرده‌های اداری)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "پرده اداری (زبرا، کرکره چوبی، فلزی)",
  image: [
    "https://www.zankodekor.ir/img/others/پرده-بیمارستانی-23.jpg",
    "https://www.zankodekor.ir/img/others/پرده-بیمارستانی-11.jpg",
  ],
  description:
    "پرده اداری با کنترل نور، شستشوی آسان، نصب دستی/موتوری. مناسب دفتر، بیمارستان و کلینیک.",
  brand: { "@type": "Brand", name: "زانکو دکور" },
  offers: {
    "@type": "Offer",
    url: "https://www.zankodekor.ir/pardeh-edari",
    priceCurrency: "IRR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "زانکو دکور" }
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "92"
  }
};

export default function OfficeCurtainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientOfficeCurtainPage />
    </>
  );
}