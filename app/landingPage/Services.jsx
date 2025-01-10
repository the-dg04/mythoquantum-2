"use client";
import { motion } from "motion/react";
import Heading from "../components/Heading";
import { ServicesData } from "../services/data";

function Card({ name, description, index }) {
  return (
    <>
      <div className="lg:w-1/4 w-[80%] bg-color-300 h-[400px] rounded-lg flex flex-col items-center overflow-hidden shadow-lg relative">
        <div className="w-full h-fit p-10 text-4xl font-[600] text-color-100">
          {name}
        </div>
        {/* <div className="w-full h-fit px-10 text-sm font-[600] text-color-100">
          {description}
        </div> */}
        <motion.a
          href={`/services/${index}`}
          className="absolute bottom-10 z-[2] px-4 py-2 rounded-lg font-bold text-color-100 hover:scale-110 bg-color-300 transition-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Learn more
        </motion.a>
        <motion.div
          className="absolute h-[400px] lg:h-[20vw] w-[400px] lg:w-[20vw] bottom-[-180px] lg:bottom-[-7vw] bg-color-100 rounded-t-full"
          initial={{ y: "100px" }}
          whileInView={{ y: "0" }}
        ></motion.div>
      </div>
    </>
  );
}

export default function Services() {
  const data = ServicesData;
  return (
    <>
      <Heading text="Services we offer" id="services" />
      <motion.div className="w-[90vw] xl:w-[1200px] flex lg:flex-row flex-col items-center justify-center gap-8 py-8">
        {data.map((item, idx) => (
          <Card key={idx} {...item} index={idx} />
        ))}
      </motion.div>
    </>
  );
}
