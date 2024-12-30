"use client";
import { motion } from "motion/react";

export default function Heading({ text, id }) {
  return (
    <>
      <motion.div
        className="w-full text-center text-3xl md:text-4xl font-[500] underline underline-offset-8 text-[#001F3F] mb-8 pt-32 z-[10]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        id={id}
      >
        {text}
      </motion.div>
    </>
  );
}
