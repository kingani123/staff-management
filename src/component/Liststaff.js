import React from "react";

import Navbar from "./Navbar";


import Sidebar from "./Sidebar";
import Footer from "./Footer";


const Liststaff = ()=>{
    return (
      <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/>            

      <div className="body_right">
        <div className="inside">
          <div className="right_body_pagenation">
            <p>Reports</p>
          </div>    
          <div className="right_body_section">
            {/*--content here--*/}
            <div className="card mt-0">
              <div className="heading"><h3>Reports</h3></div>
              <div className="report_search_panner">
                <div className="left">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Hospital Details</option>
                    <option value={1}>Hospital Details</option>
                    <option value={2}>Hospital Details</option>
                    <option value={3}>Hospital Details</option>
                  </select>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Pickup Tracking</option>
                    <option value={1}>Pickup Tracking</option>
                    <option value={2}>Pickup Tracking</option>
                    <option value={3}>Pickup Tracking</option>
                  </select>
                </div>
                <div className="right">
                  <div className="search_area">
                    <div className="input-group">
                      <input className="form-control search" type="search" defaultValue="search" id="example-search-input" />
                      <span className="input-group-append">
                        <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </div>         
                </div>
              </div>
              <div className="user_table_area">
                <div className="table_header">
                  <div style={{width: '8%'}}>Sl No.</div>
                  <div style={{width: '12%'}}>Name</div>
                  <div style={{width: '10%'}}>ID</div>
                  <div style={{width: '10%'}}>Mobile</div>
                  <div style={{width: '15%'}}>H. No.</div>
                  <div style={{width: '15%'}}>Town</div>
                  <div style={{width: '10%'}}>District </div>
                  <div style={{width: '20%'}}>Customer Email</div>
                </div>
                <div className="table_body">
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">Sl No.</p>
                    <p className="sl_no">#1</p>
                  </div>
                  <div style={{width: '12%'}}>
                    <p className="mobile_heading">Name</p>
                    <p>T.koley</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">ID</p>
                    <p>#123467890</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">Mobile</p>
                    <p>1234567890</p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">H. No.</p>
                    <p>584587</p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">Town</p>
                    <p>Kolkata</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">District </p>
                    <p>Hooghly</p>
                  </div>
                  <div style={{width: '20%'}}>
                    <p className="mobile_heading">Customer Email</p>
                    <p>demoemail@gmail.com</p>
                  </div>
                </div>
                <div className="table_body">
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">Sl No.</p>
                    <p className="sl_no">#1</p>
                  </div>
                  <div style={{width: '12%'}}>
                    <p className="mobile_heading">Name</p>
                    <p>T.koley</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">ID</p>
                    <p>#123467890</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">Mobile</p>
                    <p>1234567890</p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">H. No.</p>
                    <p>584587</p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">Town</p>
                    <p>Kolkata</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">District </p>
                    <p>Hooghly</p>
                  </div>
                  <div style={{width: '20%'}}>
                    <p className="mobile_heading">Customer Email</p>
                    <p>demoemail@gmail.com</p>
                  </div>
                </div>
                <div className="table_body">
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">Sl No.</p>
                    <p className="sl_no">#1</p>
                  </div>
                  <div style={{width: '12%'}}>
                    <p className="mobile_heading">Name</p>
                    <p>T.koley</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">ID</p>
                    <p>#123467890</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">Mobile</p>
                    <p>1234567890</p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">H. No.</p>
                    <p>584587</p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">Town</p>
                    <p>Kolkata</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">District </p>
                    <p>Hooghly</p>
                  </div>
                  <div style={{width: '20%'}}>
                    <p className="mobile_heading">Customer Email</p>
                    <p>demoemail@gmail.com</p>
                  </div>
                </div>
                <div className="table_body">
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">Sl No.</p>
                    <p className="sl_no">#1</p>
                  </div>
                  <div style={{width: '12%'}}>
                    <p className="mobile_heading">Name</p>
                    <p>T.koley</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">ID</p>
                    <p>#123467890</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">Mobile</p>
                    <p>1234567890</p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">H. No.</p>
                    <p>584587</p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">Town</p>
                    <p>Kolkata</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">District </p>
                    <p>Hooghly</p>
                  </div>
                  <div style={{width: '20%'}}>
                    <p className="mobile_heading">Customer Email</p>
                    <p>demoemail@gmail.com</p>
                  </div>
                </div>
                <div className="table_body">
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">Sl No.</p>
                    <p className="sl_no">#1</p>
                  </div>
                  <div style={{width: '12%'}}>
                    <p className="mobile_heading">Name</p>
                    <p>T.koley</p>
                  </div>
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">ID</p>
                    <p>#123467890</p>
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
export default Liststaff;