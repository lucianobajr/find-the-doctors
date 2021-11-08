import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Text>Clica aqui!</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
