import { Carousel, Col, Image, Row } from 'antd'
import React from 'react'
import './Banner.scss' 

const Banner: React.FC = () => {
  return (
    <Row justify="center">
      <Col xs={0} sm={0} md={24} lg={24} xl={16}>
        <Carousel autoplay >
          <Image width={'100%'} height={250} className="banner-image" src="https://2c3698e1213f692c1f30-e875ca96b66c757445b3b9b63d20195d.ssl.cf3.rackcdn.com/files/8f9d1a1ea66416abbe22b6576d3b030d.gif" alt="" />
          <Image width={'100%'} height={250} className="banner-image" src="https://d1j79szbksidaa.cloudfront.net/static/cms-prd/1920x400_d30d191790.jpg?v=099" alt="" />
          <Image width={'100%'} height={250} className="banner-image" src="https://www.xtmobile.vn/vnt_upload/weblink/ctsp-3-3.png" alt="" />
        </Carousel>
      </Col>
    </Row>
  )
}

export default React.memo(Banner)