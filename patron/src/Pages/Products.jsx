import React from 'react'
import Item from '../Components/Item'
import "./Products.css"

const Products = () => {
  const data = {
    img:"data:image/jpeg;base64,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",
    title:"Adidas Shoes",
    desc : "Dummy shoes dhan"
}
  return (
    <div>
      <div className="products">
        <Item data={data} />
        <Item data={data} />
        <Item data={data} />
        <Item data={data} />
        <Item data={data} />
        <Item data={data} />
        <Item data={data} />
      </div>
    </div>
  )
}

export default Products