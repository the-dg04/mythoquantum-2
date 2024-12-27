"use client";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { useEffect, useState } from "react";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0,
  }),
};

const textVariants = {
  incoming: (direction) => ({
    scale: 0.8,
    opacity: 0,
  }),
  active: { scale: 1, opacity: 1 },
  exit: (direction) => ({
    scale: 0.8,
    opacity: 0,
  }),
};

const sliderTransition = {
  duration: 2,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const textTransition = {
  duration: 2,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const IMAGES = [
  {
    id: 0,
    imageSrc:
      "/bg2.jpg",
    heading: "",
    text: '"Driven by Data. Powered by Innovation."',
  },
  {
    id: 1,
    imageSrc:
      "/bg4.jpg",
    heading: "R&D",
    text: `"Where research meets revolution—creating tomorrow's breakthroughs today."`,
  },
  {
    id: 2,
    imageSrc:
      "/bg1.jpg",
    heading: "Automation",
    text: `"Revolutionizing industries with seamless automation for a smarter world."`,
  },
  {
    id: 3,
    imageSrc:
      "/bg2.jpg",
    heading: "AI/Ml",
    text: `"Empowering smarter decisions with AI and ML to shape the future."`,
  },
  {
    id: 4,
    imageSrc:
      "/bg3.jpg",
    heading: "Data Modeling",
    text: `"Decoding the language of data—transforming complexity into actionable clarity and insight."`,
  },
];

export default function Slider() {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const activeImageIndex = wrap(0, IMAGES.length, imageCount);
  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      swipeToImage(1);
    }, 2500);
    return () => clearInterval(interval);
  }, [imageCount]);
  return (
    <>
      <div className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center overflow-hidden text-white">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={imageCount}
            style={{
              backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
            }}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            className="h-full w-full absolute bg-cover z-[-1]"
          />
          <motion.div
            key={imageCount + 10}
            className="lg:text-[40px] text-[20px] font-[600] font-mono text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:w-[60%] w-[80%] text-center py-10 absolute text-wrap"
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
          >
            <div className="text-yellow-300">{IMAGES[activeImageIndex].heading}</div>
            {IMAGES[activeImageIndex].text}
          </motion.div>
        </AnimatePresence>
        {/* <div className="absolute bottom-2 w-full text-center text-sm">
          [Copyright © 2023 MythoQuantum Explorers]
        </div> */}
      </div>
    </>
  );
}
