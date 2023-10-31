import React, { useState } from 'react'
import { register } from '../apis/loginApis'
import { Form, Input, Button, Typography, Card } from 'antd'
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
    <Card style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <Title level={2} style={{ color: '#1890ff' }}>
          Register
        </Title>
        {error && <CustomAlert message={error} type={'error'} />}
        <Form
          initialValues={{ username: user.username, password: user.password }}
          onFinish={handleRegister}
          style={{ maxWidth: '300px', margin: '0 auto' }}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='Username' style={{ borderRadius: '5px' }} />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder='Password'
              style={{ borderRadius: '5px' }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              style={{ width: '100%', borderRadius: '5px' }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  )
}

export default Register
