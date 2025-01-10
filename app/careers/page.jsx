"use client";
import { motion } from "motion/react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Card({ name, description, linkedin, img_src }) {
  return (
    <>
      <div className="lg:w-[40vw] w-[80vw] flex-shrink-0 h-[200px] bg-color-300 rounded-lg z-[2] relative overflow-hidden flex flex-col sm:items-end items-center">
        <motion.div
          className="absolute left-[-100px] md:block hidden w-[300px] h-[300px] top-[-50px] bg-color-100 rounded-full"
          initial={{ x: "-150px" }}
          whileInView={{ x: "0" }}
        ></motion.div>
        <motion.img
          src={img_src}
          alt=""
          className="md:block hidden w-[100px] h-[100px] z-[2] absolute top-[50px] left-[50px] rounded-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
        />
        <div className="w-[80%] md:w-[calc(80vw-200px)] lg:w-[calc(40vw-200px)] h-full py-4 px-4 md:px-10 text-color-100 relative">
          <motion.div
            className="text-3xl font-[600]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {name}
          </motion.div>
          <motion.div
            className="text-xl font-[400]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {description}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default function Team() {
  const data = [
    {
      name: "Name",
      description: "Description",
      img_src: "https://placehold.co/400x400",
    },
    {
      name: "Name",
      description: "Description",
      img_src: "https://placehold.co/400x400",
    },
    {
      name: "Name",
      description: "Description",
      img_src: "https://placehold.co/400x400",
    },
    {
      name: "Name",
      description: "Description",
      img_src: "https://placehold.co/400x400",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center bg-color-200">
        <Heading text="Careers at MythoQuantum" id="careers" />
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 flex-wrap my-8">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
