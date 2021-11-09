import React from "react";

import {
  Contact,
  ContactContent,
  Container,
  Content,
  Header,
  Button,
  AboutContainer,
  AboutText,
  AboutTitle,
  ContactContentSubtitle,
  ContactContentTitle,
  Icons,
  Schedules,
  SchedulesTitle,
  SchedulesList,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { COLORS } from "../../theme";

import DoctorIcon from "../../assets/images/doctor-1-bigger.svg";
import IconContact from "../../components/IconContact";
import Schedule from "../../components/Schedule";

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Button onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={25} color={COLORS.WHITE} />
        </Button>
        <Button>
          <Feather name="more-vertical" size={25} color={COLORS.WHITE} />
        </Button>
      </Header>
      <Content>
        <Contact>
          <DoctorIcon />
          <ContactContent>
            <ContactContentTitle>Dr. Stella Kane</ContactContentTitle>
            <ContactContentSubtitle>
              Heart Surgeon - Flower Hospitals
            </ContactContentSubtitle>
            <Icons>
              <IconContact type="first" />
              <IconContact type="second" />
              <IconContact type="third" />
            </Icons>
          </ContactContent>
        </Contact>

        <AboutContainer>
          <AboutTitle>AboutContainer</AboutTitle>
          <AboutText>
            Dr. Stella is the top most heart surgeon in Flower Hospital. She has
            done over 100 successful sugeries within past 3 years. She has
            achieved several awards for her wonderful contribution in her own
            field. She’s available for private consultation for given schedules.
          </AboutText>
        </AboutContainer>

        <Schedules>
          <SchedulesTitle>Upcoming Schedules</SchedulesTitle>
          <SchedulesList
            keyboardShouldPersistTaps="never"
            showsVerticalScrollIndicator={false}
          >
            <Schedule date="12" type="first" />
            <Schedule date="13" type="second" />
            <Schedule date="14" type="third" />
          </SchedulesList>
        </Schedules>
      </Content>
    </Container>
  );
};

export default Profile;
