import React  from "react";



import Navbar from "./Navbar";
import Admin from "./Admin";
import Form from "./Addstaff";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";
import Addstaff from "./Addstaff";




const AdminLayout2 = (props) => {
  return (
    <div>
    <Navbar/>
    <div className="wrapper">  
    <Sidebar2 className="nav-link active"  />  
       <Admin />  
       
    
                      
                 </div>


                 <Footer/>
    </div>
  );
};
export default AdminLayout2;