import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NetmagicsLayouts from '../../Layouts/NetmagicsLayouts/NetmagicsLayouts'
import NetmagicsDashboard from '../../Page/Netmagics/NetmagicsDashboard'
import Sample from '../../Page/Netmagics/Sample'

function NetmagicsRoutes() {
  return (
    <>
    <Routes>
      <Route path='dashboard' element={<NetmagicsLayouts/>}>
        <Route index element={<NetmagicsDashboard/>}/>
        <Route path="sample" element={<Sample/>}/>
        </Route>
    </Routes>
      
    </>
  )
}


export default NetmagicsRoutes
