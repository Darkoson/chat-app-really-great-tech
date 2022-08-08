import React, { FC } from "react";
//import "./welcome.css";
import styled from "styled-components";
import logo from "./../logo.png";
import { Outlet } from "react-router-dom";

const Welcome: FC = () => {
  return (
    <Container>
      <div className="top-bar">
        <img src={logo} alt="" />
      </div>
      <div className="main">
        <div className="title">
          <h1>
            Best Online Messaging <br /> Application{" "}
          </h1>
        </div>
        <div className="forms">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: linear-gradient(
    rgba(var(--blue-deep-rgb), 0.9),
    rgba(var(--blue-light-rgb), 0.5)
  );
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .top-bar {
    padding:10px;
    display: flex;
    /* height: 100px; */
    align-items: center;
    img {
      width: 8rem;
    }
  }
  .main {
    // flex-grow: 1;
    display: flex;
    padding-top: 100px;
    flex-direction: row;

    .title {
      flex-grow: 1;
      h1 {
        margin-top: 40px;
        text-align: center;
        color: white;
        line-height: 80px;
        font-weight: bolder;
        font-size: 55px;
      }
    }

    .forms {
      width: 300px;
      min-height: 280px;
      margin-top: 0px;
      border-radius: 5px;
      padding: 20px auto 0px auto;

      background-color: rgba(var(--form-bg-rgb), 0.5);
    }
  }

  @media screen and (max-width: 992px) {
    .top-bar {
      justify-content: center;
    }
    .main {
      flex-direction: column;
      padding-top: 50px;
      .title {
        h1 {
          text-align: center;
          line-height: 50px;
          font-weight: bolder;
          font-size: 35px;
        }
      }
      .forms {
        width: 100%;
        min-height: 280px;
        margin-top: 50px;
      }
    }
  }
`;

export default Welcome;
