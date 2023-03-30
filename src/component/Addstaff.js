
import React, { useState } from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";

import "./Addforiegn.css";

import axios from "axios";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

const Addstaff =()=>{

  const [formData, setFormData] = useState({
    role_id: 2,
    organizationtype_id: 1,
    organization_id: 1,
    in_staff_name:"",
    up_image:"",
    religion:"",
    father_name:"",
    mother_name:"",
    male:"",
    female:"",
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
    land:"",
    pin:"",
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
    adhar:"",
    u_adhar:"",
    pan:"",
    pan_pic:"",
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



  });
  const {
 role_id,
 organizationtype_id,
 organization_id,
 in_staff_name,
 up_image,
 religion,
 father_name,
 mother_name,
 male,
 female,
 dob,
 age,
 bloodgroup,
 addrss,
 landmark,
 p_pincode,
 country,
 state,
 district,
 police,
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
 adhar,
 u_adhar,
 pan,
 pan_pic,
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

  } = formData;
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await axios.post(
        "http://localhost:3036/api/staff/staf_create/IndianStaff",
        formData
      );
      console.log(response.data);
      toast.success("Staff Add Successfully!!!");
         // navigate("/login");
      // redirect to login page
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while creating the account.");
    }
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
      <p> Add Indianstaff Details</p>
    </div>
    <div className="right_body_section">
      {/*--content here--*/}
<div className="container">

  <div className="row">
          <div className="col-xl-12 mx-12">        
          <div className="card-body">
            <h6 className="mb-0 ">Add Indianstaff Details</h6>
            
            <hr />
                          
              <form onSubmit={handleSubmit}> 
                <input type="hidden" name="_token" defaultValue="" /><div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Personal Details
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                        <div className="col-md-4">
                          <label htmlFor="in_staff_name" className="text">Name</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="in_staff_name" 
                          id=" in_staff_name" 
                          value={in_staff_name}
                          onChange={handleInputChange}
                          placeholder=" Enter Name" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}/>
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
                       </div>  {/*  <div className="col-md-1"><button
                         className="btn-success"
        id="preview-btn"
        style={{ display: preview && !showPreview ? "block" : "none" }}
        onClick={togglePreview}
      >
       <i class="fa-regular fa-eye"></i>
      </button>
      <button className="btn-success"
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
                        </div> */}
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
                          <label  htmlFor="gender"className="text" >Gender</label><span className="text-danger">*</span>
                          <br/>
                          <input 
                          className="form-check-input"
                          type="radio"
                          name="gender" 
                          id="male" 
                          defaultValue={male}
                          />
                          <label  htmlFor="male">&nbsp;Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input 
                          className="form-check-input" 
                          type="radio" 
                          name="gender" 
                          defaultValue={female}  />
                          <label  htmlFor="gender">&nbsp;Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input 
                          className="form-check-input" 
                          type="radio" 
                          name="sex" defaultValue="T" required />
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
                          placeholder="DOB"   
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
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Address Details
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                        <h6 className="fw-bold">Permanent Address:</h6><hr />
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
                          <div className="col-md-3 mt-2">
                            <label htmlFor="district" className="text">District</label><span className="text-danger">*</span>
                            <select 
                            id="district" 
                            name="district"
                            value={district}
                            onChange={handleInputChange}   
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required >
                            <option value disabled selected>Select District</option>
                            </select>
                          </div>
                          <div className="col-md-3 mt-2">
                            <label htmlFor="police" className="text">PS</label><span className="text-danger">*</span>
                            <select 
                             id="police" 
                             name="police"
                             value={police}
                             onChange={handleInputChange}   
                             style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                             required>
                              <option value disabled selected>Select PS</option>
                            </select>
                          </div>
                        <br />
                        <h6 className="fw-bold mt-3">Present Address:</h6><hr />
                        <div className="col-md-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="sameas" onclick="sameAs()"  />
                            <label className="form-check-label" htmlFor="sameas">Same As Permanent Address</label>
                          </div>
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
                          <div className="col-md-4">
                            <label htmlFor="land" className="text"> Nearest Landmark</label><span className="text-danger">*</span>
                            <input 
                            type="text"
                            id="land" 
                            name="land" 
                            value={land}
                            onChange={handleInputChange}  
                            placeholder="Landmark"  
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                          </div>
                        <div className="col-md-4">
                          <label htmlFor="pin" className="text">PIN code</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="pin" 
                          id="pin"
                          value={pin}
                          onChange={handleInputChange}  
                          maxLength={6}   
                          placeholder="PIN code"  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required/>
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
                        <div className="col-md-4">
                          <label htmlFor="email" className="text">Email</label><span className="text-danger">*</span>
                          <input 
                          type="email"  
                          name="email" 
                          id="email" 
                          value={email}
                          onChange={handleInputChange} 
                          placeholder="Email" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required    />
                          <small className="text-danger" />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="mobile" className="text">Mobile</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="mobile" 
                          id="mobile" 
                          value={mobile}
                          onChange={handleInputChange} 
                          maxLength={10} 
                          placeholder="Mobile"  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="landline" className="text" >Landline</label>
                          <input 
                          type="text" 
                          name="landline" 
                          id="landline"
                          value={landline}
                          onChange={handleInputChange} 
                          placeholder="Landline" 
                          maxLength={12}  
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
                        <div className="col-12">
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
                                  <td width="18%">
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
                        </div>
                        {}
                      </div>
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
                        <div className="table-responsive">
                          <table className="table table-light mb-0">
                            <tbody>
                              <tr>
                                <td>
                                  <label htmlFor="adhar" className="text" >Aadhar No</label><span className="text-danger">*</span>
                                  <input 
                                  type="text"  
                                  name="adhar" 
                                  id="adhar"
                                  value={adhar}
                                  onChange={handleInputChange}   
                                  placeholder="Aadhar No" 
                                  style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                  required />                                                                
                                </td>
                                <td>
                                  <label htmlFor="u_adhar" className="text">Upload Aadhar</label><span className="text-danger">*</span>
                                  <input 
                                  type="file" 
                                  id="u_adhar" 
                                  name="u_adhar"  
                                  value={u_adhar}
                                  onChange={handleInputChange}   
                                  style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                                  required/>  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label  htmlFor="pan" className="text">PAN No.</label>
                                  <input 
                                  type="text" 
                                  name="pan" 
                                  id="pan" 
                                  value={pan}
                                  onChange={handleInputChange}   
                                  placeholder="PAN No." 
                                  style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                  required />
                                </td>
                                <td>
                                  <label   htmlFor="pan_pic" className="text">Upload PAN</label>
                                  <input 
                                  type="file" 
                                  id="pan_pic" 
                                  name="pan_pic"
                                  value={pan_pic}
                                  onChange={handleInputChange}  
                                  style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                                  required /> 
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
                value={job_category}
                onChange={handleInputChange}  
                style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                required
            >
                <option value="">Select job category</option>
                <option value="5" className="jobopt jobopt5">Daily Labourer</option>
                <option value="4" className="jobopt jobopt4">Casual</option>
                <option value="3" className="jobopt jobopt3">Operational</option>
                <option value="2" className="jobopt jobopt2">Managerial</option>
                <option value="1" className="jobopt jobopt1">Executive</option>
            </select>

                      
                        </div> 
                        <div className="col-md-12" id="job_role_id">
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
                        <label htmlFor="special_skill" className="text">Special Skill</label>
