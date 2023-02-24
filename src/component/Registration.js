import React from 'react';
import './Registration.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Registration(){
  return(

<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Form</title>
  {/* Bootstrap 4 CSS */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  {/* Custom CSS */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .container {\n      max-width: 500px;\n      margin: 0 auto;\n    }\n  "
    }}
  />
  <div className="container">
    <h1 className="text-center">Registration Form</h1>
    <form>
      <div className="form-group">
        <label htmlFor="organization-name">Organization Name</label>
        <input
          type="text"
          className="form-control"
          id="organization-name"
          name="organization-name"
          required=""
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required=""
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="director-name">Director Name</label>
        <input
          type="text"
          className="form-control"
          id="director-name"
          name="director-name"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="organization-type">Organization Type</label>
        <select
          className="form-control"
          id="organization-type"
          name="organization-type"
          required=""
        >
          <option value="">Select Organization Type</option>
          <option value="non-profit">Non-Profit</option>
          <option value="for-profit">For-Profit</option>
          <option value="government">Government</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          required=""
        />
        <label htmlFor="mobile-no">Mobile No.</label>
        <input
          type="tel"
          className="form-control"
          id="mobile-no"
          name="mobile-no"
          pattern="[0-9]{10}"
          required=""
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required=""
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirm-password"
          name="confirm-password"
          required=""
        />
      </div>
      
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="terms"
          name="terms"
          required=""
        />
        <label className="form-check-label" htmlFor="terms">
          I agree to the terms and conditions
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  </div>
  {/* Bootstrap 4 JS and jQuery */}
</>

  );
}

export default Registration;
