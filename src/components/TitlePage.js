import styled from "@emotion/styled";
import React from "react";

// TITLE COMPONENTS STYLE
const Title = styled.div`
  text-transform: solid;
  font-size: 4rem;
  text-align: center;
  padding: 50px;
`;

// TITLE COMPONENTS
const TitlePage = (props) => {
  const { content } = props;
  return <Title>{content}</Title>;
};

export default TitlePage;
