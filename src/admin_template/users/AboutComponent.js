import React from 'react'
import { NavLink as Link, Outlet } from 'react-router-dom'

export default function AboutComponent() {
    return (
        <>
            <Link className='m-1' to="/users/about/education">Education</Link>
            <Link className='m-1' to="/users/about/job">Job</Link>
            <div>
                About Component
            </div>
            <div className='m-2'>
                <Outlet />
            </div>
        </>
    )
}
