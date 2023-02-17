
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
import Release from "../src/component/Release";
import Contractlist from "../src/component/Contractlist";


function App() {
  return (
    <div>
  

                <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout />}/>
  
      <Route path="/" element={<Home />}/>
      
      <Route path="/Rolewise" element={<Rolewise/>}/>
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
      
    </Routes>
  </BrowserRouter>
</div>
  


  );
}

export default App;
