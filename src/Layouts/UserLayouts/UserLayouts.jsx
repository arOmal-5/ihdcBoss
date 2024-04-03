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
    <div>
    <UserNavbar/>
      {/* Render nested routes */}
      <Outlet/>
    </div>
   
    </>
  )
}

export default UserLayouts
