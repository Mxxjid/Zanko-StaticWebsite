// app/about/page.tsx
import ClientAboutPage from "./ClientAboutPage.jsx";
import { Metadata } from "next";

// متادیتای سئو شده
export async function generateMetadata() {
  return {
    title: "درباره زانکو دکور | تولید کننده پرده بیمارستانی آنتی باکتریال",
    description:
      "زانکو دکور از سال ۱۳۹۱ تولید کننده تخصصی پرده بیمارستانی، پرده آنتی باکتریال، پرده بین تختی و زبرا با کیفیت بالا و خدمات سراسری در ایران.",
    keywords:
      "زانکو دکور, درباره زانکو دکور, تولید کننده پرده بیمارستانی, پرده آنتی باکتریال, پرده بین تختی, شرکت پرده بیمارستانی",
    openGraph: {
      title: "درباره زانکو دکور | تولید کننده پرده بیمارستانی",
      description:
        "از سال ۱۳۹۱ با هدف ارتقای بهداشت و زیبایی در بیمارستان‌ها و کلینیک‌ها فعالیت می‌کنیم.",
      url: "https://www.zankodekor.ir/about",
      images: [
        {
          url: "https://www.zankodekor.ir/img/others/cropped-photo_2024-09-17_17-26-59-1.png",
          width: 1200,
          height: 630,
          alt: "لوگو زانکو دکور",
        },
      ],
      locale: "fa_IR",
      type: "website",
    },
    alternates: {
      canonical: "https://www.zankodekor.ir/about",
    },
    robots: "index, follow",
  };
}

// Structured Data - Organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "زانکو دکور",
  url: "https://www.zankodekor.ir",
  logo: "https://www.zankodekor.ir/img/others/cropped-photo_2024-09-17_17-26-59-1.png",
  description:
    "تولید کننده تخصصی پرده بیمارستانی آنتی باکتریال، پرده بین تختی، زبرا و شمعی از سال ۱۳۹۱.",
  foundingDate: "2012",
  founder: "تیم متخصص زانکو دکور",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ولیعصر شمالی، کمالشهر",
    addressLocality: "البرز",
    addressRegion: "تهران",
    addressCountry: "IR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+989122655585",
    contactType: "customer service",
    areaServed: "IR",
    availableLanguage: "Persian",
  },
  sameAs: [
    "https://instagram.com/zankodekor",
    "https://t.me/zankodekor",
    "https://wa.me/989122655585",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientAboutPage />
    </>
  );
}