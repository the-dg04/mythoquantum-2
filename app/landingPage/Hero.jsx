import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="min-h-screen w-full xl:w-[1280px] flex lg:flex-row flex-col">
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-2">
          <div className="text-5xl font-[700] w-full py-4">
            MythoQuantum Explorers
          </div>
          <div className="text-3xl font-[700] w-full py-4">
            Data insights at the speed of light.
          </div>
          <div className="text-lg font-[400] text-gray-400 w-full mt-6">
            Founded with a passion for innovation and excellence, MythoQuantum
            Explorers pioneers the field of data science and research. We are
            committed to fuse in cutting-edge technology with in-depth research
            to create transformative solutions across industries.
          </div>
        </div>
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-2">
          <Image
            src="https://res.cloudinary.com/dfrpcqahh/image/upload/f_auto,q_auto,a_hflip/Robot_face-amico_z2cklu"
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
