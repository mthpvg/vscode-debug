const express = require('express')
const app = express()

app.get('/add-ten-to/:number', (req, res) => {
  const result = 10 + req.params.number
  res.send(result)
})

app.listen(3000, () => console.log('Server started.'))