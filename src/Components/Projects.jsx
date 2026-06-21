import React from 'react'
import study from "../assets/study.png"
import tic from "../assets/tic.png"
import calculate from "../assets/calculate.png"
import { IoLogOutOutline } from "react-icons/io5";


function Projects() {
   const cardItem=[
          {
              id:1,
              logo:study,
              name:"Smart Study Planner",
              char: "A responsive Tic Tac toe game built with  react",
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
              char:"A responsive Rock Paper Scissor game built with HTML, CSS and JavaScript",
              demo: "https://calculator-dun-delta.vercel.app/",
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
