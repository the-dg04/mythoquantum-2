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

function GetInTouchButton() {
  return (
    <a
      href="/contact"
      className="mt-6 px-8 py-4 text-xl font-[500] inline-block w-fit text-white rounded-full transition hover:shadow-[0px_0px_40px_2px_#f6ad55]"
      style={{
        backgroundImage:
          "linear-gradient(184.78deg,#0B409C 7.64%,#10316B 120.07%)",
      }}
    >
      Get in touch
    </a>
  );
}

export default function Services() {
  return (
    <>
      <div className="min-h-screen w-full xl:w-[1280px] flex lg:flex-row flex-col">
        <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center p-2">
          <Image
            src="https://res.cloudinary.com/dfrpcqahh/image/upload/v1707757261/servicesCta_gmlqjx.png"
            width={600}
            height={0}
            className="object-fit"
            alt="image"
          />
        </div>
        <div className="w-full h-full lg:h-screen flex flex-col justify-center p-2">
          <div className="text-5xl font-[700] w-full py-4">
            Services we offer
          </div>
          <div className="text-xl font-[400] w-full mt-6">
            <Service text="Data Analytics" />
            <Service text="Financial Modelling" />
            <Service text="Research & Development" />
            <Service text="Healthcare Technology" />
            <Service text="supply chain" />
            <Service text="product development" />
          </div>
          <GetInTouchButton />
        </div>
      </div>
    </>
  );
}
