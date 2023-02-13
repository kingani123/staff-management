import React  from "react";



import Navbar from "./Navbar";
import Home from "./Home";
import Form from "./Addstaff";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Addstaff from "./Addstaff";




const AdminLayout = (props) => {
  return (
    <div>
    <Navbar/>
    <div className="wrapper">  
    <Sidebar className="nav-link active"  />  
       <Home />  
       
    
                      
                 </div>


                 <Footer/>
    </div>
  );
};
export default AdminLayout;