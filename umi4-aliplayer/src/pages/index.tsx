import { Modal, Button, Card } from 'antd';
import { useModal } from '@pansy/react-hooks';
import Player from '@pansy/react-aliplayer';

import type { FC } from 'react';
import type { UseModalResult } from '@pansy/react-hooks';

const PlayerModal: FC<{ modal: UseModalResult<string> }> = (props) => {
  const { modal } = props;

  return (
    <Modal
      title="预览视频"
      centered
      footer={null}
      open={modal.visible}
      width={1080}
      onCancel={modal.close}
    >
      <div style={{ width: 780, height: 585 }}>
        <Player
          source={modal.data}
        />
      </div>
    </Modal>
  )

}

const sources = [
  '//stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4',
  '//stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4',
  '//stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4',
];

export default () => {
  const modal = useModal<string>();

  const handleClick = (source: string) => {
    modal.open(source);
  }

  return sources.map((source, key) => {
    return (
      <>
        <Card title={`标题${key + 1}`} key={key}>
          <Button onClick={() => { handleClick(source) }}>Open Modal</Button>
        </Card>

        <PlayerModal modal={modal} />
      </>
    )
  })
}
