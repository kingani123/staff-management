import React from "react";


const Home = ()=>{
    return (

     <div className="body_right">
  <div className="inside">
    <div className="right_body_pagenation">
      <p>Dashboard</p>
    </div>
    <div className="right_body_section">
      {/*--content here--*/}
      <div className="dashboard_top_section">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box1">
              <div className="top">
                <div className="icon_area dashboard_top_bg1">
                  <img src="images/dashboard_icon1.svg" alt="" />
                </div>
                <div className="text_area">
                  <h4>180</h4>
                </div>
              </div>
              <div className="bottom">
                <p>Total bio medical waste generated</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box1">
              <div className="top">
                <div className="icon_area dashboard_top_bg1">
                  <img src="images/dashboard_icon2.svg" alt="" />
                </div>
                <div className="text_area">
                  <h4>180</h4>
                </div>
              </div>
              <div className="bottom">
                <p>Total bio medical waste pre-treated</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box2">
              <div className="top">
                <div className="icon_area dashboard_top_bg1">
                  <img src="images/dashboard_icon3.svg" alt="" />
                </div>
                <div className="text_area">
                  <h4>180</h4>
                </div>
              </div>
              <div className="bottom">
                <p>
                  Total bio medical waste generated &amp; treated this month
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box2">
              <div className="top">
                <div className="icon_area dashboard_top_bg1">
                  <img src="images/dashboard_icon4.svg" alt="" />
                </div>
                <div className="text_area">
                  <h4>180</h4>
                </div>
              </div>
              <div className="bottom">
                <p>Total bio medical waste generated &amp; treated this week</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box1">
              <div className="top">
                <div className="icon_area dashboard_top_bg1">
                  <img src="images/dashboard_icon5.svg" alt="" />
                </div>
                <div className="text_area">
                  <h4>180</h4>
                </div>
              </div>
              <div className="bottom">
                <p>
                  Total bio medical waste generated &amp; treated previous day
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box1">
              <div className="top">
                <div className="icon_area dashboard_top_bg1">
                  <img src="images/dashboard_icon6.svg" alt="" />
                </div>
                <div className="text_area">
                  <h4>180</h4>
                </div>
              </div>
              <div className="bottom">
                <p>Total staff trained</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box2">
              <div className="top">
                <div className="icon_area dashboard_top_bg1">
                  <img src="images/dashboard_icon7.svg" alt="" />
                </div>
                <div className="text_area">
                  <h4>180</h4>
                </div>
              </div>
              <div className="bottom">
                <p>Bags in stock</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box2">
              <div className="top">
                <div className="icon_area dashboard_top_bg1">
                  <img src="images/dashboard_icon8.svg" alt="" />
                </div>
                <div className="text_area">
                  <h4>180</h4>
                </div>
              </div>
              <div className="bottom">
                <p>Payment made vs due</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_graph_section">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="heading">
                <h3>BMW Generated</h3>
              </div>
              <div className="graph_img_area">
                <img src="images/graph1.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="heading">
                <h3>Bags in Stock</h3>
              </div>
              <div className="graph_img_area">
                <img src="images/graph2.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="heading">
                <h3>Payments Mode</h3>
              </div>
              <div className="graph_img_area">
                <img src="images/graph3.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="heading">
                <h3>Traning to staff</h3>
              </div>
              <div className="graph_img_area">
                <img src="images/graph4.svg" alt="" />
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
export default Home;