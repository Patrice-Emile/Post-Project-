import styled from "@emotion/styled";
import React from "react";

import apiGet from "../request/apiGet";
import Post from "/src/components/Post";
import TitlePage from "/src/components/TitlePage";

// HOME PAGE STYLE
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

// HOME PAGE
const HomePage = () => {
  const posts = apiGet({ resource: "/posts" });

  return (
    <div>
      <TitlePage content={"Here are some very interesting posts :-)"} />
      <Content>
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </Content>
    </div>
  );
};

export default HomePage;
