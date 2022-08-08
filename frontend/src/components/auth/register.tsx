import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRemoteRegistration } from "../../graphql/user/use-remote-registration";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import useForm from "../../shared/hooks/useForm";
import styled from "styled-components";

const Register: FC = () => {
  const { executeRegistration } = useRemoteRegistration();

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
      result = false;
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
          if (result.ok) {
            localStorage.setItem("user", JSON.stringify(result.res));
            // redirection to the chat page
            navigate("/login");
          } else if ("info" in result.res) {
            toast.error(result.res.info);
            console.log("data = ", result.res.info);
          }
        })
        .catch((err) => toast.error("An expected error has happened"));
    }
  };

  return (
    <Container>
      <div className="title">Register</div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder="your email address"
        />

        <input
          type="password"
          name="password"
          placeholder="your password"
          onChange={handleInputChange}
        />

        <input
          type="password"
          name="confirm"
          placeholder="confirm password"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="firstname"
          placeholder="first name"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="lastname"
          placeholder="last name"
          onChange={handleInputChange}
        />

        <button id="btn-login" className="text-bold text-white">
          Connect
        </button>

        <Link to="/login">
          Already have an account ?{" "}
          <span className=" text-blue-deep"> click here to login</span>
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
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1em;
    input {
      border-radius: 3px;
      border: none;
      padding: 8px;
    }

    #btn-login {
      width: 100%;
      background-color: var(--blue-deep);
      border-radius: 3px;
      padding: 8px;
      color: white;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
    a {
      font-size: 12px;
      text-decoration: none;
    }
  }
`;

export default Register;
