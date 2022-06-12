import React, { FC } from "react";
import { Link } from "react-router-dom";

const Register: FC = () => {
  return (
    <div className="Register">
      <div className="title">SignUp</div>
      <form method="post">
        <div className="form-group">
          <input
            type="email"
            className="full"
            name=""
            id=""
            placeholder="example@email.com"
          />
          <span>
            <img src="" alt="" />
          </span>
        </div>

        <div className="form-group">
          <input
            type="password"
            className="full"
            name=""
            id=""
            placeholder="****"
          />
          <span>
            <img src="" alt="" />
          </span>
        </div>

        <div className="form-group">
          <button id="btn-login" className="text-bold text-white">
            Connect
          </button>
        </div>

        <Link to="/signin" className="text-small text-bold text-white">
          Have an account ?{" "}
          <span className=" text-blue-deep"> click here to signin</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
