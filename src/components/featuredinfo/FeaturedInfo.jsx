import React from 'react'
import './FeaturedInfo.css'
import { Widgets, Category, ShoppingCart, People } from '@mui/icons-material'


function FeaturedInfo() {
  return (
    <div className='featured'>

      <div className="featuredItem">
        <div className="featuredIconContainer">
          <Widgets className='featuredIcon' />
        </div>
        <div className="featuredInfo">
          <span className="featuredTitle">Total Products</span>
          <div className="totalContainer">
            <span className="total">255</span>
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredIconContainer">
          <Category className='featuredIcon' />
        </div>
        <div className="featuredInfo">
          <span className="featuredTitle">Total Categories</span>
          <div className="totalContainer">
            <span className="total">5</span>
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredIconContainer">
          <ShoppingCart className='featuredIcon' />
        </div>
        <div className="featuredInfo">
          <span className="featuredTitle">Total Orders</span>
          <div className="totalContainer">
            <span className="total">100</span>
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredIconContainer">
          <People className='featuredIcon' />
        </div>
        <div className="featuredInfo">
          <span className="featuredTitle">Total Users</span>
          <div className="totalContainer">
            <span className="total">10k</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeaturedInfo