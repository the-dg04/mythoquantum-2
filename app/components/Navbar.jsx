"use client";

// import Image from "next/image";
// import React, { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <nav className="bg-white text-black fixed top-0 left-0 w-screen py-8 pr-10 z-[10]">
//         <div className="container w-full flex justify-between items-center">
//           <a href="#" className="flex items-center w-[350px] ml-4">
//             <Image src="/logo.webp" height={32} width={32} alt="image" />
//             <div className="text-2xl font-[700] text-black ml-4">
//               MythoQuantum
//             </div>
//           </a>

//           <div className="hidden lg:flex gap-6 w-full justify-end">
//             <a href="/" className="hover:text-blue-800 text-md font-bold">
//               Home
//             </a>
//             <a href="/about" className="hover:text-blue-800 text-md font-bold">
//               About
//             </a>
//             <a
//               href="/services"
//               className="hover:text-blue-800 text-md font-bold"
//             >
//               Services
//             </a>
//             <a
//               href="/insights"
//               className="hover:text-blue-800 text-md font-bold"
//             >
//               Insights
//             </a>
//             <a
//               href="/projects"
//               className="hover:text-blue-800 text-md font-bold"
//             >
//               Projects
//             </a>
//             <a
//               href="/contact"
//               className="hover:text-blue-800 text-md font-bold"
//             >
//               Contact
//             </a>
//             <a
//               href="/career"
//               className="hover:text-blue-800 text-md font-bold"
//             >
//               Career
//             </a>
//           </div>

//           {/* Hamburger Menu */}
//           <button
//             className="lg:hidden text-black focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Dropdown Menu */}
//         {menuOpen && (
//           <div className="lg:hidden mt-4 space-y-2 w-full flex flex-col items-center">
//             <a href="/" className="block hover:text-blue-600 font-bold">
//               Home
//             </a>
//             <a href="/about" className="block hover:text-blue-600 font-bold">
//               About
//             </a>
//             <a href="/services" className="block hover:text-blue-600 font-bold">
//               Services
//             </a>
//             <a href="/insights" className="block hover:text-blue-600 font-bold">
//               Insights
//             </a>
//             <a href="/projects" className="block hover:text-blue-600 font-bold">
//               Projects
//             </a>
//             <a href="/contact" className="block hover:text-blue-600 font-bold">
//               Contact
//             </a>
//             <a href="/career" className="block hover:text-blue-600 font-bold">
//               Career
//             </a>
//           </div>
//         )}
//       </nav>
//       <div className="spacer h-24"></div>
//     </>
//   );
// }

// // import Image from "next/image";
// // import { useEffect, useState } from "react";

// // function Link({href,title,isCurrent}){
// //     return(<a href={href} className={`text-md font-bold text-black hover:text-blue-900 underline-offset-8 decoration-blue-950 ${isCurrent?"underline":""}`}>{title}</a>);
// // }

// // export default function Navbar() {
// //     const [activeLink,setActiveLink]=useState("")
// //     useEffect(()=>{
// //         setActiveLink(window.location.pathname)
// //     },[])

// //     const links=[
// //         {
// //             href:"/",
// //             title:"EEEEE"
// //         },
// //         {
// //             href:"/E",
// //             title:"EEEEE"
// //         },
// //         {
// //             href:"/E",
// //             title:"EEEEE"
// //         },
// //         {
// //             href:"/E",
// //             title:"EEEEE"
// //         },
// //         {
// //             href:"/E",
// //             title:"EEEEE"
// //         },
// //     ]

// //   return (
// //     <>
// //       <div className="w-screen fixed top-0 left-0 h-[80px] bg-gray-500 z-[10] flex items-center">
// //         <a href="#" className="px-4 gap-4 flex items-center w-[350px] border border-black">
// //           <Image src="/logo.webp" height={32} width={32} alt="image" />
// //           <div className="text-2xl font-[700] text-black">MythoQuantum</div>
// //         </a>
// //         <div className="w-full border border-black flex justify-end pr-10 gap-10">
// //             {links.map((link,id)=><Link key={id} href={link.href} title={link.title} isCurrent={link.href==activeLink}/>)}
// //         </div>
// //         <div className="w-full border border-black flex justify-end pr-10 gap-10">
// //             =
// //         </div>
// //       </div>
// //       <div className="spacer h-[80px]"></div>
// //     </>
// //   );
// // }

import { useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';

export default function Navbar  () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainMenuItems = [
    { label: 'Services', submenu: ['Audit & Assurance', 'Consulting', 'Tax', 'Risk Advisory'] },
    { label: 'Industries', submenu: ['Financial Services', 'Technology', 'Energy', 'Healthcare'] },
    { label: 'Insights', submenu: ['Featured Insights', 'Research', 'Case Studies', 'Articles'] },
    { label: 'Careers', submenu: ['Students', 'Experienced Hires', 'Life at Deloitte', 'Apply Now'] }
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#001F3F] shadow-md z-10">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
          <img src="/logo2.png" alt="" className='object-contain w-8 mr-2'/>
            <div className="text-[#EAD8B1] font-bold text-xl">MythoQuantum</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {mainMenuItems.map((item) => (
              <div key={item.label} className="group">
                <button className="text-[#EAD8B1] hover:text-white hover:underline underline-offset-8 decoration-green-500 px-3 py-2 text-sm font-medium">
                  {item.label}
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 z-10 scale-y-0 origin-top group-hover:scale-y-100 transition-all duration-[0.5s] w-full bg-[#001F3F] shadow-lg">
                  <div className="flex">
                  <div className="py-10 px-4 w-2/3">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-4 text-xl text-[#EAD8B1] hover:underline underline-offset-8 transition-all duration-1000 decoration-green-500"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                  <div className="w-1/3 border-l-2 border-green-500 h-auto my-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-[#EAD8B1] hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-[#EAD8B1] hover:text-white">
              <Globe className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#EAD8B1] hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden h-[100vh] overflow-y-scroll no-scrollbar py-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainMenuItems.map((item) => (
              <div key={item.label}>
                <button className="block px-3 py-2 text-base font-bold text-[#EAD8B1] hover:text-black hover:bg-gray-50 w-full text-left">
                  {item.label}
                </button>
                <div className="pl-4">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-3 py-2 text-[#EAD8B1] text-sm hover:text-black hover:bg-gray-50"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="text-[#EAD8B1] hover:text-white">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-[#EAD8B1] hover:text-white">
                <Globe className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};