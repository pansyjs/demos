import type { FC } from 'react';
import React, { useState } from 'react'
import { Empty, Menu, MenuProps, Modal } from 'antd';
import type { UseModalResult } from '@pansy/react-hooks';
import { useModal } from '@pansy/react-hooks';
import Player from '@pansy/react-aliplayer';
import { ProCard } from "@ant-design/pro-components";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Navigation One', 'sub1', null, [
    getItem('Option 1', '1'), getItem('Option 2', '2')
  ]),
];

// tab内容
function TabContent(props: { tab: string; }) {

  if (props.tab == '1') {
    // return <ItemList space_id={params.id} />
    return <TabA />
  } else if (props.tab == '2') {
    return <TabB />
  }
  return <Empty />
}

const TabA: React.FC = (props) => {
  const modal = useModal<string>()
  let source1 = '//stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4'
  return (
    <div>
      <a key="play" onClick={() => {
        modal.open(source1)
      }}>预览</a>
      <PlayerModal modal={modal} />
    </div>
  )
}

const TabB: React.FC = (props) => {
  const modal = useModal<string>()
  let source2 = '//stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4'
  return (
    <div>
      <a key="play" onClick={() => {
        modal.open(source2)
      }}>预览</a>
      <PlayerModal modal={modal} />
    </div>
  )
}

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
        source={modal.data!}
        style={{ height: 400 }}
        options={{
          autoplay: true,
        }}
      />
    </Modal>
  )

}

export default () => {
  const [current, setCurrent] = useState("1")
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  }

  return (
    <>
      <ProCard split="vertical">
        <ProCard colSpan="200px" ghost>
          <Menu
            onClick={onClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </ProCard>
        <TabContent tab={current} />
      </ProCard>
    </>
  )
}
