import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 113px;
  height: 137px;

  background: #ffffff;
  box-shadow: 1px 6px 11px rgba(0, 0, 0, 0.03);
  border-radius: 15px;
  flex-direction: column;
`;

interface BoxImageProps {
  index: number;
}

export const BoxImage = styled.View<BoxImageProps>`
  width: 84px;
  height: 83px;
  left: 61px;
  top: 363px;

  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.03);
  border-radius: 15px;

  ${props =>
    props.index === 0 &&
    css`
      background: #4b7ffb;
    `}
  ${props =>
    props.index === 1 &&
    css`
      background: #ffb167;
    `}
    ${props =>
    props.index === 2 &&
    css`
      background: #f57e71;
    `}

    justify-content: center;
  align-items: center;
`;

export const ImageCategory = styled.Image``;

export const NameCategory = styled.Text`
  font-style: normal;
  font-size: 16px;

  color: #292685;
`;
