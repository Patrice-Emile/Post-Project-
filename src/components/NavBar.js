import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// NAVBAR STYLE
const List = styled.ul`
  list-style-type: none;
  display: flex;
  width: 120%;
  height: 100%;

  li {
    margin: auto;
    a {
      text-decoration: none;
      color: white;
      padding: 100% 0;
    }
    a:hover {
      background-color: #1f6f8b;
      color: white;
      padding: 50px 0;
      box-shadow: 5px 5px 5px #000;
    }
  }
`;
// COMPONENT'S NAVBAR
const NavBar = () => (
  <nav>
    <List>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/authors">Our autors</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/createpost">Create Post</Link>
      </li>
    </List>
  </nav>
);

export default NavBar;
