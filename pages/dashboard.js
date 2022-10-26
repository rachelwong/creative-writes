import React from 'react'
import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Dashboard = () => {

  const route = useRouter()
  const [user, loading] = useAuthState(auth);

  const getData = async () => {
    if (loading) return;
    // if user is not logged in, redirect
    if (!user) return route.push('/auth/login')
  }

  useEffect(() => {
    getData()
  }, [user, loading])

  return (
    <div>
      <h1>Your posts</h1>
      <div>posts</div>
      <button onClick={ () => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Dashboard