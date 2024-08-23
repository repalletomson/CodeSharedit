import React from 'react'

function cards({title,paragraph,buttontext,icon}) {
  return (
    <div>
        <div className='bg-dark-3 p-4 w-[350px] h-[255px] rounded-lg '>
             <div class='bg-black rounded flex  items-center w-[65px] h-[65px] mb-[1rem] p-2 mt-[-40px]'>
                <img  className ='w-12 h-auto  'src={icon} alt="icon1"></img>
        </div>
        <h1 className='text-dark-4 pb-4 font-bold text-xl '>
             {title}
        </h1>
        <p className='text-left text-dark-4'>
           {paragraph}
        </p>
        <button className='bg-dark-6  text-dark-4 p-2 text-center rounded w-[60%] mt-8' >{buttontext}            
        </button>
          </div> 
    </div>
  )
}


export default cards 