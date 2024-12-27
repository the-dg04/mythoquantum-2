"use client";
import { motion } from "motion/react";
import Image from "next/image";

function Card() {
  return (
    <>
      <div className="lg:w-1/4 w-[80%] bg-[#3A6D8C] h-[500px] rounded-lg flex flex-col items-center overflow-hidden shadow-lg relative">
        <div className="w-full h-fit p-10 text-4xl font-[600] text-[#EAD8B1]">
        Service<br />name
        </div>
        <div className="w-full h-fit px-10 text-xl font-[600] text-[#EAD8B1]">
        Description
        </div>
        <motion.a href="#" className="absolute bottom-10 z-[2] px-4 py-2 rounded-lg font-bold text-[#EAD8B1] hover:scale-110 bg-[#3A6D8C] transition-all" initial={{opacity:0}} whileInView={{opacity:1}}>Learn more</motion.a>
        <motion.div className="absolute h-[400px] lg:h-[20vw] w-[400px] lg:w-[20vw] bottom-[-180px] lg:bottom-[-7vw] bg-[#EAD8B1] rounded-t-full" initial={{y:'100px'}} whileInView={{y:'0'}}></motion.div>
      </div>
    </>
  );
}

export default function Services() {
  return (
    <>
      <motion.div
        className="w-full text-center text-3xl md:text-4xl font-[500] underline underline-offset-8 text-[#001F3F]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        Services We Offer
      </motion.div>
      <motion.div className="w-[90vw] xl:w-[1200px] flex lg:flex-row flex-col items-center justify-center gap-8 py-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </>
  );
}
