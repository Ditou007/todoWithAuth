const express = require('express')
const authRouter = express.Router()
const { postgresPool } = require('../config/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//! Register New User
authRouter.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body

    // Validate user input
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and password are required' })
    }

    // Check if user already exists
    const userCheckQuery = 'SELECT * FROM users WHERE username = $1'
    const userCheckResult = await postgresPool.query(userCheckQuery, [username])
    if (userCheckResult.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Save user to database and return JWT Token
    const createUserQuery =
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *'
    const newUser = await postgresPool.query(createUserQuery, [
      username,
      hashedPassword,
    ])

    const user = newUser.rows[0]
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    // Respond with the created user (without the password) and token
    const userResponse = { ...user, password: undefined, token }
    res.status(201).json(userResponse)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' })
  }
})

//! Login Route
authRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    // Validate user input
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and password are required' })
    }

    // Check if user exists
    const userCheckQuery = 'SELECT * FROM users WHERE username = $1'
    const userCheckResult = await postgresPool.query(userCheckQuery, [username])
    if (userCheckResult.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    // Verify the password
    const user = userCheckResult.rows[0]
    const passwordIsValid = await bcrypt.compare(password, user.password)
    if (!passwordIsValid) {
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    // Respond with login success and token
    res
      .status(200)
      .json({ username: user.username, message: 'Login successful', token })
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' })
  }
})

module.exports = authRouter
