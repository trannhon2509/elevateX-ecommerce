import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme, Popover, Avatar, Badge } from 'antd';
import './AdminLayout.scss'

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items: MenuItem[] = [
    getItem( collapsed? 'ElevateX' : <h1>ElevateX</h1>, 'logo', <HomeOutlined className={!collapsed ? 'ant-menu-item-disabled' : ''}/>),
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];

  const accountContent = (
    <div>
      <p>Account Info</p>
      <p>Settings</p>
      <p>Logout</p>
    </div>
  );

  const notificationContent = (
    <div>
      <p>Notification 1</p>
      <p>Notification 2</p>
      <p>Notification 3</p>
    </div>
  );
  

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
            <Popover content={notificationContent} title="Notifications">
              <Badge count={5}>
                <Button type="text" icon={<BellOutlined />} />
              </Badge>
            </Popover>
            <Popover content={accountContent} title="Account">
              <Avatar style={{ marginLeft: '16px' }} icon={<UserOutlined />} />
            </Popover>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;