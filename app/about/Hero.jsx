"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
function ContactUsButton() {
  return (
    <a
      href="/contact"
      className="mt-6 px-8 py-3 text-lg font-[500] inline-block border border-blue-700 hover:bg-[linear-gradient(184.78deg,_#0B409C_7.64%,_#10316B_120.07%)] w-fit text-black hover:text-white rounded-full transition-all hover:shadow-[0px_0px_40px_2px_#f6ad55]"
    >
      Contact Us
    </a>
  );
}

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    console.log(val);
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacityProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <>
      <div className="w-full h-[200vh] relative overflow-x-clip" ref={targetRef}>
        <motion.div
          className="w-full h-[calc(100vh-64px)] sticky top-16 md:origin-top-left origin-top bg-[url('/aboutBg.jpg')] bg-cover bg-center flex items-center justify-center"
          style={{ scale: scaleProgress }}
        >
          <div className="sm:text-[80px] text-[60px] font-[900] text-white drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">About us</div>
        </motion.div>
        <motion.div
          className="absolute bottom-0 md:bottom-16 left-[2.5vw] md:left-auto md:right-10 w-[90vw] md:w-[30vw] z-[2]"
          style={{ opacity: opacityProgress }}
        >
          <div className="md:text-4xl text-xl font-[600]">Vision</div>
          <div className="md:text-xl text-sm font-[300] mb-2">
            To redefine the future through innovative R&D and data-driven
            solutions, empowering industries with sustainable, optimized, and
            forward-looking strategies that shape a more resilient world.
          </div>
          <div className="md:text-4xl text-xl font-[600]">Mission</div>
          <div className="md:text-xl text-sm font-[300]">
            We are committed to delivering innovative and sustainable solutions
            through rigorous research and advanced data modeling. By addressing
            complex challenges across diverse industries, we transform ideas
            into actionable strategies, empowering businesses to achieve
            efficiency, resilience, and long-term success.
          </div>
        </motion.div>
        <motion.div className="hidden lg:block absolute bottom-[-300px] right-[-300px] h-[600px] w-[600px] rounded-full bg-[#EAD8B1] origin-right" style={{scale:scrollYProgress,opacity:opacityProgress}}></motion.div>
      </div>
    </>
  );
}
