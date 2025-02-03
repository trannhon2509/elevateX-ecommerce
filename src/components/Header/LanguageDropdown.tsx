import React, { memo } from 'react';
import { Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const LanguageDropdown: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Tiếng việt
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Tiếng Anh
        </a>
      ),
    },
  ];

  console.log('LanguageDropdown rendered');

  return (
    <Dropdown menu={{ items }}>
      <Button type='text' onClick={(e) => e.preventDefault()} style={{ color: 'white' }} icon={<GlobalOutlined />}>
        Ngôn ngữ
      </Button>
    </Dropdown>
  );
};

export default memo(LanguageDropdown);
