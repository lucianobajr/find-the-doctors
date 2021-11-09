import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../routes";
import Annimation from "../../assets/annimations/gettingStart.json";

import {
  Container,
  FirstContent,
  Title,
  SubTitle,
  Button,
  TextButton,
  SecondContent,
  Lottie,
} from "./styles";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const GettingStart: React.FC = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <Container>
      <FirstContent>
        <Title>Choose The Doctor You Want</Title>
        <SubTitle>
          Lorem ipsum dolor amet, consectetur adipiscing inet deli
        </SubTitle>
        <Button onPress={() => navigation.navigate("Home")}>
          <TextButton>Get Started</TextButton>
        </Button>
      </FirstContent>
      <SecondContent>
        <Lottie autoPlay loop={true} source={Annimation} />
      </SecondContent>
    </Container>
  );
};

export default GettingStart;
