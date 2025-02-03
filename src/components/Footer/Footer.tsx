import React, { memo } from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import './Footer.scss';

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer className="footer">
      <Row gutter={[32, 16]}>
        {/* Cột 1: Thông tin công ty */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} className="title">Công ty</Title>
          <Space direction="vertical">
            <Text className="text">Giới thiệu</Text>
            <Text className="text">Tin tức</Text>
            <Text className="text">Tuyển dụng</Text>
          </Space>
        </Col>
        
        {/* Cột 2: Hỗ trợ khách hàng */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} className="title">Hỗ trợ khách hàng</Title>
          <Space direction="vertical">
            <Text className="text">Hướng dẫn mua hàng</Text>
            <Text className="text">Câu hỏi thường gặp</Text>
            <Text className="text">Chính sách đổi trả</Text>
          </Space>
        </Col>
        
        {/* Cột 3: Chính sách */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} className="title">Chính sách</Title>
          <Space direction="vertical">
            <Text className="text">Chính sách bảo hành</Text>
            <Text className="text">Chính sách vận chuyển</Text>
            <Text className="text">Điều khoản sử dụng</Text>
          </Space>
        </Col>
        
        {/* Cột 4: Liên hệ và mạng xã hội */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} className="title">Liên hệ</Title>
          <Text className="text">Email: support@example.com</Text>
          <br />
          <Text className="text">Điện thoại: 0123-456-789</Text>
          <br />
          <Space size="large" style={{ marginTop: 10 }}>
            <FacebookOutlined className="social-icon" />
            <TwitterOutlined className="social-icon" />
            <InstagramOutlined className="social-icon" />
            <YoutubeOutlined className="social-icon" />
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default memo(AppFooter);
