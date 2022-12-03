import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {bathroomsList} from './dummyData'
const Bathroom = () => {
  const [bathroomList, setBathroomList] = useState(bathroomsList);
  return (
    <>
      <Outlet context={
        {
          bathroomList: bathroomList, 
          setBathroomList: setBathroomList
        }
          } />
    </>
  )
}

export default Bathroom