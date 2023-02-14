import React from "react";
const Navbar =()=>{
    return (
<>
  {/* Hello world */}
  <header>
    <div className="container-fluid">
      <div className="header_inner">
        <div className="left">
          <div className="logo">
            <a href="#">
              <img src="images/ani.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="header_notification">
            <i className="fa-regular fa-bell" />
            <span className="notification_number">01</span>
          </div>
          <div className="header_profile_img">
            <div className="header_profile_img_box">
              <p>admin</p>
            </div>
            <h5>Admin</h5>
            <i className="fa-solid fa-chevron-down" />
            <div className="profile_drop">
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-user-alt" /> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-power-off" /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</>

    
      );
}
export default Navbar;