"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Heading from "../components/Heading";

function ReviewCard({ name, title, text, img_src }) {
  return (
    <div className="w-[300px] sm:w-[350px] h-[400px] bg-[#3A6D8C] text-[#EAD8B1] flex-shrink-0 flex flex-col justify-center items-center p-4 rounded-md relative">
      <div className="h-[150px] flex justify-center">
        <Image src={img_src} width={150} height={150} alt="image" />
      </div>
      <div className="text-xl w-full font-bold text-center px-10">{name}</div>
      <div className="text-lg w-full text-center px-10">{title}</div>
      <div className="text-md w-full text-center text-wrap h-full overflow-y-scroll no-scrollbar px-10 py-4">
        {text}
      </div>
      <motion.div
        className="absolute font-serif text-[100px] font-extrabold top-[-45px] left-[-15px] opacity-40"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        &#8220;
      </motion.div>
      <motion.div
        className="absolute font-serif text-[100px] font-extrabold bottom-[-90px] right-[-15px] opacity-40"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        &#8221;
      </motion.div>
    </div>
  );
}

// w-[100px] h-[100px] right-[-70px] bg-[#EAD8B1] z-[2] rounded-full opacity-60

export default function Reviews() {
  const data = [
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
  ];
  return (
    <>
      <Heading text="Testimonials" id="testimonials" />
      <div className="w-full h-[600px] overflow-x-scroll no-scrollbar flex items-center gap-20 px-10 relative mark">
        {data.map((item, id) => (
          <ReviewCard
            key={id}
            name={item.name}
            title={item.title}
            text={item.text}
            img_src={item.img_src}
          />
        ))}
      </div>
    </>
  );
}
