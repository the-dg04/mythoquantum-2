"use client";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import ProjectContext from "./ProjectContext";
import LoadingContext from "./LoadingContext";
import Editor from "./Editor"
import dynamic from "next/dynamic";
// export const dynamic = "force-dynamic";
export default function uitest() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const [secret,setSecret]=useState("")
  const [validated,setValidated]=useState(false)
  
  const [activeProjectId, setActiveProjectId] = useState("");
  const [loading, setLoading] = useState(false);
  const startLoad=()=>{setLoading((val)=>true)}
  const endLoad=()=>{setLoading((val)=>false)}

  useEffect(() => {
    if (window.innerWidth >= 1024) setShowSidebar(true);
    if (window.innerWidth < 1024) setShowSidebar(false);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setShowSidebar(true);
      if (window.innerWidth < 1024) setShowSidebar(false);
      setShowBackdrop(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
//   const Editor=dynamic(()=>import('./Editor'),{ssr:false})

  return (
    <LoadingContext.Provider value={{loading,startLoad,endLoad}}>
    <ProjectContext.Provider value={{activeProjectId,setActiveProjectId}}>
      {!validated && (
        <>
        <form className="w-screen h-screen flex flex-col justify-center items-center p-8 gap-10" onSubmit={(e)=>{
          e.preventDefault()
          setValidated((val)=>secret==process.env.NEXT_PUBLIC_SECRET)
          setSecret((val)=>"")
        }}>
          <input type="text" value={secret} onChange={(e)=>{setSecret(e.target.value)}} className="w-full text-center placeholder:text-center border border-black" placeholder="Enter Secret"/>
          <button type="submit" className="border border-black px-4 py-2 rounded-md block">Enter</button>
        </form>
        </>
      )}
        {loading && <div className="absolute w-screen h-screen z-[50] bg-black bg-opacity-40 flex items-center justify-center">Loading...</div>}
     {validated && ( <div className="flex flex-col">
        <NavBar
          showSidebar={showSidebar}
          showBackdrop={showBackdrop}
          setShowSidebar={setShowSidebar}
          setShowBackdrop={setShowBackdrop}
        />
        <div className="flex grow overflow-hidden bg-white pt-16 h-full">
          <SideBar showSidebar={showSidebar} showBackdrop={showBackdrop} />
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            <main>
              <div className="w-full">
                <div className="flex flex-row w-full">
                </div>
                <Editor />
              </div>
            </main>
          </div>
        </div>
      </div>)}
    </ProjectContext.Provider>
    </LoadingContext.Provider>
  );
}
