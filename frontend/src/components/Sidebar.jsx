import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Sidebar = () => {

  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  return (
    <div className="sidebar">
      <Link to="/capture" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
          <i className="fa fa-cloud-upload sidebar-item-icon" />
          <span className="sidebar-item-text">Capture</span>
        </Link>
        <Link to="/posts" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
          <i className="fa fa-home sidebar-item-icon" />
          <span className="sidebar-item-text">My Posts</span>
        </Link>
        <Link to="/explore" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
          <i className="fa fa-eye sidebar-item-icon" />
          <span className="sidebar-item-text">Explore</span>
        </Link>
        <Link to="/chats" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
          <i className="fa fa-comment sidebar-item-icon" />
          <span className="sidebar-item-text">Chat</span>
        </Link>
        <Link to="/notifications" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
          <i className="fa fa-bell sidebar-item-icon" />
          <span className="sidebar-item-text">Notifications</span>
        </Link>
        <Link to="/account" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
          <i className="fa fa-user sidebar-item-icon" />
          <span className="sidebar-item-text">User Account</span>
        </Link>        
        <Link onClick={logoutHandler} className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
          <i className="fa fa-sign-out sidebar-item-icon" />
          <span className="sidebar-item-text">Logout</span>
        </Link>
      </div>
  )
}

export default Sidebar