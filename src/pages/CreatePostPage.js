import styled from "@emotion/styled";
import React from "react";
import apiUse from "../request/apiUse";
import TitlePage from "/src/components/TitlePage";

// CREATE POST STYLE

const FormContent = styled.form`
  padding: 50px;
  align-content: center;

  input[type="text"] {
    width: 100%;
  }
  textarea {
    height: 600px;
    width: 100%;
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
  div {
    padding: 30px;
    border-radius: 5px;
    width: 70%;
    background-color: #1c2b2d;
    margin: auto;
    box-shadow: 5px 5px 5px #000;

    div {
      background-color: #99a8b2;
      justify-content: space-around;
      width: 100%;
      margin: 0 auto 3% auto;
      p {
        margin: 50px 0 20px;
        font-size: 3.5vw;
      }
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

// CREATE POSTE PAGE
const CreatePostPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    apiUse({ method: "POST", resource: "/posts", data });
    window.location.href = "/";
  };

  return (
    <div>
      <TitlePage content={"Create your post !"} />
      <FormContent onSubmit={handleSubmit}>
        <div>
          <div>
            <p>Title of your post</p>
            <input
              type="text"
              name="title"
              id="postTitle"
              placeholder="My super post"
            />
            <p>Content of your post</p>
            <textarea
              placeholder="My fisrt post is coming
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                 Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
                 Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
              name="content"
              id="postContent"
            />
            <input
              type="submit"
              value="SUBMIT"
              placeholder="My fisrt post is coming"
            />{" "}
          </div>
        </div>
      </FormContent>
    </div>
  );
};

export default CreatePostPage;
