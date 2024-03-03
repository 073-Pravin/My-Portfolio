import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const openFacebookProfile = () => {
  window.open("https://www.facebook.com/profile.php?id=100005805347801");
};

const openInstagramProfile = () => {
  window.open("https://www.instagram.com/pravinpilodiya");
};

const openLinkedInProfile = () => {
  window.open("https://www.linkedin.com/in/pravin-pilodiya-998909255");
};
const openGithubProfile = () => {
  window.open("https://github.com/073-Pravin");
};


const SocialMedia = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <span className="bannerIcon" onClick={openFacebookProfile}>
        <FaFacebookF />
      </span>

      <span className="bannerIcon" onClick={openInstagramProfile}>
        <FaInstagram />
      </span>

      <span className="bannerIcon" onClick={openLinkedInProfile}>
        <FaLinkedinIn />
      </span>
      <span className="bannerIcon" onClick={openGithubProfile}>
      <SiGithub/>
      </span>
    </div>
  );
}

export default SocialMedia;
