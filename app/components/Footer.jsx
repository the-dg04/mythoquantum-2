import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-blue-100 w-full text-white">
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 lg:min-h-[300px] min-h-[200px] flex flex-col items-center justify-center">
          <a href="#" className="min-h-16 px-4 gap-4 flex items-center">
            <Image src="/logo.webp" height={32} width={32} alt="image" />
            <div className="text-2xl font-[700] text-black">MythoQuantum</div>
          </a>
          <div className="text-sm text-gray-500 p-4">
            Where data dreams become blueprints for the future. Empowering
            Decisions, Engineering Futures. Data insights at the speed of light.
          </div>
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 lg:min-h-[300px] min-h-[200px]">
          <div className="text-lg font-bold text-black mt-20">Socials</div>
          
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 lg:min-h-[300px] min-h-[200px]">
        <div className="text-lg font-bold text-black mt-20">Quick Links</div>
        <div className="text-sm text-gray-500 p-4 gap-4 flex flex-col">
            <a href="#" className="block no-underline hover:underline hover:text-blue-800 transition">About</a>
            <a href="#" className="block no-underline hover:underline hover:text-blue-800 transition">About</a>
            <a href="#" className="block no-underline hover:underline hover:text-blue-800 transition">About</a>
          </div>
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 lg:min-h-[300px] min-h-[200px]">
        <div className="text-lg font-bold text-black mt-20">Location & Contact</div>
        <div className="text-sm text-gray-500 p-4 gap-4 flex flex-col">
            <a href="#" className="block no-underline hover:underline hover:text-blue-800 transition">About</a>
            <a href="#" className="block no-underline hover:underline hover:text-blue-800 transition">About</a>
            <a href="#" className="block no-underline hover:underline hover:text-blue-800 transition">About</a>
          </div>
        </div>
      </div>
    </>
  );
}
