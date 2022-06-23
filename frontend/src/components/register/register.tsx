import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../../graphql/queries/use-registration";
import useForm from "../../hooks/useForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Register: FC = () => {
  const { executeRegistration } = useSignup();

  const { inputs, handleInputChange } = useForm();
  const navigate = useNavigate();

  const handleValidation = () => {

    let result = true;
    const { email, password, confirm, firstname, lastname } = inputs;
    if (!email) {
      toast.error(" The email is required !");
      result = false;
    } else if (!password || password.length < 8) {
      toast.error(" The password should be at least 8 characters");
      result = false;
    } else if (password !== confirm) {
      toast.error(" The password and the confirm password should be the same!");
      result = false
    } else if (!firstname || firstname.length < 3) {
      toast.error(" The first name should be at least 3 characters");
      result = false;
    } else if (!lastname || lastname.length < 3) {
      toast.error(" The last name should be at least 3 characters");
      result = false;
    }

    return result;
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (handleValidation()) {
      executeRegistration({
        email: inputs.email,
        password: inputs.password,
        firstname: inputs.firstname,
        lastname: inputs.lastname,
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
    <div className="Register">
      <div className="title">SignUp</div>
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
          <input
            type="password"
            name="confirm"
            placeholder="****"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            placeholder="first name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastname"
            placeholder="last name"
            onChange={handleInputChange}
          />
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

export default Register;
