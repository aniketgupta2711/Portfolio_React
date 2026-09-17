import React from 'react'
import study from "../assets/study.png"
import tic from "../assets/tic.png"
import calculate from "../assets/calculate.png"
import inamigos from "../assets/inamigos.png"
import aitrading from "../assets/aitrading.png"
import { IoLogOutOutline } from "react-icons/io5";


function Projects() {
   const cardItem=[
          {
              id:1,
              logo:study,
              name:"Smart Study Planner",
              char: "A responsive Smart Study Planner built with  react",
              demo: "https://study-planner-omega-olive.vercel.app/",
              
          },
          {
              id:2,
              logo:tic,
              name:"Tic Tac Toe",
              char:"A responsive Tic Tac toe game built with HTML, CSS and JavaScript ",
              demo: "https://tic-tac-toe-theta-liart.vercel.app/",
          },
          {
              id:3,
              logo:calculate,
              name:"Calculater ",
              char:"A responsive calculater built with HTML, CSS and JavaScript",
              demo: "https://calculator-dun-delta.vercel.app/",
          },
          {
              id:4,
              logo:inamigos,
              name:"InAmigos website(NGO)",
              char:"A responsive awareness page for InAmigos Foundation (NGO), built with HTML and CSS, linking directly to their official website.",
              demo: "https://in-amigos-ngo-drab.vercel.app/",
          },
            {
              id:5,
              logo:aitrading,
              name:"AI Trading Research Assistant",
              char:"AI-powered MERN app that turns natural language trading questions into structured, testable experiments using Google Gemini",
              demo: "https://ai-trading-research-assistant-seven.vercel.app/",
          }
          
      ]
  return (
    <div name="Projects">
    
    <div className='mt-0.5'>
     <h1 className='text-3xl font-bold mb-5 text-purple-500 flex justify-center  '>My Projects </h1>
     <div className="w-43 h-1 bg-purple-500 mx-auto  rounded-full "></div>
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-5 mx-5 flexjustify-items-center'>
        {
            cardItem.map(({id,logo,name,char,demo}) =>(
                <div  key={id} className="border border-gray-800 bg-gray-900 rounded-lg shadow-lg p-1 pt-3 cursor-pointer hover:scale-110 duration-300 ">
                    <img  src={logo} className="w-full object-cover rounded-t-xl p-2 " alt="" />
                    <br />

                    <span className="w-full text-left text-xl px-2 ">
                        {name}        
                     </span>
                     <br /><br />
                     <p className='px-2 text-gray-400'>{char}</p>
                     <a href={demo} className='flex justify-end text-sm  mt-1 text-purple-600 mx-2 my-2'>Live Demo<IoLogOutOutline className="text-xl  text-purple-600" /></a>
                    

                </div>
                
                
            ))
        }
    </div>
   </div>

    </div>


  )
}

export default Projects
