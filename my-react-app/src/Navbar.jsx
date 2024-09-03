import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
            <a>Coding thinker</a>
            <div id='child'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

            </div>
            <a>Login</a>
        </nav>
    
    </div>
  )
}

export default Navbar