"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const Phone = ({ scrollYProgress }) => {
  const scaleProgress = useTransform(scrollYProgress, [0, 0.8], [1, 1.7]);
  const translateProgress = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["65vh", "0vh"]
  );
  return (
    <>
      <div className="absolute w-full h-full z-[10] flex flex-col items-center justify-center">
        <motion.div
          className="w-[150px] h-[300px] rounded-xl bg-black flex justify-center items-center z-[10] relative"
          style={{ scale: scaleProgress, y: translateProgress }}
        >
          <div className="w-[96%] h-[93%] bg-gray-900 rounded-2xl flex flex-col gap-2 text-white p-2">
            <div className="flex flex-row justify-between gap-1">
              <div className="w-1/2 rounded-full bg-slate-600 text-center text-[8px]">
                Dashboard
              </div>
              <div className="w-1/2 rounded-full bg-slate-800 text-center text-[8px]">
                Statistics
              </div>
            </div>
            <div className="bg-[#659287] p-4 rounded-md h-[30%] w-full flex flex-col justify-center">
              Data <br /> <b>Insights</b>
            </div>
            <div className="bg-[#B1C29E] rounded-md h-[25%] w-full flex flex-col items-center justify-end overflow-hidden">
              <div
                style={{
                  width: "80%",
                  height: "95%",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "repeat",
                  backgroundImage:
                    'url("data:image/svg+xml;utf8,%3Csvg height=%22auto%22 viewBox=%220 0 500 350%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d=%22M0 350h40V181.192q0-12-12-12H12q-12 0-12 12ZM50 350h40V223.662q0-12-12-12H62q-12 0-12 12ZM100 350h40V209.737q0-12-12-12h-16q-12 0-12 12ZM150 350h40V193.546q0-12-12-12h-16q-12 0-12 12ZM200 350h40V152.243q0-12-12-12h-16q-12 0-12 12ZM250 350h40V177.65q0-12-12-12h-16q-12 0-12 12ZM300 350h40V204.725q0-12-12-12h-16q-12 0-12 12ZM350 350h40V87.377q0-12-12-12h-16q-12 0-12 12ZM400 350h40V82.833q0-12-12-12h-16q-12 0-12 12ZM450 350h40V237.499q0-12-12-12h-16q-12 0-12 12Z%22 fill=%22%235556ff%22%2F%3E%3C%2Fsvg%3E")',
                }}
              ></div>
            </div>
            <div className="bg-[#DEAA79] p-4 rounded-md h-[20%] w-full flex flex-col justify-center">
              At the speed <br /> <b>of Light</b>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default function Hero2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const Xprogress = useTransform(scrollYProgress, [0, 1], ["0vw", "-100vw"]);
  const Xprogress2 = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useMotionValueEvent(Xprogress, "change", (val) => {
    console.log(val);
  });
  return (
    <>
      <div className="w-screen h-[200vh]" ref={containerRef}>
        <div className="sticky top-0 w-full h-[100vh] bg-color-200 overflow-clip z-[20]">
          <Phone scrollYProgress={scrollYProgress} />
          <motion.div
            className="absolute w-full h-full flex flex-col items-center justify-center text-color-100 text-[44px] font-[600] md:text-[100px] xl:text-[200px] text-center z-[20]"
            style={{ x: Xprogress, opacity: opacityProgress }}
          >
            MythoQuantum <div className="h-10 md:h-20 xl:h-[160px]"></div>
          </motion.div>
          <motion.div
            className="absolute w-full h-full flex flex-col items-center justify-center text-color-100 text-[44px] font-[600] md:text-[100px] xl:text-[200px] text-center z-[20]"
            style={{ x: Xprogress2, opacity: opacityProgress }}
          >
            <div className="h-10 md:h-20 xl:h-[160px]"></div>Explorers
          </motion.div>
        </div>
      </div>
    </>
  );
}
