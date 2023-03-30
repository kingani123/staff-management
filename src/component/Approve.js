import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate,Link } from "react-router-dom";
import Sidebar2 from "./Sidebar2";

function ApproveOrganizationPage() {
  const [emailOrusername, setEmailOrUsername] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { emailOrusername, status };
    try {
      const response = await axios.post('http://localhost:3036/api/superadmin/status-updated', data);
      if (response.data.errorCode === 0) {
            toast.success("Verified  Successfully!!!");
            navigate("/Approve");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <Sidebar2 className="nav-link active" />

        <div className="body_right">
          <div className="inside">
            <div className="right_body_pagenation">
              <p> Verify Organizations </p>
            </div>
            <div className="right_body_section">
              {/*--content here--*/}
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 mx-12">
                    <form onSubmit={handleSubmit}>
                      <div className="col-md-4 mt-2">
                        <label className="form-label">Username & Email</label>
                        <span className="text-danger">*</span>
                        <input
                          type="text"
                          value={emailOrusername}
                          onChange={(e) =>
                            setEmailOrUsername(e.target.value)
                          }
                          required
                          style={{
                            height: "50%",
                            width: "100%",
                            border: "none",
                            fontSize: "12px",
                            borderBottom: "2px solid silver",
                          }}
                        />
                      </div>

                      <label>
                        Status:
                        <br />
                        <label>
                          <input
                            type="radio"
                            value="true"
                            checked={status === "true"}
                            onChange={(e) => setStatus(e.target.value)}
                          />
                          True
                        </label>
  <br />
  <label>
    <input type="radio" value="false" checked={status === "false"} onChange={(e) => setStatus(e.target.value)} />
    False
  </label>
</label>

      <button type="submit">Approve</button>
    </form>
          </div>
        
    
    </div>
  
 
    </div>
    
    </div>
    </div>
  
 
  </div>
  
  </div>
  </div>
  
 
 
  
  
  

      );
     }
     export default ApproveOrganizationPage;


     // import { useState } from 'react';
// import { statusUpdatedDto } from './statusUpdatedDto';

// function OrganizationApprovalForm() {
//   const [formData, setFormData] = useState<statusUpdatedDto>({
//     emailOrusername: '',
//     status: '',
//   });

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const response = await approveOrg(formData);
//     console.log(response.message); // log the response message to the console
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="emailOrusername">Email or username:</label>
//       <input
//         type="text"
//         id="emailOrusername"
//         name="emailOrusername"
//         value={formData.emailOr



 
//   );
// }

