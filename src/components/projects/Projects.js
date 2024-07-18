import React, { useState } from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Netflix GPT"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          glink='https://github.com/anandhunv/netflixgpt'

        />
        <ProjectsCard
          title="Video Stream App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        {showMore && (
          <>
            <ProjectsCard
              title="SOCIAL MEDIA CLONE"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectThree}
            />
            <ProjectsCard
              title="E-commerce Website"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectOne}
            />
            <ProjectsCard
              title="Chatting App"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectTwo}
            />
             <ProjectsCard
              title="Chatting App"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectTwo}
            /> <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          /> <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> <ProjectsCard
        title="Chatting App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectTwo}
      /> <ProjectsCard
      title="Chatting App"
      des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
      src={projectTwo}
    /> <ProjectsCard
    title="Chatting App"
    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
    src={projectTwo}
  /> <ProjectsCard
  title="Chatting App"
  des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
  src={projectTwo}
/>
          </>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleShowMore}
          className="px-6 py-2 rounded-lg bg-amber-400 text-white hover:bg-gray-700 transition duration-300"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
}

export default Projects;
