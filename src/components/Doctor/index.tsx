import React from "react";

import IconDoctorOne from "../../assets/images/doctor-1.svg";
import IconDoctorTwo from "../../assets/images/doctor-2.svg";
import IconDoctorThree from "../../assets/images/doctor-3.svg";
import { Container, InfosContainer, Name, About } from "./styles";

interface CategoryProps {
  type?: "first" | "second" | "third";
  name: string;
  about: string;
}

const icons = {
  first: <IconDoctorOne />,
  second: <IconDoctorTwo />,
  third: <IconDoctorThree />,
};

const Doctor: React.FC<CategoryProps> = ({ name, about, type }) => {
  return (
    <Container type={type}>
      {icons[type || "first"]}
      <InfosContainer>
        <Name>{name}</Name>
        <About>{about}</About>
      </InfosContainer>
    </Container>
  );
};

export default Doctor;
