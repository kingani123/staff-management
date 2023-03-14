import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './Signup.css';


const Signup = () => {
  const [formData, setFormData] = useState({
    role_id: 3,
    organizationType_id: "",
    Organization_name: "",
    email: "",
    partner_proprietor_director_name: "",
    usernam: "",
    mobile_no: "",
    password: "",
    confirm_password: "",
  });

  const {
    role_id,
    organizationType_id,
    Organization_name,
    email,
    partner_proprietor_director_name,
    usernam,
    mobile_no,
    password,
    confirm_password,
  } = formData;
  const navigate = useNavigate();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3036/api/organization/create",
        formData
      );
      console.log(response.data);
      toast.success("Account Created Successfully!!!");
          navigate("/login");
      // redirect to login page
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while creating the account.");
    }
  };

  return (
    
    <div>
          <div className="form-container">
          <h1 className="text-center mb-4">Staff Management</h1>
          <br></br>
      <form onSubmit={handleSubmit}>
      
        <div>
          <label htmlFor="organizationType_id">Organization Type ID</label>
          <input
            type="text"
            id="organizationType_id"
            name="organizationType_id"
            value={organizationType_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Organization_name">Organization Name</label>
          <input
            type="text"
            id="Organization_name"
            name="Organization_name"
            value={Organization_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="partner_proprietor_director_name">
            Partner/Proprietor/Director Name
          </label>
          <input
            type="text"
            id="partner_proprietor_director_name"
            name="partner_proprietor_director_name"
            value={partner_proprietor_director_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="usernam">Username</label>
          <input
            type="text"
            id="usernam"
            name="usernam"
            value={usernam}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile_no">Mobile Number</label>
          <input
            type="text"
            id="mobile_no"
            name="mobile_no"
            value={mobile_no}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            ref={passwordRef}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={confirm_password}
            onChange={handleInputChange}
            ref={confirmPasswordRef}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default Signup;

        
  