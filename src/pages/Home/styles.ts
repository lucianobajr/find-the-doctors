import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  background: #fff;
  padding: 64px 24.76px 0 27.38px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
`;

export const Title = styled.Text`
  font-style: normal;
  font-size: 30px;

  color: #1e1c61;
  margin-top: 32px;

  max-width: 268px;

  margin-bottom: 19px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Input = styled.TextInput`
  background: #f2f2f2;
  border-radius: 73px;
  width: 100%;
  height: 45px;

  padding: 11px 33% 11px 24px;

  position: relative;

  &::placeholder {
    font-style: normal;
    font-size: 16px;

    color: #c0c0c0;
  }
`;

export const Button = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;

  opacity: 1;

  width: 75px;
  height: 53px;
  background: #f57e71;
  border-radius: 64px;

  justify-content: center;
  align-items: center;
`;

export const UserBox = styled.View`
  width: 40px;
  height: 40px;
  background: #292685;

  justify-content: center;
  align-items: center;
  border-radius: 50;
`;

export const Categories = styled.View`
  flex-direction: row;
`;
