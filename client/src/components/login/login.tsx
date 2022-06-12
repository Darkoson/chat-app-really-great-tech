import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import "./login.css";

const Login: FC = () => {
  const callback = () => {
    console.log(`Email: ${inputs.email} ; password: ${inputs.password}`);
  };
  const { inputs, handleInputChange } = useForm(callback);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="Login">
      <div className="title">SignIn</div>
      <form>
        <div className="form-group">
          <input
            type="email"
            className="full"
            name="email"
            id=""
            placeholder="example@email.com"
            onChange={handleInputChange}
          />
          <span>
            <img src="" alt="" />
          </span>
        </div>

        <div className="form-group">
          <input
            type="password"
            className="full"
            name="password"
            id=""
            placeholder="****"
            onChange={handleInputChange}
          />
          <span>
            <img src="" alt="" />
          </span>
        </div>

        <div className="form-group">
          <button
            id="btn-login"
            className="text-bold text-white"
            onClick={handleSubmit}
            disabled={inputs.password ===''}
          >
            Connect
          </button>
        </div>

        <Link to="/signup" className="text-small text-bold text-white">
          No account ?{" "}
          <span className=" text-blue-deep"> click here to signup</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
