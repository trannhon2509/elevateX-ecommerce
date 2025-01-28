import React, { useState } from 'react';
import './Header.scss';
import { Button, Drawer, Flex, Input, Popover, QRCode, Space } from 'antd';
import { UserAddOutlined, LoginOutlined, AppleOutlined, AndroidOutlined, ShopOutlined, MenuOutlined, ShoppingCartOutlined, } from '@ant-design/icons';
import type { GetProps } from 'antd';
import LanguageDropdown from './LanguageDropdown';
import NotificationsPopover from './NotificationsPopover';
import CartPopover from './CartPopover';

type SearchProps = GetProps<typeof Input.Search>;

const AppHeader: React.FC = () => {
  const { Search } = Input;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className='app-header'>
      <Flex justify='space-between' wrap={'nowrap'} className="app-header__container" style={{
        padding: '10px 0 0 0',
      }}>
        <Flex  wrap={'nowrap'} >
          <Button type="text">Kênh người bán</Button>
          <Button type="text">Trở thành người bán</Button>
          <Popover placement="bottom" content={
            <div>
              <QRCode value={'https://ant.design/'} />
              <Flex gap={10}>
                <p><AndroidOutlined /> Android</p>
                <p><AppleOutlined /> IOS</p>
              </Flex>
            </div>
          }>
            <Button type='text'>Tải ứng dụng</Button>
          </Popover>
          <Button type="text">Kết nối</Button>
        </Flex>
        <Flex  wrap={'nowrap'}>
          <LanguageDropdown />
          <Button type="text" icon={<UserAddOutlined />}>Đăng kí</Button>
          <Button type="text" icon={<LoginOutlined />}>Đăng nhập</Button>
        </Flex>
      </Flex>

      <Flex style={{ padding: '10px 0px 15px 0' }} className="app-header__menu" justify='space-between' align='center' gap={10} rootClassName="app-header__container">
        <Button type="text" size='large' icon={<ShopOutlined style={{ fontSize: '3rem' }} />}><h1>ElevateX</h1></Button>
        <div style={{ width: '100%', padding: '3px', backgroundColor: 'white' }}>
          <Search
            bordered={false}
            className='app-header__search'
            placeholder="🔍 Bạn muốn mua gì hôm nay? 🛒"
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
          />
        </div>
        <Space>
          <NotificationsPopover />
          <CartPopover />
        </Space>
      </Flex>

      <div className="app-header__search app-header__menu-mobile">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          margin: '0 10px',
        }}>
          <Input
            bordered={false}
            placeholder="🔍 Bạn muốn mua gì hôm nay? 🛒"
            allowClear
            size="large"
            style={{
              backgroundColor: 'white',
            }}
          />
          <Space>
            <Button type="text" size='large' style={{
            }} icon={<ShoppingCartOutlined style={{
              fontSize: '2rem',
              color: 'white',
            }} />}></Button>
            <Button type="text" size='large' style={{
            }} onClick={() => setDrawerVisible(true)} icon={<MenuOutlined style={{
              fontSize: '2rem',
              color: 'white',
            }} />}></Button>
          </Space>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        className='app-header__drawer'
      >
        <Flex justify='center' gap={10} style={{
          margin: '0 0 10px 0',
        }}>
          <Button type="default" icon={<UserAddOutlined />}>Đăng kí</Button>
          <Button type="primary" icon={<LoginOutlined />}>Đăng nhập</Button>
        </Flex>
        
        <Flex vertical gap={10}>
          <Button type="text">Kênh người bán</Button>
          <Button type="text">Trở thành người bán</Button>
          <Button type="text">Kết nối</Button>
          <Popover placement="bottom" content={
            <div>
              <QRCode value={'https://ant.design/'} />
              <Flex gap={10}>
                <p><AndroidOutlined /> Android</p>
                <p><AppleOutlined /> IOS</p>
              </Flex>
            </div>
          }>
            <Button type='text'>Tải ứng dụng</Button>
          </Popover>
        </Flex>

        <Space>
          <NotificationsPopover />
          <CartPopover />
        </Space>
      </Drawer>
    </div>
  );
};

export default AppHeader;
