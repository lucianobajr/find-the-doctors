import React from "react";

import { Container, User } from "./styles";
import MenuIcon from "../../assets/images/menu.svg";
import { Feather } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <Container>
      <MenuIcon />
      <User>
        <Feather name="user" size={21} color="#FFF"/>
      </User>
    </Container>
  );
};

export default Header;
