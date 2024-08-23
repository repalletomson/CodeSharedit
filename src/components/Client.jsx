import React from 'react'
import Avatar from 'react-avatar'
function Client({user}) {
  return (
    <div className='client'>
       <Avatar name={user} size={50} round='14px' />

        <h3 className='username'>{user}</h3>
    </div>
  )
}

export default Client