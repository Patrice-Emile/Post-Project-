import styled from "@emotion/styled";
import React from "react";
import TitlePage from "../components/TitlePage";

// ABOUT STYLE
const List = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const Content = styled.div`
  padding: 50px;
  align-content: center;
  p {
    text-align: justify;
    margin: 5%;
    font-size: 2rem;
  }
  div {
    padding: 30px;
    border-radius: 5px;
    width: 90%;
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
// ABOUT PAGE
const AboutPage = () => {
  return (
    <List>
      <TitlePage content={"About Us"} />
      <Content>
        <div>
          <div>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte.
            </p>
            <p>
              Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté
              à la bureautique informatique, sans que son contenu n'en soit
              modifié. Il a été popularisé dans les années 1960 grâce à la vente
              de feuilles Letraset contenant des passages du Lorem Ipsum, et,
              plus récemment, par son inclusion dans des applications de mise en
              page de texte, comme Aldus PageMaker.
            </p>
          </div>
        </div>
      </Content>
    </List>
  );
};

export default AboutPage;
