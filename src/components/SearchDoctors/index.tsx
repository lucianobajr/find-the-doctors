import React from "react";
import { Feather } from "@expo/vector-icons";

import { Button, Container, Input } from "./styles";

const SearchDoctors: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Search for doctors" placeholderTextColor="#C0C0C0" />
      <Button>
        <Feather name="search" size={34} color="#FFF" />
      </Button>
    </Container>
  );
};

export default SearchDoctors;
