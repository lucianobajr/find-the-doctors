import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../routes";

import IconDoctorOne from "../../assets/images/doctor-1.svg";
import IconDoctorTwo from "../../assets/images/doctor-2.svg";
import IconDoctorThree from "../../assets/images/doctor-3.svg";
import { Container, InfosContainer, Name, About } from "./styles";

interface CategoryProps {
  type?: "first" | "second" | "third";
  name: string;
  about: string;
}
type homeScreenProp = StackNavigationProp<RootStackParamList, "Profile">;

const icons = {
  first: <IconDoctorOne />,
  second: <IconDoctorTwo />,
  third: <IconDoctorThree />,
};

const Doctor: React.FC<CategoryProps> = ({ name, about, type }) => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <Container type={type}>
      {icons[type || "first"]}
      <InfosContainer onPress={() => navigation.navigate("Profile")}>
        <Name>{name}</Name>
        <About>{about}</About>
      </InfosContainer>
    </Container>
  );
};

export default Doctor;
