import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { bannerImg } from "../../assets/index";
import SocialMedia from "../socialMedia/SocialMedia";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Programmer.", "Full Stack Developer."], 
    loop: true, 
    typeSpeed: 20, 
    deleteSpeed: 10,
    delaySpeed: 2000,
  }); 

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont  border-b-[1px] border-b-gray-600 "
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal tracking-wide font-titleFont text-gray-400 ">
            Welcome To My World
          </h4>
          <h1 className="text-6xl font-bold text-white ">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Pravin Pilodiya</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            A <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Hello, I'm Pravin Pilodiya, a dedicated tech enthusiast currently
            pursuing my Master's in Computer Applications (MCA) at NIT Trichy.
            My journey in the world of technology began with my Bachelor of
            Science with Computer Science (B.Sc.) at Government Holkar Science
            College in Indore, Madhya Pradesh.
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            During my B.Sc. program at a government institution, I laid a solid
            foundation in computer science and technology, which fueled my
            passion for software development. Now, as I work toward my MCA, I'm
            further expanding my knowledge and skills in the field, taking on
            challenging coursework and engaging in projects. I'm excited to
            continue my journey in the software industry and make a meaningful
            impact through my technical expertise and creativity.
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Let's connect and explore opportunities for collaboration and growth
            in the ever-evolving tech world.
          </p>
        </div>
        {/* Media */}
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-3 justify-between">
          <div className="lgl:w-2/3 ">
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <SocialMedia />
          </div>
          <div className="bg-designColor w-2 h-100% z-5 sm:disabled:">
          
          </div>
          <div className="lgl:w-2/3">
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4 flex-wrap justify-center">
              <span className="bannerIcon">
                <SiMongodb />
              </span>
              <span className="bannerIcon">
                <SiExpress/>
              </span>
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiNodedotjs />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 flex justify-center items-center ">
        <div className="  w-[300px] h-[300px] lgl:w-[400px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center drop-shadow-sm "></div>
        <img
          className="lgl:top-[200px] w-[300px] h-[300px] lgl:w-[420px] lgl:h-[530px] z-[1] object-cover object-center absolute "
          src={bannerImg}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default Banner;
