import { useStyle } from './useStyle';

export default () => {
  const { container } = useStyle();

  return (
    <div css={container}>
      123
    </div>
  )
}
