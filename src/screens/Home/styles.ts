import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { COLORS } from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  padding-top: ${getStatusBarHeight() + 17}px;
`;
