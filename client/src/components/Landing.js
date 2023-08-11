import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Article from './Articles'
import Offer from './Offer'
import Footer from './Footer'
export default function Landing() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Article/>
      <Offer/>
      <Footer/>
    </div>
  )
}
