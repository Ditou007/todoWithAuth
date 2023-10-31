import React from 'react'
import { Col, Row, Select } from 'antd'
// import '../../css/taskfilter.css'

const { Option } = Select

const TaskFilter = ({ onFilterChange }) => {
  const handleFilterChange = (value) => {
    onFilterChange(value)
  }

  return (
    <Row>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Select
          defaultValue='all'
          onChange={handleFilterChange}
          className='task-filter'
          style={{ width: '100%' }}
        >
          <Option value='all'>All</Option>
          <Option value='to-do'>To Do</Option>
          <Option value='in-progress'>In Progress</Option>
          <Option value='done'>Done</Option>
        </Select>
      </Col>
    </Row>
  )
}

export default TaskFilter
