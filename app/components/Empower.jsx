"use client";
import { motion } from "motion/react";

export default function Empower() {
  return (
    <>
      <div
        className="xl:w-[1280px] flex lg:flex-row flex-col lg:justify-center items-center text-[#EAD8B1] w-[90vw] min-h-[400px] rounded-3xl mb-20 bg-gradient-to-br from-[#001F3F] via-[#3A6D8C] to-[#EAD8B1]"
        // initial={{x:-50,opacity:0}}
        // whileInView={{x:0,opacity:1}}
        // transition={{duration:1,type:"spring"}}
      >
        <div className="w-full h-full flex flex-col justify-center p-2">
          <motion.div
            className="text-5xl font-[700] w-full p-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            Ready to see the difference? Request your demo today!
          </motion.div>
          <a
            href="/contact"
            className="mt-6 ml-10 px-8 py-4 text-xl font-[500] inline-block w-fit rounded-full transition hover:shadow-[0px_0px_40px_2px_#EAD8B1] bg-white text-black"
          >
            Request Demo
          </a>
        </div>
        <div className="w-full h-full flex justify-center items-center max-lg:p-12">
          <motion.img
            src="https://placehold.co/400x400"
            alt="image"
            className="w-[200px] h-[200px] object-cover rounded-lg"
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration:1,type:"spring"}}
          />
        </div>
      </div>
    </>
  );
}
