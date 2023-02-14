import React from "react";
import Navbar from "./Navbar";


import Sidebar from "./Sidebar";

const Listunit =()=>{
    return (
      <div>
      <Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/>            

<div className="body_right">
  <div className="inside">
    <div className="right_body_pagenation">
      <p> Add Contract Details</p>
    </div>
    <div className="right_body_section">
      {/*--content here--*/}
      
     

  
        <div className="container">

<div>
<div className="row">
  <div className="col-md-12">
          <div className="card-body">
        <div className="d-flex align-items-center p-1">
          <h5 className="mb-0">Unit Details</h5>
        </div>
        <div className="table-responsive">
          <div id="staff_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
            <div className="row">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <table id="staff" className="table table-striped table-bordered dataTable no-footer" role="grid" aria-describedby="staff_info">
                <thead>
                  <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Sl NO.: activate to sort column descending">Sl NO.</th>
                    <th className="sorting" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-label="NAME: activate to sort column ascending">NAME</th><th className="sorting" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-label="DOB: activate to sort column ascending">Country</th>
                    <th className="sorting" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-label="Email: activate to sort column ascending">State</th>
                    <th className="sorting" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-label="Mobile: activate to sort column ascending">Police Station</th>
                    <th className="sorting" tabIndex={0} aria-controls="staff" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending">Action</th></tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd"><td className="sorting_1">1</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div id="staff_processing" className="dataTables_processing card" style={{display: 'none'}}>
                Processing...</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="dataTables_info" id="staff_info" role="status" aria-live="polite">Showing 1 to 2 of 2 entries</div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="dataTables_paginate paging_simple_numbers" id="staff_paginate"><ul className="pagination">
                  <li className="paginate_button page-item previous disabled" id="staff_previous">
                    <a href="#" aria-controls="staff" data-dt-idx={0} tabIndex={0} className="page-link">Prev</a></li>
                  <li className="paginate_button page-item active"><a href="#" aria-controls="staff" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                  <li className="paginate_button page-item next disabled" id="staff_next"><a href="#" aria-controls="staff" data-dt-idx={2} tabIndex={0} className="page-link">Next</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper input-data">
              <input type="text" style={{height: '100%', width: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid silver'}} />
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
{/* END: Page Main*/}
{/* BEGIN: Page Main*/}
{/*start overlay*/}
<div className="overlay nav-toggle-icon" />
{/*end overlay*/}
{/*Start Back To Top Button*/}
<a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>
{/*End Back To Top Button*/}
{/*start switcher*/}
{/*end switcher*/}    {/* END: Page Main*/}
{/* BEGIN: Footer*/}
{/* Modal */}
{/*end page main*/}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
     }
     export default Listunit;