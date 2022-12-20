import { theme } from 'antd'
import { css } from '@emotion/react';

const { useToken } = theme;

export const useStyle = () => {
  const {
    token,
  } = useToken();

  return {
    container: css`
      background-color: ${token.colorPrimary};
      &:hover {
        color: 'darkgreen';
      }
    `
  }
}
