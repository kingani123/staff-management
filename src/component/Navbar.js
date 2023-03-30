import React from "react";
import { useNavigate,Link } from "react-router-dom";
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
            <Link style={{ float: 'left' }} to={'/'}>     <img src="images/ani.svg" alt="" /></Link>
          
            </a>
          </div>
        </div>
        <div className="right">
          <div className="header_notification">
            <i className="fa-regular fa-bell" />
            <span className="notification_number">05</span>
          </div>
          <div className="header_profile_img">
            <div className="header_profile_img_box">
              <p>ADMIN</p>
            </div>
              <div className="profile_drop">
              <ul>
              <li>
  <Link style={{ float: 'left' }} to={'/profile'}> 
  
      <i className="fas fa-power-off" style={{ marginRight: '10px' }} />
      Profile
    
  </Link>
</li>
<br></br>
<li>
  <Link style={{ float: 'left' }} to={'/login'}> 
  
      <i className="fas fa-power-off" style={{ marginRight: '10px' }} />
      Logout

  </Link>
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