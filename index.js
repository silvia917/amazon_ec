const express = require('express')
const { MongoClient } = require('mongodb')
const mongoUrl = 'mongodb://localhost:27017/tutorial-app'
MongoClient.connect(mongoUrl, (err, db) => {
  if (err) return console.log('Failed to connect to MongoDB', err)
  const app = express()
  app.use(express.static('public'))
  app.listen(3000, () => console.log('Server running on port 3000'))
})