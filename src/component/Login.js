import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  
  const navigate = useNavigate();
  const [user_name_email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API request to authenticate user
    axios
      .post("http://localhost:3036/api/auth/login", { user_name_email, password })
      .then((response) => {
        console.log(response.data);
        toast.success("Login Successfully!!!"); 
        navigate("/");// Handle successful authentication
      })
      .catch((error) => {
        console.error(error); // Handle authentication error
        toast.error("Passwords do not match!");
      });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              background-color: #f5f5f5;
            }
            .form-container {
              background-color: #f4f9ff;
              border: 1px solid #ddd;
              border-radius: 4px;
              box-shadow: 0 2px 2px rgb(0 46 142);
              padding: 20px;
              margin: auto;
              margin-top:45px;
              width: 24%;
              height:502px;
            }
            .form-group {
              margin-bottom: 15px;
            }
            .form-control {
              border-radius: 4px;
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) inset;
              font-size: 14px;
              padding: 6px 12px;
              width: 100%;
            }
            .btn {
              border-radius: 4px;
              font-size: 14px;
              font-weight: 600;
              letter-spacing: 0.1em;
              padding: 10px 16px;
              text-transform: uppercase;
            }
            .btn-primary {
              background-color: #007bff;
              border-color: #007bff;
              color: #fff;
            }
            .btn-primary:hover,
            .btn-primary:focus {
              background-color: #0069d9;
              border-color: #0062cc;
              color: #fff;
            }
          `,
        }}
      />
  
      <div className="">
        <div className="form-container">
          <h1 className="text-center mb-4">Staff Management</h1>
    
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            <br></br>

              <label htmlFor="username">Username/Email</label>
              <input
                type="text"
                className="form-control"
        
                id="user_name_email"
                name="username"
                value={user_name_email}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
            
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          
            <button type="submit" className="btn btn-primary btn-block">
              Log In
            </button>
          </form>
        </div>
      </div>

  
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {
              background-color: #d3d3d3;
              height: 100%;
            }
          `,
        }}
      />
    </>
  );
      }
  export default Login;
  