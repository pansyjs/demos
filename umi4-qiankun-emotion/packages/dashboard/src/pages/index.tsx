import { css } from '@emotion/react';

const useStyle = () => {
  return {
    container: css`
      background: green;
    `
  }
}

export default () => {
  const style = useStyle();

  return (
    <div css={style.container}>
       dashboard
    </div>
  )
}
