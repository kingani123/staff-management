import React from "react";
const Login =()=>{
    return (
<>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* custom styles go here */\n    body {\n      background-color: #f5f5f5;\n    }\n    .form-container {\n      background-color: #f4f9ff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      box-shadow: 0 2px 2px rgb(0 46 142);\n      padding: 20px;\n    }\n    .form-group {\n      margin-bottom: 15px;\n    }\n    .form-control {\n      border-radius: 4px;\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) inset;\n      font-size: 14px;\n      padding: 6px 12px;\n      width: 100%;\n    }\n    .btn {\n      border-radius: 4px;\n      font-size: 14px;\n      font-weight: 600;\n      letter-spacing: 0.1em;\n      padding: 10px 16px;\n      text-transform: uppercase;\n    }\n    .btn-primary {\n      background-color: #007bff;\n      border-color: #007bff;\n      color: #fff;\n    }\n    .btn-primary:hover,\n    .btn-primary:focus {\n      background-color: #0069d9;\n      border-color: #0062cc;\n      color: #fff;\n    }\n  "
    }}
  />

  <div className="container mt-5">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="form-container">
          <h1 className="text-center mb-4">Staff Management</h1>
          <form id="login-form">
            <div className="form-group">
            <br></br>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary btn-block">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <script>$('#login-form').submit(function(event</script>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.modal-content {\n  background-color: #afdaffb5;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.modal-header {\n  border-bottom: 1px solid #ddd;\n  background-color: #f5f5f5;\n}\n\n.modal-body {\n  padding: 20px;\n}\n\n.modal-footer {\n  border-top: 1px solid #ddd;\n  background-color: #f5f5f5;\n}\n"
    }}
  />
</>

    
      );
}
export default Login;