import Image from "next/image";

function Service({ text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-2 w-2 mr-4">
        <svg
          stroke="currentColor"
          fill="rgb(11, 64, 156)"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          className=" fill-primary text-white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
        </svg>
      </div>
      {text}
    </div>
  );
}

export default function HarnessPower() {
  return (
    <>
      <div className="min-h-screen w-full xl:w-[1280px] flex lg:flex-row flex-col">
        <div className="w-full h-full flex flex-col justify-center items-center p-2">
          <Image
            src="/HarnessPowerImage.png"
            width={600}
            height={0}
            className="object-fit"
            alt="image"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center py-2 px-10">
          <div className="text-5xl font-[700] w-full py-4">
            Harness the power of data to make informed decisions.
          </div>
          <div className="text-lg font-[400] w-full mt-6">
            <Service text="Transform raw data into actionable insights through cutting-edge analytics tools and techniques." />
            <Service text="Collaborate with you throughout the entire product development lifecycle, from ideation to launch." />
            <Service text="Build customized financial models for investment analysis, business valuation, and risk management." />
            <Service text="Conduct market research, clinical trials & other research activities." />
            <Service text="Experts in cloud computing, mobile & web development, leveraging latest technologies." />
            <Service text="Help businesses adopt new technologies & processes to thrive in the digital age." />
          </div>
        </div>
      </div>
    </>
  );
}
