"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur-2xl z-0"
    />
  );
}
