"use client";
import { motion } from "motion/react";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function Team() {
  const id = useParams().id;
  const [project, setProject] = useState({
    _id: "",
    title: "",
    status: "",
    body: "",
    category: "",
    description: "",
    imgUrl: "",
  });

    useEffect(()=>{
        fetch(`/api/getRequestById/${id}`,{method:"GET"}).then((res)=>res.json()).then((res)=>{
            let data=res.result
            // data["body"]=data["body"].replace(/\\/g,"")
            setProject(data)
        })
    },[])

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center bg-[#6A9AB0]">
        <Heading text={project.title} id="title" />
        <div className="flex gap-2 pb-4 mx-2">
          <div className="px-4 p-2 bg-[#3A6D8C] text-[#EAD8B1] rounded-lg">
            Status: {project.status}
          </div>
          <div className="px-4 p-2 bg-[#3A6D8C] text-[#EAD8B1] rounded-lg">
            Category: {project.category}
          </div>
        </div>
        <div className="max-w-[1200px] mx-2 md:mx-10 p-4 md:p-8 text-lg">
          <b>Description</b>
          <br />
          {project.description}
        </div>
        <MarkdownPreview
          source={project.body}
          wrapperElement={{ "data-color-mode": "dark" }}
          style={{
            background: "#3A6D8C",
            color: "#EAD8B1",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
          }}
        />
        <Footer />
      </div>
    </>
  );
}
