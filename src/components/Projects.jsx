import { LuSquareArrowOutUpRight } from "react-icons/lu";



const Projects = () => {

  const projects = [{
    id: 1,
    name: "DevTinder",
    photoUrl: "src/assets/images/devtinder-img.png",
    description: "A platform where developers can connect, collaborate, and network with others in the tech community.",
    liveLink: "https://devtinder.online"

  },
  {
    id: 2,
    name: "Youtube-Clone",
    photoUrl: "src/assets/images/youtube-img.png",
    description: "A YouTube clone with video streaming, user authentication, and custom features.",
    liveLink: "https://my-youtube-phi.vercel.app/"

  },
  {
    id: 3,
    name: "Netflix-GPT",
    photoUrl: "src/assets/images/netflix-img-2.png",
    description: "A Netflix-inspired platform integrated with GPT for personalized content recommendations.",
    liveLink: "https://netflix-gpt-pi-jet.vercel.app/"

  },

  ]

  return (
    <div id='projects' className='mt-[100px] mx-6  '>
      <h4 className="md:text-8xl text-6xl font-bold uppercase pb-4 text-white ">Recent</h4>
      <h4 className="md:text-8xl text-6xl font-bold uppercase text-zinc-700 ">Projects</h4>

      <div>

        {projects && projects.map((project) => (
          <div key={project.id} className="card lg:card-side  shadow-xl my-4 md:w-[800px] p-4 md:hover:scale-105 cursor-default  bg-neutral-800 flex justify-center items-center" onClick={() => window.open(
            project.liveLink,
            "_blank",
            "noopener,noreferrer,width=800,height=600"
          )}>
            <figure className='max-w-[180px] h-[150px]'>
              <img className='object-cover '

                src={project.photoUrl}
                alt="img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl mt-[-20px] text-white">{project.name}</h2>
              <p className='text-stone-400'>{project.description}</p>
              <div className="card-actions md:justify-end justify-center">
                <button className="btn border-0 text-white rounded-lg bg-gradient-to-r from-orange-700 to-red-600 md:hidden block mt-4">View</button>
              </div>
            </div>
            <LuSquareArrowOutUpRight className='text-orange-500 w-6 h-6 hover:w-8 hover:h-8 hidden md:block' />


          </div>
        ))}



      </div>
    </div>
  )
}

export default Projects