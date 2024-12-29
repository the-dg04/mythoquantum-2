"use client";
import { useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import Link from 'next/link';
import { ServicesData } from '../services/data';

export default function Navbar  () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Services=ServicesData;

  const mainMenuItems = [
    { label: 'About', submenu: ['About Us', 'Our Team', 'Contact Us'] ,src:['/about','/about/#team','/contact']},
    { label: 'Projects', submenu: ['All Projects','Completed', 'Ongoing', 'Upcoming'] ,src:['/projects','/projects/#completed','/projects/#ongoing','/projects/#upcoming']},
    { label: 'Services', submenu: Services.map((val)=>val['name']) ,src:Services.map((val,idx)=>`/services/${idx}`)},
    { label: 'Careers', submenu: ['Careers'],src:['/careers'] }
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#001F3F] shadow-md z-10">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0 flex items-center">
          <img src="/logo2.png" alt="" className='object-contain w-10 mr-2'/>
            <div className="text-[#EAD8B1] font-bold text-xl">MythoQuantum</div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {mainMenuItems.map((item,idx) => (
              <div key={item.label} className="group">
                <button className="text-[#EAD8B1] hover:text-white hover:underline underline-offset-8 decoration-green-500 px-3 py-2 text-sm font-medium">
                  {item.label}
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 z-10 scale-y-0 origin-top group-hover:scale-y-100 transition-all duration-[0.5s] w-full bg-[#001F3F] shadow-lg">
                  <div className="flex">
                  <div className="py-10 px-4 w-2/3">
                    {item.submenu.map((subItem,index) => (
                      <Link
                        key={index}
                        // scroll={false}
                        href={mainMenuItems[idx].src[index]}
                        className="block px-4 py-4 text-xl text-[#EAD8B1] hover:underline underline-offset-8 transition-all duration-1000 decoration-green-500"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                  <div className="w-1/3 border-l-2 border-green-500 h-auto my-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-6 h-5 w-16">
            {/* <button className="text-[#EAD8B1] hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-[#EAD8B1] hover:text-white">
              <Globe className="h-5 w-5" />
            </button> */}
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
            {mainMenuItems.map((item,idx) => (
              <div key={item.label}>
                <button className="block px-3 py-2 text-base font-bold text-[#EAD8B1] hover:text-black hover:bg-gray-50 w-full text-left">
                  {item.label}
                </button>
                <div className="pl-4">
                  {item.submenu.map((subItem,index) => (
                    <a
                      key={subItem}
                      href={mainMenuItems[idx].src[index]}
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