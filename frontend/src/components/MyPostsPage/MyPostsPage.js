import React, { useState, useEffect } from 'react';
import './MyPostsPage.css';
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar'

const MyPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Mock fetching posts
    const fetchedPosts = [
      {
        id: 1,
        title: 'My Trip',
        details: 'A wonderful story...',
        image: 'url-to-your-image',
        location: 'New York',
        date: '24/02/2023',
        public: true,
      },
    ];

    setPosts(fetchedPosts);
  }, []);

  return (
    <div className="myPostsPage-container w-100">
      <Sidebar />
      <div className="content-container">
        {/* Mapping through each post and rendering them */}
        {posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-image-container">
              <img src={post.image} alt={post.title} className="post-image" />
            </div>
            <div className="post-details">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-description">{post.details}</p>
              <span className="post-date">{post.date}</span>
              <span className="post-location">{post.location}</span>
              <button className="post-edit-button">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostsPage;