// app/layout.jsx
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./ClientLayout";

// فونت‌ها
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// متادیتا
export const metadata = {
  // استفاده از template برای صفحات داخلی
  title: {
    default: "زانکو دکور | تولید کننده پرده بیمارستانی آنتی باکتریال",
    template: "%s | زانکو دکور - پرده بیمارستانی و آنتی باکتریال",
  },
  description:
    "زانکو دکور تولید کننده پرده بیمارستانی آنتی باکتریال، پرده بین تختی، پرده زبرا و شمعی با کیفیت بالا. خرید پرده بیمارستانی با قیمت مناسب و خدمات سراسری در ایران.",
  
  keywords: [
    "پرده بیمارستانی",
    "پرده آنتی باکتریال",
    "پرده بین تختی",
    "خرید پرده بیمارستانی",
    "میل پرده بیمارستانی",
    "پرده بین تختی بیمارستانی",
    "پرده آنتی باکتریال بیمارستانی",
    "تولید پرده بیمارستانی",
    "پرده بیمارستانی ارزان",
    "پرده بیمارستان",
    "پرده کلینیک",
    "پرده پزشکی",
    "زانکو دکور",
    "پرده زبرا بیمارستانی",
    "پرده شمعی بیمارستانی",
    "پرده ضد آب بیمارستانی",
    "پرده اتاق عمل"
  ].join(", "),

  authors: [{ name: "Zanko Dekor" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.zankodekor.ir",
  },

  openGraph: {
    title: "زانکو دکور | تولید و خرید پرده بیمارستانی آنتی باکتریال",
    description:
      "تولید و فروش پرده بیمارستانی، پرده بین تختی، پرده آنتی باکتریال با کیفیت بالا و قیمت مناسب. خدمات سراسری در ایران.",
    url: "https://www.zankodekor.ir",
    siteName: "Zanko Dekor",
    images: [
      {
        url: "https://www.zankodekor.ir/img/anti/پرده-بیمارستانی-1.jpg",
        width: 1200,
        height: 630,
        alt: "پرده بیمارستانی آنتی باکتریال زانکو دکور",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "زانکو دکور | خرید پرده بیمارستانی آنتی باکتریال",
    description:
      "پرده بیمارستانی، پرده بین تختی و آنتی باکتریال با کیفیت بالا از زانکو دکور. ارسال به سراسر ایران.",
    images: ["https://www.zankodekor.ir/img/anti/پرده-بیمارستانی-1.jpg"],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "زانکو دکور",
    description:
      "تولید و اجرای پرده‌های بیمارستانی آنتی‌باکتریال، شمعی و زبرا با کیفیت بالا در سراسر ایران.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ولیعصر شمالی، کمالشهر",
      addressLocality: "البرز",
      addressRegion: "تهران",
      addressCountry: "IR",
    },
    telephone: "+989122655585",
    url: "https://www.zankodekor.ir",
    image: "/img/others/cropped-photo_2024-09-17_17-26-59-1.png",
    openingHours: "Mo,Tu,We,Th,Sa 09:00-18:00",
    sameAs: [
      "https://t.me/zankodekor",
      "https://www.instagram.com/zankodekor",
      "https://wa.me/989122655585",
    ],
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/img/others/cropped-photo_2024-09-17_17-26-59-1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}