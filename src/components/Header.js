import React from 'react'
import { NavLink} from 'react-router-dom'
import '../App.css'

function Header() {
  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <NavLink className='navItem navItem' to="/">Home</NavLink>
            <NavLink className='navItem navItem' to="/favored">favored</NavLink>
            {/* <NavLink className='navItem' to="/ProductComponent">ProductComponent</NavLink> */}
        </div>
    </div>
  )
}

export default Header