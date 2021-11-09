import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${FONTS.BOLD};
  font-size: 16px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
`;

export const List = styled.FlatList`
`;