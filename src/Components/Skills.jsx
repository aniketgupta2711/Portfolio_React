import React from 'react';
import html from "../assets/html.png"
import css from "../assets/css.png"
import javas from "../assets/js.png"
import sql from "../assets/mysql.png"
import reactjs from "../assets/physics.png"

function Skills() {
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"HTML",
            char:"Markup Language"
        },
        {
            id:2,
            logo:css,
            name:"CSS",
            char:"style & Layout"
        },
        {
            id:3,
            logo:javas,
            name:"JavaScript",
            char:"Interactivity"
        },
        {
            id:4,
            logo:sql,
            name:"MySQL",
            char:"Dataabase"
        },
        {
            id:5,
            logo:reactjs,
            name:"React",
            char:"UI Library"
        }
    ]
  return (
    <div name="Skills"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-15  '>
    
    <div>
     <h1 className='text-3xl font-bold mb-5 text-purple-500 flex justify-center '>Skills</h1>
     <div className="w-20 h-1 bg-purple-500 mx-auto  rounded-full "></div>
    
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5 flexjustify-items-center'>
        {
            cardItem.map(({id,logo,name,char}) =>(
                <div className='md:w-75 md:h-75 border border-gray-800 bg-gray-900 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col items-center justify-center' key={id}>
                    <img  src={logo} className="w-30 h-30 p-1 mx-auto" alt="" />
                    <br />
                    <div>
                        <div className="flex justify-center text-xl">{name}</div>
                        <div className='text-gray-400'>{char}</div>
                        
                         

                    </div>
                
                </div>
            ))
        }
    </div>
   </div>

    </div>
  )
}

export default Skills