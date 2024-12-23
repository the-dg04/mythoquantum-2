export default function Empower() {
  return (
    <>
      <div
        className="xl:w-[1280px] flex lg:flex-row flex-col lg:justify-center items-center text-white w-[90vw] min-h-[400px] rounded-3xl my-20"
        style={{
          backgroundImage:
            "linear-gradient(184.78deg, #0B409C 7.64%, #10316B 120.07%)",
        }}
      >
        <div className="w-full h-full flex flex-col justify-center p-2">
          <div className="text-5xl font-[700] w-full p-10">
            Empowering Decisions Engineering Futures
          </div>
          <a
            href="/contact"
            className="mt-6 ml-10 px-8 py-4 text-xl font-[500] inline-block w-fit rounded-full transition hover:shadow-[0px_0px_40px_2px_#f6ad55] bg-white text-black"
          >
            Get in touch
          </a>
        </div>
        <div className="w-full h-full flex flex-col max-lg:p-12">
          <div>Where data dreams become blueprints for the future.</div>
        </div>
      </div>
    </>
  );
}
