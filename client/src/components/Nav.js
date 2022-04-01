import React from "react"
import { NavLink } from 'react-router-dom'


const Nav = () => {

    return (
        <div>
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="music-collection">Music Collection</NavLink></li>
                <li> <NavLink to="add-new">Add New Music</NavLink></li>
            </ul>
        </div>
    )

}

export default Nav