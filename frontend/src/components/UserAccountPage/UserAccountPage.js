import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/toast";
import "./UserAccountPage.css";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";

const UserAccountPage = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [profile, setProfile] = useState([]);
  const [edit, setEdit] = useState(false);

  const toast = useToast();

  const [name, setName] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const id = user._id;

  useEffect(() => {
    const getUserById = async () => {
      const { data } = await axios.get(`/api/user/${id}`, config);
      setProfile(data);
    };
    getUserById();
    
    if(user) {
      setName(user.name);
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setEmail(user.email);
      setPhone(user.phone);
    }else{
      return;
    }
  }, [id, edit]);

  const getContent = () => {
    switch (activeTab) {
      case "details":
        return <div>Details content...</div>;
      case "likes":
        return <div>Liked posts...</div>;
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  const profileEditHandler = () => {
    setEdit(true);
  };

  const updateHandler = async () => {
   
    setPicLoading(true);
    if (!name || !email || !firstname || !lastname || !phone) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    
    console.log(name, firstname, lastname, email, pic, phone);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/user/update/${id}`,
        {
          name,
          firstname,
          lastname,
          email,
          phone,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Profile Updated Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      setEdit(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  const postDetails = async (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log("pics", pics);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("image", pics);

      const response = await axios({
        method: "post",
        url: "/api/upload",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPic(response.data.image);
      setPicLoading(false);

      console.log("sucessPic", pic);
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  return (
    <div className="userAccountPage-container w-100">
      <Sidebar />

      <div className="account-details-container">
        <div className="user-details">
          <div className="user-details-header">
            <h1>My Account Details</h1>
            {edit === false ? (
              <i
                className="fa fa-edit edit-icon"
                onClick={profileEditHandler}
              />
            ) : (
              <i
                className="fa fa-arrow-left edit-icon"
                onClick={(e) => setEdit(false)}
              />
            )}
          </div>
          {edit === false ? (
            <>
              <img src={profile.pic} alt="User" className="user-image" />
              <div className="user-info">
                <p>
                  <strong>Username:</strong> {profile.name}
                </p>
                <p>
                  <strong>First Name:</strong> {profile.firstname}
                </p>
                <p>
                  <strong>Last Name:</strong> {profile.lastname}
                </p>
                <p>
                  <strong>Email:</strong> {profile.email}
                </p>
                <p>
                  <strong>Phone No:</strong> {profile.phone}
                </p>
              </div>
            </>
          ) : (
            <>
              <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="firstname" isRequired>
                <FormLabel>FirstName</FormLabel>
                <Input
                  value={firstname}
                  placeholder="Enter Your First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </FormControl>
              <FormControl id="lastname" isRequired>
                <FormLabel>LastName</FormLabel>
                <Input
                  value={lastname}
                  placeholder="Enter Your Name"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  value={email}
                  type="email"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>PhoneNumber</FormLabel>
                <Input
                  value={phone}
                  type="text"
                  placeholder="Enter Your PhoneNumber"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
              <FormControl id="pic">
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                  type="file"
                  p={1.5}
                  onChange={(e) => postDetails(e.target.files[0])}
                />
              </FormControl>
              <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={updateHandler}
                isLoading={picLoading}
              >
                Update
              </Button>
            </>
          )}
        </div>

        {/* Tabs for liked posts, settings, etc. */}
        <div className="account-tabs">
          <i
            className="fa fa-heart tab-icon"
            onClick={() => setActiveTab("likes")}
          />
          <i
            className="fa fa-star tab-icon"
            onClick={() => setActiveTab("stars")}
          />
          <i
            className="fa fa-paint-brush tab-icon"
            onClick={() => setActiveTab("paint")}
          />
          <i
            className="fa fa-cog tab-icon"
            onClick={() => setActiveTab("settings")}
          />
          <i
            className="fa fa-question-circle tab-icon"
            onClick={() => setActiveTab("help")}
          />
        </div>

        {/* The content area where the tab content will be displayed */}
        <div className="tab-content">
          {getContent()}
          {/* Content based on active tab goes here */}
        </div>
      </div>
    </div>
  );
};

export default UserAccountPage;
