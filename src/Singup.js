import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Singup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://pintrest-server.onrender.com/api/signup",
        {
          email,
          password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-container">
      <form className="form-sign" onSubmit={handleSubmit}>
        <input
          className="user-sign"
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>

        <input
          className="user-sign"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <Link to="/Home">
          <button className="sign-button">Signup</button>
        </Link>
      </form>
    </div>
  );
}

export default Singup;
