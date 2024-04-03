import React, { useContext } from 'react'
import DonutChart from 'react-donut-chart';
import Calendar from 'react-calendar';
import { SlCalender} from "react-icons/sl";
import MyContext from '../../Store/MyContext';





function UserOverview() {

  const{isDark,setIsDark}=useContext(MyContext)

  const  color = isDark ? 'white' :'black'

  return (
    <div className='mx-24 '  >
     
<div className='mt-6 mx-3 flex justify-between' style={{color:color}}>
<div>
<h1 className='font-bold'>Hello,</h1>
<h1 className='font-bold text-2xl'>Nandhukrishnan :)</h1>

</div>


<div className='flex gap-16'>
<div className='flex flex-col items-center mr-8'>
<h6 className='font-bold' style={{color:'#2EE8CD'}}>106</h6>
<p className='text-xs'>Total customers</p>
</div>

<div className='flex flex-col items-center'>
<h6 className='font-bold' style={{color:'#2EE8CD'}}>106</h6>
<p className='text-xs'>Total projects</p>
</div>

<div className='flex flex-col items-center' >
<h6 className='font-bold' style={{color:'#2EE8CD'}}>80</h6>
<p className='text-xs'>Pending</p>
</div>

<div className='flex flex-col items-center'>
<h6 className='font-bold' style={{color:'#2EE8CD'}}>10</h6>
<p className='text-xs'>Dues</p>
</div>

<div className='flex flex-col items-center'>
<h6 className='font-bold' style={{color:'#2EE8CD'}}>5</h6>
<p className='text-xs'>Leads</p>
</div>

<div className='flex flex-col items-center'>
<h6 className='font-bold' style={{color:'#2EE8CD'}}>85%</h6>
<p className='text-xs'>Effeciency</p>
</div>


</div>
</div>
<div className='mx-3 flex mt-2 justify-between' style={{color:color}}>
<p>everyday you may make progress</p>
<p className='font-bold text-2xl mr-16 '>Activities</p>
</div>
<div className='flex mt-3 gap-8 justify-between'>

<div className='w-6/12 h-80  rounded-2xl bg-white shadow-xl p-4 '>
<div className='flex flex-col gap-1'>
<div className='flex justify-between mx-8 my-6'>
<p className='font-bold text-xl'>Current Projects</p>
<p className='font-bold text-xl flex gap-2'>Wed 13 March 2024  <SlCalender /></p>
</div>

<div className='flex justify-between mx-8 '>
<p className='text-sm'>Project Rambo</p>
<p className='text-sm'>In progress</p>
</div>
<hr className='h-2 ' />
<div className='flex justify-between mx-8'>
<p className='text-sm'>Project Rambo</p>
<p className='text-sm'>In progress</p>
</div>
<hr className='h-2 ' />
<div className='flex justify-between mx-8'>
<p className='text-sm'>Project Rambo</p>
<p className='text-sm'>In progress</p>
</div>
<hr className='h-2 ' />
<div className='flex justify-between mx-8'>
<p className='text-sm'>Project Rambo</p>
<p className='text-sm'>In progress</p>
</div>
<hr className='h-2 ' />
<div className='flex justify-between mx-8'>
<p className='text-sm'>Project Rambo</p>
<p className='text-sm'>In progress</p>
</div>
<hr className='h-2 ' />
<div className='flex justify-between mx-8'>
<p className='text-sm'>Project Rambo</p>
<p className='text-sm'>In progress</p>
</div>


</div>


  </div>



<div className='w-6/12 flex gap-8'>


    <div className='w-60 h-80  rounded-3xl bg-white shadow-xl p-4 overflow-hidden flex '>
    <DonutChart
   height={300}
   width={400}
  data={[
    {
      label: 'aromal',
      value: 25,
    },
    {
      label: 'vaishak',
      value: 45,
    
    },
    {
      label: 'akhilesh',
      value: 15,
    
    },
    {
      label: 'siju',
      value: 35,
    
    },
    {
      label: 'rithin',
      value: 75,
    
    },
  ]}
/>
  

  </div>

  <div className='w-60  flex flex-col h-80 rounded-xl items-center gap-2 overflow-scroll'>
    

    <div className='flex gap-2 bg-white p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg> 

<p className='text-xs'>vaishak unni created a project 5 min ago </p>
    </div>
    <div className='flex gap-2 p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg> 

<p className='text-xs'>vaishak unni created a project 5 min ago </p>
    </div>
    <div className='flex gap-2 bg-white p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg> 

<p className='text-xs'>vaishak unni created a project 5 min ago </p>
    </div>
    <div className='flex gap-2 p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg> 

<p className='text-xs'>vaishak unni created a project 5 min ago </p>
    </div>
    <div className='flex gap-2 bg-white p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg> 

<p className='text-xs'>vaishak unni created a project 5 min ago </p>
    </div>
    <div className='flex gap-2 p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg> 

<p className='text-xs'>vaishak unni created a project 5 min ago </p>
    </div>
    <div className='flex gap-2 bg-white p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg> 

<p className='text-xs'>vaishak unni created a project 5 min ago </p>
    </div>

  
  
    

  </div>



</div>

</div>



    </div>
  )
}

export default UserOverview
