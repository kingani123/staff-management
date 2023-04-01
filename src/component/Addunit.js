import React, { useState } from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";
import "./Addforiegn.css";
import axios from "axios";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom;

const Addunit =()=>{
  const [selectedOption, setSelectedOption] = useState('');

  const [formData, setFormData] = useState({
    role_id: 2,
    organizationtype_id: 1,
    organization_id: 1,
    unit:"",
    count:"",
    stat:"",
    dist:"",
    station:"",

  });
  const {
    role_id,
    organizationtype_id,
    organization_id,
    unit,
    count,
    stat,
    dist,
    station,

  } = formData;
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    //console.log(`Selected gender: ${gender}`);
   

    try {
      const response = await axios.post(
        "",
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
    return (
      <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/>            

<div className="body_right">
  <div className="inside">
    <div className="right_body_pagenation">
      <p> Add Unit Details</p>
    </div>
    <div className="right_body_section">
      {/*--content here--*/}





<div className="container">

  <div className="row">
    
      <div className="col-xl-12 mx-12">        
                <div className="card-body">
            <h6 className="mb-0 ">ADD UNIT DETAILS</h6>
            <hr />
            <div className="p-4 border rounded">
              <form onSubmit={handleSubmit}>
             <div className="row">
              <div className="col-md-12">
                            <label htmlFor="unit" className="text">Unit Name</label><span className="text-danger">*</span>
                            <input
                            type="text"
                            name="unit"
                            id="unit" 
                            value={unit}
                            onChange={handleInputChange}
                            placeholder="Enter unit Name"
                             style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                             required/>
                          </div>
                            </div> 
                <div className="row">
                <div className="col-md-3">
                            <label htmlFor="count" className="text">Country</label><span className="text-danger">*</span>
                            <select 
                            id="count" 
                            name="count" 
                            value={count}
                            onChange={handleInputChange}
                            placeholder="select country" 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required 
                            ><option value disabled selected>Select Country</option>
                             <option value="B-">usa</option>
                                                    <option value="AB+">india</option>
                            </select>
                            </div>
                            <div className="col-md-3">
                            <label htmlFor="stat" className="text">State</label><span className="text-danger">*</span>
                            <select 
                            id="stat" 
                            name="stat" 
                            value={stat}
                            onChange={handleInputChange} 
                            placeholder="select state" 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required >
                             <option value disabled selected>Select state</option>
                             <option value="B-">westbengal</option>
                            <option value="AB+">maharastra</option>
                             </select>
                            </div>
                            <div className="col-md-3 ">
                            <label htmlFor="dist" className="text">District</label><span className="text-danger">*</span>
                            <select 
                            id="dist" 
                            name="dist"
                            value={dist}
                            onChange={handleInputChange} 
                            placeholder="select district" 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required
                              >
                               <option value disabled selected>Select district</option>
                               <option value="B-">nadia</option>
                               <option value="AB+">north 24 pgs</option>
                               </select>
                              </div>
                              <div className="col-md-3 ">
                          <label htmlFor="station" className="text">Police Station</label><span className="text-danger">*</span>
                          <select   
                          name="station" 
                          id="station"
                          value={station}
                          onChange={handleInputChange} 
                          placeholder="Select"   
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required  >
                           <option value ="aa">Select </option>
                           <option value="B-">nadia</option>
                               <option value="AB+">north 24 pgs</option>
                           </select>
                          </div>
                </div>
                <div className="col-12">
                  <div id="appdiv">
                  </div>
                  
                </div>
                <br/>
                <div className="col-12">
                  <button type="submit" className="btn btn-success px-5"> Submit</button>                           
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  </div></div></div>
  </div>
      </div>
      </div>

  );
     }
     export default Addunit;