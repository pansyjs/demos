import { theme } from 'antd';
import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
`;

export const Header = styled.div<{
  column?: boolean;
}>((props) => {
  const { token } = theme.useToken();

  return css`
    font-size: 40px;
    color: ${token.colorError}
  `
})
