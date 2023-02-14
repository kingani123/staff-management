
import { BrowserRouter , Routes, Route,Link } from "react-router-dom";
import AdminLayout from '../src/component/Admin.Layout';
import Home from '../src/component/Home';
import Form from './component/Addstaff';
import Report from '../src/component/Liststaff';
import Addstaff from "./component/Addstaff";
import Liststaff from "../src/component/Liststaff";
import Login from "./component/Login";
import Addcontract from "../src/component/Addcontract";
import Addunit from "../src/component/Addunit";
import Listunit from "../src/component/Listunit";

function App() {
  return (
    <div>
  

                <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout />}/>
  
      <Route path="/" element={<Home />}/>
      
      <Route path="/Addstaff" element={<Addstaff/>}/>
      <Route path="/Liststaff" element={<Liststaff />}/>
      <Route path="/Addcontract" element={<Addcontract/>}/>
      <Route path="/Addunit" element={<Addunit/>}/>
      <Route path="/Listunit" element={<Listunit/>}/>
      <Route path="/login" element={<Login />}/>
      
    </Routes>
  </BrowserRouter>
</div>
  


  );
}

export default App;
