import React from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";
import Footer from "./Footer";


const Form =()=>{
    return (
      <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/>            

<div className="body_right">
  <div className="inside">
    <div className="right_body_pagenation">
      <p>Hospital / Alipore Clinic</p>
    </div>
    <div className="right_body_section">
      {/*--content here--*/}
      <div className="card mt-0">
        <div className="heading">
          <h3>Contact Form</h3>
        </div>
        <form>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id=""
                  aria-describedby=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <label htmlFor="" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <label htmlFor="" className="form-label">
                  Dob
                </label>
                <input
                  type="date"
                  className="form-control"
                  id=""
                  aria-describedby=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <label htmlFor="" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected="">Country</option>
                  <option value={1}>Country</option>
                  <option value={2}>Country</option>
                  <option value={3}>Country</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <label htmlFor="" className="form-label">
                  Upload
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <label htmlFor="" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <h5>Gender</h5>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    defaultValue="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-3">
                <h5>Checks</h5>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    defaultValue="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Checkbox1
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    Checkbox2
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <input
                type="submit"
                className="green_but mt-4"
                defaultValue="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
    <Footer/>
    </div>
  

      );
     }
     export default Form;
     