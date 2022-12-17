import { css } from '@emotion/react';

const useStyle = () => {
  return {
    container: css`
      background-color: hotpink;
      &:hover {
        color: 'darkgreen';
      }
    `
  }
}

export default () => {
  const { container } = useStyle();

  return (
    <div
      css={container}
    >
      123
    </div>
  )
}
