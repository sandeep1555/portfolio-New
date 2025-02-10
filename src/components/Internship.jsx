import { useInView,motion } from "framer-motion";
import { useRef } from "react"


const Internship = () => {

    const ref=useRef(null);
    const isInView=useInView(ref,{margin:"-100px"})



  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "linear" } },
  }

    const internship = [{
        id:1,
        name: "Iblix Digital",
        role1: "React Developer",
        role2: "Odoo Developer",
        duration: "June 2024 - Dec 2024",
        role1_description: "As a React Developer Intern, I worked on an ERP project, developing a comprehensive tasks dashboard similar to Jira. My responsibilities included designing and implementing dynamic user interfaces using React, integrating APIs, and managing state to ensure seamless functionality. I focused on creating a user-friendly experience for task management and collaboration, leveraging tools such as Redux for efficient state management and Tailwind CSS for responsive design. This experience enhanced my skills in React development and reinforced my understanding of scalable and maintainable front-end solutions.",
        role2_description: "During my internship as an Odoo Developer, I specialized in customizing user interfaces using Odoo Studio to meet client-specific requirements. I collaborated with stakeholders to gather requirements, configured modules, and tailored the UI to align with their business processes. This role deepened my expertise in ERP systems, reinforced my ability to adapt pre-built frameworks to unique needs, and honed my skills in delivering client-focused solutions."
    }]


    return (
        <div id="internship" className='mt-[35px] pt-[65px] mx-6 '>
            <motion.div ref={ref} variants={textVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h4 className="md:text-8xl text-5xl font-bold uppercase pb-4 text-white ">Internship</h4>
            <h4 className="md:text-8xl text-5xl font-bold uppercase text-zinc-700 ">Experience</h4>
            </motion.div>


            <div>

                {internship && internship.map((internship) => (
                    <motion.div ref={ref} variants={textVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} key={internship.id} className="card lg:card-side  shadow-xl my-4 mt-6 md:w-[800px] p-4  cursor-default  bg-neutral-800 flex justify-center items-center">
                      
                        <div className="card-body">
                            <div className='md:flex items-center mb-4'>
                                <h2 className="card-title text-3xl mt-[-20px]  text-white">{internship.name}</h2>
                                <p className='text-stone-400 md:text-right md:mt-[-20px] '>{internship.duration}</p>
                            </div>
                            <p className='text-stone-200'>{internship.role1}</p>
                            <p className='text-stone-400 mb-4'>{internship.role1_description}</p>

                            <p className='text-stone-200'>{internship.role2}</p>
                            <p className='text-stone-400'>{internship.role2_description}</p>
                            <button onClick={() => window.open(
                                "https://drive.google.com/file/d/1A0bqj7E_u_GbUPCUM9i92FLHJbHB2j2I/view?usp=sharing",
                                "_blank",
                                "noopener,noreferrer,width=800,height=600"
                            )} className='btn  bg-gradient-to-r from-orange-700 to-red-600  border-0 text-white mt-4'>View Certificate</button>
                        </div>



                    </motion.div>
                ))}




            </div>

        </div>
    )
}

export default Internship


