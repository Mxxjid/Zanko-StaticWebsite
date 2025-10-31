// app/pardeh-anti-bacterial/page.jsx
import ClientAntiBacterialPage from "./ClientAntiBacterialPage";
import { Metadata } from "next";

// متادیتا (در Server Component)
export const generateMetadata = ()=> {
  return {
    title: "پرده آنتی باکتریال بیمارستانی | زانکو دکور - شستشوی ۴۰+ بار",
    description:
      "پرده آنتی باکتریال با قابلیت شستشوی بیش از ۴۰ بار، ضد لک، ضد بو، ریل آلومینیومی. مناسب بیمارستان، کلینیک و اتاق عمل.",
    keywords:
      "پرده آنتی باکتریال, پرده بیمارستانی, خرید پرده آنتی باکتریال, پرده ضد باکتری, زانکو دکور",
    openGraph: {
      title: "پرده آنتی باکتریال بیمارستانی | زانکو دکور",
      description: "شستشوی ۴۰+ بار، ضد لک، ریل آلومینیومی، گارانتی ۲ ساله",
      url: "https://www.zankodekor.ir/pardeh-anti-bacterial",
      siteName: "زانکو دکور",  // اضافه شد
      images: [
        {
          url: "https://www.zankodekor.ir/img/anti/پرده-بیمارستانی-10.jpg",
          width: 1200,
          height: 630,
          alt: "پرده آنتی باکتریال زانکو دکور",
        },
      ],
      locale: "fa_IR",
      type: "website",  // درست: به جای "product"
    },
    twitter: {
      card: "summary_large_image",
      title: "پرده آنتی باکتریال | زانکو دکور",
      description: "شستشوی ۴۰+ بار، ضد لک، ریل آلومینیومی",
      images: ["https://www.zankodekor.ir/img/anti/پرده-بیمارستانی-10.jpg"],
    },
    alternates: { canonical: "https://www.zankodekor.ir/pardeh-anti-bacterial" },
    robots: "index, follow",
  };
};

// Structured Data (در سرور) - این درسته!
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product", // درست: اینجا Product باشه
  name: "پرده آنتی باکتریال بیمارستانی",
  image: [
    "https://www.zankodekor.ir/img/anti/پرده-بیمارستانی-10.jpg",
    "https://www.zankodekor.ir/img/anti/پرده-بیمارستانی-34.jpg",
  ],
  description:
    "پرده آنتی باکتریال با شستشوی ۴۰+ بار، ریل آلومینیومی، ضد لک و بو. مناسب بیمارستان و کلینیک.",
  brand: { "@type": "Brand", name: "زانکو دکور" },
  offers: {
    "@type": "Offer",
    url: "https://www.zankodekor.ir/pardeh-anti-bacterial",
    priceCurrency: "IRR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "زانکو دکور" }
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "89" },
};

export default function AntiBacterialPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* UI در Client Component */}
      <ClientAntiBacterialPage />
    </>
  );
}