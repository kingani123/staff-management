import React from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";

const Addunit =()=>{
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
<div className="col-xl-10 mx-10"> 
  <div className="row">
    
      <div className="col-xl-12 mx-12">        
        <div className="card">
          <div className="card-body">
            <h6 className="mb-0 ">ADD UNIT DETAILS</h6>
            <hr />
            <div className="p-4 border rounded">
              <form className="row g-4" id="contractor" name="contractor">
                <input type="hidden" name="_token" defaultValue="YUcIsQ2szL695K7mFHvYyQxZyksmTC2McUEZPSLW" />    
                <div className="col-md-12">
                  <label className="form-label">Unit Name</label><span className="text-danger">*</span>
                  <input type="text" placeholder="enter unit name" id="unit" name="unit" style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}} />
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationDefault04" className="form-label">Country</label><span className="text-danger">*</span>
                  <select id="country" name="country"  style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}}><option value disabled selected>Select Country</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor className="form-label">State</label><span className="text-danger">*</span>
                  <select id="state" name="state" style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}}><option value disabled selected>Select State</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor className="form-label">District</label><span className="text-danger">*</span>
                  <select id="district_id" name="district"style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}}><option value disabled selected>Select District</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor className="form-label">PS</label><span className="text-danger">*</span>
                  <select className="select" id="ps_id" name="ps" required style={{height: '50%', width: '100%', border: 'none', fontSize: '12px', borderBottom: '2px solid silver'}}><option value disabled selected>Select PS</option>
                  </select>
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
    </div>
  </div></div></div>
  </div>
      </div>
      </div>
      
     </div>
  
  
  
  );
     }
     export default Addunit;