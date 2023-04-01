import React, { useState } from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";
import "./Addforiegn.css";
import axios from "axios";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom;

const Addcontract =()=>{
  const [selectedOption, setSelectedOption] = useState('');

  const [formData, setFormData] = useState({
    role_id: 2,
    organizationtype_id: 1,
    organization_id: 1,
    contractor_type:"",
    count:"",
    stat:"",
    dist:"",
    station:"",
    address:"",
    company_name:"",
    prop_name:"",
    partner_name:"",
    Director_name:"",
    aadhar:"",
    aadhar_copy:"",
    trdno:"",
    expiry:"",
    issu:"",
    trade:"",
    pan:"",
    pan_copy:"",
    gst:"",
    gs_copy:"",
    esi:"",
    esi_copy:"",
    epf:"",
    epf_copy:"",
    din:"",
    up_din:"",
    cin:"",
    landmark:"",
    post_office:"",
    pin_code:"",

  });
  const {
  role_id,
  organizationtype_id,
  organization_id,
  contractor_type,
  count,
  stat,
  dist,
  station,
  address,
  company_name,
  prop_name,
  partner_name,
  Director_name,
  aadhar,
  aadhar_copy,
  trdno,
  expiry,
  issu,
  trade,
  pan,
  pan_copy,
  gst,
  gs_copy,
  esi,
  esi_copy,
  epf,
  epf_copy,
  din,
  up_din,
  cin,
  landmark,
  post_office,
  pin_code,
  } = formData;
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // function handleGenderChange(event) {
  //   setGender(event.target.value);
  // }

  const handleOptionChange1 = (e) => {
    setSelectedOption(e.target.value);
  };
 
  const [showField, setShowField] = useState(false);
  const [showField1, setShowField1] = useState(false);
  const [showField2, setShowField2] = useState(false);
  const [showField3, setShowField3] = useState(false);
  function handleOptionChange(option) {
    if (option === 'inv') {
      setShowField(true);
    } else {
      setShowField(false);}
  if (option === 'pat' ) {
     setShowField1(true);
    } else {
      setShowField1(false);
    }
    if (option === 'pvt' || option === 'pub' ) {
      setShowField2(true);
     } else {
       setShowField2(false);
     }
     if (option === 'ab' ) {
      setShowField3(true);
     } else {
       setShowField3(false);
     }
  }

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
      <p> Add Contract Details</p>
    </div>
    <div className="right_body_section">
      {/*--content here--*/}
      
     

  
        <div className="container">

            
              <div className="row">
                  <div className="col-xl-12 mx-12">        
                    <div className="card-body">
                      <h6 className="mb-0 ">ADD CONTRACTOR DETAILS</h6>
                      <hr />
                      <div className="p-4 border rounded">
                        <form onSubmit={handleSubmit}>
                          <div className="row">                  
                        <div className="col-md-12">
                            <label htmlFor="contractor_type" className="text">Contractor Type</label><span className="text-danger">*</span>
                            <select 
                            id="contractor_type" 
                             style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                value={selectedOption} onChange={(e) => {
                  setSelectedOption(e.target.value);
                  handleOptionChange(e.target.value);
                }} 
                   required >
                              <option value="ab" >Select Option</option>
                              <option value="inv">Individual</option>
                           <option value="pat">Partnership</option> 
                           <option value="pvt">PVT.LTD.</option> 
                           <option value="pub">Public.LTD.</option>
                            </select>
                          </div>
                          </div> 
                          <div className="row">
                          <div className="col-md-12">
                            <h5 className="display-7 mt-2">Address Details</h5>
                            <div className="my-3 border-top" />
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
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required 
                            ><option value disabled selected>Select Country</option>
                             <option value="direct">Direct 11</option>
                             <option value="contractual">Contractual</option> 
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="stat" className="text">State</label><span className="text-danger">*</span>
                            <select 
                            id="stat" 
                            name="stat" 
                            value={stat}
                            onChange={handleInputChange} 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required>
                            <option value disabled selected>Select State</option>
                            <option value="direct">Direct</option>
                            <option value="contractual">Contractual</option> 
                            </select>
                          </div>
                          <div className="col-md-3 ">
                            <label htmlFor="dist" className="text">District</label><span className="text-danger">*</span>
                            <select 
                            id="dist" 
                            name="dist"
                            value={dist}
                            onChange={handleInputChange}   
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required
                            ><option value disabled selected>Select District</option>
                             <option value="direct">Direct</option>
                             <option value="contractual">Contractual</option> 
                            </select>
                          </div>
                       
                       
                        <div className="col-md-3 ">
                          <label htmlFor="station" className="text">Police Station</label><span className="text-danger">*</span>
                          <select   
                          name="station" 
                          id="station"
                          value={station}
                          onChange={handleInputChange}    
                          style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                          required  >
                            <option value disabled selected>Select PS</option>
                            <option value="inv">Individual</option>
                           <option value="pat">Partnership</option> 
                           <option value="pvt">PVT.LTD.</option> 
                           <option value="pub">Public.LTD.</option>
                          </select>
                        </div>
                          
                         </div>

<br/>

                         <div className="row">
                         
                          <div className="col-md-4">
                            <label  htmlFor="landmark" className="text">Landmark</label><span className="text-danger">*</span>
                            <input 
                            type="text" 
                            placeholder="Landmark" 
                            
                            id="landmark" 
                            name="landmark"
                            value={landmark} 
                            onChange={handleInputChange}
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                            required/>
                          </div>
                          <div className="col-md-4">
                            <label  htmlFor="post_office" className="text">Post Office</label><span className="text-danger">*</span>
                            <input 
                            type="text" 
                            placeholder=" Enter Post Office" 
                            id="post_office" 
                            name="post_office"
                            value={post_office}
                            onChange={handleInputChange}  
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}}
                            required />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="pin_code" className="text">Pin Code</label><span className="text-danger">*</span>
                            <input 
                            type="text" 
                            placeholder=" Enter Pin Code" 
                            id="pin_code" 
                            name="pin_code"
                            value={pin_code}
                            onChange={handleInputChange}  
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                            required/>
                          </div> 
                          </div>
                          <div className="row">
                           
                          <div className="col-md-12">
                            <label htmlFor="address" className="text" >Address</label><span className="text-danger">*</span>
                            <textarea 
                              id="address"
                              name="address" 
                              value={address}
                              onChange={handleInputChange}  
                              placeholder="Enter your address..."   
                              style={{height: '10px', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} />
                           </div>
                          </div>


                  <div className="row">
                   <div className="col-md-12">

                     <h5 className="display-7 mt-2">Other Details</h5>
                            <div className="my-3 border-top" />
                          </div>
                        </div>
             
                       <div className="row"> 
                   
    <div className="col-md-6">
                            <label htmlFor="company_name" className="text">Company name</label><span className="text-danger">*</span>
                            <input 
                            type="text" 
                         
                            id="company_name" 
                            name="company_name"
                            value={company_name}
                            onChange={handleInputChange} 
                            placeholder="Enter company name" 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                            required/>
                          </div>                          
                         

  {showField && (<>                {/* dependency */}
                          <div className="col-md-6">
                            <label htmlFor="prop_name" className="text">Proprieter name</label><span className="text-danger">*</span>
                            <input 
                            type="text" 
                         
                            id="prop_name" 
                            name="prop_name"
                            value={prop_name}
                            onChange={handleInputChange} 
                            placeholder="Enter company name" 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                            required/>
                          </div>  

                          </> )}
  {showField1 && (<>         <div className="col-md-6">
                            <label htmlFor="partner_name" className="text">Partners Name</label><span className="text-danger">*</span>
                            <input 
                            type="text" 
                         
                            id="partner_name" 
                            name="partner_name"
                            value={partner_name}
                            onChange={handleInputChange} 
                            placeholder="Enter company name" 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                            required/>
                          </div>  
     </> )}
     {showField2 && (<>   <div className="col-md-6">
                            <label htmlFor="Director_name" className="text">Director Name</label><span className="text-danger">*</span>
                            <input 
                            type="text" 
                         
                            id="Director_name" 
                            name="Director_name"
                            value={Director_name}
                            onChange={handleInputChange} 
                            placeholder="Enter company name" 
                            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver',backgroundColor: 'transparent'}} 
                            required/>
                          </div>    
                        
    </> )}
                          
                          </div>
<br/>

                           <div className="col-md-12">
                            <h5 className="text-center display-7 mt-2"> N.B. FILE MUST BE JPG,JPEG,PDF OR PNG,LESS THAN 2MB</h5>
                            <div className="my-3 border-top" />
                          </div>
                          
          
                         

<div className="row">
<div className="col-md-6">
          <label  htmlFor="aadhar"className="text">Aadhar No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
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
          <label htmlFor="aadhar_copy" className="text"> Upload Aadhar </label><span className="text-danger">*</span>
          
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
          <div className="col-md-3">
            <label htmlFor="trdno" className="text"> Trade Lisence No.</label><span className="text-danger">*</span>
                 
          <input
            type="text"
             
            id="trdno"
            name="trdno"
            value={trdno}
            onChange={handleInputChange}
            placeholder="Enter here"
            
            
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
               
            required
          />
 </div>
            <div className="col-md-3">
            <label htmlFor="expiry" className="text"> Lisence Expiry Date</label><span className="text-danger">*</span>
                 
          <input
            type="text"
             
            id="expiry"
            name="expiry"
            value={expiry}
            onChange={handleInputChange}
            placeholder=" Enter here"
            
            
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
            placeholder="Enter here "
            
            
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
               
            required
          />
 </div>

 <div className="col-md-3">
          <label htmlFor="trade" className="text"> Upload tradeLisence Copy</label><span className="text-danger">*</span>
          
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
<div className="col-md-6">
          <label  htmlFor="gst"className="text"> GST No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="gst"
            name="gst"
            value={gst}
            onChange={handleInputChange}
          
            placeholder="GST no."
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
          
            placeholder="Esi no."
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
          
            placeholder="Enter EPF A/C No."
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
        <div className="col-md-6">
          <label htmlFor="din" className="text"> DIN No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="din"
            name="din"
            value={din}
            onChange={handleInputChange}
          
            placeholder="Enter DIN no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="up_din"className="text"> Upload DIN Copy</label><span className="text-danger">*</span>
          
          <input
            type="file"
            id="up_din"
            name="up_din"
            value={up_din}
            onChange={handleInputChange}
          
           
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
          <label htmlFor="cin" className="text"> CIN No.</label><span className="text-danger">*</span>
          
          <input
            type="text"
            id="cin"
            name="cin"
            value={cin}
            onChange={handleInputChange}
          
            placeholder="Enter CIN no."
            style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver', backgroundColor: 'transparent'}}
            
            required
          />
        </div>
       
        </div>
     
                      <div className="col-12">
                            <div id="appdiv">
                            </div>
                          </div>
                          
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
     export default Addcontract;