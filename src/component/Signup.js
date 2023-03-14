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
          <h3 className="text-center mb-4">Staff Management User Registration</h3>
          <br></br>
      <form onSubmit={handleSubmit}>
      
      <div className="row">
          <div className="col-md-6">
            <label htmlFor="organizationType_id" className="text">Organization Type </label>
                 
          <input
            type="text"
             
            id="organizationType_id"
            name="organizationType_id"
            placeholder="Organization Type "
            value={organizationType_id}
            onChange={handleInputChange}
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
               
            required
          />
 </div><div className="col-md-6"> 
          <label htmlFor="Organization_name" className="text">Organization Name</label> 
          <input
            type="text"
            id="Organization_name"
            name="Organization_name"
            placeholder="Organization Name "
            value={Organization_name}
            onChange={handleInputChange}
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
              
            required
          />
        </div></div>
        <div className="row">
          <div className="col-md-6">
          <label htmlFor="email" className="text">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="E-Mail "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="partner_proprietor_director_name" className="text">
            Partner/Proprietor/Director Name
          </label>
          <input
            type="text"
            id="partner_proprietor_director_name"
            name="partner_proprietor_director_name"
            value={partner_proprietor_director_name}
            onChange={handleInputChange}
            placeholder="Partner/Proprietor/Director Name "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div></div>
        <div className="row">
          <div className="col-md-6">
          <label htmlFor="usernam" className="text">User Name</label>
          <input
            type="text"
            id="usernam"
            name="usernam"
            value={usernam}
            onChange={handleInputChange}
            placeholder="User Name "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="mobile_no" className="text">Mobile Number</label>
          <input
            type="text"
            id="mobile_no"
            name="mobile_no"
            value={mobile_no}
            onChange={handleInputChange}
            placeholder="Mobile Number "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div></div>
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="password" className="text">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            ref={passwordRef}
            placeholder="Password "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="confirm_password" className="text">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={confirm_password}
            onChange={handleInputChange}
            ref={confirmPasswordRef}
            placeholder="Retype Password"
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div></div>
        <div text-align="center">
        <button type="submit">Register</button>
      </div>
      </form>
    </div>
    </div>
  );
};
export default Signup;

        
  