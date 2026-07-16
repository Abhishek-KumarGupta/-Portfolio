import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";


const Navbar = () => {
  const [menu,openMenu] = useState(false)
  const [showMenu, setShowMenu] =useState(true)
  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">
        Portfolio
      </span>

      <ul className={` ${menu? "block" : "hidden"}  mx-24 py-2 mt-4 font-semibold bg-black/30 rounded-xl text-center md:mt-0 md:mx-0 md:flex gap-6`}>
        <a href="#About">
        <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </a>
        <a href="#Experience">
        <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
        </a>
        <a href="#Projects">
        <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>
        <a href="#Footer">
        <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line 
        size={30} 
        className="md:hidden absolute right-10 top-6 transition-all duration-300" 
        onClick={()=>{openMenu(!menu); setShowMenu(!showMenu)}}/> 
      ):
       <RiCloseLine
    size={30}
    className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
    onClick={() => {
      openMenu(false);
      setShowMenu(true);
    }}
  />}
    </nav>
  );
};

export default Navbar;