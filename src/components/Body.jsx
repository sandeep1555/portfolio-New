import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import ProfileCard from "./ProfileCard";
import Projects from "./Projects"
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Internship from "./Internship";

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen " >
      {/* Header */}
      <div className="py-[50px] flex justify-center items-center">
        <Header />
      </div>

      {/* Main Content Wrapper */}
      <div className="md:flex w-full md:mt-[50px] flex flex-col justify-center items-center  ">
        {/* Fixed Profile Section */}
        <div className="md:w-5/12 md:px-[100px] md:fixed  md:left-0 md:top-[68%] md:-translate-y-1/2">
          <ProfileCard />
        </div>

        {/* Scrollable Home Section */}
        <div className="md:w-7/12 w-full md:ml-[41%] md:overflow-y-hidden h-full ">
          <Home />
          <Projects />
          <Skills />
          <Internship />
          <Education />
          <Contact />

        </div>

      </div>
      <Footer />
      {/* Footer */}

    </div>
  );
};

export default Body;
