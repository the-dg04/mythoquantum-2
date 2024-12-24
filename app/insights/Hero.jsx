function ContactUsButton() {
  return (
    <a
      href="/contact"
      className="mt-6 px-8 py-3 text-lg font-[500] inline-block border border-blue-700 hover:bg-[linear-gradient(184.78deg,_#0B409C_7.64%,_#10316B_120.07%)] w-fit text-black hover:text-white rounded-full transition-all hover:shadow-[0px_0px_40px_2px_#f6ad55]"
    >
      Write for us
    </a>
  );
}

export default function Hero() {
  return (
    <>
      <div className="text-5xl font-[700] my-10 text-center">
        Fantastic curation of insights
      </div>
      <div className="text-lg font-[400] text-gray-500 text-center lg:w-[60vw] w-[90vw]">
        Share your expertise through us
      </div>
      <ContactUsButton />
    </>
  );
}
