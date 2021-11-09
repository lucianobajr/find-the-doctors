import styled, { css } from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.View`
  width: 120px;
  height: 151px;
  justify-content: flex-end;

  margin-right: 15px;
`;

const IconContainerVariants = {
  first: css`
    background: ${COLORS.BLUE_TERCIARY};
  `,
  second: css`
    background: ${COLORS.YELLOW};
  `,
  third: css`
    background: ${COLORS.ORANGE};
  `,
};

interface IconContainerProps {
  type?: "first" | "second" | "third";
}

export const IconContainer = styled.View<IconContainerProps>`
  width: 84px;
  height: 83px;

  ${(props) => IconContainerVariants[props.type || "first"]}
  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.03);
  border-radius: 15px;

  transform: translate(36px, -69px);
  z-index: 1;
  position: absolute;

  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  position: relative;
  width: 113px;
  height: 137px;

  background: #ffffff;
  box-shadow: 1px 6px 11px rgba(0, 0, 0, 0.03);
  border-radius: 15px;
  justify-content: flex-end;

  padding-left: 24px;
  padding-bottom: 16px;
`;

export const TextInfo = styled.Text`
  font-family: ${FONTS.MEDIUM};

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: ${COLORS.BLUE_SECONDARY};
`;
