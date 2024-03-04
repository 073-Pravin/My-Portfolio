import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-600"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Mithai Cart - Ecommerce Web App"
          des="An intuitive and efficient online platform for ordering sweets and namkeens, this full-stack web application, built with the MERN stack, offers seamless user authentication and ordering processes. Users can easily navigate through various categories of sweets and namkeens, while an admin panel allows for effortless management of product listings, order reception, and order maintenance. With essential features in place, this application provides a hassle-free experience for both customers and administrators alike."
          src={projectOne}
        />
        <ProjectsCard
          title="Portfolio-Web App"
          des="My portfolio website, developed with HTML, CSS, JavaScript, ReactJs, and Bootstrap, offers a seamless browsing experience for visitors. Organized with intuitive navigation, it showcases my diverse projects across web development and design domains. With a focus on user-friendly design, accessibility, and highlighting my expertise, the website aims to leave a lasting impression and facilitate connections for potential collaborations."
          src={projectTwo}
        />
        <ProjectsCard
          title="Whispers from the world - News Web App"
          des="Offering users a seamless news browsing experience, this front-end web application utilizes HTML, CSS, JavaScript, ReactJs, and Bootstrap to present dynamically sourced headlines across various topics like sports, health, business, and entertainment. The project intelligently categorizes news sections, accessible through an intuitive navbar, ensuring effortless navigation and exploration of up-to-date information."
          src={projectThree}
        />
     
      </div>
    </section>
  );
}

export default Projects