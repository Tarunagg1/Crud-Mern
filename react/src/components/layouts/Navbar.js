import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">React Crud</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                    
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/about">About</NavLink>
                            </li>
                          
                        </ul>

                    </div>
                    <NavLink ecact to="/user/add"><button className="btn btn-outline-light">Add user</button> </NavLink> 
                </div>
            </nav>
        </div>
    )
}
