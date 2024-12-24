import Image from "next/image";

function ReviewCard({ name, title, text, img_src }) {
  return (
    <div className="w-[350px] h-full border border-black flex-shrink-0 flex flex-col p-4 rounded-md">
      <div className="h-[150px] flex justify-center">
        <Image src={img_src} width={150} height={150} alt="image" />
      </div>
      <div className="text-xl w-full text-center">{name}</div>
      <div className="text-lg text-gray-700 w-full text-center">{title}</div>
      <div className="text-lg text-gray-500 w-full text-center text-wrap h-full overflow-y-scroll no-scrollbar">
        {text}
      </div>
    </div>
  );
}

export default function Reviews() {
  const data = [
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
    {
      name: "Name",
      title: "Title",
      img_src: "/HarnessPowerImage.png",
      text: "At MythoQuantum Explorers, we pride ourselves on our commitment to innovation and technological expertise. Our renowned Data Science Lab is a testament to our dedication. Through our Research and Development initiatives and Machine Learning techniques, we are constantly providing state-of-the-art solutions. As leaders in the field of technology, we empower our clients to enable them to make strategic decisions that shape the future.",
    },
  ];
  return (
    <>
      <div className="text-5xl font-[700] w-full py-4 px-6">
        People have nice things to say about us
      </div>
      <div className="w-full h-[500px] overflow-x-scroll no-scrollbar flex gap-4 p-6">
        {data.map((item, id) => (
          <ReviewCard
            key={id}
            name={item.name}
            title={item.title}
            text={item.text}
            img_src={item.img_src}
          />
        ))}
      </div>
    </>
  );
}
