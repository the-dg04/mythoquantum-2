function AchievementCard({ number, plusColor, text, noBorder }) {
  return (
    <div
      className={`w-full lg:h-[60%] h-full lg:${noBorder===true?"":"border-r"} border-yellow-500 flex flex-col items-center justify-center`}
    >
      <div className="text-4xl font-bold">
        {number} <span className={plusColor}>+</span>
      </div>
      <div className="text-md text-gray-500">{text}</div>
    </div>
  );
}

export default function Achievements() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 bg-white lg:w-[80vw] w-[90vw] mt-10 rounded-xl shadow-[0px_0px_40px_2px_lightgrey] text-black font-mono mb-10">
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 lg:h-[150px] h-[100px] flex items-center">
          <AchievementCard
            number={10}
            plusColor="text-blue-400"
            text="Customers"
            noBorder={false}
          />
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 lg:h-[150px] h-[100px] flex items-center">
          <AchievementCard
            number={22}
            plusColor="text-green-400"
            text="Projects"
            noBorder={false}
          />
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 lg:h-[150px] h-[100px] flex items-center">
          <AchievementCard
            number={4}
            plusColor="text-orange-400"
            text="Achievements"
            noBorder={false}
          />
        </div>
        <div className="lg:row-span-4 md:row-span-2 row-span-1 lg:col-span-1 md:col-span-2 col-span-4 lg:h-[150px] h-[100px] flex items-center">
          <AchievementCard
            number={2}
            plusColor="text-yellow-400"
            text="Datasets"
            noBorder={true}
          />
        </div>
      </div>
    </>
  );
}
