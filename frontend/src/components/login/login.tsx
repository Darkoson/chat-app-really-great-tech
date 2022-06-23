import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../graphql/queries/use-login";
import useForm from "../../hooks/useForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login: FC = () => {
  const { executeLogin } = useLogin();

  const { inputs, handleInputChange } = useForm();
  const navigate = useNavigate();

  const handleValidation = () => {
    console.log("before validation: input=", inputs);

    let result = true;
    const { email, password } = inputs;
    if (!email) {
      toast.error(" The email is required !");
      result = false;
    } else if (!password || password.length < 8) {
      toast.error(" The password should be at least 8 characters");
      result = false;
    }
    return result;
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (handleValidation()) {
      executeLogin({
        email: inputs.email,
        password: inputs.password,
      })
        .then((result) => {
          if (result?.ok) {
            localStorage.setItem("user", JSON.stringify(result.res));
            // redirection to the chat page
            navigate("/chat");
          } else if (result && "messages" in result.res) {
            toast.error(result.res.messages[0]);
            console.log("data = ", result.res.messages);
          }
        })
        .catch((err) => toast.error("An expected error has happened"));
    }
  };

  return (
    <div className="Login">
      <div className="title">Login</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="example@email.com"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="****"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <button id="btn-login" className="text-bold text-white">
            Connect
          </button>
        </div>

        <Link to="/signup" className="text-small text-bold text-white">
          Have no account ?{" "}
          <span className=" text-blue-deep"> click here to register</span>
        </Link>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
