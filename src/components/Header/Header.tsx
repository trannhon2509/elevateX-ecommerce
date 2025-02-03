import React, { memo, } from 'react';
import './Header.scss';
import { Row, Col, Typography, Space, Popover, QRCode, Input } from 'antd';
import { AndroidFilled, AppleFilled, FacebookFilled, ShopFilled, TikTokFilled, UserAddOutlined, LoginOutlined, NotificationOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;
const { Text, Title } = Typography;
const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const AppHeader: React.FC = () => {

  return (
    <Row justify="center" className="header-row">
      <Col xs={0} sm={0} md={24} lg={24} xl={16}>
        <Row justify={'space-between'} className="header-top-row">
          <Space >
            <Text className="header-text">Kênh người bán</Text>
            <Popover placement="bottomLeft" title={<QRCode type="canvas" value="https://ant.design/" />} content={<><AndroidFilled /> Android <AppleFilled /> IOS</>}>
              <Text className="header-text">| Ứng dụng |</Text>
            </Popover>
            <Text className="header-text">Kết nối <Space><TikTokFilled /><FacebookFilled /></Space></Text>
          </Space>
          <Space>
            <Text className="header-text"><UserAddOutlined /> Đăng kí</Text>
            <Text className="header-text"><LoginOutlined /> Đăng nhập</Text>
          </Space>
        </Row>
        <Row justify={'start'} align={'middle'}>
          <Col xs={0} sm={0} md={0} lg={0} xl={4}>
            <Space><ShopFilled className="shop-icon" />
              <Title className="header-title">ElevateX</Title></Space>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={18}>
            <div className="search-container">
              <Search className='search-header' size='large' variant='borderless' placeholder="🔍 Bạn muốn mua gì? 🛒" onSearch={onSearch} allowClear enterButton />
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={2}>
            <Row justify={'end'}>
              <Space size={'large'}>
                <Popover placement="bottomRight" title={'Thông báo mới nhất'} content={
                  <div>
                    <p>Thông báo 1</p>
                    <p>Thông báo 2</p>
                  </div>
                }>
                  <NotificationOutlined className="icon" />
                </Popover>
                <Popover placement="bottomRight" title={'Sản phẩm đã thêm gần nhất'} content={
                  <div>
                    <p>Thông báo 1</p>
                    <p>Thông báo 2</p>
                  </div>
                }>
                  <ShoppingCartOutlined className="icon" />
                </Popover>
              </Space>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default memo(AppHeader);
