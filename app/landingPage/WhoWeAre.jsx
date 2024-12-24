import Image from "next/image";

export default function WhoWeAre() {
  return (
    <>
      <div className="min-h-screen w-full xl:w-[1280px] flex lg:flex-row flex-col">
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-2">
          <div className="text-5xl font-[700] w-full py-4">Who we are?</div>
          <div className="text-lg font-[400] text-gray-400 w-full mt-6">
            We are focused on strategically finding solutions for future
            generations by bridging the gap between academic insights and
            industry needs.Partnering with MythoQuantum Explorers grants access
            to cutting-edge technological advancements that propel businesses to
            the forefront of transformative solutions for tomorrow's challenges.
            Through our commitment to in-depth research and development, we
            navigate the complex terrain of industry obstacles by leveraging
            advanced computational environments and innovative frameworks.
          </div>
        </div>
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-2">
          <Image
            src="https://res.cloudinary.com/dfrpcqahh/image/upload/v1707757386/Team_work-rafiki_bsfd9t.svg"
            width={600}
            height={0}
            className="object-fit"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
