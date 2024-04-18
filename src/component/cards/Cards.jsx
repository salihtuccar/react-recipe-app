import React from "react";
import { Button, Card, Image, MainContainer } from "./Cards.style";
import Header from "../header/Header";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";
const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => (
        <Card key={index}>
          <Header>{recipe.label}</Header>
          <Image src={recipe.image || defaultImage} />
          <Button onClick={() => navigate("detail", { state: recipe })}>
            View More
          </Button>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Cards;
