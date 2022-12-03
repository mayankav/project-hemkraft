import React from 'react'
import { Outlet } from 'react-router-dom'

const Household = () => {
  return (
    <>
        <h1>Enter household info!</h1> 
        <Outlet/>
    </>
  )
}

export default Household