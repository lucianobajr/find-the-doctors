import React, { useState } from "react";

import { Container, Title, List } from "./styles";

import { categories } from "../../data/data.json";
import {  Text } from "react-native";

type CategoryProps = {
  id: number;
  name: string;
};

const CategoryList: React.FC = () => {
  const [categoriesData, setCategoriesData] =
    useState<CategoryProps[]>(categories);

  return (
    <Container>
      <Title>Categories</Title>

     
    </Container>
  );
};

export default CategoryList;
