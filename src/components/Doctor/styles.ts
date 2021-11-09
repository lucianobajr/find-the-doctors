import styled, { css } from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

const ContainerVariants = {
  first: css`
    background: ${COLORS.BLUE_LIGHT};
  `,
  second: css`
    background: ${COLORS.YELLOW_LIGHT};
  `,
  third: css`
    background: ${COLORS.ORANGE_LIGHT};
  `,
};

interface ContainerProps {
  type?: "first" | "second" | "third";
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 87px;

  border-radius: 13px;

  ${(props) => ContainerVariants[props.type || "first"]}

  flex-direction: row;
  align-items: center;

  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 20px;
  margin-bottom: 15px;
`;

export const InfosContainer = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-family: ${FONTS.BOLD};
  font-size: 16px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
`;

export const About = styled.Text`
  font-family: ${FONTS.REGULAR};
  font-size: 14px;
  line-height: 24px;

  color: rgba(30, 28, 97, 0.65);
`;
