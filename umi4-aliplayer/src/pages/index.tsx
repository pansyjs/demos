import { useState } from 'react';
import { Modal, Button } from 'antd';
import Player from '@pansy/react-aliplayer';

import { ButtonProps } from 'antd/es/button';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick: ButtonProps['onClick'] = () => {
    setOpen(true);
  }

  return (
    <>
      <Button onClick={handleClick}>Open Modal</Button>
      <Modal
        title="预览视频"
        centered
        footer={null}
        open={open}
        width={1080}
        onCancel={() => setOpen(false)}
      >
        <div style={{ width: 780, height: 585 }}>
          <Player
            source="//stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4"
          />
        </div>
      </Modal>
    </>
  )
}
