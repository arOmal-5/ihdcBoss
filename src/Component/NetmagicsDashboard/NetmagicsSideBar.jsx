import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import '../../Style/Netmagics/NetmagicsSidebar.css'

function NetmagicsSideBar() {
  const [isOpen,setIsOpen]=useState(true)
  const Sidebar_animation={
    open:{
      width:'16rem',
      transition:{
        damping:40,
      }
    },
    closed:{
      width:"4rem",
      transition:{
        damping:40,
      }
    }

  }

  return (

   <div>
    <motion.div variants={Sidebar_animation} animate={isOpen?"open":"closed"} className='bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden
    md:relative  fixed'>

      {/* logo */}

      <div className='flex items-center gap-2.5 font-medium border-b  border-slate-300 py-3 mx-3 '>
        <img src="https://cdn.dribbble.com/userupload/11764589/file/original-b9161ad96122df5cd1fbe347c39cf938.png?resize=1200x900" alt=""  width={45}/>
        <span className='text-xl whitespace-pre'>Kindini</span>
      </div>

      {/* menus */}

      <div className='flex flex-col h-full'>
        {/* first */}
        <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden'>
          <li>
            < IoIosArrowBack size={23}/>
            <NavLink className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium" to='/dashboard/sample'>All apps</NavLink>
          </li>
        </ul>
        {/* second */}
        <div className="">

        </div>
      </div>
      
      {/* controll button */}
<motion.div 
animate={isOpen?{
X:0,
y:0,
rotate:0
}:{
  x:-10,
  y:-200,
  rotate:180
}}
transition={{
  duration:0,
}}
className='absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden' onClick={()=>setIsOpen(!isOpen)}>
<IoIosArrowBack size={25} />
</motion.div>
    </motion.div>
   </div>
  );
}

export default NetmagicsSideBar;