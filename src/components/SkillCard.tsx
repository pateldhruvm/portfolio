"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  name: string;
  index: number;
}

const SkillCard = ({ icon, name, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.1}
        glareEnable
        glareMaxOpacity={0.25}
        glareColor="white"
        glarePosition="all"
        className="group bg-transparent border-transparent rounded-2xl p-6  transition-all flex flex-col items-center justify-center"
      >
        <img
          src={icon}
          alt={name}
           className="w-24 h-24 mb-4 object-contain transition-transform duration-300 ease-out group-hover:translate-y-[-10px] group-hover:scale-110 group-hover:opacity-100"
        />
        <p className="text-center text-sm font-semibold text-white">{name}</p>
      </Tilt>
    </motion.div>
  );
};

export default SkillCard;
