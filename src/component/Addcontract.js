import React from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";

const Addcontract =()=>{
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
                        <form className="row g-4" id="contractor" name="contractor">
                          <input type="hidden" name="_token" defaultValue="YUcIsQ2szL695K7mFHvYyQxZyksmTC2McUEZPSLW" />                         
                          <div className="col-md-12">
                            <label className="form-label">Contractor Type</label><span className="text-danger">*</span>
                            <select className name="contractor_type" required id="contractor_type" onchange="contractortype()" style={{height: '50%', width: '100%', border: 'none', fontSize: '12 px', borderBottom: '2px solid silver'}}><option value disabled selected>
                              </option><option value disabled selected>Select Option</option>
                            </select>
                          </div>
                          <div className="col-md-12">
                            <h5 className="display-7 mt-2">Address Details</h5>
                            <div className="my-3 border-top" />
                          </div>
                          <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="validationDefault04" className="form-label">Country</label><span className="text-danger">*</span>
                            <select id="country" name="country" required style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}}><option value disabled selected>Select Country</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor className="form-label">State</label><span className="text-danger">*</span>
                            <select id="state" name="state" required style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}}><option value disabled selected>Select State</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor className="form-label">District</label><span className="text-danger">*</span>
                            <select id="district_id" name="district" required style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}}><option value disabled selected>Select District</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor className="form-label">PS</label><span className="text-danger">*</span>
                            <select className="select" id="ps_id" name="ps" required style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}}><option value disabled selected>Select PS</option>
                            </select>
                          </div>
                          </div>
                          <div className="row">
                          
                          <div className="col-md-3">
                            <label className="form-label">Address</label><span className="text-danger">*</span>
                              <input type="text" placeholder="Address" id="address"name="address"  style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}} />
                           
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">Landmark</label><span className="text-danger">*</span>
                            <input type="text" placeholder="Landmark" id="landmark" name="landmark" style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}} />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">Post Office</label><span className="text-danger">*</span>
                            <input type="text" placeholder="Post Office" id="post_office" name="post_office"  style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}} />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">Pin Code</label><span className="text-danger">*</span>
                            <input type="text" placeholder="Pin Code" id="pincode" name="pin_code" style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}} />
                          </div> 
                          <div className="col-12">
                            <div id="appdiv">
                            </div>
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