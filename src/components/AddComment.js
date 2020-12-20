import styled from "@emotion/styled";
import React from "react";
import apiUse from "../request/apiUse";
import { useParams } from "react-router-dom";

// ADDCOMMENTS STYLE
const Form = styled.form`
  margin: auto;

  text-transform: solid;
  font-size: 2rem;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px #000;
  p {
    color: white;
    font-size: 3rem;
    text-decoration: none;
  }
  textarea {
    height: 100px;
    margin: 50px 0;
    color: white;
    background-color: #3a494b;
  }
  textarea:hover {
    height: 100px;
    box-shadow: 1px 1px 10px 1px cyan;
    -webkit-box-sizing: border-box; /* Pour les anciennes versions des navigateurs WebKit */
    -moz-box-sizing: border-box; /* Pour tous les navigateurs Gecko */
    box-sizing: border-box;
  }
  input[type="submit"] {
    width: 100%;
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }
`;

// COMPONENT'S ADDCOMMENTS
const AddComments = () => {
  let { id } = useParams();

  const sendPost = () => {
    const comment = document.querySelector("#postComment").value;

    // SI COMMENTAIRE NON VIDE
    if (comment !== "") {
      const author = "CATTIER Patrice-Emile";
      const data = {
        content: comment,
        author: author
      };
      apiUse({ method: "POST", resource: `posts/${id}/comments`, data });
    }
  };
  return (
    <div>
      <Form onSubmit={sendPost}>
        <p>Comment space</p>
        <textarea
          placeholder="This post is great, I think !"
          name="postComment"
          id="postComment"
        />
        <input type="submit" value="SUBMIT" />
      </Form>
    </div>
  );
};

export default AddComments;
