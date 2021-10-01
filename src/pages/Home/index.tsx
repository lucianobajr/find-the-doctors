import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Content,
  Header,
  Title,
  Input,
  Button,
  Form,
  UserBox,
  Categories,
} from './styles';

import {categories} from '../../data/categories.json';

import Category from '../../components/Category';
const Home: React.FC = () => {
  return (
    <Content>
      <Header>
        <Icon name="menu" size={30} color="#292685" />
        <UserBox>
          <Icon name="user" size={20} color="#FFF" />
        </UserBox>
      </Header>
      <Title>Find Your Desired Doctor</Title>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Search for doctors"
          returnKeyType="next"
        />
        <Button>
          <Icon name="search" size={30} color="#FFF" />
        </Button>
      </Form>
      <Categories>
        {categories.map(category => (
          <Category
            name={category.name}
            image={category.image}
            key={category.id}
            index={category.id}
          />
        ))}
      </Categories>
    </Content>
  );
};

export default Home;
