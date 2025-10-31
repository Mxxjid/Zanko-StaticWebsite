// components/Motion.jsx
"use client";

import dynamic from "next/dynamic";

export const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);

export const MotionH2 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h2),
  { ssr: false }
);

export const MotionH3 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h3),
  { ssr: false }
);

export const MotionP = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.p),
  { ssr: false }
);

export const MotionUl = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.ul),
  { ssr: false }
);

export const MotionLi = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.li),
  { ssr: false }
);