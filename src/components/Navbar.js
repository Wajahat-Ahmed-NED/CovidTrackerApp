import React from 'react'
import { Router } from 'react-router'
import { NavLink } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark  bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h2> Covid Tracker</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               
                                <NavLink
              className={(e) =>
                e.isActive ? "active1 " : "disable mx-3"
              }
              to="/"
            >
              Home
            </NavLink>  
                             
                            </li>
                            <li className="nav-item">
                           
                                <NavLink
              className={(e) =>
                e.isActive ? "active1" : "disable mx-3"
              }
              to="/display"
            >
              Display Data
            </NavLink>
                                  
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
