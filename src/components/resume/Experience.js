import React from "react";
import {motion} from "framer-motion"
import CertificateCard from "./CertificateCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-auto h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <CertificateCard
            title="Problem Solving (Basic)"
            organization="HackerRank"
            issuedDate={"Jan 2024"}
            url="https://www.hackerrank.com/certificates/63c72c9ee5e6"
            />
          <CertificateCard
            title="Python (Basic)"
            organization="HackerRank"
            issuedDate={"Jan 2024"}
            url="https://www.hackerrank.com/certificates/27f0f6c29a0b"
          />
          <CertificateCard
            title="JavaScript Bootcamp"
            organization="Lets Upgrade"
            issuedDate={"11 Sep 2022"}
            url="/documents/javaScript_Bootcamp.pdf"
          />
          <CertificateCard
            title="Cyber Security and Ethical
            Hacking Workshop"
            organization="IEEE Student Branch Chapter, NIT Tiruchirappalli"
            issuedDate={"17 Aug 2023"}
            url="/documents/CyberSecurity_workshop.pdf"
          />
          <CertificateCard
            title="AI Tools Workshop"
            organization="be10x"
            issuedDate={"14 Jan 2024"}
            url="/documents/AI_tools_workshop.pdf"
          />
        </div>
      </div>
    
    </motion.div>
  );
};

export default Experience;