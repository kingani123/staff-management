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
            <p> List Unit thanos Details</p>
          </div>    
          <div className="right_body_section">
            {/*--content here--*/}
            
            <div className="card mt-0">
            <div className="card-body">
              <div className="heading"><h3> List of Unit Details</h3></div>
              <div className="report_search_panner">
                <div className="left">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>All</option>
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
                  <div style={{width: '15%'}}>Name</div>
                  <div style={{width: '15%'}}>DOB</div>
                  <div style={{width: '15%'}}>Email</div>
                  <div style={{width: '15%'}}>Mobile</div>
                  <div style={{width: '15%'}}>Type of Job</div>
                  <div style={{width: '15%'}}>Action </div>
                  
                </div>
                <div className="table_body">
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">Sl No.</p>
                    <p className="sl_no"></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">Name</p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"> </p>
                    <p></p>
                  </div>
                  
                </div>
                <div className="table_body">
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading"></p>
                    <p className="sl_no"></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"></p>
                    <p></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading"> </p>
                    <p></p>
                  </div>
                 
                </div>
                <br></br>  
                
                <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="dataTables_info" id="staff_info" role="status" aria-live="polite">Showing 2 to 2 of 2 entries</div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="dataTables_paginate paging_simple_numbers" id="staff_paginate"><ul className="pagination">
                  <li className="paginate_button page-item previous disabled" id="staff_previous">
                    <a href="#" aria-controls="staff" data-dt-idx={0} tabIndex={0} className="page-link">Prev</a></li>
                  <li className="paginate_button page-item active"><a href="#" aria-controls="staff" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                  <li className="paginate_button page-item next disabled" id="staff_next"><a href="#" aria-controls="staff" data-dt-idx={2} tabIndex={0} className="page-link">Next</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper input-data">
              <input type="text" style={{height: '100%', width: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid silver'}} />
            </div>
            <div className="overlay nav-toggle-icon" />
            <a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>  
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