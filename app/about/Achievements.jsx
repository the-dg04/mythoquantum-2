"use client";
import { motion } from "motion/react";

function AchievementCard({ number, text }) {
  return (
    <motion.div
      className="w-full bg-color-300 rounded-lg h-full border-yellow-500 flex flex-col items-center justify-center relative"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.div
        className="text-4xl font-bold w-20 h-20 flex items-center justify-center aspect-square rounded-full bg-color-100 text-color-400"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
      >
        {number}+
      </motion.div>
      <div className="text-md text-color-100 absolute bottom-1">{text}</div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 lg:w-[80vw] w-[90vw] mt-10 rounded-xl text-black font-mono mb-10 z-[2] gap-4">
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 h-[150px] flex items-center">
          <AchievementCard
            number={10}
            text="Customers"
          />
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 h-[150px] flex items-center">
          <AchievementCard
            number={22}
            text="Projects"
          />
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 h-[150px] flex items-center">
          <AchievementCard
            number={4}
            text="Achievements"
          />
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 h-[150px] flex items-center">
          <AchievementCard
            number={2}
            text="Datasets"
          />
        </div>
      </div>
    </>
  );
}
