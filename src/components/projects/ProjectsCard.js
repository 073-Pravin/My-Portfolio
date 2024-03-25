import React ,{Link} from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const ProjectsCard = ({ title, des, src, gitUrl, webUrl }) => {
  const gitOpen =()=>{
    window.open(`${gitUrl}`);
  }
  const webOpen=()=>{
    window.open(`${webUrl}`);
  }
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <img
        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={src}
        alt="src"
      />
      {/* <div className="w-full h-[80%] overflow-hidden rounded-lg">
      </div> */}
      <div className="w-full mt-5 flex flex-col  gap-0">
        <div className="flex items-center justify-between">
          <h3 className="text-base capitalize text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              {/* <Link to={gitUrl}><BsGithub/></Link> */}
              <BsGithub onClick={gitOpen} />
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe onClick={webOpen}/>
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
