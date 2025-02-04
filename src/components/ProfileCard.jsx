
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const ProfileCard = () => {
  return (
    <div className='md:h-screen w-full  '>

      <div className="card bg-base-100 md:w-96 w-[350px] shadow-xl ml-3 ">
        <figure className="px-10 mt-10 ">
          <img
            src="public/assets/images/profile-pic.jpg"
            alt="photo"
            className="rounded-xl h-[350px] w-[250px] object-cover  " />
        </figure>
        <div className="card-body items-center text-center mb-2">
          <h2 className="card-title text-4xl text-black font-bold">Dasari Sandeep</h2>
          <p className='text-lg text-center  text-neutral-500'>Passionate about building responsive web interfaces and staying updated with the latest web technologies.</p>
          <div className="card-actions flex justify-center mt-2">
            <button className='pr-2 hover:scale-125' onClick={() => window.open(
              "https://www.linkedin.com/in/dasari-sandeep1555/",
              "_blank",
              "noopener,noreferrer,width=800,height=600"
            )}><FaLinkedin className="w-8 h-8" /></button>
            <button className='pr-2 hover:scale-125' onClick={() => window.open(
              "https://github.com/sandeep1555",
              "_blank",
              "noopener,noreferrer,width=800,height=600"
            )}><FaGithub className="w-8 h-8" /></button>
            <button className='pr-2 hover:scale-125' onClick={() => window.open(
              "https://leetcode.com/u/sandeep555/",
              "_blank",
              "noopener,noreferrer,width=800,height=600"
            )}><SiLeetcode className='w-8 h-8' /></button>

          </div>
        </div>
      </div>



    </div>
  )
}

export default ProfileCard


// https://www.linkedin.com/in/dasari-sandeep1555/
// https://github.com/sandeep1555

// https://leetcode.com/u/sandeep555/