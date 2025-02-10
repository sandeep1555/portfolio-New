import { FaArrowRight } from "react-icons/fa6";
import { IoLayersOutline } from "react-icons/io5";
import { AiOutlineLayout } from "react-icons/ai";
import { Link } from "react-scroll";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Home = () => {


  const ref = useRef(null);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "linear" } },
  }
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div variants={textVariants} animate={isInView ? "visible" : "hidden"} initail="hidden" id="home" ref={ref} className='md:mt-[-75px] md:pt-[20px]    px-6 mt-10 md:px-0  overflow-y-hidden'>
      <div className="mt-10">
        <h4 className="md:text-8xl text-6xl font-bold uppercase pb-4 text-white ">Frontend</h4>
        <h4 className="md:text-8xl text-6xl font-bold uppercase text-zinc-700 ">Developer</h4>
      </div>
      <p className="text-lg md:w-[500px] w-[330px] mt-6 text-stone-400">Focused on crafting seamless and interactive user experiences with modern web technologies. Committed to delivering clean, efficient code and staying ahead of industry trends.</p>


      <button className="my-10 bg-gradient-to-r from-orange-700 to-red-600 text-white p-4 px-6 cursor-pointer text-xl rounded-md" onClick={() => window.open(
        "https://drive.google.com/file/d/1TKf6w_jJz8bbnYABUcQnGLgYT00ELiQF/view?usp=sharing",
        "_blank",
        "noopener,noreferrer,width=800,height=600"
      )}
      >Resume</button>

      <div className="mt-10 md:flex  w-full ">

        <div className="card  md:w-[300px] w-80 h-60 shadow-xl mr-8 mb-10 md:mb-0 bg-zinc-700   ">
          <div className="card-body text-white  pl-4 ">
            <h2 className="card-title rounded-lg">
              <AiOutlineLayout className="w-8 h-8" />SKILLS

            </h2>
            <h3 className="text-2xl  mb-12 pt-1">REACT JS, REDUX, TAILWINDCSS</h3>
            <div className="card-actions justify-end">
              <Link to="skills" smooth={true}><button className="border-2 border-white p-2 hover:scale-110 px-3"><FaArrowRight /></button></Link>
            </div>
          </div>
        </div>

        <div className="card  md:w-[380px] w-80 h-60 shadow-xl bg-gradient-to-r from-orange-700 to-red-600  ">
          <div className="card-body text-white pl-4">
            <h2 className="card-title"><IoLayersOutline className="text-white w-8 h-8" />PROJECTS</h2>
            <h3 className="text-2xl  mb-12 pt-1">DevTinder, Youtube-Clone, NetflixGPT</h3>
            <div className="card-actions justify-end">
              <Link to="projects" smooth={true}> <button className="border-2 border-white p-2 hover:scale-110 px-3"><FaArrowRight /></button></Link>
            </div>
          </div>
        </div>


      </div>
    </motion.div>

  )
}

export default Home