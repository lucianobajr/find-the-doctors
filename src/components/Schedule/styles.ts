import styled, { css } from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

interface IconContainerProps {
  type?: "first" | "second" | "third";
}

const IconContainerVariantsLight = {
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

export const Container = styled.View<IconContainerProps>`
  width: 100%;
  height: 87px;
  border-radius: 13px;

  ${(props) => IconContainerVariantsLight[props.type || "first"]}
  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.03);
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  padding: 15px;
`;

const IconContainerVariants = {
  first: css`
    background: ${COLORS.BLUE_LIGHT_TWO};
  `,
  second: css`
    background: ${COLORS.YELLOW_LIGHT_TWO};
  `,
  third: css`
    background: ${COLORS.ORANGE_LIGHT_TWO};
  `,
};

export const Date = styled.View<IconContainerProps>`
  ${(props) => IconContainerVariants[props.type || "first"]}
  justify-content: center;
  align-items: center;

  width: 57px;
  height: 57px;

  border-radius: 7px;

`;

const IconContainerVariantsColors = {
  first: css`
    color: ${COLORS.BLUE_TERCIARY};
  `,
  second: css`
    color: ${COLORS.YELLOW};
  `,
  third: css`
    color: ${COLORS.ORANGE};
  `,
};

export const DateTextDay = styled.Text<IconContainerProps>`
  width: 30px;
  ${(props) => IconContainerVariantsColors[props.type || "first"]}

  font-family: ${FONTS.BOLD};
  font-size: 24px;
`;

export const DateText = styled.Text<IconContainerProps>`
  width: 30px;
  ${(props) => IconContainerVariantsColors[props.type || "first"]}

  font-family: ${FONTS.BOLD};
  font-size: 14px;
`;

export const TextsContainer = styled.View`
  margin-left: 19px;
`;

export const Title = styled.Text`
  margin-bottom: 12px;
  font-family: ${FONTS.BOLD};
  font-size: 18px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
`;

export const Text = styled.Text`
  font-family: ${FONTS.REGULAR};
  font-size: 14px;
  line-height: 24px;

  color: ${COLORS.BLUE_PRIMARY};
  opacity: 0.65;
`;
