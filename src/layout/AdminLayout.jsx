import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <main className="grid grid-col-[17%, 1fr]">
        <aside>
            {/* <h1>Overview</h1>
            <h1>SetupZone</h1>
            <h1>Services</h1> */}
        </aside>
        <div><Outlet /></div>
    </main>
  )
}

export default AdminLayout