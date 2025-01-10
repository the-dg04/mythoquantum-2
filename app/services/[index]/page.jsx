"use client";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import { motion } from "motion/react";
import { ServicesData } from "../data";
import { useParams } from "next/navigation";

function Card({ name, description, img_src }) {
  return (
    <>
      <div className="w-[90vw] lg:h-[500px] flex flex-col lg:flex-row items-center justify-center rounded-lg my-4 bg-color-300 overflow-hidden relative">
        <div className="lg:w-1/2 lg:h-full w-full h-1/2 flex lg:justify-end justify-center z-[2]">
          <motion.img
            src={img_src}
            alt="image"
            className="w-[400px] h-full object-contain p-2 lg:mr-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          />
        </div>
        <motion.div
          className="absolute w-[50vw] h-[180%] top-[-40%] left-[-50px] bg-color-100 rounded-r-full lg:block hidden"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="lg:w-1/2 lg:h-full w-full h-1/2 flex flex-col p-10 lg:items-start items-center justify-start lg:justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="lg:text-2xl text-lg font-[600] text-color-100 lg:mb-4 border-b border-color-100">
            {name}
          </div>
          <div className="lg:text-lg text-md font-[400] text-color-100">
            {description}
          </div>
        </motion.div>
      </div>
    </>
  );
}

function Capability({ text }) {
  return (
    <>
      <motion.div
        className="w-[300px] h-[200px] bg-color-100 rounded-lg flex-shrink-0 flex justify-center items-center shadow-lg p-4 text-lg text-center relative"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {text}
        <motion.div className="absolute w-[60%] h-[5px] rounded-full bg-color-200 bottom-2" initial={{y:16}} whileInView={{y:0}} transition={{delay:0.2}}></motion.div>
      </motion.div>
    </>
  );
}

export default function Services() {
  const data = ServicesData;
  const index = useParams().index;
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full bg-color-200">
        <div className="h-16"></div>
        <Card key={index} {...data[index]} />
        <Heading text="Capabilities" id="capabilities" />
        <div className="w-[90vw] flex justify-center items-center flex-wrap gap-4 my-10">
          {data[index]["capabilities"].map((item, idx) => (
            <Capability text={item} key={idx} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
