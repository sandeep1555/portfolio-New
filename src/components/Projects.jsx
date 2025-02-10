import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Projects = () => {
  const ref = useRef(null);
  const projectRef = useRef(null);

  const [margin, setMargin] = useState("700px"); // Default for mobile

  // Update margin based on screen size
  useEffect(() => {
    const updateMargin = () => {
      setMargin(window.innerWidth >= 768 ? "80px" : "700px");
    };

    updateMargin(); // Set initially
    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  const isInView = useInView(ref, { margin: "-100px" });
  const isInProjectView = useInView(projectRef, { margin });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "linear" } },
  };

  const projectCardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const projects = [
    {
      id: 1,
      name: "DevTinder",
      photoUrl: "assets/images/devtinder-img.png",
      description:
        "A platform where developers can connect, collaborate, and network with others in the tech community.",
      liveLink: "https://devtinder.online",
    },
    {
      id: 2,
      name: "devBuilder",
      photoUrl: "assets/images/devBuilder-img.png",
      description:
        "A construction site management app where owners create projects, assign tasks, track labor attendance, and monitor progress with role-based access.",
      liveLink: "https://thedevbuilder.online",
    },
    {
      id: 3,
      name: "Youtube-Clone",
      photoUrl: "assets/images/youtube-img.png",
      description:
        "A YouTube clone with video streaming, user authentication, and custom features.",
      liveLink: "https://my-youtube-phi.vercel.app/",
    },
    {
      id: 4,
      name: "Netflix-GPT",
      photoUrl: "assets/images/netflix-img-2.png",
      description:
        "A Netflix-inspired platform integrated with GPT for personalized content recommendations.",
      liveLink: "https://netflix-gpt-pi-jet.vercel.app/",
    },
  ];

  return (
    <div id="projects" ref={ref} className="mt-[35px] pt-[65px] mx-6">
      {/* Animated Titles */}
      <motion.h4
        className="md:text-8xl text-6xl font-bold uppercase pb-4 text-white"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Recent
      </motion.h4>
      <motion.h4
        className="md:text-8xl text-6xl font-bold uppercase text-zinc-700"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Projects
      </motion.h4>

      <div className="mt-10 md:mt-0">
        {projects.map((project) => (
          <motion.div
            animate={isInProjectView ? "visible" : "hidden"}
            variants={projectCardVariant}
            ref={projectRef}
            key={project.id}
            className="card lg:card-side shadow-xl my-4 md:w-[800px] p-4 md:hover:scale-105 cursor-default bg-neutral-800 flex justify-center items-center"
            onClick={() =>
              window.open(
                project.liveLink,
                "_blank",
                "noopener,noreferrer,width=800,height=600"
              )
            }
          >
            <figure className="max-w-[180px] h-[150px]">
              <img className="object-cover" src={project.photoUrl} alt="img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl mt-[-20px] text-white">
                {project.name}
              </h2>
              <p className="text-stone-400 md:w-[50vh]">{project.description}</p>
              <div className="card-actions md:justify-end justify-center">
                <button className="btn border-0 text-white rounded-lg bg-gradient-to-r from-orange-700 to-red-600 md:hidden block mt-4">
                  View
                </button>
              </div>
            </div>
            <LuSquareArrowOutUpRight className="text-orange-500 w-6 h-6 hover:w-8 hover:h-8 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
