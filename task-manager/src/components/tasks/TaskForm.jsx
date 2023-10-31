import React, { useState } from 'react'
import { Form, Input, Select, Button, Col, Row, Card } from 'antd'
// import '../../css/taskform.css'
import useApi from '../../hooks/useApis'
import CustomAlert from '../../utils/customAlert'

const { Option } = Select

const TaskForm = ({ onAddTask }) => {
  const [form] = Form.useForm()
  const api = useApi()
  const [alert, setAlert] = useState({
    visible: false,
    alert: '',
    message: '',
  })

  const addTaskToBackend = async (title, description, status) => {
    try {
      const response = await api.post('/tasks/addTask', {
        title,
        description,
        status,
      })
      return response.data
    } catch (error) {
      console.error('Error adding task:', error)
      throw error
    }
  }

  const handleSubmit = async (values) => {
    try {
      const newTask = await addTaskToBackend(
        values.title,
        values.description,
        values.status
      )
      onAddTask(newTask.title, newTask.description, newTask.status)
      form.resetFields()
      setAlert({
        visible: true,
        alert: 'green',
        message: 'Task Added',
      })
    } catch (error) {
      setAlert({
        visible: true,
        alert: 'error',
        message: 'Something went wrong !!',
      })
    }
  }

  return (
    <Card>
      <Form form={form} onFinish={handleSubmit} className='task-form'>
        {alert.visible && <CustomAlert type={alert} message={alert.message} />}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label='Title'
              name='title'
              rules={[
                { required: true, message: 'Please input the task title!' },
              ]}
            >
              <Input placeholder='Enter task title' />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label='Description' name='description'>
              <Input.TextArea placeholder='Enter task description' />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={24} md={12}>
            <Form.Item label='Status' name='status' initialValue='to-do'>
              <Select>
                <Option value='to-do'>To Do</Option>
                <Option value='in-progress'>In Progress</Option>
                <Option value='done'>Done</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={24} style={{ textAlign: 'center' }}>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Add Task
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default TaskForm
