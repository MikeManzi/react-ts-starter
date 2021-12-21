import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './styles.scss'

interface Props {

}

const Navbar = (props: Props) => {
    const path = useLocation().pathname
    return (
        <div className='header'>
            <h1>React Template</h1>
            <nav>
                <NavLink className={"nav-link " + (path === "/" ? "active" : "")
                } to="/">
                    Home
                </NavLink>
                <NavLink className={"nav-link " + (path === "/about" ? "active" : "")
                } to="/about">
                    About
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar
