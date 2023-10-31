const express = require('express')
const taskRouter = express.Router()
const { mongoDb } = require('../config/database') // Importing our database connections
const { ObjectId } = require('mongodb')

// All your task routes go here
taskRouter.get('/getAll', async (req, res) => {
  try {
    const tasks = await mongoDb
      .collection('tasks')
      .find({ userId: req.userData.userId })
      .toArray()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' })
  }
})

taskRouter.post('/addTask', async (req, res) => {
  try {
    const { title, description, status } = req.body

    // Validate task data
    if (!title || !description || !status) {
      return res
        .status(400)
        .json({ error: 'Title, description, and status are required' })
    }

    // Insert task into MongoDB
    const newTask = { title, description, status, userId: req.userData.userId }
    const result = await mongoDb.collection('tasks').insertOne(newTask)
    console.log('Result-----------------', result)
    res.status(201).json(result)
  } catch (error) {
    console.log('Error==========>', error)
    res.status(500).json({ error: 'Failed to create task' })
  }
})

taskRouter.put('/updateTask/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params
    const { title, description, status } = req.body

    // Validate task data
    if (!title && !description && !status) {
      return res.status(400).json({
        error:
          'At least one of title, description, or status is required to update',
      })
    }

    // Update task in MongoDB
    const updateData = {
      ...(title && { title }),
      ...(description && { description }),
      ...(status && { status }),
    }
    console.log('updateData', updateData)
    const result = await mongoDb
      .collection('tasks')
      .findOneAndUpdate(
        { _id: new ObjectId(taskId), userId: req.userData.userId },
        { $set: updateData },
        { returnDocument: 'after' }
      )
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' })
  }
})

taskRouter.delete('/deleteTask/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params

    // Check if task exists in MongoDB
    const task = await mongoDb
      .collection('tasks')
      .findOne({ _id: new ObjectId(taskId), userId: req.userData.userId })

    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    // Delete task from MongoDB
    await mongoDb.collection('tasks').findOneAndDelete({
      _id: new ObjectId(taskId),
      userId: req.userData.userId,
    })

    res.status(200).json({ message: 'Task deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' })
  }
})

module.exports = taskRouter
