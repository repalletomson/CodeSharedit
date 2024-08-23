import React from 'react'
import Hero from './Hero'
import Wrapper  from './Wrapper';
import Accordion from './Accordion';
import CollabCard from './CollabCard';
import Header from './Header';
import Footer from './Footer';
function HomePage() {
  return (

     <div className='w-full h-full bg-dark-1'>
      <Header />   
      <Hero />
      <Wrapper />
      <Accordion />
      <CollabCard />
      <Footer />
    </div>
    
  )
}

export default HomePage