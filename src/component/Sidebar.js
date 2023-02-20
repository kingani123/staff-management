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
  
  const toggleUnitMenu = () => {
    setUnitCollapsed(!unitCollapsed);
  };
  const toggleContractorMenu = () => {
    setContractorCollapsed(!contractorCollapsed);
  };
  const toggleReportMenu = () => {
    setReportCollapsed(!reportCollapsed);
  };
  const toggleAnalyticsMenu = () => {
    setAnalyticsCollapsed(!analyticsCollapsed);
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
                <Link to="/" className={props.className}>
                  <img src="images/dashboard.svg" alt="" /> <b>DASHBOARD</b>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className={props.className} onClick={toggleStaffMenu}>
                  <img src="images/owner-list.svg" alt="" /> <b>STAFF </b>&nbsp;&nbsp;
                    <i className="fa-solid fa-chevron-down" />
                  </a>
              </li>
              <div className={staffCollapsed ? "collapse" : ""}>
                <li className="nav-item">
                  <Link to="/Addstaff" className={props.className}>
                    <img src="images/top.svg" alt="" /> Add Indian Staff 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Addforeign" className={props.className}>
                    <img src="images/top.svg" alt="" /> Add Foreign Staff
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Liststaff" className={props.className}>
                    <img src="images/top.svg" alt="" />  Staff List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Release" className={props.className}>
                    <img src="images/top.svg" alt="" /> Release Staff
                  </Link>
                </li>

                
              </div>
              <li className="nav-item">
                <a href="#" className={props.className} onClick={toggleUnitMenu}>
                  <img src="images/owner-list.svg" alt="" /> <b>UNIT </b>&nbsp;&nbsp;
                    <i className="fa-solid fa-chevron-down" />
                  </a>
              </li>
              <div className={unitCollapsed ? "collapse" : ""}>
            

      <li className="nav-item">
        <Link to="/Addunit" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Add Unit
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Listunit" className={props.className}>
          <img src="images/place-management.svg" alt="" /> List Unit
        </Link>
      </li>
    </div>
    <li className="nav-item">
                <a href="#" className={props.className} onClick={toggleContractorMenu}>
                  <img src="images/owner-list.svg" alt="" /> <b>CONTRACTOR</b>&nbsp;&nbsp;
                    <i className="fa-solid fa-chevron-down" />
                  </a>
              </li>
              <div className={contractorCollapsed ? "collapse" : ""}>
            

      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Add Contractors
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contractlist" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Contractor List
        </Link>
      </li>
    </div>
  
    <li className="nav-item">
                <a href="#" className={props.className} onClick={toggleReportMenu}>
                  <img src="images/owner-list.svg" alt="" /> <b>REPORT </b>&nbsp;&nbsp;
                    <i className="fa-solid fa-chevron-down" />
                  </a>
              </li>
              <div className={reportCollapsed ? "collapse" : ""}>
            

      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Add Contractors
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contractlist" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Contractor List
        </Link>
      </li>
    </div>
    <li className="nav-item">
                <a href="#" className={props.className} onClick={toggleAnalyticsMenu}>
                  <img src="images/owner-list.svg" alt="" /> <b>ANALYTICS</b>&nbsp;&nbsp;
                    <i className="fa-solid fa-chevron-down" />
                  </a>
              </li>
              <div className={analyticsCollapsed ? "collapse" : ""}>
            
              <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Qualification Wise
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Age Wise
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contractlist" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Tenue Wise
        </Link>
      </li>
      
           
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Age Wise
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Performance Wise
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" />Local District
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Outside District
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Local State
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" />  Outside State
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Foreigners
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Inflow Report
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Addcontract" className={props.className}>
          <img src="images/place-management.svg" alt="" /> Outflow Report
        </Link>
      </li>
    </div>
    <li className="nav-item">
    <Link to="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /><b>TUTORIALS</b>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="#" className={props.className}>
              <img src="images/settings.svg" alt="" /><b> CONTACT US</b>
            </Link>
          </li>
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