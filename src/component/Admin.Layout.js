import React  from "react";



import Navbar from "./Navbar";
import Home from "./Home";
import Form from "./Form";
import Sidebar from "./Sidebar";
import Footer from "./Footer";




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