import React, { useState ,useEffect } from "react";
import Navbar from "./Navbar";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

import "./Profile.css";
const Profile=()=>{
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [country_id, setCountryId] = useState('');
  const [states, setStates] = useState([]);
    const [formData, setFormData] = useState({
        role_id: 2,
        Org_Name: "",
        O_Email : "",
        Director_Name : "",
        country:"",
        state:"",
        District:"",
        Police_station:"",
        Landmark:"",
        po:"",
        Pin_Code:"",
        message:"",
        Cp_name:"",
        email:"",
        phone_Number:"",
        Landline:"",
        Fax:"",
        cctv:"",
        install:"",
        entity:"",
        sizeorg:"",
        orgcat:"",
        aadhar:"",
        aadhar_copy:"",
        pan:"",
        pan_copy:"",
        trdno:"",
        expiry:"",
        issu:"",
        trade:"",
        uaadhar:"",
        U_aadhar_copy:"",
        gst:"",
        gs_copy:"",esi:"",esi_copy:"",epf:"",epf_copy:"",fln:"",ta:"",lexp:"",fl_copy:"",cte:"",cte_copy:"",cos:"",cos_copy:"",
      });
    
      const {
        role_id,
        Org_Name,
        O_Email ,
        Director_Name,
        country,
        state,
        District,
        Police_station  ,
        Landmark  ,
        po  ,
        Pin_Code  ,
        message  ,
        Cp_name  ,
        email  ,
        phone_Number  ,
        Landline  ,
        Fax  ,
        cctv  ,
        install  ,
        entity  ,
        sizeorg  ,
        orgcat  ,
        aadhar  ,
        aadhar_copy  ,
        pan  ,
        pan_copy  ,
        trdno  ,
        expiry  ,
        issu  ,
        trade  ,
        uaadhar  ,
        U_aadhar_copy  ,
        gst  ,
        gs_copy  ,esi  ,esi_copy  ,epf  ,epf_copy  ,fln  ,ta  ,lexp  ,fl_copy  ,cte  ,cte_copy  ,cos  ,cos_copy  ,
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
            "",
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

    

  
    
      useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('http://localhost:3036/api/superadmin/countries');
            setCountries(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchCountries();
      }, []);
    
      const handleCountryChange = (event) => {
        const selectedCountryId = event.target.value;
        setCountryId(selectedCountryId);
      };
    
    return (
        <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/>            

<div className="body_right">
  <div className="inside">
    <div className="right_body_pagenation">
      <p> ADD PROFILE</p>
    </div>
    <div className="right_body_section">
      {/*--content here--*/}
<div className="container">

  <div className="row">
          <div className="col-xl-12 mx-12">        
          <div className="card-body">
            <h6 className="mb-0 ">My Account</h6>
            
            <hr />
      <form onSubmit={handleSubmit}>
      <div className="p-4 border rounded">
      <center><h4 className="mb-0">Update Information</h4></center>
      <hr />
      <div className="row">
          <div className="col-md-3">
            <label htmlFor="Org_Name" className="text"> Organization Name</label><span className="text-danger">*</span>
                 
          <input
            type="text"
             
            id="Org_Name"
            name="Org_Name"
            value={Org_Name}
            onChange={handleInputChange}
            placeholder="Enter the Name "
            
            
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
               
            required
          />
 </div>
 
          <div className="col-md-3">
          <label htmlFor="O_Email" className="text"> Organization E-mail</label><span className="text-danger">*</span>
          <input
            type="email"
            id="O_Email"
            name="O_Email"
            value={O_Email}
            onChange={handleInputChange}
            
            placeholder="E-Mail "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          /></div>
 <div className="col-md-6"> 
          <label htmlFor="Director_Name" className="text">Partner/Proprietor/Director Name</label> <span className="text-danger">*</span>
          <input
            type="text"
            id="Director_Name"
            name="Director_Name"
            value={Director_Name}
            onChange={handleInputChange}
            
            placeholder="Proprieter name"
            
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
              
            required
          />
        </div></div>
        <div className="row">
          <div className="col-md-3">
          <label htmlFor="country" className="text">Country</label><span className="text-danger">*</span>
        <select name="country"
         onChange={(e) => handleCountryChange(e)}
           style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required>
          <option>Select Country</option>
          {countries.map((country) => (
            <option key={country.country_id} value={country.country_id}>{country.country_name}</option>
          ))}
        </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className="text">State</label><span className="text-danger">*</span>
          <select 
          id="state"
          name="state"
          value={state}
        
          onChange={handleInputChange}
          
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          ><option value disabled selected>Select State</option></select>
        </div>
        <div className="col-md-3">
          <label htmlFor="District" className="text">District</label><span className="text-danger">*</span>
          <select 
          id="District"
          name="District"
          value={District}
          onChange={handleInputChange}
          
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          ><option value disabled selected>Select Distict</option></select>
        </div>
        <div className="col-md-3">
          <label htmlFor="Police_station" className="text">Police Station</label><span className="text-danger">*</span>
          <select 
          id="Police_station"
          name="Police_station"
          value={Police_station}
          onChange={handleInputChange}
          
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          ><option value disabled selected>Select Police Station</option></select>
       
        </div></div>
        <br/>
      
        <div className="row">
          <div className="col-md-4">
          <label htmlFor="Landmark" className="text">Landmark</label><span className="text-danger">*</span>
          <input
            type="text"
            id="Landmark"
            name="Landmark"
            value={Landmark}
            onChange={handleInputChange}
            
            
            placeholder="Landmark"
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="po" className="text">Post Office</label>
          <input
            type="text"
            id="po"
            name="po"
            value={po}
            onChange={handleInputChange}
            
            
            placeholder="Post Office "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="Pin_Code" className="text">PIN Code</label>
          <input
            type="text"
            id="Pin_Code"
            name="Pin_Code"
            value={Pin_Code}
            onChange={handleInputChange}
            
            placeholder="PIN Code "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div></div>
         <div className="row">
        <div className="col-md-12">
        <label htmlFor="message" className="text">Address</label>
        <textarea 
        id="message" 
        name="message"
        value={message}
        onChange={handleInputChange}
         placeholder="Enter your Address..." 
        style={{height: '60px', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}} 
        required  />
      </div>
      </div>
      <br/>
      <center><h4 className="mb-0">Contact Details</h4></center>
      <hr />
      <div className="row">
          <div className="col-md-4">
            <label htmlFor="Cp_name" className="text"> Contact Person Name</label><span className="text-danger">*</span>
                 
          <input
            type="text"
             
            id="Cp_name"
            name="Cp_name"
            value={Cp_name}
            onChange={handleInputChange}
            placeholder="Enter the Name "
            
            
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
               
            required
          />
 </div>
 
          <div className="col-md-4">
          <label htmlFor="email" className="text">  E-mail</label><span className="text-danger">*</span>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            
            placeholder="E-Mail "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          /></div>
         <div className="col-md-4">
          <label htmlFor="phone_Number" className="text">Phone Number</label>
          <input
            type="number"
            id="phone_Number"
            name="phone_Number"
            value={phone_Number}
            maxLength={10}
            onChange={handleInputChange}
            
            placeholder="Phone Number "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          /></div>
          </div>
            <div className="row">
 <div className="col-md-6">
          <label htmlFor="Landline" className="text">Landline</label>
          <input
            type="number"
            id="Landline"
            name="Landline"
            value={Landline}
            onChange={handleInputChange}
            
            placeholder="Landline"
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          /></div>
        
        
 <div className="col-md-6">
          <label htmlFor="Fax" className="text">FAX</label>
          <input
            type="text"
            id="Fax"
            name="Fax"
            value={Fax}
            onChange={handleInputChange}
            
            placeholder="FAX "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          /></div>
 </div>
       <br></br> 
 <center><h4 className="mb-0">CCTV Details</h4></center>
  <hr />

        <div className="row">
        <div className="col-md-6">
          <label  htmlFor="cctv" className="text">No of CCTV camera</label><span className="text-danger">*</span>
          <input
          
            type="text"
            id="cctv"
            name="cctv"
            value={cctv}
            onChange={handleInputChange}
            
            placeholder="Enter no. of cctv camera "
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label   htmlFor="install" className="text">Date of Installation</label><span className="text-danger">*</span>
          
          <input
            type="date"
            id="install"
            name="install"
            value={install}
            onChange={handleInputChange}
          
            placeholder="Date of installation"
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div></div>
        <br></br>
        <center><h4 className="mb-0">Other Details</h4></center>
        <hr />

 <div className="row">
          <div className="col-md-4">
          <label htmlFor="entity" className="text">Type of Organization/Entity</label><span className="text-danger">*</span>
          <select 
          id="entity"
          name="entity"
          value={entity}
          onChange={handleInputChange}
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          ><option value disabled selected>Select Type of Organization/Entity</option></select>
        </div>
        <div className="col-md-4">
          <label htmlFor="sizeorg" className="text">Size of Organization</label><span className="text-danger">*</span>
          <select 
          id="sizeorg"
          name="sizeorg"
          value={sizeorg}
          onChange={handleInputChange}
          
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          ><option value disabled selected>Select Size</option></select>
        </div>
        <div className="col-md-4">
          <label htmlFor="orgcat" className="text">Organization Category</label><span className="text-danger">*</span>
          <select 
          id="orgcat"
          name="orgcat"
          value={orgcat}
          onChange={handleInputChange}
          
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          ><option value disabled selected>Select category</option></select>
        </div>


</div>
<br/>
<div className="row">
<div className="col-md-6">
          <label  htmlFor="aadhar"className="text">Aadhar No.</label><span className="text-danger">*</span>
          
          <input
            type="number"
            id="aadhar"
            name="aadhar"
            value={aadhar}
            onChange={handleInputChange}
          
            placeholder="Aadhar no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="aadhar_copy" className="text"> Upload Aadhar Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="aadhar_copy"
            name="aadhar_copy"
            value={aadhar_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>

</div>

<div className="row">
<div className="col-md-6">
          <label   htmlFor="pan" className="text">PAN No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="pan"
            name="pan"
            value={pan}
            onChange={handleInputChange}
          
            placeholder="PAN no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="pan_copy" className="text"> Upload PAN Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="pan_copy"
            name="pan_copy"
            value={pan_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>

</div>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="trdno" className="text"> Trade Lisence No.</label><span className="text-danger">*</span>
                 
          <input
            type="text"
             
            id="trdno"
            name="trdno"
            value={trdno}
            onChange={handleInputChange}
            placeholder=""
            
            
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
               
            required
          />
 </div>
            <div className="col-md-3">
            <label htmlFor="expiry" className="text"> Lisence Expiry Date</label><span className="text-danger">*</span>
                 
          <input
            type="date"
             
            id="expiry"
            name="expiry"
            value={expiry}
            onChange={handleInputChange}
            placeholder=" "
            
            
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
               
            required
          />
           </div>
           <div className="col-md-3">
            <label htmlFor="issu" className="text">Issued By </label><span className="text-danger">*</span>
                 
          <input
            type="text"
             
            id="issu"
            name="issu"
            value={issu}
            onChange={handleInputChange}
            placeholder="Enter the Name "
            
            
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
               
            required
          />
 </div>

 <div className="col-md-3">
          <label htmlFor="trade" className="text"> Upload Trade License Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="trade"
            name="trade"
            value={trade}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>

          </div>
          <div className="row">
<div className="col-md-6">
          <label  htmlFor="uaadhar" className="text"> UDYOG Aadhar No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="uaadhar"
            name="uaadhar"
            value={uaadhar}
            onChange={handleInputChange}
          
            placeholder="Aadhar no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="U_aadhar_copy" className="text"> Upload  UDYOG Aadhar Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="U_aadhar_copy"
            name="U_aadhar_copy"
            value={U_aadhar_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>
        <div className="row">
<div className="col-md-6">
          <label  htmlFor="gst"className="text"> GST No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="gst"
            name="gst"
            value={gst}
            onChange={handleInputChange}
          
            placeholder="Aadhar no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="gs_copy"className="text"> Upload  GST Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="gs_copy"
            name="gs_copy"
            value={gs_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>
        <div className="row">
<div className="col-md-6">
          <label  htmlFor="esi" className="text"> ESI No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="esi"
            name="esi"
            value={esi}
            onChange={handleInputChange}
          
            placeholder="Aadhar no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="esi_copy"className="text"> Upload  ESI Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="esi_copy"
            name="esi_copy"
            value={esi_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="epf" className="text"> EPF A/C No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="epf"
            name="epf"
            value={epf}
            onChange={handleInputChange}
          
            placeholder="Aadhar no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="epf_copy"className="text"> Upload EPF Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="epf_copy"
            name="epf_copy"
            value={epf_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>
    

        <div className="row">
      <div className="col-md-4">
          <label htmlFor ="fln" className="text">Fire License No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="fln"
            name="fln"
            value={fln}
            onChange={handleInputChange}
          
            placeholder="Fire License No."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-4">
          <label  htmlFor="lexp" className="text"> License Expiry Date</label><span className="text-danger">*</span>
          
          <input
            type="date"
            id="lexp"
            name="lexp"
            value={lexp}
            onChange={handleInputChange}
          
            placeholder=""
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-4">
          <label   htmlFor="fl_copy" className="text"> Upload Fire License Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="fl_copy"
            name="fl_copy"
            value={fl_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>

        <div className="row">
        <div className="col-md-6">
          <label htmlFor="cte" className="text"> Consent to Establish From SPCB</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="cte"
            name="cte"
            value={cte}
            onChange={handleInputChange}
          
            placeholder="Aadhar no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label className="text"> Upload Consent Establish Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="cte_copy"
            name="cte_copy"
            value={cte_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>
    
        <div className="row">
        <div className="col-md-6">
          <label  htmlFor="cos" className="text"> Consent to Operate From SPCB</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="cos"
            name="cos"
            value={cos}
            onChange={handleInputChange}
          
            placeholder="Aadhar no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label  htmlFor=" cos_copy" className="text"> Upload Consent Operate Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="cos_copy"
            name="cos_copy"
            value={cos_copy}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>
<div className="row">
        <div className="col-md-12">
          <label  htmlFor="ta" className="text"> Type of Activity</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="ta"
            name="ta"
            value={ta}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>
    



        </div>
<br/>
        <div style={{textAlign: 'left'}}>
      <button type="submit">Save Changes</button>
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
};

export default Profile;