import React from 'react';
import './CapturePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar';
// import { useLogoutMutation } from '../../slices/usersApiSlice';
// import { logout } from '../../slices/authSlice';


const CapturePage = () => {
  console.log("Captuer Page")
  // const { userInfo } = useSelector((state) => state.userInfo);
  

  // const dispatch = useDispatch();
  const navigate = useHistory();

  // const [ logoutApiCall ] = useLogoutMutation();


  // console.log(cartItems);
  const logoutHandler = async () => {
    // console.log(userInfo)
    // console.log('submit')
    // try {
    //   await logoutApiCall().unwrap();
    //   dispatch(logout());
    //   navigate('/login')
    // } catch (err) {
    //   console.log(err)
      
    // }
  }
  return (
    <div className="capturePage-container w-100">
      <Sidebar />
      <div className="content-container">
        <div className="post-container">
          <input type="text" placeholder="Enter post title here" className="input-field" />
          <textarea placeholder="Enter post details here" className="textarea-field"></textarea>
          <div className="select-location">
            <select className="select-dropdown">
              <option>Select location details</option>
              {/* Populate with options */}
            </select>
          </div>
          <div className="upload-section">
            <button className="import-button">
              <i className="fa fa-cloud-upload"/>
              Import</button>
          </div>
          <div className="privacy-options">
            <label className="privacy-label">
              <input type="checkbox" />
              Public
            </label>
            <label className="privacy-label">
              <input type="checkbox" />
              Private
            </label>
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CapturePage;
