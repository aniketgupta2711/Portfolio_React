import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { CgUnavailable } from "react-icons/cg";





function About() {
  return (

    <div name="About">

   <div className="mx-4 md:mx-10 border border-gray-800 rounded-xl bg-gray-900 p-6">
  {/* Content */}


     <h1 className='text-3xl font-bold mb-5 text-purple-500'>About</h1> 
     <p className='text-gray-300'>Hi, I'm Aniket Gupta, a BCA student and aspiring Software Engineer passionate about building modern and user-friendly applications. I have experience with React, JavaScript, Java, MySQL, Tailwind CSS, Git, and GitHub, and I enjoy solving problems through code. I am constantly learning new technologies and working on projects to strengthen my development skills and move closer to my goal of becoming a successful Software Engineer.</p>
     <br /> 

  {/* education */}
    <h2 className="text-3xl font-semibold text-white mb-5">
       Education 
    </h2>
    <h3 className="text-xl  text-gray-100 ">
    Bachelor of Computer Applications (BCA)
  </h3>
    <p className="text-gray-300">
      DPG Degree College, Gurugram (Haryana)
    </p>
    <p className="text-gray-400 mb-5">2023 - 2026</p>

    
    {/* certification */}

  {/* <h2 className="text-3xl font-semibold text-white mb-5">
       Education 
    </h2>
    <h3 className="text-xl font-bold text-white ">
    Bachelor of Computer Applications (BCA)
  </h3>
    <p className="text-gray-300">
      DPG Degree College, Gurugram (Haryana)
    </p> */}

  <p className=' mb-3 flex '><FaRegUser size={20} className='mr-3 text-gray-300'/>
 Name :    <span className='text-gray-400 font-normal ml-2' >            Aniket Gupta</span></p>

  <p  className='mb-3 flex '><IoLocationOutline size={20} className='mr-3 text-gray-300' />Location : <span className='text-gray-400 font-normal ml-2'>Delhi, India</span></p>

  <p className='mb-3 flex items-start'>
  <CgMail size={20} className="mr-3 text-gray-300 shrink-0 mt-0.5" />
  <span>
    Email :
    <span className='text-gray-400 font-normal ml-2 break-all'>
      aniketgupta3071@gmail.com
    </span>
  </span>
</p>

<p className='flex items-start'>
  <CgUnavailable size={20} className="mr-3 text-gray-300 shrink-0 mt-0.5" />
  <span>
    Availability :
    <span className='text-green-500 font-normal ml-2'>
      Available for work
    </span>
  </span>
</p>




     <h1></h1>
    </div>


    </div>
  )
}

export default About
