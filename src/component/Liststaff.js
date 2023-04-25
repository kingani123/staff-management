
  // const fetchStaffList = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:3036/api/organization/list/IndianStaff');
  //     console.log('Staff list fetched successfully:', response.data);
  //     setStaffList(response);
  //   } catch (error) {
  //     console.error('Error fetching staff list:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchStaffList();
  // }, []);
  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import Navbar from "./Navbar";
import "./Liststaff.css";

import Sidebar from "./Sidebar";
  function StaffList() {
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('http://localhost:3036/api/organization/list/IndianStaff');
          //console.log(response.data);
          setStaffList(response.data.results.detalis);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);
    
    console.log(staffList);
   
  
  
    return (
      
      <div>

<Navbar/>
      <div className="wrapper">  
      <Sidebar className="nav-link active"/>  
      <div className="body_right">
        <div className="inside">
          <div className="right_body_pagenation">
            <p> List Unit Details</p>
          </div>    
          <div className="right_body_section">
            {/*--content here--*/}
            
            <div className="card mt-0">
            <div className="card-body">
              <div className="heading"><h3> List of Staff Details</h3></div>
              <div className="report_search_panner">
                <div className="left">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>All</option>
                  </select>
                  </div>
                  {/* <div className="right">
                  <div className="search_area">
                    <div className="input-group">
                      <input className="form-control search" type="search" defaultValue="search" id="example-search-input" />
                      <span className="input-group-append">
                        <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </div>         
                </div> */}
              </div>
                
              {/* <div className="user_table_area">
              <table style={{padding: 15}}>
  <thead>
    <tr>
      <th>Sl No.</th>
      <th>Name</th>
      <th>DOB</th>
      <th>Email</th>
      <th>Phone no</th>
      <th>Police Station</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {staffList.map((staff, index) => (
      <tr key={staff.id}>
        <td>
          <div style={{width: '15%'}}>
            <p className="mobile_heading">{index + 1}</p>
          </div>
        </td>
        <td>{staff.name}</td>
        <td>{staff.dob}</td>
        <td>{staff.email}</td>
        <td>{staff.mobile}</td>
        <td>{staff.police_station}</td>
        <td>
          <button className="btn btn-success">
            <i className="far fa-eye"></i>
          </button>
          <button className="btn btn-primary">
            <i className="far fa-pen-to-square"></i>
          </button>
          <button className="btn btn-danger">
            <i className="far fa-trash-can"></i>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

                  
                  </div> */}











                 
{/* <div className="user_table_area">
  <table style={{padding: 15, border: '1px solid black'}}>
    <thead>
      <tr>
        <th style={{border: '1px solid black'}}>Sl No.</th>
        <th style={{border: '1px solid black'}}>Name</th>
        <th style={{border: '1px solid black'}}>DOB</th>
        <th style={{border: '1px solid black'}}>Email</th>
        <th style={{border: '1px solid black'}}>Phone no</th>
        <th style={{border: '1px solid black'}}>Police Station</th>
        <th style={{border: '1px solid black'}}>Action</th>
      </tr>
    </thead>
    <tbody>
      {staffList.map((staff, index) => (
        <tr key={staff.id}>
          <td style={{border: '1px solid black'}}>
            <div style={{width: '15%'}}>
              <p className="mobile_heading">{index + 1}</p>
            </div>
          </td>
          <td style={{border: '1px solid black'}}>{staff.name}</td>
          <td style={{border: '1px solid black'}}>{staff.dob}</td>
          <td style={{border: '1px solid black'}}>{staff.email}</td>
          <td style={{border: '1px solid black'}}>{staff.mobile}</td>
          <td style={{border: '1px solid black'}}>{staff.police_station}</td>
          <td style={{border: '1px solid black'}}>
            <button className="btn btn-success">
              <i className="far fa-eye"></i>
            </button>
            <button className="btn btn-primary">
              <i className="far fa-pen-to-square"></i>
            </button>
            <button className="btn btn-danger">
              <i className="far fa-trash-can"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
</div>
 */}
 
 <div className="user_table_area" style={{height: '400px', overflow: 'auto' }}>
  <table style={{ padding: 15 }}>
    <thead style={{ backgroundColor: '#f2f2f2' }}>
      <tr>
        <th style={{ width: '8%' }}>Sl No.</th>
        <th style={{ width: '18%' }}>Name</th>
        <th style={{ width: '15%' }}>DOB</th>
        <th style={{ width: '18%' }}>Email</th>
        <th style={{ width: '18%' }}>Mobile No.</th>
        <th  style={{ width: '18%' }}>PS</th>
       
        <th  style={{ width: '20%' }}>Action</th>
      </tr>
    </thead>
    <tbody>
      {staffList.map((staff, index) => (
        <tr key={staff.id}>
          <td>
          
              <p className="sl_no">{index + 1}</p>
            
          </td>
          <td>{staff.name}</td>
          <td>{staff.dob}</td>
          <td>{staff.email}</td>
          <td>{staff.mobile}</td>
          <td>{staff.police_station}</td>
         
          <td>
            <button className="btn btn-success">
              <i className="fa fa-eye"></i>
            </button>
            <button className="btn btn-primary">
              <i className="fa fa-pen-to-square"></i>
            </button>
            <button className="btn btn-danger">
              <i className="fa fa-trash-can"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>













{/* 
                  <div className="user_table_area">
                <div className="table_header">
                  <div style={{width: '8%'}}>Sl No.</div>
                  <div style={{width: '15%'}}>Name</div>
                  <div style={{width: '15%'}}>Country</div>
                  <div style={{width: '15%'}}>State</div>
                  <div style={{width: '15%'}}>District</div>
                  <div style={{width: '15%'}}>Police Station</div>
                  <div style={{width: '15%'}}>Action </div>
                  
                </div>
                <div className="table_body">
                {staffList.map((staff, index) => (
      <div key={staff.id}>
         <div style={{width: '15%'}}>
            <p className="mobile_heading">{index + 1}</p>
          </div>
        <div style={{width: '8%'}}>
                    <p >{staff.name}</p>
                    <p className="sl_no"></p>
                  </div>
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">{staff.name}</p>
                    <p className="sl_no"></p>
                  </div>
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">{staff.name}</p>
                    <p className="sl_no"></p>
                  </div>
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">{staff.name}</p>
                    <p className="sl_no"></p>
                  </div>
                  <div style={{width: '8%'}}>
                    <p className="mobile_heading">{staff.name}</p>
                    <p className="sl_no"></p>
                  </div>
                  <div style={{width: '15%'}}>
                    <p className="mobile_heading">Action</p>
                    
                    <button className="btn btn-success"><i class="fa-regular fa-eye"></i></button>&nbsp;
        <button className="btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>&nbsp;
        <button className="btn btn-danger"><i class="fa-regular fa-trash-can"></i></button>
                  </div>
        </div>
         ))}</div>
         </div>
         */}
         </div>
                   
                  
                  





                  
                
                <br></br>  
                
                <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="dataTables_info" id="staff_info" role="status" aria-live="polite">Showing 2 to 2 of 2 entries</div>
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
            <div className="overlay nav-toggle-icon" />
            <a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>  
                </div>
              </div>    
            </div>
            
          </div>
        </div>
      </div>
  

    </div>
 




    
    );
  }
  
  export default StaffList;
  
  
  