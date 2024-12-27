"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <>
      <div className="min-h-screen w-full xl:w-[1280px] flex lg:flex-row flex-col items-center justify-center">
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-4 lg:p-4">
          {/* <div className="lg:text-5xl text-3xl font-[700] w-full py-4">
            MythoQuantum Explorers
          </div> */}
          <div className="text-3xl font-[200] w-full py-4">
            Data insights at the speed of light.
          </div>
          <div className="text-lg font-[200] w-full mt-6">
            "Through relentless research and development, we lead our clients to
            the forefront of their industries. Our R&D-driven approach combines
            deep insights, cutting-edge technology, and innovative strategies,
            transforming challenges into opportunities and positioning our
            clients as leaders in their fields."
          </div>
        </div>
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-2">
          {/* <Image
            src="https://res.cloudinary.com/dfrpcqahh/image/upload/f_auto,q_auto,a_hflip/Robot_face-amico_z2cklu"
            width={600}
            height={0}
            className="object-fit"
            alt="image"
          /> */}
          <div className="p-4 lg:w-fit w-[80vw] rounded-lg bg-[#3A6D8C] text-[#EAD8B1] relative">
            <motion.div
              className="w-full p-4 lg:text-5xl text-4xl font-[900]  py-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              MythoQuantum
            </motion.div>
            <motion.div
              className="w-full p-4 lg:text-3xl text-2xl font-[900]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", delay: 0.2 }}
            >
              Data Insights
              <br />
              at the speed
              <br />
              of light
            </motion.div>
            <motion.div className="absolute w-28 h-28 bg-[#EAD8B1] bottom-[-32px] right-[-32px] rounded-full" initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.5}}></motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
