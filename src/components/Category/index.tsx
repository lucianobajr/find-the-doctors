import React from 'react';

import {Container, BoxImage, ImageCategory, NameCategory} from './styles';

interface CategoryProps {
  name: string;
  image: string;
  index: number;
}

import first from '../../assets/tooth.png';

const Category: React.FC<CategoryProps> = ({name, image, index}) => {
  return (
    <Container>
      <BoxImage index={index}>
        <ImageCategory source={first} />
      </BoxImage>
      <NameCategory>{name}</NameCategory>
    </Container>
  );
};

export default Category;
