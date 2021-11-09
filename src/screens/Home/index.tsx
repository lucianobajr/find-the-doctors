import React from "react";
import CategoryList from "../../components/CategoryList";
import Header from "../../components/Header";
import SearchDoctors from "../../components/SearchDoctors";
import { Container, Title } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Find Your Desired Doctor</Title>
      <SearchDoctors />
      <CategoryList />
    </Container>
  );
};

export default Home;
