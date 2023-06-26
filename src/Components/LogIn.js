import React from "react";

export default function LogIn() {
  return (
    <div>
      <h1>Welcome to GradeMaster!</h1>
      <h5>Log in to continue</h5>
      <form>
        <input placeholder="Email Address" type="text"></input>
        <input placeholder="Password" type="password"></input>
        <button type="submit">SIGN IN</button>
      </form>
      <h5>
        Don't have an account? Click{" "}
        <strong>
          <a href="#">Register</a>
        </strong>
      </h5>
      <h5>
        Forgot Password? Click{" "}
        <strong>
          <a href="#">Reset</a>
        </strong>
      </h5>
    </div>
  );
};
