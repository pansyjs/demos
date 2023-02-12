import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    // @ts-ignore
    window.__history.push('/login')
  }, [])

  return (
    <div>
      dahboard page
    </div>
  )
}
