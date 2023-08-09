import React from 'react'
import pic from '../assets/home.jpg'

export default function Home() {
  return (
    <div class="flex flex-row justify-center items-center text-center w-full  pb-12">
      <div class="w-full sm:w-1/2 pb-8 text-center">
        <h1 class="font-semibold text-l sm:text-2xl">Financial Literacy</h1>
         <p>Lorem Ipsum</p>
      </div>
    <img
      className="w-1/2 h-200"
      alt="mypic"
      src={pic}
    />
</div>

  )
}
