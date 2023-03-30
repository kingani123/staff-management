import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [staffCollapsed, setStaffCollapsed] = useState(!props.isSidebarOpen);
  const [unitCollapsed, setUnitCollapsed] = useState(!props.isSidebarOpen);
  const [contractorCollapsed, setContractorCollapsed] = useState(!props.isSidebarOpen);
  const [reportCollapsed, setReportCollapsed] = useState(!props.isSidebarOpen);
  const [analyticsCollapsed, setAnalyticsCollapsed] = useState(!props.isSidebarOpen);

  useEffect(() => {
    setStaffCollapsed(!props.isSidebarOpen);
    setUnitCollapsed(!props.isSidebarOpen);
    setContractorCollapsed(!props.isSidebarOpen);
    setReportCollapsed(!props.isSidebarOpen);
    setAnalyticsCollapsed(!props.isSidebarOpen);
  }, [props.isSidebarOpen]);
  
  // Define two functions to toggle the state variables
  const toggleStaffMenu = () => {
    setStaffCollapsed(!staffCollapsed);
  };
  

  

  return (
    <>
    
      <div className="body_left">
        <div className="body_left_push">
          <i className="fa-solid fa-chevron-left" />
        </div>
        <div className="inside">
          <div className="search_area">
            <div className="input-group">
              <input
                className="form-control search"
                type="search"
                defaultValue="search"
                id="example-search-input"
              />
              <span className="input-group-append">
                <button
                  className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5"
                  type="button"
                >
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </div>

          <div className="push_menu">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/Admin" className={props.className}>
                  <img src="images/dashboard.svg" alt="" /> <b>DASHBOARD</b>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className={props.className} onClick={toggleStaffMenu}>
                  <img src="images/owner-list.svg" alt="" /> <b>Verification </b>&nbsp;&nbsp;
                    <i className="fa-solid fa-chevron-down" />
                  </a>
              </li>
              <div className={staffCollapsed ? "collapse" : ""}>
                <li className="nav-item">
                  <Link to="/Approve" className={props.className}>
                    <img src="images/top.svg" alt="" /> Verify Organization
                  </Link>
                </li>
               

                
              </div>
            
 
          <li className="nav-item">
          <Link to="#" className={props.className}>
              <img src="images/logout.svg" alt="" /> <b>LOGOUT</b>
            </Link>
          </li>
  </ul>
</div>

    </div>
    </div>
  
</>

)};


export default Sidebar;