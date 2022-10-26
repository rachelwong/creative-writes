import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const login = () => {
  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-2xl font-medium">Join today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
        <button className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
          <FcGoogle className="text-2xl"/>
          <span>Sign in with Google</span></button>
      </div>
    </div>
  )
}

export default login