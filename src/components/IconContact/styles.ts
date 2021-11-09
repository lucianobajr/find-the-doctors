import styled, { css } from "styled-components/native";
import { COLORS } from "../../theme";

interface IconContainerProps {
  type?: "first" | "second" | "third";
}

const IconContainerVariants = {
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
  width: 35px;
  height: 35px;

  ${(props) => IconContainerVariants[props.type || "first"]}
  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.03);
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  margin-right: 15px;
`;
