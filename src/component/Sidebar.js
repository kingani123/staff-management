
import React from "react";
import { Link } from "react-router-dom";
const  Sidebar =(props)=>{
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
            <Link aria-current="page" to="/Addstaff" className={props.className}>
              <img src="images/owner-list.svg" alt="" /> Add Staff &nbsp;&nbsp;
              <i className="fa-solid fa-chevron-down" />
            </Link>
              </li>
              <li className="nav-item">
            <Link aria-current="page" to="/Liststaff" className={props.className}>
              <img src="images/place-management.svg" alt="" /> Indian Staff
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
            <a aria-current="page" href="#" className={props.className}>
            Contractor Management{" "}&nbsp;&nbsp;
             <i className="fa-solid fa-chevron-down" />
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="/Login" className={props.className}>
              <img src="images/adertisement.svg" alt="" /> Login
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="/Addcontract" className={props.className}>
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
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/support.svg" alt="" /> <b>Contact Us</b>
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

</>
    
      );
}
export default Sidebar;