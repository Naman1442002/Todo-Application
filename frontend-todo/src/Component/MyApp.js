import React from 'react'
import Cus_Navbar from './Cus_Navbar'
import { Outlet } from 'react-router-dom'

function MyApp() {
    return (
        <> 
            <Cus_Navbar />
            <Outlet />
        

        </>
    )
}

export default MyApp