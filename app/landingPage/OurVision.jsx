import Image from "next/image";

export default function OurVision() {
  return (
    <>
      <div className="min-h-screen w-full xl:w-[1280px] flex lg:flex-row flex-col">
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-2">
          <Image
            src="https://res.cloudinary.com/dfrpcqahh/image/upload/f_auto,q_auto/v1/mythoquantum/swgon49utzbsbleoh9mu"
            width={400}
            height={0}
            className="object-fit"
            alt="image"
          />
        </div>
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-2">
          <div className="text-5xl  w-full py-4">Our Vision</div>
          <div className="text-lg  text-gray-400 w-full mt-6">
            At MythoQuantum Explorers, we pride ourselves on our commitment to
            innovation and technological expertise. Our renowned Data Science
            Lab is a testament to our dedication. Through our Research and
            Development initiatives and Machine Learning techniques, we are
            constantly providing state-of-the-art solutions. As leaders in the
            field of technology, we empower our clients to enable them to make
            strategic decisions that shape the future.
          </div>
        </div>
      </div>
    </>
  );
}
