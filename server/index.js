const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const users = require('./users')
const allForms = require('./forms')
const answers = require('./answers')
const userId = 0
const userForms = allForms[userId]
let lastFormId = 2

const app = express()
app.use(cors())

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true,
}))

const getFormById = (id) => {
  return userForms.find((form) => form.id === +id)
}

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/forms', function (req, res) {
  const yourForms = userForms.map((form) => {
    const { id, title,  description } = form
    console.log('answers', answers)
    const answersNumber = (answers[id] || []).length
    return {
      id,
      title,
      description,
      answers: answersNumber,
    }
  })
  res.send(yourForms)
})

app.get('/formById/:id', function (req, res) {
  const { id } = req.params
  const formById = getFormById(id)
  res.send(formById)
})

app.post('/createForm', function (req, res) {
  const { form } = req.body
  const newForm = {
    id: lastFormId++,
    ...form,
  }
  userForms.push(newForm)
  res.sendStatus(200)
})

app.post('/updateForm/:id', function (req, res) {
  const { id } = req.params
  const { form } = req.body
  const userForm = userForms
    .find((userForm) => (userForm.id == id))
  
  userForm.title = form.title
  userForm.description = form.description
  userForm.formConfig = form.formConfig

  res.sendStatus(200)
})

app.get('/answers/:id', function (req, res) {
  const { id } = req.params
  const result = answers[id]
  if (!result) {
    res.send([])  
  }
  answers[id].forEach((answer) => {
    const { userId } = answer
    const user = users.find((user) => user.id === userId)
    answer.user = user
  })
  res.send(result)
})

app.post('/answers', function (req, res) {
  const { formId, answer } = req.body
  if (!answers[formId]) {
    answers[formId] = []
  }
  answers[formId].push({
    userId,
    answer,
  })
  res.sendStatus(200)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
