import React, { useState } from 'react'
import { login } from '../apis/loginApis'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Alert, Typography, Card } from 'antd'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import CustomAlert from '../utils/customAlert'

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { Title } = Typography

  const handleLogin = async () => {
    try {
      const data = await login(user)
      if (data) {
        dispatch(loginSuccess({ token: data.token, user: data.username }))
        navigate('/tasks')
      }
    } catch (error) {
      setError(error.error || 'Login failed')
    }
  }

  return (
    <Card style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <Title level={2} style={{ color: '#1890ff' }}>
          Login
        </Title>
        {error && <CustomAlert message={error} type={'error'} />}
        <Form
          onFinish={handleLogin}
          style={{ maxWidth: '300px', margin: '0 auto' }}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder='Username'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              style={{ borderRadius: '5px' }}
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder='Password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              style={{ borderRadius: '5px' }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              style={{ width: '100%', borderRadius: '5px' }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  )
}

export default Login
