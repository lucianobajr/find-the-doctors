import React from "react";
import { Feather } from "@expo/vector-icons";

import { Button, Container, Input } from "./styles";
import { COLORS } from "../../theme";

const SearchDoctors: React.FC = () => {
  return (
    <Container>
      <Input
        placeholder="Search for doctors"
        placeholderTextColor={`${COLORS.GRAY_SECONDARY}`}
      />
      <Button>
        <Feather name="search" size={34} color="#FFF" />
      </Button>
    </Container>
  );
};

export default SearchDoctors;
