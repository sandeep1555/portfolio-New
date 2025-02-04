

const Skills = () => {


    const skills = [{
        id: 1,
        name: "Vite",
        description: "React FrameWork",
        logo: "public/assets/images/vite-logo-icon.jpeg",
        url: "https://vite.dev/"
    },
    {
        id: 2,
        name: "TailwindCSS",
        description: "CSS Library",
        logo: "public/assets/images/tailwind-css-icon.png",
        url: "https://tailwindcss.com/",
    },
    {
        id: 3,
        name: "redux",
        description: "State Management",
        logo: "public/assets/images/redux-logo-icon.png",
        url: "https://redux.js.org/",
    },
    {
        id: 4,
        name: "Nodejs",
        description: "JavaScript Runtime",
        logo: "public/assets/images/nodejs-logo-icon.jpg",
        url: "https://nodejs.org/en",
    },
    {
        id: 5,
        name: "MongoDB",
        description: "Database System",
        logo: "public/assets/images/mongodb-logo-icon.png",
        url: "https://www.mongodb.com/",
    },
    {
        id: 6,
        name: "ExpressJs",
        description: "Backend Framework",
        logo: "public/assets/images/express-js-logo.png",
        url: "https://expressjs.com/",
    }]
    return (
        <div id='skills' className='mt-[100px] mx-6'>
            <h4 className="md:text-8xl text-6xl font-bold uppercase pb-4 text-white ">premium</h4>
            <h4 className="md:text-8xl text-6xl font-bold uppercase text-zinc-700 ">Tools</h4>



            <div className="grid md:grid-cols-2  h-auto w-[650px]">



                {skills && skills.map((skill) => (


                    <div key={skill.id} className="card card-side  shadow-xl mt-4  w-[300px] hover:bg-neutral-800 pl-3 cursor-pointer " onClick={() => window.open(
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
                    </div>

                ))}


            </div>


        </div>
    )
}

export default Skills