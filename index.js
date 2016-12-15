const path = require('path')
const express = require('express')

const port = 9888
const app = express()

app.get('/', (req, res) => {
  res.send('MEOW')
})

app.listen(port, () => console.log(`Listening on port ${port}`))