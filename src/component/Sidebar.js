import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [staffCollapsed, setStaffCollapsed] = useState(!props.isSidebarOpen);
  const [unitCollapsed, setUnitCollapsed] = useState(!props.isSidebarOpen);
  const [contractorCollapsed, setContractorCollapsed] = useState(!props.isSidebarOpen);
  const [reportCollapsed, setReportCollapsed] = useState(!props.isSidebarOpen);

  useEffect(() => {
    setStaffCollapsed(!props.isSidebarOpen);
    setUnitCollapsed(!props.isSidebarOpen);
    setContractorCollapsed(!props.isSidebarOpen);
    setReportCollapsed(!props.isSidebarOpen);
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
    setReportCollapsed(!contractorCollapsed);
  };
  

  return (
    <>
    
      <div className="body_left">
        <div className="body_left_push">
          <i className="fa-solid fa-chevron-left" />
        </div>
      </div>
      <div className="push_menu">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link aria-current="page" to="/" className={props.className}>
              <img src="images/dashboard.svg" alt="" /> <b>DASHBOARD</b> 
            </Link>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
            <b> STAFF SECTION{" "}</b> 
            </a>
          </li>
         
          <li className="nav-item">
            <Link aria-current="page" to="#" className={props.className}>
              <img src="images/owner-list.svg" alt="" /> Add Staff &nbsp;&nbsp;
              <i className="fa-solid fa-chevron-down" />
            </Link>
              </li>
              <li className="nav-item">
            <Link aria-current="page" to="/Addstaff" className={props.className}>
              <img src="images/place-management.svg" alt="" /> Indian Staff
            </Link>
          </li>
          <li className="nav-item">
            <Link aria-current="page" to="/Addforeign" className={props.className}>
              <img src="images/place-management.svg" alt="" /> Foreign Staff
            </Link>
          </li>
          <li className="nav-item">
            <Link aria-current="page" to="/Release" className={props.className}>
              <img src="images/place-management.svg" alt="" /> Released Person
            </Link>
          </li>
          <li className="nav-item">
            <Link aria-current="page" to="/Liststaff" className="nav-link">
              <img src="images/place-management.svg" alt="" /> List Staff
            </Link>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="/Addunit" className="nav-link">
              <img src="images/adertisement.svg" alt="" /> Add Unit
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="/Addcontract" className="nav-link">
              <img src="images/adertisement.svg" alt="" /> Add Contract
            </a>
          </li>
          <li className="nav-item">
          <a aria-current="page" href="/Rolewise" className="nav-link">
              <img src="images/adertisement.svg" alt="" /> Rolewise
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
            Contractor Management{" "}&nbsp;&nbsp;
             <i className="fa-solid fa-chevron-down" />
            </a>
          </li>
      
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/adertisement.svg" alt="" /> List Of Contractors
            </a>
          </li>
          
          
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
           Analytics{" "}&nbsp;&nbsp;
             <i className="fa-solid fa-chevron-down" />
            </a>
          </li>
                    
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Qualification Wise
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Age Wise
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Tenure Wise
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Performance Wise
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Local Wise
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Outside Wise
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Foreigners
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Inflow Report
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/revenue-model.svg" alt="" /> Outflow Report
            </a>
          </li>
       
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/settings.svg" alt="" /> <b>Tutorials</b>
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="/Login" className={props.className}>
              <img src="images/support.svg" alt="" /> <b>Login</b>
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/logout.svg" alt="" /> <b>Logout</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

                
              </div>
              <li className="nav-item">
                <a href="#" className={props.className} onClick={toggleUnitMenu}>
                  <img src="images/owner-list.svg" alt="" /> <b>UNIT SECTION</b>
                  {unitCollapsed ? (
                    <i className="fa-solid fa-chevron-down" />
                  ) : (
                    <i className="fa-solid fa-chevron-up" />
                  )}
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
                  <img src="images/owner-list.svg" alt="" /> <b>CONTRACTOR</b>
                  {contractorCollapsed ? (
                    <i className="fa-solid fa-chevron-down" />
                  ) : (
                    <i className="fa-solid fa-chevron-up" />
                  )}
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
                  <img src="images/owner-list.svg" alt="" /> <b>REPORT SECTION</b>
                  {contractorCollapsed ? (
                    <i className="fa-solid fa-chevron-down" />
                  ) : (
                    <i className="fa-solid fa-chevron-up" />
                  )}
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
  
  </ul>
</div>

    </div>
    </div>
  
</>

)};


export default Sidebar;