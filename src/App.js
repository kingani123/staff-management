
import { BrowserRouter , Routes, Route,Link } from "react-router-dom";
import AdminLayout from '../src/component/Admin.Layout';
import Home from '../src/component/Home';
import Form from '../src/component/Form';


function App() {
  return (
    <div>
  

                <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout />}/>
  
      <Route path="/" element={<Home />}/>
      
      <Route path="/Form" element={<Form />}/>
      
        
      
    </Routes>
  </BrowserRouter>
</div>
  


  );
}

export default App;
