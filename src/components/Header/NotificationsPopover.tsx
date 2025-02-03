import React, { useEffect, useState, useCallback, memo } from 'react';
import { Popover, List, Avatar, Image, Button, Flex } from 'antd';
import { BellOutlined, RightOutlined } from '@ant-design/icons';

const NotificationsPopover: React.FC = () => {
  const [popoverWidth, setPopoverWidth] = useState(800);

  useEffect(() => {
    const updatePopoverWidth = () => {
      if (window.innerWidth < 768) {
        setPopoverWidth(300);
      } else if (window.innerWidth < 1024) {
        setPopoverWidth(500);
      } else {
        setPopoverWidth(600);
      }
    };
    updatePopoverWidth();
    window.addEventListener('resize', updatePopoverWidth);
    return () => window.removeEventListener('resize', updatePopoverWidth);
  }, []);

  const notificationData = Array.from({ length: 10 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: [
      'https://preview.redd.it/9zb2a445dlu91.jpg?auto=webp&s=24a89bac74c42ffb3f1678c6a91174718882f252',
      'https://preview.redd.it/9zb2a445dlu91.jpg?auto=webp&s=24a89bac74c42ffb3f1678c6a91174718882f252',
      'https://preview.redd.it/9zb2a445dlu91.jpg?auto=webp&s=24a89bac74c42ffb3f1678c6a91174718882f252',
      'https://preview.redd.it/9zb2a445dlu91.jpg?auto=webp&s=24a89bac74c42ffb3f1678c6a91174718882f252',
    ],
  }));

  const getImageWidth = useCallback((count: number) => {
    switch (count) {
      case 1:
        return popoverWidth - 20;
      case 2:
        return popoverWidth / 2 - 30;
      case 3:
        return popoverWidth / 3 - 20;
      case 4:
        return popoverWidth / 4 - 20;
      default:
        return 150;
    }
  }, [popoverWidth]);

  console.log('NotificationsPopover rendered');

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
              <Flex wrap='wrap' gap={5}>
                {item.content.map((image, index) => (
                  <Image key={index} width={getImageWidth(item.content.length)} src={image} alt={`item ${index}`} />
                ))}
              </Flex>
            </Image.PreviewGroup>
          </List.Item>
        )}
        style={{ width: `${popoverWidth}px`, maxHeight: '800px', overflowY: 'auto' }}
      />
    } placement="bottomRight">
      <Button type='text' size='large' onClick={(e) => e.preventDefault()} style={{ color: 'white' }} icon={<BellOutlined style={{ fontSize: '2rem' }} />}></Button>
    </Popover>
  );
};

export default memo(NotificationsPopover);
