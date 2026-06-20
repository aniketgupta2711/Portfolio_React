import React, { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll"


function Navbar() {
    const [menu,setmenu] = useState(false);
    const navItem = [
        {   
            id:1,
            text:"Home"
        },
        {   
            id:2,
            text:"About"
        },
        {   
            id:3,
            text:"Skills"
        },
        {   
            id:4,
            text:"Projects"
        },
        {   
            id:5,
            text:"Contact"
        },
    ]



  return (
   <>
    
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-[0_2px_8px_rgba(168,85,247,0.25)] fixed top-0 left-0 right-0 z-50 bg-black">
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>

          <h1 className=' text-2xl cursor-pointer'>
             
             <span className='text-purple-300 ml-2 '>Aniket Gupta</span></h1>

        </div>
                    {/* Desktop navbat*/}
            <div>
                  <ul className='hidden md:flex space-x-8'>
                   {
                    navItem.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}
                        >
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{text}</Link>
                        
                        </li>
                    ))
                   }

                   </ul>
                 <div onClick={ () => setmenu(!menu)} className='md:hidden'> {menu? 
                    <IoCloseSharp size={24} />:
                    <MdOutlineMenu size={24} />} </div>
           </div>
      </div>

      {/* moble navbar*/}

      {menu && (

             <div className='bg-black'> 
                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl '>
                   {
                    navItem.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-300  cursor-pointer ' key={id}>
                            <Link
                            onClick={ () => setmenu(!menu)}
                            to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{text}</Link>
                            
                            </li>
                    ))
                   }

                   </ul>
             </div>
      )}

      

    </div>

   
   
   
   
    </>
  )
}

export default Navbar
