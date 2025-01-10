"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import Heading from "../components/Heading";

export default function Clients() {
    const containerRef = useRef(null)
    const isInView=useInView(containerRef)
  const clients = [
    { src: "https://placehold.co/600x400", alt: "Slide 1",name:"Name",description:"Description" },
    { src: "https://placehold.co/600x400", alt: "Slide 2",name:"Name",description:"Description" },
    { src: "https://placehold.co/600x400", alt: "Slide 3",name:"Name",description:"Description" },
    { src: "https://placehold.co/600x400", alt: "Slide 4",name:"Name",description:"Description" },
    { src: "https://placehold.co/600x400", alt: "Slide 4",name:"Name",description:"Description" },
    { src: "https://placehold.co/600x400", alt: "Slide 4",name:"Name",description:"Description" },
    { src: "https://placehold.co/600x400", alt: "Slide 4",name:"Name",description:"Description" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(()=>{
    if(isInView){
        setIsPlaying(true)
    }else{
        setIsPlaying(false)
    }
  },[isInView])

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === clients.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, clients.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative lg:w-[60vw] w-[80vw] max-w-4xl mx-auto my-20 h-[80vh]" ref={containerRef}>
      <Heading text="Our clients" id="clients" />
      <div className="relative h-96 rounded-lg top-20">
        <div
          className="flex transition-transform duration-500 ease-out h-full gap-10"
          style={{
            transform: `translateX(-${currentIndex * 100}%) translateX(-${
              currentIndex * 40
            }px)`,
          }}
        >
          {clients.map((client, index) => (
            <div
              className={`w-[100%] flex-shrink-0 h-full flex flex-col lg:flex-row shadow-lg transition-transform duration-500 rounded-lg overflow-hidden ${
                index != currentIndex ? "scale-75" : ""
              }`}
              key={index}
            >
              <div className="lg:w-1/2 lg:h-full w-full h-1/2">
                <img
                  src={client.src}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 lg:h-full bg-color-300 w-full h-1/2 flex flex-col p-10">
                <div className="lg:text-4xl text-2xl font-[600] text-color-100 lg:mb-4">{client.name}</div>
                <div className="lg:text-2xl text-lg font-[400] text-color-100">{client.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 py-2 opacity-50 px-4 bg-color-400 rounded-full">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
