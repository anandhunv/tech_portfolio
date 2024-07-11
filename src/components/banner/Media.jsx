import React from 'react'
import { FaInstagram,  FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
            <FaInstagram />

            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" title='React Js'>
              <FaReact />
            </span>
            <span className="bannerIcon" title='Node JS'>
              <SiNodedotjs/>
            </span>
            <span className="bannerIcon" title='Tailwind CSS'>
              <SiTailwindcss />
            </span>
            <span className="bannerIcon" title='MongoDb'>
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media