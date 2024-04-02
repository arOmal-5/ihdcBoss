// import React from 'react'
// import UserNavbar from '../../Component/UserDashboard/UserNavbar'
// import { Outlet } from 'react-router-dom'

// function UserLayouts() {
//   return (
//     <>
//       <UserNavbar/>

//       <Outlet/>
//     </>
//   )
// }

// export default UserLayouts
import React from 'react'
import UserNavbar from '../../Component/UserDashboard/UserNavbar'
import { Outlet } from 'react-router-dom'

function UserLayouts() {
  return (
    <>
    <div style={{backgroundColor:'#E5FAF7', width:'100%', height:'36rem'}}>
    <UserNavbar/>
      {/* Render nested routes */}
      <Outlet/>
    </div>
   
    </>
  )
}

export default UserLayouts
