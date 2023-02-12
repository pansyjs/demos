import { history } from 'umi';

export default () => {
  return (
    <div>
      login page

      <br />
      <br />

      <button
        onClick={() => {
          history.push('/dashboard')
        }}
      >
        dashboard
      </button>
      <button
        onClick={() => {
          history.push('/map')
        }}
      >
        map
      </button>
    </div>
  )
}
