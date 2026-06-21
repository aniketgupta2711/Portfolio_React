import React from 'react'
import { VscGithub } from "react-icons/vsc";
import {
    
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
}from "react-icons/fa6";
function Footer() {
  return (
   <>
   <hr/>
   <footer className='py-12'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex flex-col items-center justify-center '>
            
            
            <div className='flex space-x-4'>
                
           <a href="https://github.com/aniketgupta2711"> <VscGithub size={24} /></a>
            <a href="">  <FaTwitter size={24} /></a>
            <a href="https://linkedin.com/in/aniket027">  <FaLinkedinIn size={24} /></a>
             <a href="https://www.instagram.com/aniket_gupta_3?igsh=MTE5N2d2dno5cDh6Mg=="> <FaInstagram size={24} /></a>
              
            </div>
          
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p className='text-sm'>&copy; 2026 Aniket Gupta. All rights reserved.</p>
                <p className='text-sm'>Design & Developed with ❤️ by Aniket Gupta.</p>
            </div>
        </div>

    </div>
   </footer>
   
   </>
  )
}

export default Footer
