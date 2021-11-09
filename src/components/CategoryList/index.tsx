import React from "react";
import Category from "../Category";

import { Container, Title, List } from "./styles";

const CategoryList: React.FC = () => {
  return (
    <Container>
      <Title>Categories</Title>
      <List>
        <Category textInfo="Dental Surgeon" />
        <Category type="second" textInfo="Heart Surgeon" />
        <Category type="third" textInfo="Eye Specialist" />
      </List>
    </Container>
  );
};

export default CategoryList;
