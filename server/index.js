const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const users = require('./users')
const allForms = require('./forms')
const answers = require('./answers')

let lastFormId = 3
let lastUserId = 3

const app = express()
app.use(cors())

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true,
}))

const getFormById = (id, userId) => {
  let form
  Object
    .values(allForms)
    .forEach((formsOfSomeUser) => {
      const findForm = formsOfSomeUser.find((form) => form.id === +id)
      if (findForm) form = findForm
    })
  return form
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/auth', function (req, res) {
  const { user } = req.body
  const findUser = users.find((storedUser) => {
    return (
      storedUser.email === user.email &&
      storedUser.password === user.password
    )
  })

  if (findUser) {
    res.send(findUser)
  } else {
    res.sendStatus(404)
  }
})

app.post('/users', function (req, res) {
  const { user } = req.body
  const newUser = {
    id: lastUserId++,
    ...user,
  }
  users.push(newUser)
  res.sendStatus(200)
})

app.post('/forms', function (req, res) {
  const { userId = 0 } = req.body
  const userForms = allForms[userId] || []
  const yourForms = userForms.map((form) => {
    const { id, title,  description } = form
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

app.post('/formById/:id', function (req, res) {
  const { id } = req.params
  const { userId = 0 } = req.body
  const formById = getFormById(id, userId)
  res.send(formById)
})

app.post('/createForm', function (req, res) {
  const { form, userId = 0 } = req.body
  const newForm = {
    id: lastFormId++,
    ...form,
  }
  const userForms = allForms[userId] || []
  userForms.push(newForm)
  answers[newForm.id] = []
  res.sendStatus(200)
})

app.post('/updateForm/:id', function (req, res) {
  const { id } = req.params
  const { form, userId = 0 } = req.body
  const userForms = allForms[userId] || []
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
    answers[id] = []
    res.send([])
    return
  }
  answers[id].forEach((answer) => {
    const { userId } = answer
    const user = users.find((user) => user.id == userId)
    answer.user = user
  })
  res.send(result)
})

app.post('/answers', function (req, res) {
  const { formId, answer, userId = 0 } = req.body
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
  console.log('App listening on port 3000!')
})
