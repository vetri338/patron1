import React, {useState} from 'react'

const About = () => {
    const [sellerId,setSellerId] = useState("");
    const addSeller=()=>{
        alert(sellerId)
    }
  return (
    <div>
        <div className="seller">
            <input type="text" onChange={e=>setSellerId(e.target.value)} />
            <button onClick={addSeller}>I want to be Seller</button>
        </div>
    </div>
  )
}

export default About