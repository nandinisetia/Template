import React from 'react'
import SideBar from './SideBar'
import CourseCard from './CourseCard'

export default function Course() {
  return (
    <div>
      <div className='flex'>
      <SideBar/>
      <div className="h-screen flex-1 p-7">
        <CourseCard/>
      </div>
    </div>

    </div>
  )
}
