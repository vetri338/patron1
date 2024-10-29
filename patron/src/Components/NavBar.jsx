import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className='links'>
        <Link className='link' to={"/"} >Home</Link>
        <Link className='link' to={"/Products"} >Products</Link>
        <Link className='link' to={"/Cart"} >Cart</Link>
        <Link className='link' to={"/About_Us"}>About Us</Link>
      </div>
    </div>
    
  )
}

export default NavBar