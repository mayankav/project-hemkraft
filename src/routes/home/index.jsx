import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
        <h1>Welcome to Hemkraft!</h1>
        <Link to="/household">Enter my household info</Link>
    </div>
  )
}

export default Home;