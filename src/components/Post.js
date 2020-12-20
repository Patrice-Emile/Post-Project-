import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import dateConvert from "../request/dateConvert";

// POST STYLE
const StyledPost = styled.div`
  width: 100%;
  text-transform: solid;
  font-size: 2rem;
  text-align: center;
  padding: 20px;
  background-color: #99a8b2;
  box-shadow: 1px 1px 5px #000;

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: none;
    color: red;
  }
  p {
    margin: 10px;
    font-size: 1rem;
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    a {
      font-size: 2rem;
    }
  }
`;

// COMPONENT'S POST
const Post = (props) => {
  const {
    post: { id, title, created_at: createdAt }
  } = props;

  return (
    <StyledPost key={id}>
      <Link to={`/postpage/${id}`}>{title}</Link>
      <p>{dateConvert(createdAt)}</p>
    </StyledPost>
  );
};

export default Post;
