import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.View`
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-family: ${FONTS.BOLD};
  font-size: 16px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
`;

export const List = styled.View`
  flex-direction: row;
  margin-top: 22px;
`;
