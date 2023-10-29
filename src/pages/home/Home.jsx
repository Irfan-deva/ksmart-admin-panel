import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import RecentOrders from '../../components/recentorders/RecentOrders'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <RecentOrders />
    </div>
  )
}

export default Home