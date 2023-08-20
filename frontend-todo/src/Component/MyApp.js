import React from 'react'
import CusNavbar from './CusNavbar'
import { Outlet } from 'react-router-dom'

function MyApp() {
    return (
        <> 
            <CusNavbar />
            <Outlet />
        

        </>
    )
}

export default MyApp