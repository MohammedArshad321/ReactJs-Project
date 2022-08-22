import React from 'react'
export default function ProductCard(props) {
  return (
    
    <div className="product-card">
        <img className="img" src={props.img} alt="" srcset="" />
        <h3 className="product-title">{props.title}</h3>
        <span className="product-price">{props.price}</span>
        <input type="button" value="Buy Now" id="btn" />   
    </div>
  )
}
