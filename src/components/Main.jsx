"use client"
import LandingSection from "./LandingSection";
import GallerySection from "./GallerySection";
import VideosSection from "./VideosSection";
import DescriptionSection from "./DescriptionSection";
import HospitalRoleSection from "./HospitalRoleSection";

export default function Main() {
  return (
    <main className="w-full" dir="rtl">
      <LandingSection />
      <GallerySection />
      <VideosSection />
      <DescriptionSection />
      <HospitalRoleSection />
    </main>
  );
}