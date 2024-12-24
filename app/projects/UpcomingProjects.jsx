import Image from "next/image";

function Card({ title, img_src,category, link }) {
  return (
    <a
      href={link}
      className="flex flex-col items-center w-[80vw] xl:w-[60vw] rounded-lg bg-white shadow-[0px_0px_20px_0px_lightgrey] p-16 gap-4 font-sans"
    >
      <div className="w-full">
        <Image src={img_src} width={800} height={0} className="object-cover" alt="image"/>
      </div>

      <div className="w-full text-2xl">{title}</div>
      {/* <div className="w-full text-lg text-gray-500">{text}</div> */}
      <div className="w-full text-xl font-bold font-sans text-gray-400 border border-gray-400 text-center mt-4 p-2">{category}</div>
    </a>
  );
}

export default function UpcomingProjects() {
  const data = [
    {
      title: "Advancements in Financial Modelling for Stock Market Challenges: Application of Machine Learning & Big Data",
      img_src: "https://cdn.sanity.io/images/6uwkd8vj/production/375135ab0c6fe9ea2b80e9e8ddee09fb4b517d51-2000x1333.jpg",
      category: "Financial Management",
      link: "#",
    },
  ];
  return (
    <>
      <div className="text-3xl underline font-bold my-10 text-center mt-16">
      Upcoming Projects
      </div>
      <div className="w-full lg:px-10 my-10 flex justify-center items-center flex-wrap gap-8">
        {data.map((props, id) => (
          <Card key={id} {...props} />
        ))}
      </div>
    </>
  );
}
