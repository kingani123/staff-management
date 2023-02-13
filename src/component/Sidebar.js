
import React from "react";
import { Link } from "react-router-dom";
const  Sidebar =(props)=>{
    return (
<>
  {/*body_left*/}
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
              <img src="images/dashboard.svg" alt="" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className={props.className}>
              <img src="images/user-list.svg" alt="" />
              User list{" "}
            </a>
          </li>
          <li className="nav-item">
            <Link aria-current="page" to="/Addstaff" className={props.className}>
              <img src="images/owner-list.svg" alt="" /> Add Staff
            </Link>
          </li>
          <li className="nav-item">
            <Link aria-current="page" to="/Liststaff" className="nav-link">
              <img src="images/place-management.svg" alt="" /> List Staff
            </Link>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="/Addunit" className={props.className}>
              <img src="images/adertisement.svg" alt="" /> Add Unit
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="/Addcontract" className={props.className}>
              <img src="images/adertisement.svg" alt="" /> Add Contract
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="/Listunit" className="nav-link">
              <img src="images/support.svg" alt="" /> Unit Details List
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className="nav-link">
              <img src="images/revenue-model.svg" alt="" /> Faq
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className="nav-link">
              <img src="images/settings.svg" alt="" /> Settings
            </a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="#" className="nav-link">
              <img src="images/logout.svg" alt="" /> Logout
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