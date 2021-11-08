import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS, FONTS } from "../../theme";
import LottieView from "lottie-react-native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 100}px;
  background-color: ${COLORS.WHITE};
`;

export const FirstContent = styled.View`
  padding-left: 41px;
  padding-right: 61px;
  height: 25%;
`;

export const Title = styled.Text`
  color: ${COLORS.BLUE_PRIMARY};
  font-family: ${FONTS.BOLD};
  font-size: 30px;
`;

export const SubTitle = styled.Text`
  color: ${COLORS.BLUE_PRIMARY};
  font-family: ${FONTS.REGULAR};
  font-size: 16px;
  opacity: 0.65;
  margin-top: 9px;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 147.63px;
  height: 40px;
  border-radius: 35px;
  background-color: ${COLORS.ORANGE};
  justify-content: center;
  margin-bottom: 10px;
`;

export const TextButton = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const SecondContent = styled.View`
  height: 75%;
  flex: 1;
`;

export const Lottie = styled(LottieView)`
  position: absolute;
  flex: 0.1;
  left: 0;
  right: 0;
  bottom: -60px;
`;
