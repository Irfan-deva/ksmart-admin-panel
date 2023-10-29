import React from 'react'
import './Topbar.css'
import Avatar from '../../assets/avatar.jpg'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'
function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">KsMart</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={Avatar} alt="" className="topAvatar" />
        </div>
      </div>

    </div>
  )
}

export default Topbar