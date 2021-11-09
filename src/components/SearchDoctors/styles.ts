import styled from "styled-components/native";
import { COLORS } from "../../theme";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 53px;
  margin-top: 19px;
`;

export const Input = styled.TextInput`
  background-color: ${COLORS.GRAY_PRIMARY};
  height: 45px;
  padding: 11px 24px;
  border-radius: 73px;
  width: 100%;
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: ${COLORS.ORANGE};
  width: 75px;
  height: 53px;

  border-radius: 64px;
  position: absolute;
  right:0;
  top: -5px;
`;