import React from 'react'
import "../CSS/Navbar.css";
import {FiLogOut} from "react-icons/fi"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav >
      <div className='nav-sub'>
        <ul>
            <li><Link className='link' to="/Home">Home</Link></li>
            <li><Link className='link' to="/Products">Products</Link></li>
            <li><Link className='link' to="/Users">Users</Link></li>
            <li><Link className='link' to="/Contact">Contact</Link></li>
            <li><Link className='link' to="/"><FiLogOut/></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
