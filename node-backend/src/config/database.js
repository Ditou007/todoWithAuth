const { MongoClient } = require('mongodb')
const { Pool } = require('pg')

// Mongo Connection
const uri = process.env.MONGO_URI
const mongoClient = new MongoClient(uri)
mongoClient.connect()
let mongoDb = mongoClient.db('tasksDB')

// PostgreSQL Config
const postgresPool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT,
})

// PG Connection

module.exports = { mongoDb, postgresPool }
