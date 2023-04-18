import React, { useState } from "react";

import Navbar from "./Navbar";


import Sidebar from "./Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Addforiegn.css";

 
const Addforeign =()=>{


   //email validation
   const [inputValues, setInputValues] = useState({
    email: '',});
    const [emailError, setEmailError] = useState('');

//mobile verification
const [mobileError, setMobileError] = useState('');
const [values, setValues] = useState({
  mobile: '',});





const navigate = useNavigate();
    const handleSubmit = async (event) => {
  event.preventDefault();

  //console.log(`Selected gender: ${gender}`);
 

  try {
    const response = await axios.post(
      "http://localhost:3036/api/staff/staf_create/ForeignerStaff",
      formData
    );
    console.log(response.data);
    toast.success("Staff Add Successfully!!!");
    navigate('/listforeign');  
       // navigate("/login");
    // redirect to login page
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while creating the account.");
  }
};

const handleRemove= index=>{
  const list=[...inputList];
  list.splice(index,1);
  setInputList(list);
}

const handleAddClick=()=>{ 
  setInputList([...inputList, 
      { slNo: '',  qualify: '', institute: '', year: '' }]);
}
const [selectedOption, setSelectedOption] = useState('');
const [inputList, setInputList] = useState([
  { slNo: '',  qualify: '', institute: '', year: '' },
]);
  const [formData, setFormData] = useState({
    role_id: 1,
    organizationtype_id: 1,
    organization_id: 1,
    name:"",
    up_image:"",
    religion:"",
    father_name:"",
    mother_name:"",
    sex:"",
    dob:"",
    age:"",
    bloodgroup:"",
    addrss:"",
    landmark:"",
    p_pincode:"",
    country:"",
    state:"",
    district:"",
    police:"",
    add:"",
    count:"",
    stat:"",
    dist:"",
    station:"",
    email:"",
    mobile:"",
    landline:"",
    slno:"",
    qualify:"",
    institute:"",
    year:"",
    driving_license:"",
    personal_vehicle:"",
    type_vehicle:"",
    vehicle_no:"",
    esi_number:"",
    epfo_number:"",
    emp_type:"",
    job_category:"",
    join_date:"",
    special_skill:"",
    kind_job:"",
    engaged_for:"",
    contractor_id:"",
    job_sub_category:"",
    regular_peri:"",
    city:"",
   foreign_mobile_residing_country:"",
   foreign_landline_residing_country:"",
    emergency_contact:"",
    emergency_contact_mobile:"",
    emergency_contact_person_relation:"",
    passport:"",
    passport_place_issue:"",
    passport_expiry_date:"",
    passport_issue_date:"",
    passportpic:"",
    visa:"",
    visa_expiry_dt:"",
    visa_issue_dt:"",
    visa_issue_place:"",
    visa_type:"",
    visa_sub_type:"",
    visapic:"",
  });
  const {
    role_id,
    organizationtype_id,
    organization_id,
    name,
    up_image,
    religion,
    father_name,
    mother_name,
    sex,
    dob,
    age,
    bloodgroup,
    addrss,
    landmark,
    p_pincode,
    contractor_id,
    regular_peri,
    country,
    state,
    district,
    add,
    land,
    pin,
    count,
    stat,
    dist,
    station,
    email,
    mobile,
    landline,
    slno,
    qualify,
    institute,
    year,
    driving_license,
    personal_vehicle,
    type_vehicle,
    vehicle_no,
    esi_number,
    epfo_number,
    emp_type,
    job_category,
    join_date,
    special_skill,
    kind_job,
    engaged_for,
    job_sub_category,
    city,
    foreign_mobile_residing_country    ,
   foreign_landline_residing_country,
    emergency_contact,
    emergency_contact_mobile,
    emergency_contact_person_relation,
    passport,
    passport_place_issue,
    passport_expiry_date,
    passport_issue_date,
    passportpic,
    visa,
    visa_expiry_dt,
    visa_issue_dt,
    visa_issue_place,
    visa_type,
    visa_sub_type,
    visapic,
   } = formData;
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleInputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setInputList(list);

  }

  const [showField, setShowField] = useState(false);
  const [showField1, setShowField1] = useState(false);
  const [showField2, setShowField2] = useState(false);

  
   
  
  function handleOptionChange(option) {
    if (option === 'dl' || option === 'cas') {
      setShowField(true);
    } else {
      setShowField(false);}
  if (option === 'oper' || option === 'mana' || option === 'exe') {
     setShowField1(true);
    } else {
      setShowField1(false);
    }

    if (option === 'contractual') {
      setShowField2(true);
     } else {
       setShowField2(false);
     }
  }
