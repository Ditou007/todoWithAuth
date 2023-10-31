import React, { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import TaskFilter from './TaskFilter'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import useApi from '../../hooks/useApis'

const { Title } = Typography

const TaskManager = () => {
  const [tasks, setTasks] = useState([])
  const api = useApi()
  const [filteredTasks, setFilteredTasks] = useState([])
  const [currentFilter, setCurrentFilter] = useState('all')

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks/getAll')
      setTasks(response.data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      await fetchTasks()
      filterTasks()
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const filterTasks = () => {
    let filtered
    switch (currentFilter) {
      case 'to-do':
        filtered = tasks.filter((task) => task.status === 'to-do')
        break
      case 'in-progress':
        filtered = tasks.filter((task) => task.status === 'in-progress')
        break
      case 'done':
        filtered = tasks.filter((task) => task.status === 'done')
        break
      default:
        filtered = tasks
        break
    }
    setFilteredTasks(filtered)
  }

  useEffect(() => {
    filterTasks()
  }, [currentFilter, tasks])

  const onFilterChange = (filter) => {
    setCurrentFilter(filter)
  }

  const onAddTask = (title, description, status) => {
    const newTask = {
      // id: Date.now(),
      title,
      description,
      status,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const onUpdateStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, status: newStatus } : task
    )
    setTasks(updatedTasks)
  }

  const onDeleteTask = (taskId) => {
    try {
      // Send a DELETE request to your backend to delete the task
      api.delete(`/tasks/deleteTask/${taskId}`)

      // Upon successful deletion, update the local state
      const updatedTasks = tasks.filter((task) => task._id !== taskId)
      setTasks(updatedTasks)
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <div>
      <Row justify='center'>
        <Col xs={24} md={18} lg={16}>
          <Title level={2}>Task Manager</Title>
        </Col>
      </Row>

      <Row justify='center'>
        <Col xs={24} md={18} lg={16}>
          <TaskForm onAddTask={onAddTask} />
        </Col>
      </Row>

      <Row justify='center' style={{ marginTop: '20px' }}>
        <Col xs={24} md={18} lg={16}>
          <TaskFilter onFilterChange={onFilterChange} />
        </Col>
      </Row>

      <Row justify='center' style={{ marginTop: '20px' }}>
        <Col xs={24} md={18} lg={16}>
          <TaskList
            tasks={filteredTasks}
            onUpdateStatus={onUpdateStatus}
            onDeleteTask={onDeleteTask}
          />
        </Col>
      </Row>
    </div>
  )
}

export default TaskManager
