import { useState } from 'react'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Cryptom from './pages/Cryptom.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/Howitwork.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
export default function App() {


  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound/>} />
      <Route path='/' element={<Cryptom/>} />
      
    </Routes>
    </BrowserRouter>

    </div>
  )
}

