
import { BrowserRouter , Routes, Route,Link } from "react-router-dom";
import AdminLayout from '../src/component/Admin.Layout';
import Home from '../src/component/Home';
import Form from './component/Addstaff';
import Report from '../src/component/Liststaff';
import Addstaff from "./component/Addstaff";
import Addforeign from "./component/Addforeign";
import Liststaff from "../src/component/Liststaff";
import Login from "./component/Login";
import Addcontract from "../src/component/Addcontract";
import Addunit from "../src/component/Addunit";
import Listunit from "../src/component/Listunit";
import Rolewise from "../src/component/Rolewise";
import Categorywise from "../src/component/Categorywise";
import Release from "../src/component/Release";
import Contractlist from "../src/component/Contractlist";
import Qualificationwise from "./component/Qualificationwise";
import Agewise from "./component/Agewise";
import Tenurewise from "./component/Tenurewise";
import Performancewise from "./component/Performancewise";
import Localdistrict from "./component/Localdistrict";
import Outsidedistrict from "./component/Outsidedistrict";
import Localstate from "./component/Localstate";
import Outsidestate from "./component/Outsidestate";
import Foreigners from "./component/Foreigners";
import Inflow from "./component/Inflow";
import Outflow from "./component/Outflow";
 


function App() {
  return (
    <div>
  

                <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout />}/>
  
      <Route path="/" element={<Home />}/>
      
      <Route path="/Rolewise" element={<Rolewise/>}/>
      <Route path="/Categorywise" element={<Categorywise/>}/>
      <Route path="/Addstaff" element={<Addstaff/>}/>
      <Route path="/Addforeign" element={<Addforeign />}/>  
      <Route path="/Contractlist" element={<Contractlist />}/>
      <Route path="/Release" element={<Release />}/>
      <Route path="/Liststaff" element={<Liststaff />}/>
      <Route path="/Addcontract" element={<Addcontract/>}/>
      <Route path="/Contractlist" element={<Contractlist />}/>
      <Route path="/Addunit" element={<Addunit/>}/>
      <Route path="/Listunit" element={<Listunit/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Qualificationwise" element={<Qualificationwise />}/>
      <Route path="/Agewise" element={<Agewise />}/>
      <Route path="/Tenurewise" element={<Tenurewise />}/>
      <Route path="/Performancewise" element={<Performancewise />}/>
     

      <Route path="/Localdistrict" element={<Localdistrict/>}/>
      <Route path="/Outsidedistrict" element={<Outsidedistrict/>}/>
      <Route path="/Localstate" element={<Localstate />}/>
      <Route path="/Outsidestate" element={<Outsidestate />}/>
      <Route path="/Foreigners" element={<Foreigners />}/>
      <Route path="/Inflow" element={<Inflow />}/>
      <Route path="/Outflow" element={<Outflow />}/>
    </Routes>
  </BrowserRouter>
</div>
  


  );
}

export default App;
