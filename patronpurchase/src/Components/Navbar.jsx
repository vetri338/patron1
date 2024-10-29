import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/cart"}>Cart</Link>

        </div>
    )
}

export default Navbar