import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { CgUnavailable } from "react-icons/cg";

function About() {
  return (
    <div name="About">
      <div className="mx-2 sm:mx-4 md:mx-10 border border-gray-800 rounded-xl bg-gray-900 p-4 md:p-6">

        {/* About */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-5 text-purple-500">
          About
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-gray-300">
          Hi, I'm Aniket Gupta, a BCA student and aspiring MERN Stack Developer
          passionate about building modern, responsive, and user-friendly web
          applications. I have hands-on experience with MongoDB, Express.js,
          React.js, Node.js, JavaScript, MySQL, Tailwind CSS, Git, and GitHub. I
          enjoy solving real-world problems through code, learning new
          technologies, and continuously improving my development skills to
          become a successful Software Engineer.
        </p>

        {/* Education */}
        <h2 className="text-xl md:text-3xl font-semibold text-white mt-6 mb-3 md:mb-5">
          Education
        </h2>
        <h3 className="text-base md:text-xl text-gray-100">
          Bachelor of Computer Applications (BCA)
        </h3>
        <p className="text-sm md:text-base text-gray-300">
          DPG Degree College, Gurugram (Haryana)
        </p>
        <p className="text-sm md:text-base text-gray-400 mb-5">2023 - 2026</p>

        {/* Details */}
        <div className="text-sm md:text-base space-y-3">
          <p className="flex items-start">
            <FaRegUser className="mr-3 text-gray-300 shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
            <span>
              Name :
              <span className="text-gray-400 font-normal ml-2">Aniket Gupta</span>
            </span>
          </p>

          <p className="flex items-start">
            <IoLocationOutline className="mr-3 text-gray-300 shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
            <span>
              Location :
              <span className="text-gray-400 font-normal ml-2">Delhi, India</span>
            </span>
          </p>

          <p className="flex items-start">
            <CgMail className="mr-3 text-gray-300 shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
            <span>
              Email :
              <span className="text-gray-400 font-normal ml-2 break-all">
                aniketgupta3071@gmail.com
              </span>
            </span>
          </p>

          <p className="flex items-start">
            <CgUnavailable className="mr-3 text-gray-300 shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
            <span>
              Availability :
              <span className="text-green-500 font-normal ml-2">
                Available for work
              </span>
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default About