import React from "react";
import Doctor from "../Doctor";

import { Container, Title, List } from "./styles";

import { doctors } from "../../data/data.json";

const DoctorList: React.FC = () => {
  return (
    <Container>
      <Title>Top Doctors</Title>
      <List>
        {doctors.map((doctor) => (
          <Doctor
            key={doctor.id}
            type={
              doctor.id === 1 ? "first" : doctor.id === 2 ? "second" : "third"
            }
            name={doctor.name}
            about={doctor.about}
          />
        ))}
      </List>
    </Container>
  );
};

export default DoctorList;
