import Heading from "../components/Heading";

function Card({ title, description, category, _id, imgUrl }) {
  return (
    <>
      <a href={"#"} className="w-[300px] h-[400px] relative overflow-hidden group transition-all">
        <img
          src={imgUrl || ""}
          alt=""
          className="w-full h-full object-cover object-center absolute top-0 group-hover:scale-[2] origin-top-left transition-all"
        />
        <div className="absolute w-full h-full group-hover:backdrop-blur-xl transition-all p-4 text-white">
          <div className="w-full text-lg font-[600] font-mono underline py-2">{category || ""}</div>
          <div className="w-full text-xl font-[600]">{title || ""}</div>
          <div className="w-full h-full relative text-md left-[120%] group-hover:left-0 p-4 transition-all">
            {description || ""}
          </div>
          <div
            href={"#"}
            className="absolute bottom-[-20px] group-hover:bottom-[8px] transition-all right-2 text-right font-[600] underline underline-offset-2 decoration-green-500"
          >
            Learn more
          </div>
        </div>
      </a>
    </>
  );
}

export default function Projects({ data }) {
  return (
    <>
      <Heading text="Ongoing Projects" id="ongoing" />
        {data.length==0 && <div>Fetching...</div>}
      <div className="w-full lg:px-10 my-10 flex justify-center items-center flex-wrap gap-8">
        {data.map((props, id) => (
          <Card key={id} {...props} />
        ))}
      </div>
    </>
  );
}
