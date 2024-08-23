import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function Hero() {
  return (
        <div className='grid grid-cols-2 text-center mt-4 text- pl-11 ' >
          
           <div className='ml-[5rem] flex  flex-col items-baseline   p-4' >
            <h1 className='text-white  p-4 font-extrabold text-left flex-shrink-0 sm:text-[2.5rem] md'>
           The best place to build,<br />
           test, and discover front-<br />
           end code.
              </h1>
            <p className='text-left text-dark-4'>
              CodePen is a social development environment for front-end designers<br />
              and developers.Build and deploy a website, show off your work, build<br />
              test cases to learn and debug, and find inspiration.
            </p>
            <button className='bg-dark-2 p-2 text-dark-1 text-bold m-5 text-center font-semibold rounded w-[10rem] h-[2.5rem] ' ><Link to='/CodeEditor'>Explore for Free</Link></button>
           </div>
        
           <div className='pt-[1rem] flex items-end '>
             <img className='h-full w-[35rem] ' src='/heroimg1.png' alt='heroimg' />
           </div>

          
          <div className='background'  >
           </div>
        </div>
  )
}

export default Hero