import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import "./login.css";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(`target: ${e.target.name}`);
};

const Login: FC = () => {

  const { inputs, handleInputChange } = useForm(onChange);
  const navigate = useNavigate()

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    // redirection to the chat page
    navigate("/chat")
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
          <Input.Password
            type="password"
            name="password"
            placeholder="****"
            onChange={handleInputChange}
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          {/* <input
            type="password"
            className="full"
            name="password"
            onChange={handleInputChange}
            id=""
            placeholder="****"
          /> */}
        </div>

        <div className="form-group">
          <button
            id="btn-login"
            className="text-bold text-white"
            onClick={handleSubmit}
            disabled={inputs.password === ""}>
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
