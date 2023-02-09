import React from 'react'
import Avatar from 'react-avatar';

const Client = ({username}) => {
    //console.log(username);
  return (
    <div className='client'>
        <Avatar name={username} size={50} round="14px" />
        <div className='userName'>{username}</div>
    </div>
  )
}

export default Client