import styled from "@emotion/styled";
import React from "react";

// FOOTER STYLE
const List = styled.div`
  text-align: center;
  background-color: #e6d5b8;
  position: absolute;
  margin-bottom: 0;
  width: 100%;
  padding-top: 50px;
  height: 200px;
  box-shadow: 1px 1px 5px #000;
`;

// COMPONENT'S FOOTER
const Footer = () => (
  <List>
    &copy; By CATTIER Patrice-Emile <br />
    All right reserved 2020
  </List>
);

export default Footer;
