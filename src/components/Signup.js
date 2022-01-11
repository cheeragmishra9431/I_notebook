import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  let history = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" , cpassword: "", name:""});
  const handleSubmit = async (e) => {
    e.preventDefault();

    //todo api call
    const {name, email, password }=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name, email, password
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        // redirect and save the auth toke
        localStorage.setItem('token',json.authtoken);
        history("/");

    }else{
        alert("invalid credentials")
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
          name="name"
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
          name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
          name="password"
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
          name="cpassword"
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
