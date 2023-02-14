import React from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Rolewise =()=>{
    return (
      <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/> 
      <div className="body_right">
  <div className="inside">
    <div className="right_body_pagenation">
      <p>Role Wise</p>
    </div>           

            <div className="right_body_section">
            {/*--content here--*/}
            <div className="card mt-0">
            <div className="card-body">
              <div className="heading"><h3>Role Wise</h3></div>
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
                  <div style={{width: '10%'}}>Sl No.</div>
                  <div style={{width: '30%'}}>Name Of The Role</div>
                  <div style={{width: '30%'}}>Name Of The Employee</div>
                  <div style={{width: '30%'}}>Date Of Joining</div>
                  </div>
                              
                <div className="table_body">
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">Sl No.</p>
                    <p className="sl_no">#1</p>
                  </div>
                  <div style={{width: '30%'}}>
                    <p className="mobile_heading">Name</p>
                    <p>T.koley</p>
                  </div>
                  <div style={{width: '30%'}}>
                    <p className="mobile_heading">ID</p>
                    <p>#123467890</p>
                  </div>
                  <div style={{width: '30%'}}>
                    <p className="mobile_heading">Mobile</p>
                    <p>1234567890</p>
                  </div>
                 
                </div>
                <div className="table_body">
                  <div style={{width: '10%'}}>
                    <p className="mobile_heading">Sl No.</p>
                    <p className="sl_no">#1</p>
                  </div>
                  <div style={{width: '30%'}}>
                    <p className="mobile_heading">Name</p>
                    <p>T.koley</p>
                  </div>
                  <div style={{width: '30%'}}>
                    <p className="mobile_heading">ID</p>
                    <p>#123467890</p>
                  </div>
                  <div style={{width: '30%'}}>
                    <p className="mobile_heading">Mobile</p>
                    <p>1234567890</p>
                  </div>  
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
  export default Rolewise;