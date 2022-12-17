import { useOutlet, useNavigate } from '@umijs/max';
import { Layout, Menu, theme } from 'antd';

const { Header, Content } = Layout;

export default  () => {
  const navigate = useNavigate();
  const outlet = useOutlet();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { key: 'home', label: 'Home' },
            { key: 'dashboard', label: 'Dashboard'}
          ]}
          onClick={(info) => {
            navigate(`/${info.key}`)
          }}
        />
      </Header>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {outlet}
        </Content>
      </Layout>
    </Layout>
  );
};
