import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 293px;
  background-color: ${COLORS.BLUE_TERCIARY};
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 25}px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity``;

export const Content = styled.View`
  border-radius: 42px;
  width: 100%;
  background-color: ${COLORS.WHITE};
  margin-top: -44px;
  flex: 1;
  padding: 25px;
`;

export const Contact = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 27px;
`;

export const ContactContent = styled.View`
  margin-left: 27px;
`;

export const ContactContentTitle = styled.Text`
  font-family: ${FONTS.BOLD};
  font-size: 18px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
`;

export const ContactContentSubtitle = styled.Text`
  font-family: ${FONTS.REGULAR};
  font-size: 14px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
  opacity: 0.65;
`;

export const Icons = styled.View`
  flex-direction: row;
  margin-top: 7px;
`;

export const AboutContainer = styled.View`
  margin-top: 37px;
`;

export const AboutTitle = styled.Text`
  margin-bottom: 12px;
  font-family: ${FONTS.BOLD};
  font-size: 18px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
`;

export const AboutText = styled.Text`
  font-family: ${FONTS.REGULAR};
  font-size: 14px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
  opacity: 0.65;
`;

export const Schedules = styled.View`
  margin-top: 22px;
`;

export const SchedulesTitle = styled.Text`
  width: 160px;
  font-family: ${FONTS.BOLD};
  font-size: 18px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
`;

export const SchedulesList = styled.ScrollView`
  height: 120px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
