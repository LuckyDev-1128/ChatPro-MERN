import React from 'react';
// import './ExplorePage.css';
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar'

const ExplorePage = () => {
  // Mock data for the explore page, replace with actual data fetching logic
  const posts = [
    {
      id: 1,
      userImage: 'url-to-user-image',
      userName: 'Emma',
      location: 'London',
      date: '25/02/2022',
      postImage: 'url-to-london-image',
      title: 'My trip to London',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
  ];

  return (
    <div className="explorePage-container">
      <Sidebar />
      <div className="posts-container w-100">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="user-info">
              <img src={post.userImage} alt={post.userName} className="user-image" />
              <span className="user-name">{post.userName}</span>
            </div>
            <div className="image-container">
              <i className="fa fa-arrow-left arrow-icon" />
              <img src={post.postImage} alt={post.title} className="post-image" />
              <i className="fa fa-arrow-right arrow-icon" />
            </div>
            <div className="post-info">
              <div className="location-date">
                <span className="location">{post.location}</span>
                <span className="date">{post.date}</span>
              </div>
              <h3 className="title">{post.title}</h3>
              <p className="description">{post.description}</p>
              <i className="fa fa-heart heart-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;