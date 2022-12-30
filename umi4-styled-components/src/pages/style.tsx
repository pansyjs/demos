import { theme } from 'antd';
import styled, { css } from 'styled-components';

// basic
export const Title = styled.h1`
  font-size: 32px;
`;

// props
export const Button = styled.button<{ primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// 样式集成
export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
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

export const Link = ({ className, children }: any) => (
  <a className={className}>
    {children}
  </a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
