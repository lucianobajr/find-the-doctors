import {useNavigation} from '@react-navigation/core';
import React from 'react';

import homeImg from '../../assets/Illustration.png';

import {
  Content,
  ImageBottom,
  FirstContainer,
  GettingStart,
  Subtitle,
  Title,
  TextButton,
} from './styles';

const Main: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Content>
      <FirstContainer>
        <Title>Choose The Doctor You Want</Title>
        <Subtitle>
          Lorem ipsum dolor amet, consectetur adipiscing inet deli
        </Subtitle>
        <GettingStart onPress={() => navigation.navigate('Home')}>
          <TextButton>Get Started</TextButton>
        </GettingStart>
      </FirstContainer>
      <ImageBottom source={homeImg} />
    </Content>
  );
};

export default Main;
