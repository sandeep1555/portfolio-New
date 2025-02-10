
import { HiOutlineHome } from "react-icons/hi";
import { GoFileDirectory } from "react-icons/go";
import { FiTool } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { PiSuitcase } from "react-icons/pi";

import { Link } from "react-scroll";




const Header = () => {
  return (
    <div className="flex  flex-row justify-center  items-center text-white bg-stone-800 py-4 px-4 rounded-xl  md:w-auto fixed z-50 bg-opacity-60   ">
      <Link to="home" offset={-100} smooth={true} duration={1000} className="relative group">
        <HiOutlineHome className="mx-3 w-6 h-6 hover:scale-125" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 mb-2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white p-1 rounded transition-opacity duration-300">
          Home
        </span>
      </Link>

      <Link to="projects" smooth={true} duration={1000} className="relative group">
        <GoFileDirectory className="mx-3 w-6 h-6 hover:scale-125" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 mb-2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white p-1 rounded transition-opacity duration-300">
          Projects
        </span>
      </Link>
      <Link to="skills" smooth={true} duration={1000} className="relative group">
        <FiTool className="mx-3 w-6 h-6 hover:scale-125" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 mb-2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white p-1 rounded transition-opacity duration-300">
          Skills
        </span>

      </Link>

      <Link to="internship" smooth={true} duration={1000} className="relative group">
        <PiSuitcase className="mx-3 w-6 h-6 hover:scale-125" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 mb-2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white p-1 rounded transition-opacity duration-300">
          Internship
        </span>

      </Link>
      <Link to="education" smooth={true} duration={1000} className="relative group">
        <FaGraduationCap className="mx-3 w-6 h-6 hover:scale-125" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 mb-2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white p-1 rounded transition-opacity duration-300">
          Education
        </span>
      </Link>
      <Link to="contact" smooth={true} duration={1000} className="relative group">
        <IoInformationCircleOutline className="mx-3 w-6 h-6 hover:scale-125" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 mb-2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white p-1 rounded transition-opacity duration-300">
          Connect
        </span></Link>






    </div>
  )
}

export default Header