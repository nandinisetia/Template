import React from 'react'
import SideBar from './SideBar'
import Charts from './Charts'

export default function Dashboard() {
  return (
    <div className='flex'>
      <SideBar/>
      <div className="h-screen flex-1 p-7">
        <Charts/>
      </div>
    </div>
  )
}
