"use client";
import { useEffect, useState } from "react";
import CurrentRouteCard from "../components/CurrentRouteCard";
import Empower from "../components/Empower";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CompletedProjects from "./CompletedProjects";
import OngoingProjects from "./OngoingProjects";
import UpcomingProjects from "./UpcomingProjects";

export default function Page() {
  const [data, setData] = useState({
    Completed: [],
    Ongoing: [],
    Upcoming: [],
  });
  useEffect(() => {
    fetch("/api/getAllRequests", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        let resData = { Completed: [], Ongoing: [], Upcoming: [] };
        res.result.forEach((project) => {
          resData[project.status].push(project);
        });
        // console.log(resData);
        setData(resData);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center font-serif w-full text-black bg-[#6A9AB0] pt-10">
        <CompletedProjects data={data["Completed"]} />
        <OngoingProjects data={data["Ongoing"]} />
        <UpcomingProjects data={data["Upcoming"]} />
        <Footer />
      </div>
    </>
  );
}
