import { useInView,motion } from "framer-motion";
import { useRef } from "react";


const Skills = () => {


    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });
    const skillsRef = useRef(null);

    const isInSkillView = useInView(skillsRef, { margin: "180px" });

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "linear" } },
    };

    const skillsVariant = {

        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    }



    const skills = [{
        id: 1,
        name: "Vite",
        description: "React FrameWork",
        logo: "assets/images/vite-logo-icon.jpeg",
        url: "https://vite.dev/"
    },
    {
        id: 2,
        name: "TailwindCSS",
        description: "CSS Library",
        logo: "assets/images/tailwind-css-icon.png",
        url: "https://tailwindcss.com/",
    },
    {
        id: 3,
        name: "redux",
        description: "State Management",
        logo: "assets/images/redux-logo-icon.png",
        url: "https://redux.js.org/",
    },
    {
        id: 4,
        name: "Nodejs",
        description: "JavaScript Runtime",
        logo: "assets/images/nodejs-logo-icon.jpg",
        url: "https://nodejs.org/en",
    },
    {
        id: 5,
        name: "MongoDB",
        description: "Database System",
        logo: "assets/images/mongodb-logo-icon.png",
        url: "https://www.mongodb.com/",
    },
    {
        id: 6,
        name: "ExpressJs",
        description: "Backend Framework",
        logo: "assets/images/express-js-logo.png",
        url: "https://expressjs.com/",
    }]
    return (
        <div ref={ref} id='skills' className='mt-[35px] pt-[65px] mx-6'>
            <motion.h4 variants={textVariants} 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} className="md:text-8xl text-6xl font-bold uppercase pb-4 text-white ">premium</motion.h4>
            <h4 className="md:text-8xl text-6xl font-bold uppercase text-zinc-700 ">Tools</h4>



            <div className="grid md:grid-cols-2  h-auto w-[650px]">



                {skills && skills.map((skill) => (


                    <motion.div ref={skillsRef} variants={skillsVariant} animate={isInSkillView ? "visible" : "hidden"} key={skill.id} className="card card-side  shadow-xl mt-4  w-[300px] hover:bg-neutral-800 pl-3 cursor-pointer " onClick={() => window.open(
                        skill.url,
                        "_blank",
                        "noopener,noreferrer,width=800,height=600"
                    )}>
                        <figure className='mx-2  '>
                            <img className='w-[60px] h-[60px] bg-white  object-cover mix-blend-normal rounded-lg p-2'
                                src={skill.logo}
                                alt="img"
                                style={{ backgroundColor: "white" }} />
                        </figure>
                        <div className="card-body ml-[-20px]" >
                            <h2 className="card-title text-white">{skill.name}</h2>
                            <p className='text-stone-400'>{skill.description}.</p>

                        </div>
                    </motion.div>

                ))}


            </div>


        </div>
    )
}

export default Skills