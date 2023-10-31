import React from 'react'
import { Avatar, Popover, Row, Input, Col } from 'antd'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../../../features/userSlice'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/slices/authSlice'

const HeaderAvatar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userNameInRedux = useSelector((state) => state.auth.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const content = (
    <>
      <p>
        <b>Name: {userNameInRedux}</b>
        <br />
        {/* {userDetailsInRedux?.name} */}
      </p>
      <p>
        <b>E-Mail:</b>
        <br />
        {/* {userDetailsInRedux?.email} */}
      </p>
      <p>
        <b>Designation:</b>
        <br />
        {/* {userDetailsInRedux?.desig} */}
      </p>
      <a style={{ color: 'crimson' }} onClick={handleLogout}>
        <b>Logout</b>
      </a>
    </>
  )

  return (
    <Col>
      <Popover content={content}>
        <Avatar style={{ float: 'right' }} icon={<UserOutlined />} />
      </Popover>
      {/* If you want to enable the search input later, you can uncomment this */}
      {/* 
      <Input
        style={{ paddingRight: 10, width: '200px' }}
        addonBefore={<SearchOutlined style={{ color: 'black' }} />}
      /> 
      */}
    </Col>
  )
}

export default HeaderAvatar
