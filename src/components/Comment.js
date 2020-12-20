import React from "react";
import styled from "@emotion/styled";
import apiGet from "../request/apiGet";
import dateConvert from "../request/dateConvert";

// COMMENT STYLE
const StyledComment = styled.div`
  div {
    background-color: #e6d5b8;
  }
  p {
    font-size: 0.7rem;
  }
`;

const Content = styled.div`
  justify-content: space-around;
  background-color: red;
  border-radius: 0 0 0 0;
  p {
    font-size: 2rem;
  }
`;

const Author = styled.div`
  border-top: 1px black solid;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

// COMPONENT'S COMMENT
const Comment = (props) => {
  const { comment: content, author, date } = props;
  const authorComment = apiGet({
    resource: `/authors/${author}`,
    id: `${author}`,
    swt: null
  });

  return (
    <StyledComment>
      <Content>
        <p>{content}</p>
      </Content>
      <Author>
        <p>{authorComment.display_name}</p>
        <p>{dateConvert(date)}</p>
      </Author>
    </StyledComment>
  );
};

export default Comment;
