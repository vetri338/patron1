import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const Loginform = async() =>{
        let payload = {
            email,password
        }
        await axios.post("http://localhost:5000/auth/login",payload)
        .then(res=>alert(res.data.msg))
        .catch(err=>console.log(err))
        // console.log(payload)
    }
  return (
    <div className='loginpage'>
            <div className="email">
                <label htmlFor="">Email : </label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="password">
                <label htmlFor="">Password : </label>
                <input type="text" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="btns"><button onClick={e=>Loginform()}>Login</button></div>
    </div>
  )
}

export default Login