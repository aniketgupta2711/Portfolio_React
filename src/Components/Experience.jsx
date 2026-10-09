import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import inamigos from "../assets/inamigos.png"

function Experience() {
  const experience = [
    {
      id: 1,
      role: "Web Developer Intern",
      company: "InAmigos Foundation",
      type: "Remote",
      duration: "14 Sep 2026 - 27 Sep 2026",
      demo: "https://in-amigos-ngo-drab.vercel.app",
      image: inamigos,
      points: [
        "Developed and deployed a responsive website for InAmigos Foundation, an NGO, presenting its mission, initiatives, and key information clearly across mobile, tablet, and desktop.",
        "Designed a web page UI in Figma and converted it into a clean, responsive, working web page.",
        "Worked remotely, actively participated in team meetings, and completed assigned tasks on time.",
      ],
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-2 sm:px-4 md:px-10 my-10"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-5 text-purple-500 flex justify-center">
        Experience
      </h1>
      <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>

      <div className="mx-2 md:mx-0 my-5 space-y-4">
        {experience.map((item) => (
          <div
            key={item.id}
            className="border border-gray-800 rounded-xl bg-gray-900 p-4 md:p-8 flex flex-col md:flex-row gap-5 md:gap-10"
          >
            {/* Left: content */}
            <div className="md:w-3/5">
              <h2 className="text-lg md:text-2xl font-semibold text-white">
                {item.role}
              </h2>
              <p className="text-sm md:text-base text-purple-400">
                {item.company} | {item.type}
              </p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                {item.duration}
              </p>

              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm md:text-base text-gray-300 leading-relaxed">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right: image + live demo */}
            <div className="md:w-2/5 flex flex-col items-center justify-center gap-3">
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-md overflow-hidden rounded-lg border border-gray-800"
              >
                <img
                  src={item.image}
                  alt={item.company}
                  className="w-full aspect-video object-cover object-top hover:scale-105 duration-300"
                />
              </a>
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm md:text-base text-white bg-purple-600 hover:bg-purple-500 rounded-lg duration-300"
              >
                Live Demo <FiExternalLink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience