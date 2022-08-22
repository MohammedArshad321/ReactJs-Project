import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <a href="http://">Home</a>
        <a href="http://">About Us</a>
        <a href="http://">Shop</a>
        <a href="http://">Contact Us</a>
        <input type="search" name="" id="search-bar" placeholder="Search for Products..."/>
        <button type="search" id="search-btn"><i className="fa fa-search"></i></button>
        <button type="shop" id="shop-btn"><i className="fa fa-shopping-bag"></i></button>
    </div>
  )
}
