import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Navbar from './navbar'
import Home from './home.jsx'
import  Areas  from './pages/areas.jsx'
import Services from './pages/services.jsx'
import Members from './pages/members.jsx'
import Details from './pages/details.jsx'
import Confirmation from './pages/confirmation.jsx'
import AboutUs from './pages/about-us.jsx'
import ScrollToTop from './ScrollToTop.jsx'


function App() {
  

  return (
   <>
   <Navbar />
   <ScrollToTop />
   <nav>
    <link to="/"></link> 
    <link to="/areas"></link>
    <link to="/aboutus"></link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/areas" element={<Areas />} />
      <Route path="/services" element={<Services />} />
      <Route path="/members" element={<Members />} />
      <Route path="/details" element={<Details />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/aboutus" element={<AboutUs />} />
      
    </Routes>
   
   </>
   )
}

export default App
