import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { logo } from "../../assets/index";
import { MdClose } from "react-icons/md";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import SocialMedia from "../socialMedia/SocialMedia";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" w-full h-24 flex  items-center justify-between font-titleFont border-b-[1px] border-b-gray-600">
      <div className=" flex items-center justify-center gap-2 ">
        <img
          src={logo}
          alt="logo" 
          className=" w-[70px] h-[65px] rounded-[50%] border-[2px] "
        />
        <h1 className="text-designColor font-bold text-6xl">PP</h1>
      </div>

      <div>
        <ul className="md:flex items-center gap-8 lg:gap-10 hidden ">
          {
            navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base w-max font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor  duration-300 after: "
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {" "}
                  {title}
                </Link>
              </li>
            )) // return hori hai value isiliye {} use nhi hue yaha par
          }
        </ul>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[100%] h-screen overflow-auto absolute top-0 left-0 bg-gray-900 p-4  z-10 border-4 border-designColor">
            <div className="flex flex-col gap-8 py-2 relative ">
              <div className="flex flex-col items-center">
                <img
                  className="w-32 rounded-[50%] items-center"
                  src={logo}
                  alt="logo"
                />
                <p className="text-sm text-gray-400 mt-4 p-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum soluta perspiciatis molestias enim cum repellat, magnam
                  exercitationem distinctio aliquid nam.
                </p>
              </div>
              <ul className="flex flex-wrap gap-[50px] justify-center ">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className=" bg-transparent border rounded-md p-2 cursor-pointer text-designColor border-designColor hover:text-[#fff] hover:border-white hover:shadow-white-700"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-6">
                <h2 className="text-base capitalize font-titleFont my-3 text-center ">
                  Find Me On
                </h2>
                <div className="flex flex-wrap gap-10 justify-center">
                  <SocialMedia/>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
