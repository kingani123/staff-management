import React from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";
import Footer from "./Footer";


const Addstaff =()=>{
    return (
      <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/>            

      {}
    {}
    {}
    {}
    {}        {}
    {}
    {}
    {}  
    <div className="body_right">
        <div className="inside">
          <div className="right_body_pagenation">
            <p>Reports</p>
          </div>
  
      <div className="col-xl-12 mx-auto">            
      
        
            
            <hr />
            <div className="border p-4 rounded">                   
              <form action="http://staff.atithiaadhaar.com/staff" className="row g-3 " method="POST" name="staff" id="staff" encType="multipart/form-data"> 
                <input type="hidden" name="_token" defaultValue="1oFhZ6JZy92bRbZZhaOSZI1pn0yNRWgJTFQC2U3H" />                            <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Personal Details
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                        <div className="col-md-4">
                          <label className="form-label">Name</label><span className="text-danger">*</span>
                          <input type="text" onkeyup="titleCase(this.value,'name')" className="form-control" name="name" id="name" placeholder="Name" required />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Upload Image</label><span className="text-danger">*</span>
                          <input type="file" className="form-control" id="profile_pic" name="profile_pic" required />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Religion</label><span className="text-danger" />
                          <input type="text" className="form-control" name="religion" id="religion" placeholder="Religion" />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Father’s Name</label><span className="text-danger">*</span>
                          <input type="text" className="form-control" name="father_name" onkeyup="titleCase(this.value,'father_name')" id="father_name" placeholder="Father\u2019s Name" required />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Mother’s Name</label><span className="text-danger">*</span>
                          <input type="text" className="form-control" name="mother_name" onkeyup="titleCase(this.value,'mother_name')" id="mother_name" placeholder="Mother\u2019s Name" required />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Gender</label><span className="text-danger">*</span><br />
                          <input className="form-check-input" type="radio" name="sex" defaultValue="M" required />
                          <label className="form-label">Male</label>
                          <input className="form-check-input" type="radio" name="sex" defaultValue="F" required />
                          <label className="form-label">Female</label>
                          <input className="form-check-input" type="radio" name="sex" defaultValue="T" required />
                          <label className="form-label">Transgender</label>
                          <span id="errorToShow" />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">DOB</label><span className="text-danger">*</span>
                          <input type="date" className="form-control" name="dob" id="dob" placeholder="DOB" onchange="ageCalculate()" required />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Age</label><span className="text-danger">*</span>
                          <input type="number" className="form-control" name="age" id="age" placeholder="Age" required />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Blood Group</label>
                          <select className="single-select form-select" name="bloodgroup" id="bloodgroup" required>
                            <option value disabled selected>Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                          </select>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Address Details
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                        <h6 className="fw-bold">Permanent Address:</h6><hr />
                        <div className="col-md-12">
                          <label className="form-label">Address</label><span className="text-danger">*</span>
                          <textarea type="text" className="form-control" name="p_locality" id="p_locality" required placeholder="Address Line" defaultValue={""} />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Nearest Landmark</label><span className="text-danger">*</span>
                          <input type="text" className="form-control" name="p_landmark" id="p_landmark" placeholder="Landmark" required />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">PIN code</label><span className="text-danger">*</span>
                          <input type="text" onkeyup="inputNumber(this.value,'p_pincode')" maxLength={6} className="form-control" name="p_pincode" id="p_pincode" placeholder="PIN code" required />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Country</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="p_country_id" id="p_country_id" required onchange="state(this,'p')">
                          </select>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">State</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="p_state_id" id="p_state_id" required onchange="district(this,'p')">
                            <option value disabled selected>Select State</option>
                          </select>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">District</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="p_district_id" id="p_district_id" required onchange="ps(this,'p')">
                            <option value disabled selected>Select District</option>
                          </select>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Police Station</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="p_ps_id" id="p_ps_id" required>
                            <option value disabled selected>Select PS</option>
                          </select>
                        </div>
                        <br />
                        <h6 className="fw-bold mt-3">Present Address:</h6><hr />
                        <div className="col-md-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="sameas" onclick="sameAs()" />
                            <label className="form-check-label" htmlFor="sameas">Same As Permanent Address</label>
                          </div>
                          <label className="form-label">Address</label><span className="text-danger">*</span>
                          <textarea type="text" className="form-control" name="t_locality" id="t_locality" required placeholder="Address Line" defaultValue={""} />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Nearest Landmark</label><span className="text-danger">*</span>
                          <input type="text" className="form-control" name="t_landmark" id="t_landmark" placeholder="Landmark" required />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">PIN code</label><span className="text-danger">*</span>
                          <input type="text" onkeyup="inputNumber(this.value,'t_pincode')" maxLength={6} className="form-control" name="t_pincode" id="t_pincode" placeholder="PIN code" required />
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Country</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="t_country_id" id="t_country_id" required onchange="state(this,'t')">
                          </select>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">State</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="t_state_id" id="t_state_id" required onchange="district(this,'t')">
                            <option value disabled selected>Select State</option>
                          </select>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">District</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="t_district_id" id="t_district_id" required onchange="ps(this,'t')">
                            <option value disabled selected>Select District</option>
                          </select>
                        </div>
                        <div className="col-md-4 mt-2">
                          <label className="form-label">Police Station</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="t_ps_id" id="t_ps_id" required>
                            <option value disabled selected>Select PS</option>
                          </select>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Contact Details
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                        <div className="col-md-4">
                          <label className="form-label">Email</label><span className="text-danger">*</span>
                          <input type="email" className="form-control" name="email" id="email" placeholder="Email" required style={{
                                textTransform: 'none'
                              }} />
                          <small className="text-danger" />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Mobile</label><span className="text-danger">*</span>
                          <input type="text" className="form-control" name="mobile" id="mobile" onkeyup="inputNumber(this.value,'mobile')" maxLength={10} placeholder="Mobile" required />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Landline</label>
                          <input type="text" className="form-control" name="landline" id="landline" placeholder="Landline" maxLength={11} onkeyup="inputNumber(this.value,'landline')" />
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Qualification Details
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table className="table table-light mb-0">
                              <thead>
                                <tr>
                                  <th>Sl.No.</th>
                                  <th>Qualification</th>
                                  <th>Institution</th>
                                  {}
                                  <th>Passing Year</th>
                                  <th>Add/Remove</th>
                                </tr>
                              </thead>
                              <tbody id="educational">
                                <tr>
                                  <td width="3%">
                                    <input type="text" className="form-control slno" name="slno[]" placeholder="Sl.No." defaultValue={1} />
                                  </td>
                                  <td>
                                    <select className="form-control" name="qualification[]"><option value disabled selected>Select qualification</option><option value="Illiterate">Illiterate</option><option value="Primary School">Primary School</option><option value="Middle School">Middle School</option><option value="Secondary">Secondary</option><option value="Higher Secondary">Higher Secondary</option><option value="Graduate">Graduate</option><option value="Postgraduate">Postgraduate</option><option value="Professional">Professional</option><option value="Doctorate">Doctorate</option></select>
                                  </td>
                                  <td>
                                    <input type="text" className="form-control" name="institution[]" placeholder="Institution" />
                                  </td>
                                  {}
                                  <td>
                                    <select className="form-control" name="to[]"><option value disabled selected>Select year</option><option value={2023}>2023</option><option value={2022}>2022</option><option value={2021}>2021</option><option value={2020}>2020</option><option value={2019}>2019</option><option value={2018}>2018</option><option value={2017}>2017</option><option value={2016}>2016</option><option value={2015}>2015</option><option value={2014}>2014</option><option value={2013}>2013</option><option value={2012}>2012</option><option value={2011}>2011</option><option value={2010}>2010</option><option value={2009}>2009</option><option value={2008}>2008</option><option value={2007}>2007</option><option value={2006}>2006</option><option value={2005}>2005</option><option value={2004}>2004</option><option value={2003}>2003</option><option value={2002}>2002</option><option value={2001}>2001</option><option value={2000}>2000</option><option value={1999}>1999</option><option value={1998}>1998</option><option value={1997}>1997</option><option value={1996}>1996</option><option value={1995}>1995</option><option value={1994}>1994</option><option value={1993}>1993</option><option value={1992}>1992</option><option value={1991}>1991</option><option value={1990}>1990</option><option value={1989}>1989</option><option value={1988}>1988</option><option value={1987}>1987</option><option value={1986}>1986</option><option value={1985}>1985</option><option value={1984}>1984</option><option value={1983}>1983</option><option value={1982}>1982</option><option value={1981}>1981</option><option value={1980}>1980</option><option value={1979}>1979</option><option value={1978}>1978</option><option value={1977}>1977</option><option value={1976}>1976</option><option value={1975}>1975</option><option value={1974}>1974</option><option value={1973}>1973</option><option value={1972}>1972</option><option value={1971}>1971</option><option value={1970}>1970</option><option value={1969}>1969</option><option value={1968}>1968</option><option value={1967}>1967</option><option value={1966}>1966</option><option value={1965}>1965</option><option value={1964}>1964</option><option value={1963}>1963</option><option value={1962}>1962</option><option value={1961}>1961</option><option value={1960}>1960</option></select>
                                  </td>
                                  <td>
                                    <span onclick="add()"><button type="button" className="btn btn-outline-success radius-30">Add</button></span>
                                  </td>                                                                
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Other Details
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body row">
                        <div className="table-responsive">
                          <table className="table table-light mb-0">
                            <tbody>
                              <tr>
                                <td>
                                  <label className="form-label">Aadhar No</label><span className="text-danger">*</span>
                                  <input type="text" className="form-control" name="adhar" id="adhar" onkeyup="inputNumber(this.value,'adhar')" maxLength={12} placeholder="Aadhar No" required />                                                                
                                </td>
                                <td>
                                  <label className="form-label">Upload Aadhar</label><span className="text-danger">*</span>
                                  <input type="file" className="form-control" id="aadharpic" name="aadharpic" required />  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="form-label">PAN No.</label>
                                  <input type="text" className="form-control" name="pan" id="pan" placeholder="PAN No." maxLength={10} onkeyup="inputStrNumber(this.value,'pan')" />
                                </td>
                                <td>
                                  <label className="form-label">Upload PAN</label>
                                  <input type="file" className="form-control" id="panpic" name="panpic" /> 
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">Driving License No</label>
                          <input type="text" className="form-control" name="driving_license" id="driving_license" maxLength={16} placeholder="Driving License No. e.g. XX-0000000000" />
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">Personal Vehicle</label>
                          <select className="form-select" name="personal_vehicle" id="personal_vehicle" onchange="div_vehicle()">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </div>
                        <div className="col-md-6 mt-2 div_vehicle">
                          <label className="form-label">Type of vehicle</label>
                          <input type="text" className="form-control" name="type_vehicle" placeholder="Type of vehicle" />
                        </div>
                        <div className="col-md-6 mt-2 div_vehicle">
                          <label className="form-label">Vehicle No.</label>
                          <input type="text" className="form-control" name="vehicle_no" placeholder="Vehicle No." />
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">ESI No.</label><span className="text-danger" />
                          <input type="text" className="form-control" name="esi_number" placeholder="ESI No. E.G 31-00-123456-000-0001" />
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">EPFO No.</label><span className="text-danger" />
                          <input type="text" className="form-control lowercase" name="epfo_number" placeholder="EPFO No. E.G KN/KRP/0054055/0000250" />
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">Type of Employment</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="emp_type" id="emp_type" onchange="empType()" required>
                            <option value disabled selected>Select Type of Employment</option>
                            <option value="direct">Direct</option>
                            <option value="contractual">Contractual</option>
                          </select>
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">Type of Job</label><span className="text-danger">*</span>
                          <select className="single-select form-select" name="job_category_id" id="job_category_id" onchange="jobRole(this)" required>
                            <option value disabled selected>Type of Job</option>
                            <option value={5} className="jobopt jobopt5">Daily Labourer</option>
                            <option value={4} className="jobopt jobopt4">Casual</option>
                            <option value={3} className="jobopt jobopt3">Operational</option>
                            <option value={2} className="jobopt jobopt2">Managerial</option>
                            <option value={1} className="jobopt jobopt1">Executive</option>
                          </select>
                        </div>
                        <div className="col-md-12" id="job_role_id">
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">Date of Joining</label><span className="text-danger">*</span>
                          <input type="date" className="form-control" name="join_date" id="join_date" placeholder="Date of Joining" required />
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">Special Skill</label>
                          <select className="single-select form-select otherText" name="special_skill" id="skill_id" onchange>
                            <option value disabled selected>Select Skill</option>
                            <option value="Other" className>Other</option>
                            <option value="Salon & Spa" className>Salon & Spa</option>
                            <option value="Pest Control" className>Pest Control</option>
                            <option value="Lift Servicing" className>Lift Servicing</option>
                            <option value="Gardening" className>Gardening</option>
                            <option value="Iron Grill Fixing" className>Iron Grill Fixing</option>
                            <option value="A/C & Refrigerator Service & Repair" className>A/C & Refrigerator Service & Repair</option>
                            <option value="Pet Care" className>Pet Care</option>
                            <option value="Child Care" className>Child Care</option>
                            <option value="Car Cleaning" className>Car Cleaning</option>
                            <option value="Cooking" className>Cooking</option>
                            <option value="Cleaning (Sweeping / Dusting)" className>Cleaning (Sweeping / Dusting)</option>
                            <option value="Laundry" className>Laundry</option>
                            <option value="Beautician" className>Beautician</option>
                            <option value="Computer Repairing and Maintenance" className>Computer Repairing and Maintenance</option>
                            <option value="Mason" className>Mason</option>
                            <option value="Plumbing" className>Plumbing</option>
                            <option value="Carpeting" className>Carpeting</option>
                            <option value="Electrician" className>Electrician</option>
                            <option value="Painting" className>Painting</option>
                            <option value="Driving" className>Driving</option>
                          </select>                                                
                        </div>
                        <div className="col-md-6 mt-2">
                          <label className="form-label">Verification Type</label><br />
                          <input className="form-check-input verifyModal" type="radio" data-bs-toggle="modal" data-bs-target="#verifyModal" aria-expanded="false" defaultValue="self" name="verification" id="sameas1" onclick="sameAs()" />
                          <label className="form-check-label" htmlFor="sameas1">Self Verified</label>
                          <input className="form-check-input verifyModal" type="radio" data-bs-toggle="modal" data-bs-target="#verifyModal" aria-expanded="false" defaultValue="ps" name="verification" id="sameas2" onclick="sameAs()" />
                          <label className="form-check-label" htmlFor="sameas2">Required to Verified</label>  
                          <input type="hidden" id="verification_value" name="verification_value" />                                              
                        </div>
                        <div className="col-md-6 mt-2" id="otherTextDiv" />
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-md-12 row row-cols-auto mt-2">  
                  <div className="col">
                    <button type="submit" className="btn btn-success px-5"><i className="bx bx-check-circle mr-1" /> Submit</button>                                              
                  </div>                                                
                </div>
              </form>
            </div>
          </div>
        </div>
    
    </div>
  
    {}
    {}
    {}
    {}
    {}
    {}
    {}
    {}
    {}    
  
    </div>
    
    </div>
  

      );
     }
     export default Addstaff;
     