
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";

import "./Addforiegn.css";

import axios from "axios";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

const Addstaff =()=>{
  const [inputList, setInputList] = useState([
    { slno: '',  qualify: '', institute: '', year: '' },
  ]);

  //file upload validation
  const [u_adhar, setU_adhar] = useState(null);
  const [preview, setPreview] = useState(null);

  //email validation
  const [inputValues, setInputValues] = useState({
    email: '',});
    const [emailError, setEmailError] = useState('');

//mobile verification
const [mobileError, setMobileError] = useState('');
const [values, setValues] = useState({
  mobile: '',});




  const location = useLocation();
  const navigate = useNavigate();
  //add && remove
  const handleInputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setInputList(list);

  }
 
  const handleRemove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setInputList(list);
  }

  const handleAddClick=()=>{ 
    setInputList([...inputList, 
      { slno: '',  qualify: '', institute: '', year: '' }]);
  }
    //const [gender, setGender] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    //same as above
    const [sameAsPermanent, setSameAsPermanent] = useState(false);
    const [permanentAddress, setPermanentAddress] = useState("");
    const [permanentLandmark, setPermanentLandmark] = useState("");
    const [permanentCountry, setPermanentCountry] = useState("");
    const [permanentState, setPermanentState] = useState("");
    const [permanentPincode, setPermanentPincode] = useState("");
    const [permanentDistrict, setPermanentDistrict] = useState("");
    const [permanentPolice, setPermanentPolice] = useState("");


    const [presentDistrct, setPresentDistrict] = useState("");
    const [presentAddress, setPresentAddress] = useState("");
    const [presentLandmark, setPresentLandmark] = useState("");
    const [presentPincode, setPresentPincode] = useState("");
    const [presentCountry, setPresentCountry] = useState("");
    const [presentState, setPresentState] = useState("");
    const [presentPolice, setPresentPolice] = useState("");
  
    // add or remove in education
    const [education, setEducation] = useState([{ slno:"",qualify: "", institute: "", year: "" }]);
    const addEducation = () => {
      setEducation([...education, {slno: "",qualify:"", institute: "", year: "" }]);
    };
  
    const removeEducation = (index) => {
      const newEducation = [...education];
      newEducation.splice(index, 1);
      setEducation(newEducation);
    };


   
  const [formData, setFormData] = useState({
    role_id: 2,
    organizationtype_id: 1,
    organization_id: 1,
    name:"",
    up_image:"",
    religion:"",
    father_name:"",
    mother_name:"",
    gen:"",
    dob:"",
    age:"",
    bloodgroup:"",
    permanentAddress:"",
    permanentLandmark:"",
    permanentPincode:"",
    country:"",
    state:"",
    district:"",
    police:"",
    presentAddress:"",
    presentLandmark:"",
    presentPincode:"",
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
    kind_job:"",
    engaged_for:"",
    select_contractor:"",
    job_sub_category:"",
    regular_peri:"",
    inputList:[],
    

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
 gen,
 dob,
 age,
 bloodgroup,
 
 
 select_contractor,
 regular_peri,
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
kind_job,
engaged_for,
job_sub_category,


  } = formData;
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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


  // function handleGenderChange(event) {
  //   setGender(event.target.value);
  // }

//  //handleOptionChange1 = (e) => {
//     setSelectedOption(e.target.value);
//   };
  
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

  function handleFileChange(event) {
    const file = event.target.files[0];
    

    // Validate file type
    if (!['application/pdf', 'image/png','image/jpeg','image/jpg'].includes(file.type)) {
      alert('Please upload a PDF or PNG or jpeg or jpg file');
      return;
    }

    // Validate file size
    if (file.size > 2 * 1024 * 1024) {
      alert('Please upload a file smaller than 2MB');
      return;
    }

    // Proceed with file upload
    setU_adhar(file);

     // Read file contents and display preview
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    //console.log(`Selected gender: ${gender}`);
   

    try {
      const response = await axios.post(
        "http://localhost:3036/api/staff/staf_create/IndianStaff",
        formData
      );
      console.log(response.data);
      toast.success("Staff Add Successfully!!!");
      navigate('/liststaff');  
         // navigate("/login");
      // redirect to login page
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while creating the account.");
    }
};

//same as above
const handleSameAsPermanentChange = () => {
  setSameAsPermanent(!sameAsPermanent);

  if (!sameAsPermanent) {
    setPresentAddress(permanentAddress);
    setPresentLandmark(permanentLandmark);
    setPresentCountry(permanentCountry);
    setPresentState(permanentState);
    setPresentDistrict(permanentDistrict);
    setPresentPolice(permanentPolice);
    setPresentPincode(permanentPincode);
  } else {
    setPresentAddress("");
    setPresentLandmark("");
    setPresentCountry("");
    setPresentDistrict("");
    setPresentPincode("");
    setPresentState("");
    setPresentPolice("");
  }
};

const handlePermanentAddressChange = (event) => {
  setPermanentAddress(event.target.value);
  console.log(permanentAddress);
};
const handlePermanentLandmarkChange = (event) => {
  setPermanentLandmark(event.target.value);
};

const handlePermanentCountryChange = (event) => {
  setPermanentCountry(event.target.value);
};
const handlePermanentPincodeChange = (event) => {
  setPermanentPincode(event.target.value);
};
const handlePermanentDistrictChange = (event) => {
  setPermanentDistrict(event.target.value);
};


const handlePermanentStateChange = (event) => {
  setPermanentState(event.target.value);
};

const handlePermanentPoliceChange = (event) => {
  setPermanentPolice(event.target.value);
};





const handlePresentAddressChange = (event) => {
  setPresentAddress(event.target.value);
};
const handlePresentLandmarkChange = (event) => {
  setPresentLandmark(event.target.value);
};

const handlePresentCountryChange = (event) => {
  setPresentCountry(event.target.value);
};
const handlePresentPincodeChange = (event) => {
  setPresentPincode(event.target.value);
};
const handlePresentDistrictChange = (event) => {
  setPermanentDistrict(event.target.value);
};
const handlePresentStateChange = (event) => {
  setPresentState(event.target.value);
};

const handlePresentPoliceChange = (event) => {
  setPresentPolice(event.target.value);
};


const handleFormSubmit = (event) => {
  handleSubmit(event);
  handleSameAsPermanentChange(event);
  
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
                          
              <form onSubmit={handleFormSubmit}> 
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
                          name="name" 
                          id=" name" 
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

  {/* <div className="col-md-4 mt-2">
  <label  htmlFor="gen" className="text">Gender</label><span className="text-danger">*</span>
        <br/>
      <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
      <label>Male</label>
      <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
      <label>Female</label>
      <input type="radio" name="gender" value="transgender" checked={gender === 'transgender'} onChange={handleGenderChange} />
      <label>Transgender</label>
        </div>  */}

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
                            <label htmlFor="permanentAddress" className="text">Address</label><span className="text-danger">*</span>
                              <textarea
                             
                              id="permanentAddress"
                              name="permanentAddress"
                              value={permanentAddress}
                              onChange={handlePermanentAddressChange}
                              placeholder="Address"  
                              style={{height: '10px', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                               required 
                               />
                           
                          </div>
                          <div className="col-md-3 mt-2">
                            <label htmlFor="permanentLandmark" className="text"> Nearest Landmark</label><span className="text-danger">*</span>
                            <input 
                            type="text"
                            id="permanentLandmark" 
                            name="permanentLandmark" 
                            value={permanentLandmark} 
                            onChange={handlePermanentLandmarkChange}
                            placeholder="Landmark"  
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                            required/>
                          </div>
                        <div className="col-md-4 mt-2">
                          <label  htmlFor="permanentPincode" className="text">PIN code</label><span className="text-danger">*</span>
                          <input 
                          type="text"  
                          name="permanentPincode"
                          id="permanentPincode"
                          value={permanentPincode} 
                            onChange={handlePermanentPincodeChange}
                          maxLength={6}   
                          placeholder="PIN code"
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required />
                        </div>
                        <div className="col-md-3 mt-2">
                            <label htmlFor="permanentCountry" className="text">Country</label><span className="text-danger">*</span>
                            <select 
                            id="permanentCountry" 
                            name="permanentCountry"
                            value={permanentCountry} 
                            onChange={handlePermanentCountryChange}
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required >
                              <option value disabled selected>Select Country</option>
                            </select>
                          </div>
                          <div className="col-md-3 mt-2">
                            <label htmlFor="permanentState" className="text">State</label><span className="text-danger">*</span>
                            <select 
                            id="permanentState" 
                            name="permanentState"
                            value={permanentState} 
                            onChange={handlePermanentStateChange}
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required > 
                            <option value disabled selected>Select State</option>
                            </select>
                          </div>
                          <div className="col-md-3 mt-2">
                            <label htmlFor="permanentDistrict" className="text">District</label><span className="text-danger">*</span>
                            <select 
                            id="permanentDistrict" 
                            name="permanentDistrict"
                            value={permanentDistrict} 
                            onChange={handlePermanentDistrictChange}
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required >
                            <option value disabled selected>Select District</option>
                            </select>
                          </div>
                          <div className="col-md-3 mt-2">
                            <label htmlFor="permanentPolice" className="text">PS</label><span className="text-danger">*</span>
                            <select 
                             id="permanentPolice" 
                             name="permanentPolice"
                             value={permanentPolice} 
                             onChange={handlePermanentPoliceChange}  
                             style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                             required>
                              <option value disabled selected>Select PS</option>
                            </select>
                          </div>
                        <br />
                        
                        <h6 className="fw-bold mt-3">Present Address:</h6><hr />
                        <label>
        Same as Permanent Address:
        <input
          type="checkbox"
          checked={sameAsPermanent}
          onChange={handleSameAsPermanentChange}
        />
      </label>
      <br/>
                        <div className="col-md-12">
       
      
                        {/* <div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="sameas"
    checked={sameAsPermanent}
    onClick={handleSameAsPermanent}
  />
  <label className="form-check-label" htmlFor="sameas">
    Same As Permanent Address
  </label>
  
</div> */}

                          <div className="col-md-12">
                            <label htmlFor="presentAddress" className="text" >Address</label><span className="text-danger">*</span>
                            <textarea 
                              id="presentAddress"
                              name="presentAddress" 
                              value={presentAddress}
                              onChange={handlePresentAddressChange}
                              disabled={sameAsPermanent}
                              placeholder="Enter your address..."   
                              style={{height: '10px', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                           </div>
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="presentLandmark" className="text"> Nearest Landmark</label><span className="text-danger">*</span>
                            <input 
                            type="text"
                            id="presentLandmark" 
                            name="presentLandmark" 
                            value={presentLandmark}
                              onChange={handlePresentLandmarkChange}
                              disabled={sameAsPermanent}
                            placeholder="Landmark"  
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                          </div>
                        <div className="col-md-4">
                          <label htmlFor="presentPincode" className="text">PIN code</label><span className="text-danger">*</span>
                          <input 
                          type="text" 
                          name="presentPincode" 
                          id="presentPincode"
                          value={presentPincode}
                          onChange={handlePresentPincodeChange}
                          disabled={sameAsPermanent}
                          maxLength={6}   
                          placeholder="PIN code"  
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                          required/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="presentCountry" className="text">Country</label><span className="text-danger">*</span>
                            <select 
                            id="presentCountry" 
                            name="presentCountry" 
                            value={presentCountry}
                            onChange={handlePresentCountryChange}
                            disabled={sameAsPermanent}
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
                            value={presentState}
                            onChange={handlePresentStateChange}
                            disabled={sameAsPermanent}
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required>
                            <option value disabled selected>Select State</option>
                            </select>
                          </div>
                          <div className="col-md-4 ">
                            <label htmlFor="presentDistrct" className="text">District</label><span className="text-danger">*</span>
                            <select 
                            id="presentDistrct" 
                            name="presentDistrct"
                            value={presentDistrct}
                            onChange={handlePresentDistrictChange}
                            disabled={sameAsPermanent}
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required
                            ><option value disabled selected>Select District</option>
                            </select>
                          </div>
                       
                       
                        <div className="col-md-4 ">
                          <label htmlFor="presentPolice" className="text">Police Station</label><span className="text-danger">*</span>
                          <select   
                          name="presentPolice" 
                          id="presentPolice"
                          value={presentPolice}
                          onChange={handlePresentPoliceChange}
                          disabled={sameAsPermanent} 
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
                          value={inputValues.email}
                          onChange={handleEmailChange} 
                          placeholder="Email" 
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required    />
                        {emailError && (
          <small className="text-danger"><i>{emailError}</i></small>
        )}
                        </div>
                        <div className="col-md-4">
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
  {mobileError && <small className="text-danger" ><i>{mobileError}</i></small>}
</div>
                        <div className="col-md-4">
                          <label htmlFor="landline" className="text" >Landline</label>
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
                          maxLength={12}  
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
                          maxLength={12}  
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
                        {/* <div className="col-12">
                          <div className="table-responsive">
                            <table className="table table-light mb-0">
                               <tbody id="educational">
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
                             
                                <tr>
                                

                                 {education.map((edu, index) => (
                                    <div key={index}>
                                       <td >
                                        <input
                                        type="text"
                                        placeholder="Slno"
                                        id="slno"
                                        name="slno" 
                                        value={edu.slno}
                                        onChange={(e) =>
                                       setEducation((prev) => [
                                      ...prev.slice(0, index),
                                      { ...prev[index], slno: e.target.value },
                                      ...prev.slice(index + 1),
                                              ])
                                      }
                                      style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                     required/> */}
                                      
                                    {/* <input 
                                     type="text" 
                                     id="slno"
                                     name="slno" 
                                     value={slno}
                                     onChange={handleInputChange} 
                                     placeholder="Sl.No."  
                                     style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                     required/> */}
                                  {/* </td> */}
                                  {}
                                  {/* <td >
                                    <select
           id="qualify"
           name="qualify" 
            placeholder="Qualify"
            value={edu.qualify}
            onChange={(e) =>
              setEducation((prev) => [
                ...prev.slice(0, index),
                { ...prev[index], qualify: e.target.value },
                ...prev.slice(index + 1),
              ])
            }
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
            required>
              <option value disabled selected>Select qualification</option>
              </select> */}
        
                                    {/* <select 
                                    id="qualify"
                                    name="qualify" 
                                    value={qualify}
                                    onChange={handleInputChange} 
                                    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required>
                                      <option value disabled selected>Select qualification</option>
                                      </select> */}
                                  {/* </td> */}
                                  {}
                                  {/* <td width="18%">
                                     <input
                                      type="text"
                                      id="institute"
                                      name="institute" 
                                      placeholder="Institute"
                                      value={edu.institute}
                                      onChange={(e) =>
                                     setEducation((prev) => [
                                      ...prev.slice(0, index),
                                      { ...prev[index], institute: e.target.value },
                                      ...prev.slice(index + 1),
                           ])
            }
                         style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                                       required 
                                           /> */}
          {/*                         <input 
                                   type="text"
                                     id="institute"
                                   name="institute" 
                                   value={institute}
                                    onChange={handleInputChange} 
          //                           placeholder="Institution" 
          //                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
          //                            required 
          //                            /> */}
                                  {/* </td> */}
                                  {}
                                  {/* <td >
                                       <select
                                       type="text"
                                       id="year"
                                       name="year" 
                                       placeholder="Year of Completion"
                                       value={edu.year}
                                       onChange={(e) =>
                                       setEducation((prev) => [
                                       ...prev.slice(0, index),
                                       { ...prev[index], year: e.target.value },
                                      ...prev.slice(index + 1),
                                        ])
                                       }
                                       style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required >
                                      <option value disabled selected>Select year</option>
                                      </select> */}
          
                                    {/* <select 
                                    id="year"
                                    name="year" 
                                    value={year}
                                    onChange={handleInputChange} 
                                    placeholder="year" 
                                    style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                                    required >
                                      <option value disabled selected>Select year</option>
                                      </select> */}
                                  {/* </td> */}
                                  {/* // <td>
                                  //   <span onclick="add()"><button type="button" className="btn btn-outline-success radius-30">Add</button></span>
                                  // </td>   */}
                                  {/* <button onClick={() => removeEducation(index)}>Remove</button>
                                  </div>
                                ))}
                                <button onClick={addEducation}>Add Education</button>
                                                                                        
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div> */}
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
                                  
      <input type="file" onChange={handleFileChange} />
      {u_adhar && (
        <div>
          <p>Selected file: {u_adhar.name}</p>
          {u_adhar.type === 'image/png' || u_adhar.type === 'image/jpeg' || u_adhar.type === 'image/jpg' ? (
            <img src={preview} alt="Selected file preview"style={{ maxWidth: '50%', maxHeight: '50px' }} />
          ) : (
            <embed src={preview} type={u_adhar.type} width="50%" height="100px" />
          )}
        </div>
      )}
    
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
  //value={emp_type}
  //onChange={handleInputChange}    
  style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
  value={selectedOption} onChange={(e) => {
    setSelectedOption(e.target.value);
    handleOptionChange(e.target.value);
  }} 
 
 

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
                         <label htmlFor="select_contractor" className="text">Select Contractor</label><span className="text-danger">*</span>
            <select
                name="select_contractor" 
                id="select_contractor" 
                value={select_contractor}
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
                          <label className="text">Verification Type</label><br />&nbsp;
                          <input className="form-check-input verifyModal" type="radio" data-bs-toggle="modal" data-bs-target="#verifyModal" aria-expanded="false" defaultValue="self" name="verification" id="sameas1" onclick="sameAs()" />
                          <label className="form-check-label" htmlFor="sameas1">Self Verified</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input className="form-check-input verifyModal" type="radio" data-bs-toggle="modal" data-bs-target="#verifyModal" aria-expanded="false" defaultValue="ps" name="verification" id="sameas2" onclick="sameAs()" />
                          <label className="form-check-label" htmlFor="sameas2">Required to Verify</label> 
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

     