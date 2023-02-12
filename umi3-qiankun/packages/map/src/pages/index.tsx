import { history } from 'umi';

export default () => {
  return (
    <div>
      map page

      <br />
      <br />

      <button
        onClick={() => {
          // @ts-ignore
          window.__history.push('/login')
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          // @ts-ignore
          window.__history.push('/dashboard')
        }}
      >
        dashboard
      </button>
      <button onClick={() => { history.push('/home') }}>
        map home
      </button>
    </div>
  )
}
