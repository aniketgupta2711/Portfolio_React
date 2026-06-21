import React, { useRef } from 'react'
import { CgMail } from "react-icons/cg";
import { MdOutlineCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser"




const Contact = ({setNotification}) => {
  const formData = useRef('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_0hwe71c", "template_yav873o", formData.current, "XRPtHl14eq20Sz9-Q" ).then(()=>{
      setNotification("Message sent successfully!");
      setTimeout(()=> setNotification(''),3000);
      formData.current.reset();
          },
        (error)=>{
          setNotification("Failed! to sent message");
                setTimeout(()=> setNotification(''),3000);

          console.log(error.text);
        }
        
        )
  }

  return (
  

    <div name="Contact"
     className="mx-4 md:mx-5 my-5 border border-gray-800 rounded-xl bg-gray-900 p-6 flex flex-col md:flex-row justify-between gap-10" >
      
      {/* left page*/}
      <div className='w-full md:w-1/2'>
        <h1 className='flex text-3xl'><LuSend className="text-purple-600 mr-3 " />Contact Me</h1><br />
        <p className='text-gray-400'>Open to new opportunitiles and collaboratins </p>
        <span className='text-gray-400 mt-1'>Lest's connect!</span><br />
        <br />

        <p className='flex gap-4 mt-3 text-gray-300'><CgMail size={25} className=' mr2' /> aniketgutpa3071@gamil.com</p>

        <p className='flex gap-4 mt-3 text-gray-300'><MdOutlineCall
             size={25} className=' mr2' /> 9939323071</p>
        
         <p className='flex gap-4 mt-3 text-gray-300'><IoLocationOutline
             size={25} className=' mr-2' /> India</p>

      </div>


      {/* right page*/}
      
      <div className="w-full md:w-1/2">
        <div className="" >
          
         <form autoComplete='off' ref={formData} onSubmit={sendEmail}>

            <div className="flex flex-col md:flex-row gap-2">
                        <input
              type="text"
              name="user_name"
  id="name"
  placeholder="Your Name" required
  className="w-full bg-gray-800 border rounded-lg border-gray-700 px-3 py-2"/>

            <input
              type="email"
              name ="user_email"
  id="email"
  placeholder="Your Email" required
  className="w-full bg-gray-800 border rounded-lg border-gray-700 px-3 py-2"/>
           </div>


            <div className="mt-3">
              <input
                   type="text" name="user_subject" id="subject"  placeholder="Subject" required
                     className="w-full bg-gray-800 border rounded-lg border-gray-700 px-3 py-2"/>
                       </div>


            <div className="mt-3">
              <textarea
              name="user_message"
                id="msg"
                   placeholder="Your Message" required
                      className="w-full bg-gray-800 border rounded-lg border-gray-700 px-3 py-2"/>
                         </div>
            
            
            <button
            type="submit"
            className=" rounded-lg flex  bg-purple-700 px-2 py-3 "><LuSend className=" mt-1 mr-2" />Send Message</button>
             

          </form>
        </div>
      </div>
     
    </div>
  )
}

export default Contact