import React, { useState, useRef} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate,Link } from "react-router-dom";
import './Signup.css';


const Signup = () => {
  const [formData, setFormData] = useState({
    role_id: 2,
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
  const [usernameError, setUsernameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      toast.error("Password and Confrim Password does not  match!");
      return;
    }


    try {
      const response = await axios.post(
        "http://localhost:3036/api/organization/create",
        formData
      );
      //console.log(response.data);
      if (response.data.errorCode === 0) {
        toast.success("Account Created Successfully!!!");
        navigate("/login");
      } else {
        let errorMessage = response.data.message;
        if (errorMessage.includes("user name is already register")) {
          setUsernameError("Username already taken.");
          toast.error("Username already taken.");
        }
        
    if (errorMessage.includes("mobile number is already register")) {
          setMobileError("Mobile number already registered.");
          toast.error("Mobile number already registered.");
        }
        if (errorMessage.includes("mail is already regiter")) {
          setEmailError("Email already registered.");
          toast.error("Email already registered.");
        }
        if (errorMessage.includes("password and confrim  not match")) {
          setPasswordError("Passwords do not match.");
          toast.error("Passwords do not match.");
        }
        // handle other error cases if necessary
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while creating the account.");
    }
  }
  // render function







  return (
    
    <div>
          <div className="form-container">
          <h3 className="text-center mb-4">Organization Registration</h3>
          <br></br>
          <br></br>
      <form onSubmit={handleSubmit}>
      
      <div className="row">
      <div className="col-md-6"> 
          <label htmlFor="Organization_name" className="text">Organization Name :- <span style={{color: 'red'}}>*</span></label> 
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
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="text">E-mail <span style={{color: 'red'}}>*</span></label>
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

        </div><br></br>
        <div className="row">
      <div className="col-md-6">
            <label htmlFor="organizationType_id" className="text">Organization Type </label>
                 
            <select
    id="organizationType_id"
    name="organizationType_id"
    value={organizationType_id}
    onChange={handleInputChange}
    style={{ height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent' }}
    required
  >
    <option value="">-- Select Organization Type --</option>
    <option value="1">Industry</option>
    <option value="2">Service</option>
    <option value="3">Commercial</option>
    <option value="4">Others</option>
  </select>
 </div>
        <div className="col-md-6">
          <label htmlFor="partner_proprietor_director_name" className="text">
            Partner/Proprietor/Director Name  <span style={{color: 'red'}}>*</span>
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
        </div></div><br></br>
        <div className="row">
          <div className="col-md-6">
          <label htmlFor="usernam" className="text">Username <span style={{color: 'red'}}>*</span></label>
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
          <label htmlFor="mobile_no" className="text">Mobile No: <span style={{color: 'red'}}>*</span></label>
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
        <br></br>
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="password" className="text">Password <span style={{color: 'red'}}>*</span></label>
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
          <label htmlFor="confirm_password" className="text">Confirm Password  <span style={{color: 'red'}}>*</span></label>
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
        </div>
        
        </div>
        <div text-align="center">
          <br></br>
        <button type="submit"  className="btn btn-primary ">Register</button> |
        <Link  style={{ padding: "0.5rem",height:"38px" }} className="btn btn-info" to={'/login'}>Login</Link>
      </div>
      </form>
    </div>
    </div>
  );
};
export default Signup;

        




// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Register = () => {

//     const [id, idchange] = useState("");
//     const [name, namechange] = useState("");
//     const [password, passwordchange] = useState("");
//     const [email, emailchange] = useState("");
//     const [phone, phonechange] = useState("");
//     const [country, countrychange] = useState("india");
//     const [address, addresschange] = useState("");
//     const [gender, genderchange] = useState("female");

//     const navigate = useNavigate();

//     const IsValidate = () => {
//         let isproceed = true;
//         let errormessage = 'Please enter the value in ';
//         if (id === null || id === '') {
//             isproceed = false;
//             errormessage += ' Username';
//         }
//         if (name === null || name === '') {
//             isproceed = false;
//             errormessage += ' Fullname';
//         }
//         if (password === null || password === '') {
//             isproceed = false;
//             errormessage += ' Password';
//         }
//         if (email === null || email === '') {
//             isproceed = false;
//             errormessage += ' Email';
//         }

//         if(!isproceed){
//             toast.warning(errormessage)
//         }else{
//             if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

//             }else{
//                 isproceed = false;
//                 toast.warning('Please enter the valid email')
//             }
//         }
//         return isproceed;
//     }


//     const handlesubmit = (e) => {
//             e.preventDefault();
//             let regobj = { id, name, password, email, phone, country, address, gender };
//             if (IsValidate()) {
//             //console.log(regobj);
//             fetch("http://localhost:8000/user", {
//                 method: "POST",
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify(regobj)
//             }).then((res) => {
//                 toast.success('Registered successfully.')
//                 navigate('/login');
//             }).catch((err) => {
//                 toast.error('Failed :' + err.message);
//             });
//         }
//     }
//     return (
//         <div>
//             <div className="offset-lg-3 col-lg-6">
//                 <form className="container" onSubmit={handlesubmit}>
//                     <div className="card">
//                         <div className="card-header">
//                             <h1>User Registeration</h1>
//                         </div>
//                         <div className="card-body">

//                             <div className="row">
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>User Name <span className="errmsg">*</span></label>
//                                         <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Password <span className="errmsg">*</span></label>
//                                         <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Full Name <span className="errmsg">*</span></label>
//                                         <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Email <span className="errmsg">*</span></label>
//                                         <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Phone <span className="errmsg"></span></label>
//                                         <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Country <span className="errmsg">*</span></label>
//                                         <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
//                                             <option value="india">India</option>
//                                             <option value="usa">USA</option>
//                                             <option value="singapore">Singapore</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label>Address</label>
//                                         <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Gender</label>
//                                         <br></br>
//                                         <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
//                                         <label>Male</label>
//                                         <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
//                                         <label>Female</label>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>
//                         <div className="card-footer">
//                             <button type="submit" className="btn btn-primary">Register</button> |
//                             <Link to={'/login'} className="btn btn-danger">Close</Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>


//         </div>
//     );
// }




