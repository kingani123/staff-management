import React from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Rolewise =()=>{
    return (
      <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/> 
      <div className="body_right">
  <div className="inside">
    <div className="right_body_pagenation">
      <p>Role Wise</p>
    </div>           


          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="icon" href="http://staff.atithiaadhaar.com/assets/images/logo/company-logo-Trans.png" type="image/png" /> */}
          {/*plugins*/}
          <link href="http://staff.atithiaadhaar.com/assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
          <link href="http://staff.atithiaadhaar.com/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
          <link href="http://staff.atithiaadhaar.com/assets/plugins/metismenu/css/metisMenu.min.css" rel="stylesheet" />
          {/* Bootstrap CSS */}
          <link href="http://staff.atithiaadhaar.com/assets/css/bootstrap.min.css" rel="stylesheet" />
          <link href="http://staff.atithiaadhaar.com/assets/css/bootstrap-extended.css" rel="stylesheet" />
          <link href="http://staff.atithiaadhaar.com/assets/css/style.css" rel="stylesheet" /> 
          <link href="http://staff.atithiaadhaar.com/assets/css/icons.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="http://staff.atithiaadhaar.com/assets/bootstrap-icons%401.5.0/font/bootstrap-icons.css" />
          {/* loader*/}
          <link href="http://staff.atithiaadhaar.com/assets/css/pace.min.css" rel="stylesheet" />
          {/*Theme Styles*/}
          <link href="http://staff.atithiaadhaar.com/assets/css/dark-theme.css" rel="stylesheet" />
          <link href="http://staff.atithiaadhaar.com/assets/css/custom.css" rel="stylesheet" />
          {/* BEGIN: Stack CSS*/}
          <link href="https://cdn.datatables.net/1.11.3/css/dataTables.bootstrap5.min.css" rel="stylesheet" />
          {/* END: Stack CSS*/}
          <main className="page-content">    
            {/* BEGIN: Page Main*/}
            {/*breadcrumb*/}
            {/*end breadcrumb*/}  
            <div className="container">  
              <div className="row">
                <div className="col-md-12">
                    <div className="card-body">
                      <div className="d-flex align-items-center p-1">
                        <h5 className="mb-0">Staff List(Role Wise)</h5>
                        <form className="ms-auto position-relative" id="typeForm">
                          <select className="form-select" name="q" id="q" onchange="typeChange()">
                            <option value disabled selected>All</option>
                          </select>
                        </form>
                      </div>
                      <div className="table-responsive">
                        <div id="staff_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="staff_length"><label><option value={10}> </option><option value={25} /><option value={50} /><option value={100} /></label></div></div><div className="col-sm-12 col-md-6"><div id="staff_filter" className="dataTables_filter" /></div></div><div className="row"><div className="col-sm-12"><table id="staff" className="table table-striped table-bordered dataTable no-footer" role="grid" aria-describedby="staff_info">
                                <thead>
                                  <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Sl. No.: activate to sort column descending">Sl. No.</th><th className="sorting" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-label="Name of the Role: activate to sort column ascending">Name of the Role</th><th className="sorting" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-label="Name of the Employee: activate to sort column ascending">Name of the Employee</th><th className="sorting" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-label="Date of Joining: activate to sort column ascending">Date of Joining</th></tr>
                                </thead>
                                <tbody>
                                  <tr role="row" className="odd"><td className="sorting_1" /><td /><td /><td /></tr></tbody>
                                </table>
                                <div id="staff_processing" className="dataTables_processing card" style={{display: 'none'}} /></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="staff_info" role="status" aria-live="polite" /></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="staff_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="staff_previous"><a href="#" aria-controls="staff" data-dt-idx={0} tabIndex={0} className="page-link">Prev</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="staff" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="staff_next"><a href="#" aria-controls="staff" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
                              </div>
                  </div>
                </div>
              </div>
              {/* END: Page Main*/}
              {/* BEGIN: Page Main*/}
              {/*start overlay*/}
              {/*end overlay*/}
              {/*Start Back To Top Button*/}
              <a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>
              {/*End Back To Top Button*/}
              {/*start switcher*/}
              {/*end switcher*/}    {/* END: Page Main*/}
              {/* BEGIN: Footer*/}
              {/* Modal */}
              <div className="modal fade" id="nochangeconfirmation" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title fw-bold fst-italic">No Change Confirmation</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body fst-italic">
                      <h4>I do, hereby confirmed that no changed has been made during this current week in this Organization, i.e. the total staff strength is as it was before.</h4>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" onclick="noChangeConfirmation()" className="btn btn-primary" data-bs-dismiss="modal">Yes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div></main>
          {/*end page main*/}
          {/*end wrapper*/}
          {/* Bootstrap bundle JS */}
          {/*plugins*/}
          {/*app*/}
          {/* BEGIN STACK JS*/}
          {/* END STACK JS*/}
          {/*  */}    
          </div>
        </div>
    </div>
</div>
  
  );
     }
  export default Rolewise;