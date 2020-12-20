import styled from "@emotion/styled";
import React from "react";
import Title from "./Title";
import NavBar from "./NavBar";

// HEADER STYLE
const List = styled.header`
  display: flex;
  justify-content: space-around;
  height: 150px;
  background-color: #1c2b2d;
  border-bottom: 5px solid #e6d5b8;
  box-shadow: 1px 1px 5px #000;
`;

// COMPONENT'S HEADER
const Header = () => (
  <List>
    <Title />
    <NavBar />
  </List>
);

export default Header;
