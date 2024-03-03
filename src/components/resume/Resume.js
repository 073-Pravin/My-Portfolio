import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Experience from "./Experience";

const handleDownload = () => {
  const link = document.createElement("a");
  link.download = "Pravin-resume";

  link.href = "/documents/Resume.pdf";

  link.click();
};
const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-600 "
    >
      <div className="flex flex-row justify-center gap-10">
        <div className="flex xs:flex-col justify-center items-center text-center gap-10 xs:gap-1 xs:my-5">
          <Title title="Have A Look It Took Just 10 Sec" des="My Resume" />
          <button
            className=" flex bg-transparent border rounded-md p-2 text-[#ff014f] border-designColor hover:text-[#fff] hover:border-white hover:shadow-white-700 xs:text-sm"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Certifications
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievements />}
        {experienceData && <Experience />}
      </div>
    </section>
  );
};

export default Resume;
