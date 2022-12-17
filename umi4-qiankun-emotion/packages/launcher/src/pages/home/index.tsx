import { useStyle } from './useStyle';

export default () => {
  const styles = useStyle();

  return (
    <div css={styles.container}>
      123
    </div>
  )
}
