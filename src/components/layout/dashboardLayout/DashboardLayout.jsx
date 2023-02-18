import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../dashboardComponents/sidebar/Sidebar'
import { DashboardContainer } from './DashboardLayoutStyle'
const DashboardLayout = () => {
  return (
    <DashboardContainer>
        <Sidebar />
        
        <div className='dashboard-screen'>
            <Outlet />
        </div>
    </DashboardContainer>
  )
}

export default DashboardLayout