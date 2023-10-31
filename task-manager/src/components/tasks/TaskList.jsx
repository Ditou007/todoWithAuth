import React from 'react'
import { List, Select, Button, Row, Col, Card } from 'antd'
// import '../../css/tasklist.css'

const { Option } = Select

const TaskList = ({ tasks, onUpdateStatus, onDeleteTask }) => {
  const handleStatusChange = (value, taskId) => {
    onUpdateStatus(taskId, value)
  }

  return (
    <Card>
      <List
        className='task-list'
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item
            actions={[
              <Button onClick={() => onDeleteTask(task._id)} danger>
                Delete
              </Button>,
            ]}
          >
            <Row style={{ width: '100%' }} align='middle'>
              <Col xs={24} md={14}>
                <List.Item.Meta
                  title={<h2>{task.title}</h2>}
                  description={task.description}
                />
              </Col>
              <Col xs={24} md={8}>
                <div>
                  <label>Status: </label>
                  <Select
                    value={task.status}
                    onChange={(value) => handleStatusChange(value, task.id)}
                    style={{ width: '100%', maxWidth: '150px' }}
                  >
                    <Option value='to-do'>To Do</Option>
                    <Option value='in-progress'>In Progress</Option>
                    <Option value='done'>Done</Option>
                  </Select>
                </div>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default TaskList
