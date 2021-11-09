import React from "react";

import {
  Container,
  Date,
  DateText,
  TextsContainer,
  Text,
  Title,
  DateTextDay,
} from "./styles";

interface ScheduleProps {
  type?: "first" | "second" | "third";
  date: string;
}

const Schedule: React.FC<ScheduleProps> = ({ type, date }) => {
  return (
    <Container type={type}>
      <Date type={type}>
        <DateTextDay type={type} >{date}</DateTextDay>
        <DateText type={type}>Jan</DateText>
      </Date>
      <TextsContainer>
        <Title>Consultation</Title>
        <Text>Sunday . 9am - 11am</Text>
      </TextsContainer>
    </Container>
  );
};

export default Schedule;
