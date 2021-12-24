import React from 'react'


import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="left_navbar">
                <NavLink className="nav-link" to="/"><h2>React Google sheet</h2></NavLink>
            </div>

            <div className="navbar_links">
                <ul className="navbar_links_items">    
                    <li><NavLink className="nav-link" to="/">Dashboard</NavLink></li>
                    <li><NavLink className="nav-link" to="/signup">Visual Form</NavLink></li>
                </ul>
            </div>
             

        </div>
    )
}

export default Navbar
