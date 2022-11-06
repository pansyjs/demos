import { message, Button, Space } from 'antd';
import { useRequest } from '@pansy/react-hooks';

import { fetchUser, fetchUserError } from '@/services'

export default () => {
  const userRequest = useRequest(fetchUser, {
    manual: true,
    onSuccess: (response) => {
      message.success(JSON.stringify(response));
    }
  });

  const userErrorRequest = useRequest(fetchUserError, {
    manual: true,
    onError: (response) => {
      console.log(response);
    }
  });

  return (
    <Space>
      <Button onClick={() => { userRequest.run() }}>
        请求成功
      </Button>

      <Button onClick={() => { userErrorRequest.run() }}>
        请求失败
      </Button>
    </Space>
  )
}
