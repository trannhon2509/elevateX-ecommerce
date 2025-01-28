import React from 'react';
import { Popover, List, Button } from 'antd';
import { ShoppingCartOutlined, RightOutlined } from '@ant-design/icons';

const CartPopover: React.FC = () => {
  const data = Array.from({ length: 23 }).map((_, i) => ({
    title: `ant design part ${i}`,
    productImg: `https://preview.redd.it/9zb2a445dlu91.jpg?auto=webp&s=24a89bac74c42ffb3f1678c6a91174718882f252`,
  }));

  return (
    <Popover
     content={
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          align: 'center',
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        footer={<div>
          <Button type='primary' block onClick={(e) => e.preventDefault()}>Xem giỏ hàng <RightOutlined /></Button>
        </div>}
        renderItem={(item) => (
          <List.Item key={item.title} extra={<div>100.000 VNĐ</div>}>
            <List.Item.Meta
              avatar={<img width={60} src={item.productImg} alt={item.title} />}
              title={<div style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '300px'
              }}>{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</div>}
            />
          </List.Item>
        )}
        style={{ width: '400px' }}
      />
    } placement="bottomRight">
      <Button type='text' size='large' onClick={(e) => e.preventDefault()} style={{ color: 'white' }} icon={<ShoppingCartOutlined style={{ fontSize: '2rem' }} />}></Button>
    </Popover>
  );
};

export default CartPopover;