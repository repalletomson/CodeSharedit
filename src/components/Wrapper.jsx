import React from 'react'
import Cards from './cards'

function Wrapper() {
  return (
    <div className='  mt-20 bg-dark-1 mb-[10rem]'>
     <div className='grid grid-cols-3 px-36 gap-3'>
          <Cards 
            title="Build & Test"
            paragraph="Get work done quicker by building out entire projects or isolating code to test features and animations"
            buttontext="Try the Editor"
            icon="/icon1.svg"
          />
            <Cards 
            title="Team workspace"
            paragraph="We have a work space where u can share your codes with your team in live. and modify and review"
            buttontext="Engage with your Team"
            icon="/code.png"
          />
               <Cards 
            title="Share Your Work"
            paragraph="Become a part of the most active front-end community in the world by sharing work.  "
            buttontext="Explore Trending "
            icon="/icon2.svg"
          />
     </div>

    </div>
  )
}

export default Wrapper