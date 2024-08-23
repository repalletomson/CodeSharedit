import React from 'react'
import { Link } from 'react-router-dom'

function Header() {




  return (
    <div className='  bg-black h-20 flex items-center border-b-[1px] border-dark-8 '>
      <div className='container'>

        <div className='flex   py-10 ' >
          <Link to='/'>
            <h1 className='px-10 font-bold text-white text-2xl pr-11'>
                CodeSharedit
            </h1>
          </Link>
        </div> 
            <div id="2" className='flex items-center px-9 gap-6'>
            <button className='text-center text-white p-2 text-bold w-[5rem]  rounded ' >Editor</button>
            <button className='text-center text-white p-2 text-bold w-[5rem]  rounded ' >collabmode</button>
                <button className='bg-dark-2 text-center p-2 text-bold w-[5rem]  rounded ' >Sign Up</button>
                <button className='bg-dark-3 text-dark-4 p-2 text-center rounded w-[5rem] ' >Login</button>
            </div>
      </div>





    </div>
  )
}

export default Header