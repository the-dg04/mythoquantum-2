"use client"
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full bg-color-200">
        <Heading text="Contact us" id="contact" />
        <div className="w-full xl:w-[1200px] flex flex-col md:flex-row justify-center items-center text-black">
          <div className="w-full md:w-1/2 h-1/2 md:h-auto p-10">
            <div className="my-2 text-2xl font-bold">MythoQuantum Explorers</div>
            <div className="my-2 text-lg">Address line 2</div>
            <div className="my-2 text-lg">Address line 3</div>
            <div className="my-2 text-lg">Address line 4</div>
            <div className="mt-10 my-2 text-xl font-bold">Online</div>
            <div className="my-2 text-lg"><b>Phone : </b> +91 XXXX-XX-XXXX</div>
            <div className="my-2 text-lg"><b>Email : </b> mythoquantum@gmail.com</div>
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-auto p-6 lg:p-20 flex items-center justify-center">
            <motion.form className="bg-color-300 p-10 rounded-lg w-full text-color-100 flex flex-col items-center gap-2 relative" initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}}>
                <div className="text-md w-full">Email</div>
                <input type="text" className="w-full h-10 bg-transparent border-b border-color-100 mb-2" />
                <div className="text-md w-full">Phone</div>
                <input type="text" className="w-full h-10 bg-transparent border-b border-color-100 mb-2"/>
                <div className="text-md w-full">Message</div>
                <textarea type="text" className="w-full h-20 bg-transparent border-b border-color-100"/>
                <button type="submit" className="my-2 px-6 py-2 bg-color-400 text-lg rounded-lg hover:text-black hover:bg-color-100 transition-all duration-500">Submit</button>
                <motion.div className="absolute w-[100px] h-[100px] bg-color-100 rounded-full top-[-50px] right-[calc(50%-50px)] opacity-60 pointer-events-none" initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.2}}></motion.div>
            </motion.form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
