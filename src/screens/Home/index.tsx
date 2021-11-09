import React from "react";
import CategoryList from "../../components/CategoryList";
import DoctorList from "../../components/DoctorList";
import Header from "../../components/Header";
import SearchDoctors from "../../components/SearchDoctors";
import { Container, Title } from "./styles";

const Home: React.FC = () => {
  return (
    <Container
      keyboardShouldPersistTaps="never"
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Title>Find Your Desired Doctor</Title>
      <SearchDoctors />
      <CategoryList />
      <DoctorList />
    </Container>
  );
};

export default Home;
