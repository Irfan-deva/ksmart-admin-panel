import React from 'react'
import './FeaturedInfo.css'
function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Total Products</span>
        <div className="totalContainer">
          <span className="total">255</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Categories</span>
        <div className="totalContainer">
          <span className="total">5</span>
        </div>
      </div> <div className="featuredItem">
        <span className="featuredTitle">Total Orders</span>
        <div className="totalContainer">
          <span className="total">100</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedInfo