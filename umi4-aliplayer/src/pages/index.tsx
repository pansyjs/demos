import { useState } from 'react'
import { Modal, Button, Card, Pagination } from 'antd';
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
      width={780}
      onCancel={modal.close}
    >
      <Player
        source={modal.data}
        style={{ height: 400 }}
        options={{
          autoplay: true,
        }}
      />
    </Modal>
  )

}

const sources1 = [
  '//stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4',
  '//stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4',
];

const sources2 = [
  '//stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4',
  '//stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4',
];

export default () => {
  const modal = useModal<string>();
  const [sourceList, setSourceList] = useState(sources1)
  const [current, setCurrent] = useState(1)

  const handleClick = (source: string) => {
    modal.open(source);
  }

  const players = sourceList.map((source, key) => {
    return (
      <Card title={`标题${key + 1}`} key={key}>
        <Button onClick={() => { handleClick(source) }}>Open Modal</Button>
      </Card>
    )
  })

  return (
    <>
      {players}
      <PlayerModal modal={modal} />
      <Pagination
        total={4}
        defaultPageSize={2}
        current={current}
        style={{marginLeft: "auto"}}
        onChange={(page) => {
          setCurrent(page);
          setSourceList(page === 1 ? sources1 : sources2);
        }}
      />
    </>
  )
}
