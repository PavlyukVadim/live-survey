const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const forms = [
  {
    id: 3,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '4',
  },
  {
    id: 4,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '5',
  },
  {
    id: 5,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '6',
  },
  {
    id: 6,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '6',
  },
  {
    id: 8,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '6',
  },
]

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/forms', function (req, res) {
  res.send(forms)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
