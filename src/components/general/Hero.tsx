"use client";

import { Icon } from "@iconify/react";
import { Card } from "@/components/ui/card";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const techIcons = [
  { src: "devicon:html5", alt: "HTML5" },
  { src: "devicon:css3", alt: "CSS3" },
  { src: "devicon:javascript", alt: "JavaScript" },
  { src: "devicon:typescript", alt: "TypeScript" },
  { src: "devicon:tailwindcss", alt: "TailwindCSS" },
  { src: "devicon:react", alt: "React" },
  { src: "devicon:vuejs", alt: "Vue.js" },
  { src: "devicon:nextjs", alt: "Next.js" },
  { src: "devicon:python", alt: "Python" },
  { src: "devicon:pandas", alt: "Pandas" },
  { src: "devicon:scikitlearn", alt: "Scikit-learn" },
];

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-[#1A1A1A] border-none p-2">
              <Image
                src="/monkey.webp"
                alt="Monkey"
                width={128}
                height={128}
                className="rounded-lg"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hi, <span className="text-lime-400">Deppfellow</span> here.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Whatver your opinion. they're invalid. Period.
            </p>
            <div className="flex flex-wrap gap-3">
              {techIcons.map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8"
                >
                  <Icon icon={icon.src} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
