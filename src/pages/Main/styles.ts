import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  background: #fff;
  justify-content: space-between;
`;

export const ImageBottom = styled.Image`
  width: 100%;
  max-height: 458px;
`;

export const FirstContainer = styled.View`
  width: 100%;
  padding: 70px 40px 0 40px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-style: normal;
  font-size: 30px;

  color: #1e1c61;
`;

export const Subtitle = styled.Text`
  font-style: normal;
  font-size: 16px;

  color: rgba(30, 28, 97, 0.65);

  margin-top: 8px;
`;

export const GettingStart = styled.TouchableOpacity`
  margin-top: 15px;

  background: #ef716b;
  border-radius: 35px;

  width: 147.63px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-style: normal;
  font-size: 16px;
  text-align: center;

  color: #f9f9f9;
`;
