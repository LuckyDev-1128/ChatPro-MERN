import React from 'react';
import './NotificationsPage.css';
import Sidebar from '../Sidebar'
import { NavLink } from 'react-router-dom'


const NotificationsPage = () => {

    const notificationsCount = 0;


  return (
    <div className="notificationsPage-container w-100">
      <Sidebar />
      <div className="notifications-container">
        <div className="notifications-header">Notifications</div>
        <div className="notification-icon">
        <i className="fa fa-bell" size={24} />
        {notificationsCount > 0 && (
          <div className="notification-count">
            {notificationsCount}
          </div>
        )}
      </div>
        <div className="notification-message">
          Currently, nothing to report!
        </div>
        <div className="notification-action">
          This area will light up with new notifications once there's activity in your workspaces.
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;