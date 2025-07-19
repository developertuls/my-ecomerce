
import { useState } from "react";
import { FaBars, FaCarTunnel } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Nev.css";

  const Nebver = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false); // mobile menu auto close
  };

  return (
      
    <nav className="bg-[#1f2635]/90 text-[#d4dee4] fixed top-0 w-full z-50 shadow-md">
      <div className=" md:w-[95%] md:mx-auto">
      <div className="  mx-auto flex justify-between items-center md:px-9 py-4 md:py-5">
       
        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-white">
          <Link to="/" onClick={() => handleLinkClick("/")}>
          <FaCarTunnel className="text-[#c4f131] text-[25px] md:text-4xl sm:text-4xl" />
          </Link>
          <h2 className="md:text-2xl sm:text-2xl">
            LUXU<span className="logo">RyziP</span>
          </h2>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden ml-[85px]">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose size={24} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:gap-x-9 font-semibold md:text-xl">
          {["/", "/shop", "/aboutus", "/blogs"].map((path) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => handleLinkClick(path)}
                className={`${
                  activeLink === path ? "text-[#4cd137]" : "hover:text-[#4cd137]"
                }`}
              >
                {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contactus">
          <button
            onClick={() => handleLinkClick("/contactus ")}
            className={` md:text-2xl font-bold ${
              activeLink === "/contactus"
                ? "bg-[#cdfe2a]"
                : "bg-[#cdfe2a] hover:bg-[#a1c138]"
            } hidden md:block text-black font-medium px-3 py-1 rounded-sm transition`}
          >
            Contact Us
          </button>
        </Link>
      </div>
</div>






      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden bg-[#0c0e12] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-3 text-white font-medium">
          {["/", "/shop", "/aboutus", "/blogs"].map((path) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => handleLinkClick(path)}
                className={`${
                  activeLink === path ? "text-[#4cd137]" : "hover:text-[#4cd137]"
                }`}
              >
                {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
              </Link>
            </li>
          ))}

          <Link to="/contactus">
            <button
              onClick={() => handleLinkClick("/contactus")}
              className={`${
                activeLink === "/contactus"
                  ? "bg-[#cdfe2a]"
                  : "hover:bg-[#a1c138]"
              } bg-[#a8cf26] mt-3 text-black font-medium px-3 py-1 rounded-sm transition`}
            >
              Contact Us
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nebver;
