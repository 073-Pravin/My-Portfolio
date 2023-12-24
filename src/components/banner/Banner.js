import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiCanva, SiNodedotjs } from "react-icons/si";
import { bannerImg } from "../../assets/index";
import SocialMedia from '../socialMedia/SocialMedia';
const Banner = () => {
    const [text] = useTypewriter({
        words: ["Programmer.", "Full Stack Developer.", "UI Designer.","Content-Writer.","Media-Editor."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

  return (
    <section id='home' className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont  border-b-[1px] border-b-gray-600 ">
      
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal tracking-wide font-titleFont text-gray-400 ">Welcome To My World</h4>
        <h1 className="text-6xl font-bold text-white ">
          Hi, I'm <span className="text-designColor capitalize">Pravin Pilodiya</span>
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
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
     {/* Media */}
     <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <SocialMedia/>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiCanva />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full lgl:w-1/2 flex justify-center items-center reletive">
      <img
        className="absolute  lgl:top-[100px] w-[300px] h-[300px] lgl:w-[420px] lgl:h-[530px] z-[1] object-cover object-center "
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="  w-[300px] h-[300px] lgl:w-[400px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center drop-shadow-sm "></div>
    </div>

    </section>
  )
}

export default Banner
