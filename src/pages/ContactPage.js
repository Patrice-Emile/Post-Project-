import styled from "@emotion/styled";
import React from "react";
import TitlePage from "../components/TitlePage";

// CONTACT STYLE
const Content = styled.div`
  padding: 50px;
  align-content: center;
  p {
    color: white;
    margin: 5%;
  }
  p:hover {
    color: red;
  }
  div {
    padding: 30px;
    border-radius: 5px;
    width: 90%;
    background-color: #1c2b2d;
    margin: auto;
    box-shadow: 5px 5px 5px #000;
    display: flex;

    div {
      flex-direction: column;
      background-color: #99a8b2;
      width: 100%;
      margin: 0 3% auto;
    }
  }
  @media screen and (max-width: 1024px) {
    div {
      width: 100%;
      margin: 0;
    }
    padding: 0;
  }
`;

// CONTACT PAGE
const ContactPage = () => {
  return (
    <div>
      <TitlePage content={"Contact Us"} />
      <Content>
        <div>
          <div>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
          </div>
          <div>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
          </div>
          <div>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
            <p>Le Lorem Ipsum </p>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default ContactPage;
