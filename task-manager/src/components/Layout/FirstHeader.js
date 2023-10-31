import React from 'react'
import { Row, Col, Avatar, Typography, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import HeaderAvatar from './HeaderAvatar'
import { useNavigate } from 'react-router-dom'
import '../../css/header.css'

const { Title } = Typography

const FirstHeader = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='header'>
      <Row align='middle' justify='space-between'>
        <Col xl={10} lg={10} md={8} sm={8} xs={12}>
          <Title level={2} onClick={handleClick}>
            Task Manager
          </Title>
        </Col>
        <Col
          xl={3}
          lg={3}
          md={3}
          sm={3}
          xs={10}
          style={{ paddingRight: '50px' }}
        >
          <HeaderAvatar />
        </Col>
        {/* <Col xl={1} lg={1} md={1} sm={1} xs={1}> */}
        {/* </Col> */}
      </Row>
    </div>
  )
}

export default FirstHeader
