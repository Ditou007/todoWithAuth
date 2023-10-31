import React, { useState } from 'react'
import { Layout, Typography, Breadcrumb, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../css/combinedHeader.css'

const { Header } = Layout
const { Title } = Typography

const CombinedHeader = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [current, setCurrent] = useState('tasks')

  const getPathTitle = (path) => {
    switch (path) {
      case '/tasks':
        return 'Tasks'
      case '/about':
        return 'About'
      default:
        return ''
    }
  }

  const title = getPathTitle(location)

  const onClickHandler = (key, path) => {
    setCurrent(key)
    navigate(path)
  }

  return (
    <>
      {/* Menu on the Left */}
      <Menu
        selectedKeys={[current]}
        mode='horizontal'
        className='layout-header-item'
      >
        {/* Hardcoded Menu Items */}
        <Menu.Item
          className='layout-header-menu-item'
          key='tasks'
          onClick={() => onClickHandler('tasks', '/tasks')}
        >
          <b>Tasks</b>
        </Menu.Item>
        <Menu.Item
          className='layout-header-menu-item'
          key='about'
          onClick={() => onClickHandler('about', '/about')}
        >
          <b>About</b>
        </Menu.Item>
      </Menu>

      {/* Breadcrumbs on the Right */}
      {/* <div style={{ paddingLeft: '20px' }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a onClick={() => navigate(-1)}>Back</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </div> */}
    </>
  )
}

export default CombinedHeader
