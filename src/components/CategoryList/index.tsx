import React from "react";
import Category from "../Category";

import { Container, Title, List } from "./styles";

import { categories } from "../../data/data.json";

const CategoryList: React.FC = () => {
  return (
    <Container>
      <Title>Categories</Title>
      <List>
        {categories.map((category) => (
          <Category
            key={category.id}
            type={
              category.id === 1
                ? "first"
                : category.id === 2
                ? "second"
                : "third"
            }
            textInfo={category.name}
          />
        ))}
      </List>
    </Container>
  );
};

export default CategoryList;
