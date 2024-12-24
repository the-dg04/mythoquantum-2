function Card({ title, text,category, link }) {
  return (
    <a
      href={link}
      className="flex flex-col items-center w-[80vw] xl:w-[60vw] rounded-lg bg-white shadow-[0px_0px_20px_0px_lightgrey] p-16 gap-4 font-sans"
    >
      <div className="w-full text-2xl">{title}</div>
      <div className="w-full text-lg text-gray-500">{text}</div>
      <div className="w-full text-xl font-bold font-sans text-gray-400 border border-gray-400 text-center mt-4 p-2">{category}</div>
    </a>
  );
}

export default function CompletedProjects() {
  const data = [
    {
      title: "Building a Smarter Healthcare System: The Role of AI and Big Data",
      text: "This essay explores the potential of AI and big data to revolutionize healthcare. It examines both the advantages, like using machine learning for heart disease prediction, and challenges, such as ethical considerations. The role of human specialists in the AI-powered healthcare future is also discussed.",
      category: "Healthcare",
      link: "#",
    },
    {
      title: "Building a Smarter Healthcare System: The Role of AI and Big Data",
      text: "This essay explores the potential of AI and big data to revolutionize healthcare. It examines both the advantages, like using machine learning for heart disease prediction, and challenges, such as ethical considerations. The role of human specialists in the AI-powered healthcare future is also discussed.",
      category: "Healthcare",
      link: "#",
    },
    {
      title: "Building a Smarter Healthcare System: The Role of AI and Big Data",
      text: "This essay explores the potential of AI and big data to revolutionize healthcare. It examines both the advantages, like using machine learning for heart disease prediction, and challenges, such as ethical considerations. The role of human specialists in the AI-powered healthcare future is also discussed.",
      category: "Healthcare",
      link: "#",
    },
    {
      title: "Building a Smarter Healthcare System: The Role of AI and Big Data",
      text: "This essay explores the potential of AI and big data to revolutionize healthcare. It examines both the advantages, like using machine learning for heart disease prediction, and challenges, such as ethical considerations. The role of human specialists in the AI-powered healthcare future is also discussed.",
      category: "Healthcare",
      link: "#",
    },
  ];
  return (
    <>
      <div className="text-3xl underline font-bold my-10 text-center mt-16">
        Completed Projects
      </div>
      <div className="w-full lg:px-10 my-10 flex justify-center items-center flex-wrap gap-8">
        {data.map((props, id) => (
          <Card key={id} {...props} />
        ))}
      </div>
    </>
  );
}
