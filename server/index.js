const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const formConfig = {
  fields: [
    {
      name: 'a',
      fieldType: 'input',
      dataType: 'int',
      props: {
        title: 'field a',
      },
      state: {
        value: {
          defaultValue: 5,
        },
      },
    },
    {
      name: 'b',
      fieldType: 'input',
      dataType: 'int',
      props: {
        title: 'field b',
      },
    },
    {
      name: 'c',
      fieldType: 'input',
      dataType: 'string',
      props: {
        title: 'field c',
      },
      state: {
        value: {
          defaultValue: 0,
          valueExpr: 'a + b',
        },
      },
    },
    {
      name: 'd',
      fieldType: 'input',
      dataType: 'string',
      props: {
        title: 'field d',
      },
      state: {
        value: {
          defaultValue: 0,
          valueExpr: 'c * 2',
        },
        display: {
          defaultValue: false,
          valueExpr: 'a > 10',
        },
        disabled: {
          defaultValue: false,
          valueExpr: 'a > 34',
        },
      },
    },
  ],
}

const formsById = {
  0: {
    formConfig,
    title: 'AAA 0',
    description: 'description 0',
  },
  1: {
    formConfig,
    title: 'AAA 1',
    description: 'description 1',
  },
  2: {
    formConfig,
    title: 'AAA 2',
    description: 'description 2',
  },
  3: {
    formConfig,
    title: 'AAA 3',
    description: 'description 3',
  },
}

const forms = [
  {
    id: 0,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '4',
  },
  {
    id: 1,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '5',
  },
  {
    id: 2,
    title: 'dad',
    description: 'fdsfdsf',
    anwsers: '6',
  },
  {
    id: 3,
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

app.get('/formById/:id', function (req, res) {
  const { id } = req.params
  res.send(formsById[id])
})

app.post('/createForm/:id', function (req, res) {
  console.log(req.params)
  formsById[4] = {
    formConfig,
    title: 'AAA 4',
    description: 'description 4',
  }
  forms.push(
    {
      id: 9,
      title: 'dad',
      description: 'fdsfdsf',
      anwsers: '9',
    },
  )
  res.send(200)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
