import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div id="main">

        <nav id="nav">
            <p>Home</p>
            <div>
            <label htmlFor="">Search</label>
            <input type="text" />
            </div>
            <p>service</p>
            <p>about us</p>
        </nav>
    </div>
  )
}

export default Navbar