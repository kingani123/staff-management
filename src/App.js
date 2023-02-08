
import { BrowserRouter , Routes, Route,Link } from "react-router-dom";
import AdminLayout from '../src/component/Admin.Layout';
import Home from '../src/component/Home';
import Form from './component/Addstaff';
import Report from '../src/component/Liststaff';
import Addstaff from "./component/Addstaff";
import Liststaff from "../src/component/Liststaff";
import Login from "./component/Login";


function App() {
  return (
    <div>
  

                <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout />}/>
  
      <Route path="/" element={<Home />}/>
      
      <Route path="/Addstaff" element={<Login/>}/>
      <Route path="/Liststaff" element={<Liststaff />}/>
      
      <Route path="/" element={<Login />}/>
      
    </Routes>
  </BrowserRouter>
</div>
  


  );
}

export default App;
