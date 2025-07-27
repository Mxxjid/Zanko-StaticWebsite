import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "زانکو دکور | تولید کننده پرده بیمارستانی و آنتی‌باکتریال",
  description:
    "زانکو دکور تولید کننده و مجری پرده‌های بیمارستانی، آنتی‌باکتریال، شمعی و زبرا با کیفیت بالا در سراسر ایران. خدمات حرفه‌ای با تضمین کیفیت و سرعت عمل.",
  keywords:
    "پرده بیمارستانی, پرده آنتی‌باکتریال, پرده زبرا, پرده شمعی, زانکو دکور, پرده بین تختی, تولید پرده بیمارستانی, خدمات پرده بیمارستان, ایران",
  authors: [{ name: "Zanko Dekor" }],
  openGraph: {
    title: "زانکو دکور | پرده‌های بیمارستانی با کیفیت",
    description:
      "تولید و اجرای پرده‌های بیمارستانی آنتی‌باکتریال، شمعی و زبرا با خدمات سراسری در ایران. کیفیت تضمینی با زانکو دکور.",
    url: "https://www.zankodekor.ir",
    siteName: "Zanko Dekor",
    images: [
      {
        url: "https://www.zankodekor.ir/img/anti/پرده-بیمارستانی-1.jpg",
        width: 1200,
        height: 630,
        alt: "پرده بیمارستانی زانکو دکور",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "زانکو دکور | پرده‌های بیمارستانی",
    description:
      "پرده‌های آنتی‌باکتریال، شمعی و زبرا با کیفیت بالا از زانکو دکور. خدمات حرفه‌ای در سراسر ایران.",
    images: ["https://www.zankodekor.ir/img/anti/پرده-بیمارستانی-1.jpg"],
  },
  alternates: {
    canonical: "https://www.zankodekor.ir",
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
      >
        {children}
      </body>
    </html>
  );
}
