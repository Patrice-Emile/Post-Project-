import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// TITLE STYLE
const TallTitle = styled.div`
  text-align: center;
  margin: auto 0;
  a {
    h1 {
      font-size: 4rem;
    }
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: red;
  }
  @media screen and (max-width: 1024px) {
    a {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

// COMPONENT'S TITLE
const Title = () => {
  return (
    <TallTitle>
      <Link to="/">
        <h1>Sup de Vinci</h1>
      </Link>
    </TallTitle>
  );
};

export default Title;
