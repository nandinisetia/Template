import React from 'react'
import pic from '../assets/home.jpg'

export default function Home() {
  return (
    <div class="flex h-screen">
  <div class="flex flex-row justify-center items-center text-center w-full">
    <div class="w-full sm:w-1/2 pb-8 text-center">
      <h1 class="font-semibold text-2xl sm:text-4xl">Financial Literacy</h1>
      <p>Lorem Ipsum</p>
    </div>
    <img
      class="hidden md:block w-1/2 h-100 md:h-200"
      alt="mypic"
      src={pic}
    />
  </div>
</div>

  )
}
