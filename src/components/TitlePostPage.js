import React from "react";
import apiGet from "../request/apiGet";
import styled from "@emotion/styled";
import dateConvert from "../request/dateConvert";

// TITLE POST PAGE STYLE
const TitlePost = styled.div`
  border-bottom: 4px solid black;
  text-align: center;

  h1 {
    text-transform: solid;
    font-size: 4rem;
    padding: 50px;
  }
  p {
    color: white;
  }
  span:hover {
    color: red;
  }
  @media screen and (max-width: 1024px) {
    span {
      font-size: 1.5rem;
    }
  }
`;

// COMPONENT'S TITLE POST PAGE
const TitlePostPage = (props) => {
  const { title, created_at, idAuthor: id } = props;

  // ICI J'AI UN PROBLEME
  // Ma fonction est appeler 4 fois et je n'arrive pas à déterminé pourquoi !
  // la première fois l'id est null et renvoie l'erreur de la requête 500 !
  // Puis l'id est récupérer (au 2eme appel) donc affiche au final le nom de l'auteur !
  // J'ai donc créer une "ugly" alternatite avec le param : uglyVar qui gère le problème !
  // Mais si vous retirer ce param, le problème réapparaît et j'aimerais comprendre pourquoi il existe !
  // Si vous avez le temps je suis partant pour comprendre...
  //
  // Sinon bonne correction :)

  const author = apiGet({
    resource: `/authors/${id}`,
    id: `${id}`,
    swt: null,
    uglyVar: 1
  });

  return (
    <TitlePost>
      <h1>{title}</h1>
      <p>
        Created by <span>{author.display_name}</span>
      </p>
      <p>{dateConvert(created_at)}</p>
    </TitlePost>
  );
};

export default TitlePostPage;
