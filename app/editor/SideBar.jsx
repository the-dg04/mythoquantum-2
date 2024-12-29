"use client";
import { useContext, useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import ProjectContext from "./ProjectContext";
import LoadingContext from "./LoadingContext";
import NewRequestButton from "./NewRequestButton";


export default function SideBar(props) {
  const [projectList, setProjectList] = useState([]);
  const { setActiveProjectId } = useContext(ProjectContext);
  const {startLoad,endLoad} = useContext(LoadingContext)

  const getProjects = () => {
    startLoad()
    return fetch("/api/getAllRequests", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result)
        setProjectList([...res.result]);
        endLoad()
        return res.result;
      });
  };

  const newProject = () => {
    startLoad()
    fetch("/api/newRequest", { method: "GET" }).then((res) => {
      if (res.status == 201) {
        getProjects();
        endLoad()
      }
    });
  };

  useEffect(() => {
    getProjects().then((res) => {
      setActiveProjectId((val) => (res.length > 0 ? res[0]._id : ""));
    });
  }, []);

  return (
    <>
      <aside
        id="sidebar"
        className={`fixed z-20 h-full top-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 ease-in-out duration-300 ${
          props.showSidebar ? "left-0" : "-left-64"
        }`}
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <NewRequestButton createNewRequest={newProject}/>
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              {projectList.map((project, idx) => (
                <RequestCard
                  key={idx}
                  id={project._id}
                  title={project.title}
                  getProjects={getProjects}
                />
              ))}
            </div>
          </div>
        </div>
      </aside>
      <div
        className={`bg-gray-900 opacity-50 fixed inset-0 z-10 ${
          props.showBackdrop ? "" : "hidden"
        }`}
        id="sidebarBackdrop"
      ></div>
    </>
  );
}
