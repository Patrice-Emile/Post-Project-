import styled from "@emotion/styled";
import React from "react";
import apiGet from "../request/apiGet";
import Comment from "../components/Comment";
import TitlePostPage from "../components/TitlePostPage";
import AddComment from "../components/AddComment";
import { useParams } from "react-router-dom";

// POST PAGE STYLE
const Content = styled.div`
  div {
    background-color: #99a8b2;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto 3% auto;
  }
`;
const PostContent = styled.div`
  padding: 50px;
  align-content: center;

  div {
    padding: 30px;
    border-radius: 5px;
    width: 90%;
    background-color: #1c2b2d;
    margin: auto;
  }
  @media screen and (max-width: 1024px) {
    div {
      width: 100%;
      margin: 0;
    }
    padding: 0;
  }
`;

// POST PAGE
const PostPage = () => {
  const { id } = useParams();

  const post = apiGet({
    resource: `/posts/${id}`,
    id: `${id}`,
    swt: null
  });

  const comments = apiGet({ resource: `/posts/${id}/comments`, id: `${id}` });

  return (
    <div>
      <TitlePostPage
        title={post.title}
        created_at={post.created_at}
        idAuthor={post.author}
      />

      <PostContent>
        <div>
          <Content>
            <div>{post.content}</div>
          </Content>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment.content}
              author={comment.author}
              date={comment.created_at}
            />
          ))}
          <AddComment />
        </div>
      </PostContent>
    </div>
  );
};

export default PostPage;
