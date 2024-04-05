import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserLayouts from '../../Layouts/UserLayouts/UserLayouts'
import UserOverview from '../../Page/User/UserOverview'
import Sample from '../../Page/Netmagics/Sample'
import MARKRTINGNAV from '../../Page/User/MARKRTINGNAV'
import ADDCONTACT from '../../Page/User/ADDCONTACT'


function UserRoutes() {
  return (
    <>
     <Routes>
      <Route path='dash' element={<UserLayouts/>}>
        {/* <Route index element={<UserOverview/>}/> */}
        {/* <Route index element={<MARKRTINGNAV/>}/> */}
        <Route index element={<ADDCONTACT/>}/>
        
        <Route path="sample" element={<Sample/>}/>
        </Route>
    </Routes>
      
    </>
  )
}

export default UserRoutes
