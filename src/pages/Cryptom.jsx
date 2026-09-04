import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Howitwork from '../components/Howitwork'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Subscribe from '../components/Subscribe'
import Scrollbtn from '../components/ui/Scrollbtn'

export default function Cryptom() {
  return (
    <div  className='relative overflow-x-hidden bg-[#12151e]'>
      <Navbar />
      <Hero/>

      <Scrollbtn/>
<section id="features" >
  <Features />
</section>
<section id="how-it-works" >
  <Howitwork />
</section>
<section id="pricing" >
  <Pricing />
</section>

<section id="faq">
  <FAQ />
</section>
      <Subscribe/>
      <Footer/>
    </div>
  )
}


