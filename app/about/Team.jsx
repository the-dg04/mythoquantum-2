"use client";
import { motion } from "motion/react";
import { Car, Linkedin } from "lucide-react";

function Card({ name, position, linkedin, img_src }) {
  return (
    <>
      <div className="lg:w-[40vw] w-[80vw] flex-shrink-0 h-[200px] bg-[#3A6D8C] rounded-lg z-[2] relative overflow-hidden flex flex-col sm:items-end items-center">
        <motion.div
          className="absolute left-[-100px] md:block hidden w-[300px] h-[300px] top-[-50px] bg-[#EAD8B1] rounded-full"
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
        <div className="w-[80%] md:w-[calc(80vw-200px)] lg:w-[calc(40vw-200px)] h-full py-4 px-4 md:px-10 text-[#EAD8B1] relative">
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
            {position}
          </motion.div>
          <a
            href={linkedin}
            className="absolute bottom-4 right-4 text-[#3A6D8C] p-1 bg-[#EAD8B1] rounded-lg"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default function Team() {

    const data=[
        {
            name:"Name",
            position:"Position",
            img_src:"https://placehold.co/400x400",
            linkedin:"#",
        },
        {
            name:"Name",
            position:"Position",
            img_src:"https://placehold.co/400x400",
            linkedin:"#",
        },
        {
            name:"Name",
            position:"Position",
            img_src:"https://placehold.co/400x400",
            linkedin:"#",
        },
        {
            name:"Name",
            position:"Position",
            img_src:"https://placehold.co/400x400",
            linkedin:"#",
        },
    ]

  return (
    <>
      <motion.div
        className="w-full text-center text-3xl md:text-4xl font-[500] underline underline-offset-8 text-[#001F3F] mt-16"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        Our Team
      </motion.div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 flex-wrap my-8">
        {data.map((item,index)=>
            <Card key={index} {...item} />
        )}
      </div>
    </>
  );
}