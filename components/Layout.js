import Nav from './Nav'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{ children }</main>
    </div>
  )
}

export default Layout