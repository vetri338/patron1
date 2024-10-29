import React from 'react'
import "./Item.css"

const Item = (props) => {
    const item=props.data
  return (
    <div className='Item'>
        <div className="Pimg">
            <img src={item.img} alt="" />
        </div>
        <div className="title">
            <h1>{item.title}</h1>
        </div>
        <div className="desc">
            <p>{item.desc}</p>
        </div>
        <div className="btns">
            <button>Buy product</button>
            <button>Add to cart</button>
            <button>Copy link</button>
        </div>
    </div>
  )
}

export default Item