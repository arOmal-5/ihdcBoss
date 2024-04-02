import React from 'react'
import SideBar from '../../Component/NetmagicsDashboard/NetmagicsSideBar'
import { Outlet } from 'react-router-dom'

function NetmagicsLayouts() {
  return (
    <>
    <div className='flex gap-5'>
    <SideBar/>
    <main className='max-w-5xl flex-1 mx-auto py-4'>
    <Outlet/>
    </main>
    
    </div>
      
    </>
   
  )
}

export default NetmagicsLayouts
