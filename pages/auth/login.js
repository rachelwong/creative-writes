import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import {useEffect } from 'react'
const Login = () => {

  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  // Sign in with Google Auth
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      route.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (user) {
      route.push('/')
    } else {
      console.error('Login')
    }
  }, [])

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-2xl font-medium">Join today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
        <button onClick={GoogleLogin }  className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
          <FcGoogle className="text-2xl"/>
          <span>Sign in with Google</span></button>
      </div>
    </div>
  )
}

export default Login