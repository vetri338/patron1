import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import UserAccount from './UserAccount'
import Cart from './Cart'
import Payment from './Payment'
import Success from './Success'
import Orders from './Orders'
import Seller from './Seller'
import BeaSeller from './BeaSeller'
import About from './About'
import Login from './Login'
import Signup from './Signup'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/MyAccount' element={<UserAccount/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Payment' element={<Payment/>} />
            <Route path='/OrderSuccessful' element={<Success/>} />
           <Route path='/Orders' element={<Orders/>} />
           <Route path='/Seller' element={<Seller/>} />
           <Route path='/Be_a_Seller' element={<BeaSeller/>}/>
           <Route path='/About_Us' element={<About/>} />
           <Route path='/Signup' element={<Signup/>} />
           <Route path='/Login' element={<Login/>} />

        </Routes>
    </div>
  )
}

export default MainRoutes