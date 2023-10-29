import React from 'react'
import './Sidebar.css'
import { LineStyle, Inventory2, Category, ShoppingBag, PeopleAltOutlined, LogoutOutlined } from '@mui/icons-material'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon' /> Home
            </li>
            <li className="sidebarListItem">
              <Inventory2 className='sidebarIcon' /> Products
            </li>
            <li className="sidebarListItem">
              <ShoppingBag className='sidebarIcon' /> Orders
            </li>
            <li className="sidebarListItem">
              <Category className='sidebarIcon' /> Categories
            </li>
            <li className="sidebarListItem">
              <PeopleAltOutlined className='sidebarIcon' /> Users
            </li>
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