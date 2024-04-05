import React, { useContext } from 'react'
import bossLogo from '../../Asset/PSD - BOSS Logo-Recovered.svg'
import bossdarklogo from '../../Asset/BOSS Logo-4dark.png'
import { MdNotificationsActive, MdDarkMode, MdOutlineDarkMode} from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";


import MyContext from '../../Store/MyContext';
import { color } from 'framer-motion';

function UserNavbar() {

  const{isDark,setIsDark}=useContext(MyContext)

  const  color = isDark ? 'white' :'black'
  const bodyBackgroundColor = isDark ? 'rgb(21, 32, 43)' : '#e5faf7';

  const handleDark = () => {
    setIsDark(a=>!a);
  };

 console.log(isDark); 


  return (
    <>
  <div className=' sticky top-0 'style={{ backgroundColor: bodyBackgroundColor, transition:'background-color 0.7s ease', paddingTop:'2rem'}}>



  <div className='flex justify-between items-center' style={{color:color}}>
      <img src={isDark ? bossdarklogo : bossLogo } style={{transition:'background-color 0.7s ease'}} alt="" className='w-44' />
      <div className='flex flex-row gap-4'>
      <MdNotificationsActive className='text-xl' />
     {
      isDark ?  <MdOutlineDarkMode onClick={handleDark} className='text-xl'  /> :  <MdDarkMode onClick={handleDark} className='text-xl'  />
     }
      <IoMdAddCircle className='text-xl' />
      <FaUserAlt className='text-xl'/>
      <IoLogOutSharp className='text-xl'/>





      </div>
    </div>
      <div className='bg-white hidden lg:flex gap-20 justify-center rounded-3xl border border-solid border-black mt-2 cursor-pointer'>
        <p className='font-bold my-1 text-s'>DASH BOARD</p>
        <p className='font-bold my-1 text-s'>MARKETING</p>
        <p className='font-bold my-1 text-s'>OPERATIONS</p>
        <p className='font-bold my-1 text-s'>DEPARTMENT</p>
        <p className='font-bold my-1 text-s'>HRD</p>
        <p className='font-bold my-1 text-s'>SETTINGS</p>

      </div>
  </div>
    </>
  )
}

export default UserNavbar
