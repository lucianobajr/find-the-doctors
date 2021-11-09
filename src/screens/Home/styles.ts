import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  padding-top: ${getStatusBarHeight() + 50}px;
  padding-right: 24px;
  padding-left: 21px;
`;

export const Title = styled.Text`
  margin-top: 64px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BLUE_PRIMARY};
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
`;