//Mobile verification
const handleMobileChange = (e) => {
  const { name, value } = e.target;
  if (name === 'mobile') {
    if (value.length !== 10) {
      setMobileError('Mobile number should be 10 digits');
    } else {
      setMobileError('');
    }
  }
  setValues({ ...values, 
    [name]: value, });
};

  
//Email validation
const handleEmailChange = (event) => {
  const { name, value } = event.target;

  // Check if the input field is the email field
  if (name === 'email') {
    // Use a regular expression to check if the email is valid
    const isValidEmail = /\S+@\S+\.\S+/.test(value);

    if (!isValidEmail) {
      // If the email is not valid, set an error message
      setEmailError('Invalid email format');
    } else {
      setEmailError(''); // Reset the error message if the email is valid
    }
  }

  // Set the state with the updated input value
  setInputValues((prevInputValues) => ({
    ...prevInputValues,
    [name]: value,
  }));
};



 
  // const [preview, setPreview] = useState(null);
  // const [showPreview, setShowPreview] = useState(false);

  
  //   function previewImage(event) {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();
  
  //     reader.onloadend = function () {
  //       const img = new Image();
  //       img.src = reader.result;
  //       img.onload = function () {
  //         const canvas = document.createElement("canvas");
  //         const ctx = canvas.getContext("2d");
  //         canvas.width = 80;
  //         canvas.height = 70;
  //         ctx.drawImage(img, 0, 0, 80, 70);
  //         setPreview(canvas.toDataURL());
  //         setShowPreview(true);
  //       };
  //     };
  
  //     if (file) {
  //       reader.readAsDataURL(file);
  //     } else {
  //       setPreview(null);
  //       setShowPreview(false);
  //     }
  //   }
  
  //   function togglePreview() {
  //     setShowPreview((show) => !show);
  //   }
   return (
      <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/>            

<div className="body_right">
  <div className="inside">
    <div className="right_body_pagenation">
      <p> Add Foreign Staff</p>
    </div>
    <div className="right_body_section">


    <div className="container">

  <div className="row">
          <div className="col-xl-12 mx-12">        
          <div className="card-body">
            <h6 className="mb-0 ">Add Foreign Staff</h6>
            
            <hr />
                         
              <form onSubmit={handleSubmit}> 
                <input type="hidden" name="_token" defaultValue="" />
                 <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Personal Details
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                      <div className="col-md-4">
                          <label htmlFor="name" className="text">Name</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="name" 
                          id="name" 
                          value={name}
                          onChange={handleInputChange}
                          placeholder=" Enter Name" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="up_image" className="text">Upload Image</label><span className="text-danger">*</span>
                          <input   
                          type="file"
                          name="up_image"
                          id="up_image" 
                          value={up_image} 
                          onChange={handleInputChange}   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                       </div> 


                        {/* <div className="col-md-3">
                          <label className="form-label">Upload Image</label><span className="text-danger">*</span>
                          <input   type="file"  onChange={previewImage} className="form-control" id="profile_pic" name="profile_pic" required style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}} />
                         </div> <div className="col-md-1"><button
                          className="btn btn-success"
        id="preview-btn"
        style={{ display: preview && !showPreview ? "block" : "none" }}
        onClick={togglePreview}
      >
       <i class="fa-regular fa-eye"></i>
      </button>
      <button  className="btn btn-success"
        id="unpreview-btn"
        style={{ display: preview && showPreview ? "block" : "none" }}
        onClick={togglePreview}
      >
       <i class="fa-regular fa-eye-slash" />
      </button>
      <div
        id="image-preview"
        style={{ display: showPreview ? "block" : "none" }}
      >
        {preview && <img src={preview} />}
      </div>
      </div>
   
          */}
                    
                    <div className="col-md-4">
                          <label htmlFor="religion" className="text">Religion</label><span className="text-danger" />
                          <input 
                          type="text" 
                          name="religion" 
                          id="religion" 
                          value={religion}
                          onChange={handleInputChange}
                          placeholder="Religion" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label htmlFor="father_name" className="text">Father’s Name</label><span className="text-danger">*</span>
                          <input 
                          type="text"  
                          name="father_name"  
                          id="father_name" 
                          value={father_name}
                          onChange={handleInputChange}
                          placeholder="Father Name" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label htmlFor="mother_name" className="text">Mother’s Name</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="mother_name"  
                          id="mother_name" 
                          value={mother_name}
                          onChange={handleInputChange}
                          placeholder="Mothers Name"  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                        </div>

                        <div className="col-md-4 mt-2">
                          <label className="form-label">Gender</label><span className="text-danger">*</span>
                          <br/>
                          <input className="form-check-input" type="radio" name="sex" defaultValue="M" required />
                          <label className="form-label">&nbsp;Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input className="form-check-input" type="radio" name="sex" defaultValue="F" required />
                          <label className="form-label">&nbsp;Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input className="form-check-input" type="radio" name="sex" defaultValue="T" required />
                          <label className="form-label">&nbsp;Transgender</label>
                          
                        </div>
                        <div className="col-md-4 mt-2">
                          <label  htmlFor="dob" className="text">DOB</label><span className="text-danger">*</span>
                          <input 
                          type="date" 
                          name="dob" 
                          id="dob"
                          value={dob}
                          onChange={handleInputChange}
                          placeholder=" Enter DOB"   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required/>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label htmlFor="age" className="text" >Age</label><span className="text-danger">*</span>
                          <input 
                          type="number" 
                          name="age" 
                          id="age" 
                          value={age}
                          onChange={handleInputChange}
                          placeholder="Age"  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label htmlFor="bloodgroup" className="text" >Blood Group</label>
                          <select 
                          
                          id="bloodgroup"
                          name="bloodgroup" 
                          value={bloodgroup}
                          onChange={handleInputChange}  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required 
                          >
                        
                          <option value="" disabled="" selected="">Select Blood Group</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A-">A-</option>
                                                    <option value="B+">B+</option>
                                                    
                                                    
                                                    
                                                    <option value="B-">B-</option>
                                                    <option value="AB+">AB+</option>
                                                    <option value="AB-">AB-</option>
                                                    <option value="O+">O+</option>
                                                    <option value="O-">O-</option>
                                                </select>          
                           
                          
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Address Details
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                        <h6 className="fw-normal">Permanent Address:</h6><hr />
                        <div className="col-md-12">
                            <label htmlFor="addrss" className="text">Address</label><span className="text-danger">*</span>
                              <textarea
                             
                              id="addrss"
                              name="addrss"
                              value={addrss}
                              onChange={handleInputChange}
                              placeholder="Address"  
                              style={{height: '10px', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                               required 
                               /> 
                               </div>                         
                          <div className="col-md-3 mt-2">
                            <label htmlFor="country" className="text">Country</label><span className="text-danger">*</span>
                            <select 
                            id="country" 
                            name="country"
                            value={country}
                            onChange={handleInputChange}  
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required >
                              <option value disabled selected>Select Country</option>
                            </select>
                          </div>
                          <div className="col-md-3 mt-2">
                            <label htmlFor="state" className="text">State</label><span className="text-danger">*</span>
                            <select 
                            id="state" 
                            name="state"
                            value={state}
                            onChange={handleInputChange}   
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required > 
                            <option value disabled selected>Select State</option>
                            </select>
                          </div>
                          <div className="col-md-4 mt-2">
                          <label htmlFor="city" className="text" >City/Province</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="city" 
                          id="city" 
                          value={city}
                          onChange={handleInputChange}
                          placeholder=" Enter city/province "  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>



                         
                          
                        <br />
                        <h6 className="fw-bold mt-3">Present Address:</h6><hr />
                        <div className="col-md-12">
                         {/* <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="sameas" onclick="sameAs()"  />
                            <label className="form-check-label" htmlFor="sameas">Same As Permanent Address</label>
        </div>*/}
                          <div className="col-md-12">
                            <label htmlFor="add" className="text" >Address</label><span className="text-danger">*</span>
                            <textarea 
                              id="add"
                              name="add" 
                              value={add}
                              onChange={handleInputChange}  
                              placeholder="Enter your address..."   
                              style={{height: '10px', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                           </div>
                          </div>
                          <div className="col-md-3 mt-2">
                            <label htmlFor="landmark" className="text"> Nearest Landmark</label><span className="text-danger">*</span>
                            <input 
                            type="text"
                            id="landmark" 
                            name="landmark" 
                            value={landmark}
                            onChange={handleInputChange}
                            placeholder="Landmark"  
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                            required/>
                          </div>
                          <div className="col-md-4 mt-2">
                          <label  htmlFor="p_pincode" className="text">PIN code</label><span className="text-danger">*</span>
                          <input 
                          type="text"  
                          name="p_pincode"
                          id="p_pincode"
                          value={p_pincode}
                          onChange={handleInputChange}
                          maxLength={6}   
                          placeholder="PIN code"
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="count" className="text">Country</label><span className="text-danger">*</span>
                            <select 
                            id="count" 
                            name="count" 
                            value={count}
                            onChange={handleInputChange}
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required 
                            ><option value disabled selected>Select Country</option>
                            </select>
                          </div>
                          <div className="col-md-4 ">
                            <label htmlFor="stat" className="text">State</label><span className="text-danger">*</span>
                            <select 
                            id="stat" 
                            name="stat" 
                            value={stat}
                            onChange={handleInputChange} 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required>
                            <option value disabled selected>Select State</option>
                            </select>
                          </div>
                          <div className="col-md-4 ">
                            <label htmlFor="dist" className="text">District</label><span className="text-danger">*</span>
                            <select 
                            id="dist" 
                            name="dist"
                            value={dist}
                            onChange={handleInputChange}   
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required
                            ><option value disabled selected>Select District</option>
                            </select>
                          </div>
                       
                       
                        <div className="col-md-4 ">
                          <label htmlFor="station" className="text">Police Station</label><span className="text-danger">*</span>
                          <select   
                          name="station" 
                          id="station"
                          value={station}
                          onChange={handleInputChange}    
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required  >
                            <option value disabled selected>Select PS</option>
                          </select>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Contact Details
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                      <div className="col-md-6 mt-2">
                          <label htmlFor="email" className="text">Email</label><span className="text-danger">*</span>
                          <input 
                          type="email"  
                          name="email" 
                          id="email" 
                          value={inputValues.email}
                          onChange={handleEmailChange} 
                          placeholder="Email" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required    />
                        {emailError && (
          <small className="text-danger">{emailError}</small>
        )}
                        </div>

                        <div className="col-md-6 mt-2">
  <label htmlFor="mobile" className="text">Mobile</label><span className="text-danger">*</span>
  <input 
    type="number" 
    name="mobile" 
    id="mobile" 
    value={values.mobile}
    onChange={handleMobileChange} 
    maxLength={10} 
    placeholder="Mobile"  
    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
    required />
  {mobileError && <div className="text-danger">{mobileError}</div>}
</div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="foreign_mobile_residing_country" className="text">Mobile( Mobile of Residing Country)</label><span className="text-danger">*</span>
                          <input 
                          type="number" 
                          name="foreign_mobile_residing_country" 
                          id="foreign_mobile_residing_country" 
                          value={foreign_mobile_residing_country}
                          onChange={handleInputChange} 
                          maxLength={10} 
                          placeholder=" Enter Mobile"  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required />
                        </div>
                       
                        <div className="col-md-6 mt-2">
                          <label htmlFor="landline" className="text" >Landline</label><span className="text-danger">*</span>
                          <input 
                          type="number" 
                          name="landline" 
                          id="landline"
                          value={landline}
                          onChange={handleInputChange} 
                          placeholder="Landline" 
                          maxLength={12}  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="foreign_landline_residing_country" className="text" >Landline(Lanline of residing country)</label><span className="text-danger">*</span>
                          <input 
                          type="number" 
                          name="foreign_landline_residing_country" 
                          id="foreign_landline_residing_country"
                          value={foreign_landline_residing_country}
                          onChange={handleInputChange} 
                          placeholder=" Enter Landline" 
                          maxLength={12}  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="emergency_contact" className="text" >Contact Person</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="emergency_contact" 
                          id="emergency_contact"
                          value={emergency_contact}
                          onChange={handleInputChange} 
                          placeholder=" Enter contact person" 
                          maxLength={12}  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="emergency_contact_mobile" className="text" >Contact Person Mobile</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="emergency_contact_mobile" 
                          id="emergency_contact_mobile"
                          value={emergency_contact_mobile}
                          onChange={handleInputChange} 
                          placeholder=" Enter contact person mobile" 
                          maxLength={12}  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        
                        <div className="col-md-6 mt-2">
                          <label htmlFor="emergency_contact_person_relation" className="text" >Relation</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="emergency_contact_person_relation" 
                          id="emergency_contact_person_relation"
                          value={emergency_contact_person_relation}
                          onChange={handleInputChange} 
                          placeholder=" Enter relation ..." 
                            
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>

                       
                        {}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Qualification Details
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      <div className="row">
       <div className="col-sm-12">
         <h5 className="mt-3 mb-4 fw-bold"> </h5>
           
         {
  inputList.map((x, i) => {
    return (
      <div className="row ">
        <div className="col-md-2">
                          <label htmlFor="slno" className="text" >Sl.No.</label>
                          <input 
                          type="text" 
                          name="slno" 
                          id="slno"
                          value={slno}
                          onChange={e => handleInputChange(e, i)}
                          placeholder="Enter Sl.No."
                          
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="qualify" className="text" >Qualification ID</label>
                          <select 
                            id="qualify" 
                            name="qualify"
                            value={qualify}
                            onChange={e => handleInputChange(e, i)}
                            placeholder="Enter Qualification"
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required
                            ><option value disabled selected>Select Qualification</option>
                            </select>
                          </div>

                          <div className="col-md-2">
                          <label htmlFor="institute" className="text">Institution</label>
                          <input 
                          type="text" 
                          name="institute" 
                          id="institute"
                          value={institute}
                          onChange={e => handleInputChange(e, i)}
                          placeholder="Enter Institution" 
                        
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="year" className="text" >Passing Year</label>
                          <select 
                            id="year" 
                            name="year"
                            value={year}
                            onChange={e => handleInputChange(e, i)}
                            placeholder="Enter Passing year"
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required
                            ><option value disabled selected>Select Passing Year</option>
                            </select>
                          </div>
      
       
        <div class="form-group col-md-3 ">
          {inputList.length !== 1 && <button className="btn btn-danger mx-1" onClick={() => handleRemove(i)}>Remove</button>}
          {inputList.length - 1 === i && <button className="btn btn-success" onClick={handleAddClick}>Add More</button>}
        </div>
      </div>
    );
  })
}


          </div>     
       </div>
     </div>
                     {/*  <div className="col-12">
                          <div className="table-responsive">
                            <table className="table table-light mb-0">
                              <thead>
                                <tr>
                                  <th className="text">Sl.No.</th>
                                  <th className="text">Qualification</th>
                                  <th className="text">Institution</th>
                                  {}
                                  <th className="text">Passing Year</th>
                                  <th className="text">Add/Remove</th>
                                </tr>
                              </thead>
                              <tbody id="educational">
                                <tr>
                                  <td>
                                <input 
                                     type="text" 
                                     id="slno"
                                     name="slno" 
                                     value={slno}
                                     onChange={handleInputChange} 
                                     placeholder="Sl.No."  
                                     style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                     required/>
                                  </td>
                                  <td width="18%">
                                    <select 
                                    id="qualify"
                                    name="qualify" 
                                    value={qualify}
                                    onChange={handleInputChange} 
                                    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required>
                                      <option value disabled selected>Select qualification</option>
                                      </select>
                                  </td>
                                  <td width="18%">
                                    <input 
                                    type="text"
                                    id="institute"
                                    name="institute" 
                                    value={institute}
                                    onChange={handleInputChange} 
                                    placeholder="Institution" 
                                     style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                                     required 
                                     />
                                  </td>
                                  {}
                                  <td >
                                    <select 
                                    id="year"
                                    name="year" 
                                    value={year}
                                    onChange={handleInputChange} 
                                    placeholder="year" 
                                    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required >
                                      <option value disabled selected>Select year</option>
                                      </select>
                                  </td>
                               
                                  <td>
                                    <span onclick="add()"><button type="button" className="btn btn-outline-success radius-30">Add</button></span>
                                  </td>                                                                
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div> */}
                        {}

                      </div>
                    </div>
 
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Other Details
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                      <div className="col-md-4">
                          <label htmlFor="passport" className="text" >Passport No.</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="passport" 
                          id="passport"
                          value={passport}
                          onChange={handleInputChange} 
                          placeholder=" Enter passport number ..." 
                          maxLength={12}  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="passport_place_issue" className="text" >Place of Issue</label><span className="text-danger">*</span>
                          <select 
                                    id="passport_place_issue"
                                    name="passport_place_issue" 
                                    value={passport_place_issue}
                                    onChange={handleInputChange} 
                                    placeholder="Select place of issue" 
                                    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required >
                                      <option value disabled selected>Select place </option>
                                      </select>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label  htmlFor="passport_issue_date" className="text">Date of Issue</label><span className="text-danger">*</span>
                          <input 
                          type="date" 
                          name="passport_issue_date" 
                          id="passport_issue_date"
                          value={passport_issue_date}
                          onChange={handleInputChange}
                          placeholder=" Select date of issue..."   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required/>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label  htmlFor="passport_expiry_date" className="text">Expiry Date</label><span className="text-danger">*</span>
                          <input 
                          type="date" 
                          name="passport_expiry_date" 
                          id="passport_expiry_date"
                          value={passport_expiry_date}
                          onChange={handleInputChange}
                          placeholder=" Select date of issue..."   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required/>
                        </div>
                       
                        <div className="col-md-6 mt-2">
                          <label htmlFor="passportpic" className="text">Upload Passport(File size should be less than 2mb)</label><span className="text-danger">*</span>
                          <input   
                          type="file"
                          name="passportpic"
                          id="passportpic" 
                          value={passportpic} 
                          onChange={handleInputChange}   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                       </div> 


                       <div className="col-md-3 mt-2">
                          <label htmlFor="visa" className="text" >Visa No.</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="visa" 
                          id="visa"
                          value={visa}
                          onChange={handleInputChange} 
                          placeholder=" Enter visa number ..." 
                          maxLength={12}  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-3 mt-2">
                          <label htmlFor="visa_issue_place" className="text" >Place of Issue</label><span className="text-danger">*</span>
                          <select 
                                    id="visa_issue_place"
                                    name="passport_place_issue" 
                                    value={visa_issue_place}
                                    onChange={handleInputChange} 
                                    placeholder="Select place of issue" 
                                    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required >
                                      <option value disabled selected>Select place </option>
                                      </select>
                        </div>
                       
                        <div className="col-md-3 mt-2">
                          <label  htmlFor="visa_issue_dt" className="text">Date of Issue</label><span className="text-danger">*</span>
                          <input 
                          type="date" 
                          name="visa_issue_dt" 
                          id="visa_issue_dt"
                          value={visa_issue_dt}
                          onChange={handleInputChange}
                          placeholder=" Select date of issue..."   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required/>
                        </div>
                        <div className="col-md-3 mt-2">
                          <label  htmlFor="visa_expiry_dt" className="text">Expiry Date</label><span className="text-danger">*</span>
                          <input 
                          type="date" 
                          name="visa_expiry_dt" 
                          id="visa_expiry_dt"
                          value={ visa_expiry_dt}
                          onChange={handleInputChange}
                          placeholder=" Select date of expiry..."   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required/>
                        </div>

                        <div className="col-md-3 mt-2">
                        <label htmlFor="visa_type" className="text" >VISA Type</label><span className="text-danger">*</span>
                          <select 
                                    id="visa_type"
                                    name="visa_type" 
                                    value={visa_type}
                                    onChange={handleInputChange} 
                                    placeholder="Select Visa Type" 
                                    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required >
                                      <option value disabled selected>Select Visa Type </option>
                                      </select>
                         
                        </div>
                        <div className="col-md-3 mt-2">
                        <label htmlFor="visa_sub_type" className="text" >VISA SubType</label><span className="text-danger">*</span>
                          <select 
                                    id="visa_sub_type"
                                    name="visa_sub_type" 
                                    value={visa_sub_type}
                                    onChange={handleInputChange} 
                                    placeholder="Select Visa Subtype" 
                                    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required >
                                      <option value disabled selected>Select Visa SubType </option>
                                      </select>
                                      </div>
                           <div className="col-md-6">
                           <label htmlFor="visapic" className="text">Upload Visa(File size should be less than 2mb)</label><span className="text-danger">*</span>
                          <input   
                          type="file"
                          name="visapic"
                          id="visapic" 
                          value={visapic} 
                          onChange={handleInputChange}   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                       </div> 
                         
                       
                        <div className="col-md-6 mt-2">
                          <label htmlFor="driving_license" className="text" >Driving License No</label>
                          <input 
                          type="text"  
                          name="driving_license" 
                          id="driving_license" 
                          value={driving_license}
                          onChange={handleInputChange}  
                          maxLength={16} 
                          placeholder="Driving License No. e.g. XX-0000000000" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="personal_vehicle" className="text">Personal Vehicle</label>
                          <select 
                           name="personal_vehicle" 
                           id="personal_vehicle"
                           value={personal_vehicle}
                           onchange={handleInputChange}  
                           style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}>
                           <option value disabled selected>Select </option>
                          </select>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="type_vehicle" className="text" >Type of vehicle</label>
                          <input 
                          type="text"  
                          name="type_vehicle" 
                          id="type_vehicle" 
                          value={type_vehicle}
                          onChange={handleInputChange}  
                        
                          placeholder="Type of vehicle" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="vehicle_no" className="text" >Vehicle No</label>
                          <input 
                          type="text"  
                          name="vehicle_no" 
                          id="vehicle_no" 
                          value={vehicle_no}
                          onChange={handleInputChange}  
                         
                          placeholder="Vehicle No." 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="esi_number" className="text" >ESI No</label>
                          <input 
                          type="text"  
                          name="esi_number" 
                          id="esi_number" 
                          value={esi_number}
                          onChange={handleInputChange}  
                         
                          placeholder="ESI No. E.G 31-00-123456-000-0001" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="epfo_number" className="text" >EPFO No</label>
                          <input 
                          type="text"  
                          name="epfo_number" 
                          id="epfo_number" 
                          value={epfo_number}
                          onChange={handleInputChange}  
                          placeholder="EPFO No. E.G KN/KRP/0054055/0000250" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                      
                      
                        <div className="col-md-6 mt-2">
                        <label htmlFor="emp_type" className="text">Type of Employment</label><span className="text-danger">*</span>
                          <select  
                         name="emp_type" 
                         id="emp_type" 
                         value={emp_type}
                         onChange={handleInputChange}    
                         style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                         required
                         >
                          <option value="" disabled="" selected="">Select Type of Employment</option>
                          <option value="direct">Direct</option>
                          <option value="contractual">Contractual</option> 
                          </select>
                          </div>
                          <div className="col-md-6 mt-2">
                         <label htmlFor="job_category" className="text">Type of Job</label><span className="text-danger">*</span>
            <select
                name="job_category" 
                id="job_category" 
                //value={job_category}
                //onChange={handleInputChange}  
                style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                value={selectedOption} onChange={(e) => {
                  setSelectedOption(e.target.value);
                  handleOptionChange(e.target.value);
                }} 
                
                required
            >
                <option value="">Select job </option>
                <option value="dl" className="jobopt jobopt5">Daily Labourer</option>
                <option value="cas" className="jobopt jobopt4">Casual</option>
                <option value="oper" className="jobopt jobopt3">Operational</option>
                <option value="mana" className="jobopt jobopt2">Managerial</option>
                <option value="exe" className="jobopt jobopt1">Executive</option>
            </select>

                      
                        </div>




{showField && (<>
                          <div className="col-md-6 mt-2">
                          <label htmlFor="kind_job" className="text" >What kind of job</label>
                          <input 
                          type="text"  
                          name="kind_job" 
                          id="kind_job" 
                          value={kind_job}
                          onChange={handleInputChange}  
                          placeholder="Enter kind of job" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label htmlFor="engaged_for" className="text" >Engaged For</label>
                          <input 
                          type="text"  
                          name="engaged_for" 
                          id="engaged_for" 
                          value={engaged_for}
                          onChange={handleInputChange}  
                          placeholder="Enter kind of job" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required/>
                        </div>
                        </> )}
    {showField1 && (<>
                        <div className="col-md-6 mt-2">
                         <label htmlFor="job_sub_category" className="text">Job Sub-catyegory</label><span className="text-danger">*</span>
            <select
                name="job_sub_category" 
                id="job_sub_category" 
                value={job_sub_category}
                onChange={handleInputChange}  
                style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                required
            >
                <option value="">Select job  sub category</option>
                <option value="5" className="jobopt jobopt5">Daily Labourer</option>
                <option value="4" className="jobopt jobopt4">Casual</option>
                <option value="3" className="jobopt jobopt3">Operational</option>
                <option value="2" className="jobopt jobopt2">Managerial</option>
                <option value="1" className="jobopt jobopt1">Executive</option>
            </select>

                      
                        </div>
       </> )}



{showField2 && (<>

       <div className="col-md-6 mt-2">
                         <label htmlFor="contractor_id" className="text">Select Contractor</label><span className="text-danger">*</span>
            <select
                name="contractor_id" 
                id="contractor_id" 
                value={contractor_id}
                onChange={handleInputChange}  
                style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                required
            >
                <option value="">Select</option>
                <option value="visito" className="jobopt jobopt5">Visito Ventures IndiaPvt Ltd(Partnership)</option>
                <option value="anil" className="jobopt jobopt4">Anil Enterptises(individual)</option>
               
            </select>

                      
                        </div>
                        <div className="col-md-6 mt-2">
                         <label htmlFor="regular_peri" className="text">Regular/Periodic</label><span className="text-danger">*</span>
            <select
                name="regular_peri" 
                id="regular_peri" 
                value={regular_peri}
                onChange={handleInputChange}  
                style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                required
            >
                <option value="">Select </option>
                <option value="5" className="jobopt jobopt5">Regular</option>
                <option value="4" className="jobopt jobopt4">Periodic</option>
         
            </select>

                      
                        </div>
      
                        </> )} 
                        <div className="col-md-6 mt-2">
                         <label htmlFor="special_skill" className="text">Special Skill</label><span className="text-danger">*</span>
     
                        <select
                name="special_skill" 
                id="special_skill" 
                value={special_skill}
                onChange={handleInputChange}
                placeholder="special skill"  
                style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                required
            >
                <option value="">Select skill</option>
                <option value="5" className="jobopt jobopt5">Daily Labourer</option>
                <option value="4" className="jobopt jobopt4">Casual</option>
                <option value="3" className="jobopt jobopt3">Operational</option>
                <option value="2" className="jobopt jobopt2">Managerial</option>
                <option value="1" className="jobopt jobopt1">Executive</option>
            </select>

                     </div> 
                     <div className="col-md-6 mt-2">
                          <label  htmlFor="dob" className="text">Date of Joining</label><span className="text-danger">*</span>
                          <input 
                          type="date" 
                          name="join_date" 
                          id="join_date"
                          value={join_date}
                          onChange={handleInputChange}
                          placeholder="Date of Joining"   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required/>
                        </div>

                        <div className="col-md-6 mt-2">
                          <label className="form-label">Verification Type</label><br />&nbsp;
                          <input className="form-check-input verifyModal" type="radio" data-bs-toggle="modal" data-bs-target="#verifyModal" aria-expanded="false" defaultValue="self" name="verification" id="sameas1" onclick="sameAs()" />
                          <label className="form-check-label" htmlFor="sameas1">Self Verified</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input className="form-check-input verifyModal" type="radio" data-bs-toggle="modal" data-bs-target="#verifyModal" aria-expanded="false" defaultValue="ps" name="verification" id="sameas2" onclick="sameAs()" />
                          <label className="form-check-label" htmlFor="sameas2">Required to Verified</label> 
                          <input type="hidden" id="verification_value" name="verification_value" />                                              
                        </div>
                        <div className="col-md-6 mt-2" id="otherTextDiv" />
                      </div>
                    </div>
                  </div>
              
                
                <br></br>
    
    <div className="col-md-12 row row-cols-auto mt-2">  
                  <div className="col">
                    <button type="submit" className="btn btn-success px-5"><i className="bx bx-check-circle mr-1" /> Submit</button>                                              
                  </div>                                                
                </div>
              
              </form>
            </div>
          </div>
      
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  </div>
   );
     }
     export default Addforeign;
          