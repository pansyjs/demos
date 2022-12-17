import { css } from '@emotion/react';

const useStyle = () => {
  return {
    header: css`
      background: green;
    `,
    button: css`
      color: #090890;

      &:hover {
        color: red;
      }
    `
  }
}

export default () => {
  const style = useStyle();

  return (
    <div>
      <div css={style.header}>
        dashboard
      </div>
      <br />
      <button css={style.button}>
        button
      </button>
    </div>
  )
}
