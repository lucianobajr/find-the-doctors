import styled from "styled-components/native";
import { COLORS } from "../../theme";

export const Container = styled.View`
  background-color: ${COLORS.WHITE};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const User = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  justify-content: center;
  align-items: center;
  background: ${COLORS.BLUE_PRIMARY};
`;
