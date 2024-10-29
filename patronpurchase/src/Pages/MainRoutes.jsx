import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products"
import Product from "./Product"
import Profile from "./Profile"
import Cart from "./Cart"
import Myorder from "./Myorder";
import Success from "./Success"

const MainRoutes = ()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/orders" element={<Myorder/>} />
                <Route path="/success" element={<Success/>} />
            </Routes>
        </div>
    )
}

export default MainRoutes;