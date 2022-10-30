import React from 'react'

const Message = ({ children, avatar, description, username }) => {
  return (
    <div className="bg-white p-8 border-b-2 rounded-lg">
      <div className="flex items-center gap-2">
        <img src={avatar} alt={username} className="w-10 rounded-full" />
        <h2>{ username }</h2>
      </div>
      <div className="py-4">
        <p>{ description }</p>
      </div>
      { children }
    </div>
  )
}

export default Message