<select
  name="special_skill"
  id="special_skill"
  value={special_skill}
  style={{
    height: '50%',
    width: '100%',
    border: 'none',
    fontSize: '12px',
    borderBottom: '2px solid silver',
    backgroundColor: 'transparent'
  }}
  required
>
  <option value="">Select Skill</option>
  <option value="Other">Other</option>
  <option value="Salon &amp; Spa">Salon &amp; Spa</option>
  <option value="Pest Control">Pest Control</option>
  <option value="Lift Servicing">Lift Servicing</option>
  <option value="Gardening">Gardening</option>
  <option value="Iron Grill Fixing">Iron Grill Fixing</option>
  <option value="A/C &amp; Refrigerator Service &amp; Repair">A/C &amp; Refrigerator Service &amp; Repair</option>
  <option value="Pet Care">Pet Care</option>
  <option value="Child Care">Child Care</option>
  <option value="Car Cleaning">Car Cleaning</option>
  <option value="Cooking">Cooking</option>
  <option value="Cleaning (Sweeping / Dusting)">Cleaning (Sweeping / Dusting)</option>
  <option value="Laundry">Laundry</option>
  <option value="Beautician">Beautician</option>
  <option value="Computer Repairing and Maintenance">Computer Repairing and Maintenance</option>
  <option value="Mason">Mason</option>
  <option value="Plumbing">Plumbing</option>
  <option value="Carpeting">Carpeting</option>
  <option value="Electrician">Electrician</option>
  <option value="Painting">Painting</option>
  <option value="Driving">Driving</option>
</select>
                                                                       
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="text">Verification Type</label><br />&nbsp;
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
                </div> 
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
     export default Addstaff;

     