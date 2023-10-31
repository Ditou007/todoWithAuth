require('dotenv').config()
const express = require('express')
const cors = require('cors')
const authRouter = require('./src/routes/authRoute')
const taskRouter = require('./src/routes/taskRoutes')
const authMiddleware = require('./src/middleware/authMiddleware')
const corsOptions = require('./src/config/cors')

const app = express()
const PORT = process.env.PORT || 5454
// Middleware to parse JSON requests
app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/auth', authRouter) // Authentication routes do not need auth middleware
app.use('/api/tasks', authMiddleware, taskRouter) // Task routes are protected by auth middleware

app.get('/', (req, res) => {
  res.send('Hello, Task Manager API!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
