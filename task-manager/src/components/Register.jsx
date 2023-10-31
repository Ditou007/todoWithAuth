import React, { useState } from 'react'
import { register } from '../apis/loginApis'
import { Form, Input, Button, Alert, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import CustomAlert from '../utils/customAlert'

const { Title } = Typography

const Register = () => {
  const [user, setUser] = useState({ username: '', password: '' })
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleRegister = async (values) => {
    try {
      const data = await register(values)
      console.log('User registered:', data)
      navigate('/login')
    } catch (error) {
      setError(error.error || 'Registration failed')
    }
  }

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <Title level={2}>Register</Title>
      {error && <CustomAlert message={error} type={'error'} />}

      <Form
        initialValues={{ username: user.username, password: user.password }}
        onFinish={handleRegister}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='Username' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            Register
          </Button>
        </Form.Item>
      </Form>
      {error && (
        <Alert
          message={error}
          // style={{ display: 'block', whiteSpace: 'normal' }}
          type='error'
          showIcon
          closable
        />
      )}
    </div>
  )
}

export default Register
