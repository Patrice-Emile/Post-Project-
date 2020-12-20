import styled from "@emotion/styled";
import React from "react";
import apiGet from "../request/apiGet";
import TitlePage from "/src/components/TitlePage";
import dateConvert from "../request/dateConvert";

// AUTHORS STYLE
const Content = styled.div`
  padding: 50px;
  align-content: center;

  div {
    padding: 30px;
    border-radius: 5px;
    width: 50%;
    background-color: #1c2b2d;
    margin: auto;
    box-shadow: 5px 5px 5px #000;

    div {
      background-color: #99a8b2;
      justify-content: space-around;
      width: 100%;
      margin: 0 auto 3% auto;
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
// AUTHORS PAGE
const AuthorsPage = () => {
  const authors = apiGet({ resource: "/authors" });

  return (
    <div>
      <TitlePage content={"Our authors"} />
      <Content>
        <div>
          {authors.map((author) => (
            <div>
              <p>{author.display_name}</p>
              <p>{dateConvert(author.created_at)}</p>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
};

export default AuthorsPage;
