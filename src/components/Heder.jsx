// import React from 'react'
import { NavLink } from "react-router-dom"

const Heder = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <a className='navbar-brand ' href='https://github.com/Manohar-code3'> EMPLOYEES DETAILS</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/employees'>employee</NavLink>
              
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/departments'>department</NavLink>
              
                    </li>
                  </ul>
                </div>
              </nav>
        </header>
    </div>
  )
}
export default Heder