import React from 'react';
import { Popover, List, Avatar, Image, Button, Space } from 'antd';
import { BellOutlined, RightOutlined } from '@ant-design/icons';

const NotificationsPopover: React.FC = () => {
  const notificationData = Array.from({ length: 10 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: [
      'https://preview.redd.it/9zb2a445dlu91.jpg?auto=webp&s=24a89bac74c42ffb3f1678c6a91174718882f252',
      'https://images3.alphacoders.com/132/1325638.jpeg',
      'https://preview.redd.it/9zb2a445dlu91.jpg?auto=webp&s=24a89bac74c42ffb3f1678c6a91174718882f252',
      'https://images3.alphacoders.com/132/1325638.jpeg',
    ],
  }));

  const getImageWidth = (count: number) => {
    switch (count) {
      case 1:
        return 600;
      case 2:
        return 300;
      case 3:
        return 200;
      case 4:
        return 150;
      default:
        return 150;
    }
  };

  return (
    <Popover content={
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          align: 'center',
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={notificationData}
        footer={<div>
          <Button type='primary' block onClick={(e) => e.preventDefault()}>Xem tất cả thông báo{<RightOutlined />}</Button>
        </div>}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            <Image.PreviewGroup>
              <Space>
                {item.content.map((image, index) => (
                  <Image key={index} width={getImageWidth(item.content.length)} src={image} alt={`item ${index}`} />
                ))}
              </Space>
            </Image.PreviewGroup>
          </List.Item>
        )}
        style={{ width: '800px' }}
      />
    } placement="bottomRight">
      <Button type='text' size='large' onClick={(e) => e.preventDefault()} style={{ color: 'white' }} icon={<BellOutlined style={{ fontSize: '2rem' }} />}></Button>
    </Popover>
  );
};

export default NotificationsPopover;
