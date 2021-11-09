import React from "react";

import { Container, IconContainer, InfoContainer, TextInfo } from "./styles";

import IconTooth from "../../assets/images/tooth.svg";
import IconHeart from "../../assets/images/heart.svg";
import IconEyes from "../../assets/images/eyes.svg";

interface CategoryProps {
  type?: "first" | "second" | "third";
  textInfo: string;
}

const icons = {
  first: <IconTooth />,
  second: <IconHeart />,
  third: <IconEyes />,
};

const Category: React.FC<CategoryProps> = ({ type, textInfo }) => {
  return (
    <Container>
      <IconContainer type={type}>{icons[type || "first"]}</IconContainer>
      <InfoContainer>
        <TextInfo>{textInfo}</TextInfo>
      </InfoContainer>
    </Container>
  );
};

export default Category;
