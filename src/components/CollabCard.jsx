import React from 'react'
import { Link } from 'react-router-dom'
function CollabCard() {
  return (
    <div className='mt-10 main'>
        <div className='teamcard bg-dark-7 rounded' >
            <div className='innerdiv flex flex-col items-center'>
            <h1 className='text-2xl text-center font-bold text-dark-4 p-4' >
                     Bring the Whole Team
            </h1>
            <p className='text-dark-4 text-center leading-tight pb-10 font-semibold'>
                  Each team and team member gets all the features of a PRO membership. That<br />
                  means the Team can do things like upload Assets, use features like <span className='font-bold'>Collab Mode</span>,<br />
                  Professor Mode, Presentation Mode, and Live View, and apply custom CSS to <br /> Posts, Profiles, and Embeds.
            </p>
            <div className='flex items-center h-20'>
              <button className='bg-dark-2 w-[10rem] h-[2.5rem]  text-center text-dark-4 rounded'>
                 <Link to="/CodeEditor">Collab Mode
                 </Link>
              </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CollabCard