import React from 'react'
import './Sidebar.css'
import { LineStyle, Inventory2, Category, ShoppingBag, PeopleAltOutlined, LogoutOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">

            <Link to={'/'}>
              <li className="sidebarListItem active">
                <LineStyle className='sidebarIcon' /> Home
              </li>
            </Link>

            <Link to={'products'}>
              <li className="sidebarListItem">
                <Inventory2 className='sidebarIcon' /> Products
              </li>
            </Link>

            <Link to={'orders'}>
              <li className="sidebarListItem">
                <ShoppingBag className='sidebarIcon' /> Orders
              </li>
            </Link>

            <Link to={'categories'}>
              <li className="sidebarListItem">
                <Category className='sidebarIcon' /> Categories
              </li>
            </Link>

            <Link to={'users'}>
              <li className="sidebarListItem">
                <PeopleAltOutlined className='sidebarIcon' /> Users
              </li>
            </Link>

          </ul>
        </div>
      </div>
      <div className="logoutContainer">
        <div className="logoutWrapper">
          <LogoutOutlined className='logoutIcon' />  Logout
        </div>
      </div>
    </div>
  )
}

export default Sidebar