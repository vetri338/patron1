import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [contact,setContact] = useState("")

    const Signupform = async() =>{
        let payload = {
            name,email,password,contact,usertype:"buyer"
        }
        await axios.post("http://localhost:5000/auth/signup",payload)
        .then(res=>alert(res.data.msg))
        .catch(err=>console.log(err))
        // console.log(payload)
    }
  return (
    <div className='Signuppage'>
        <div className="inner">
            <div className="name">
                <label htmlFor="">Name : </label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="email">
                <label htmlFor="">Email : </label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="password">
                <label htmlFor="">Password : </label>
                <input type="text" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="contact">
                <label htmlFor="">Contact : </label>
                <input type="text" value={contact} onChange={e=>setContact(e.target.value)}/>
            </div>
            <div className="btns"><button onClick={e=> Signupform()}>Signup</button></div>
        </div>
    </div>
  )
}

export default Signup