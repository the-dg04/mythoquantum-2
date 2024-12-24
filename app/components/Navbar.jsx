"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-white text-black fixed top-0 left-0 w-screen py-8 pr-10 z-[10]">
        <div className="container w-full flex justify-between items-center">
          <a href="#" className="flex items-center w-[350px] ml-4">
            <Image src="/logo.webp" height={32} width={32} alt="image" />
            <div className="text-2xl font-[700] text-black ml-4">
              MythoQuantum
            </div>
          </a>

          <div className="hidden lg:flex gap-6 w-full justify-end">
            <a href="/" className="hover:text-blue-800 text-md font-bold">
              Home
            </a>
            <a href="/about" className="hover:text-blue-800 text-md font-bold">
              About
            </a>
            <a
              href="/services"
              className="hover:text-blue-800 text-md font-bold"
            >
              Services
            </a>
            <a
              href="/insights"
              className="hover:text-blue-800 text-md font-bold"
            >
              Insights
            </a>
            <a
              href="/projects"
              className="hover:text-blue-800 text-md font-bold"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="hover:text-blue-800 text-md font-bold"
            >
              Contact
            </a>
            <a
              href="/career"
              className="hover:text-blue-800 text-md font-bold"
            >
              Career
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-2 w-full flex flex-col items-center">
            <a href="/" className="block hover:text-blue-600 font-bold">
              Home
            </a>
            <a href="/about" className="block hover:text-blue-600 font-bold">
              About
            </a>
            <a href="/services" className="block hover:text-blue-600 font-bold">
              Services
            </a>
            <a href="/insights" className="block hover:text-blue-600 font-bold">
              Insights
            </a>
            <a href="/projects" className="block hover:text-blue-600 font-bold">
              Projects
            </a>
            <a href="/contact" className="block hover:text-blue-600 font-bold">
              Contact
            </a>
            <a href="/career" className="block hover:text-blue-600 font-bold">
              Career
            </a>
          </div>
        )}
      </nav>
      <div className="spacer h-24"></div>
    </>
  );
}

// import Image from "next/image";
// import { useEffect, useState } from "react";

// function Link({href,title,isCurrent}){
//     return(<a href={href} className={`text-md font-bold text-black hover:text-blue-900 underline-offset-8 decoration-blue-950 ${isCurrent?"underline":""}`}>{title}</a>);
// }

// export default function Navbar() {
//     const [activeLink,setActiveLink]=useState("")
//     useEffect(()=>{
//         setActiveLink(window.location.pathname)
//     },[])

//     const links=[
//         {
//             href:"/",
//             title:"EEEEE"
//         },
//         {
//             href:"/E",
//             title:"EEEEE"
//         },
//         {
//             href:"/E",
//             title:"EEEEE"
//         },
//         {
//             href:"/E",
//             title:"EEEEE"
//         },
//         {
//             href:"/E",
//             title:"EEEEE"
//         },
//     ]

//   return (
//     <>
//       <div className="w-screen fixed top-0 left-0 h-[80px] bg-gray-500 z-[10] flex items-center">
//         <a href="#" className="px-4 gap-4 flex items-center w-[350px] border border-black">
//           <Image src="/logo.webp" height={32} width={32} alt="image" />
//           <div className="text-2xl font-[700] text-black">MythoQuantum</div>
//         </a>
//         <div className="w-full border border-black flex justify-end pr-10 gap-10">
//             {links.map((link,id)=><Link key={id} href={link.href} title={link.title} isCurrent={link.href==activeLink}/>)}
//         </div>
//         <div className="w-full border border-black flex justify-end pr-10 gap-10">
//             =
//         </div>
//       </div>
//       <div className="spacer h-[80px]"></div>
//     </>
//   );
// }
