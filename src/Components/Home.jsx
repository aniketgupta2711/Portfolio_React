import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { ReactTyped} from "react-typed";
// import pic from "../../public/ani123.jpeg";
{/* <img src="/ani123.jpeg" alt="profile" /> */}



function Home() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-15  '>
    <div className='flex flex-col md:flex-row'>

    <div className='md:w-1/2 mt-15 md:mt-25 order-2 md:order-1'>
    <span className='text-purple-600'>Hey, <span className='text-white'>I'm a </span></span> <br />
    {/* <h1 className='text-purple-700 font-bold text-2xl md:text-8xl '> <span className='text-white'>Web</span> Developer</h1> */}
{/* 
    <ReactTyped
         
          strings={["Web Developer ", "Software Developer"]}
          typeSpeed={40}
        /> */}
          
          <ReactTyped className='text-purple-700 font-bold text-3xl md:text-5xl  '
  strings={[
    '<span style="color:#a855f7">Web Developer</span>',
    '<span style="color:#a855f7">Software Developer</span>',

  ]}
  typeSpeed={50}
  backSpeed={40}
  loop
/>

    <br />
    <p className='my-5'>I build responsive and dynamic web applications <br />
      with modern technologies.
    </p>
    <br />
    {/* social media icons */} 
    <div className='flex flex-col items-center justify-between md:items-start space-y-6 my-5 md:space-y-0'>
      <h1 className='font-bold'>Available on </h1>
      <ul className='flex space-x-10 my-4 ' >

        <li> <a href="https://github.com/aniketgupta2711">
        <VscGithub className='text-3xl cursor-pointer' /> </a></li> 
       <li> <a href="https://linkedin.com/in/aniket027">
        <CiLinkedin className='text-3xl cursor-pointer' /> </a></li>
       <li> <a href="">
        <FaSquareTwitter className='text-3xl cursor-pointer' /></a></li>
        <li><a href="https://www.instagram.com/aniket_gupta_3?igsh=MTE5N2d2dno5cDh6Mg==">
          <BsInstagram className='text-3xl cursor-pointer' /></a></li>
      </ul>


    </div>

    </div>

    <span className='md:w-1/2 md:ml-65 md:mt-20 mt-8 order-1' >
    <img  src="/ani123.jpeg"
  alt="Profile" className='rounded-full md:w-102.5 md:h-102.5 border-2 border-purple-600 ' alt="" />
    </span>
    </div>
   </div>
   
   
   </>
  )
}

export default Home
