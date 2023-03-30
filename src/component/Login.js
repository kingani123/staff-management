import React, { useState,useEffect} from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
  const navigate = useNavigate();
  const [user_name_email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(()=>{
    sessionStorage.clear();
        },[]);

        
  const validate = () => {
    let result = true;
    const username = user_name_email;
    const passwordValue = password;

    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (passwordValue === "" || passwordValue === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      try {
        // Make API request to authenticate user
        const response = await axios.post("http://localhost:3036/api/auth/login", { user_name_email, password });
        const { playLoad } = response.data;
         //console.log("API response:", playLoad);

         if(response.data.errorCode === 1){
          let errorMessage = response.data.message;
          if (errorMessage.includes("your request in procees.................")) {
          
            toast.error("Your Account is Under Verification");
          }
        
         }else{
         
         if (playLoad && playLoad.status) {
          const user_type = playLoad.user_tye; // Define the user_type variable
          if (user_type === "Organization") {
            navigate("/");
            toast.success("Login Successfully!!!");
            sessionStorage.setItem('user_name_email', user_name_email);
          } else if (user_type === "Admin") {
            navigate("/Admin");
            toast.success("Login Successfully!!!");
            sessionStorage.setItem('user_name_email', user_name_email);
          }
        } else {
          toast.error("Invalid login credentials.");
        }
      }
    } catch (error) {
        console.error(error);
        toast.error("An error occurred while trying to log in.");
      }
    }
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
          <h1 className="text-center mb-4">Staff Management </h1>
    
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            <br></br>

              <label htmlFor="username">Username/Email <span style={{color: 'red'}}>*</span></label>
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
  <label htmlFor="password">Password <span style={{color: 'red'}}>*</span></label>
  <div className="input-group">
    <input
      type={showPassword ? 'text' : 'password'}
      className="form-control"
      id="password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <div className="input-group-append">
    <button
  className="btn btn-secondary"
  type="button"
  onClick={togglePasswordVisibility}
  style={{ padding: "0.25rem",height:"35px" }}
>
  {showPassword ? <i className="fa fa-eye-slash" style={{ fontSize: "0.75rem" }}></i> : <i className="fa fa-eye" style={{ fontSize: "0.75rem" }}></i>}
</button>

    </div>
  </div>
</div>

          
            <button type="submit" className="btn btn-primary btn-block"  style={{ padding: "0.25rem",height:"35px" }} >
              
              Log In
            </button>
            <br></br>
            <Link style={{ padding: "0.5rem",height:"33px" }} className="btn btn-info" to={'/signup'}>Register as an Organization</Link>
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
  


  