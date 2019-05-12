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

const formById = {
  formConfig,
  title: 'AAA',
  description: 'description',
}

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

app.get('/formById', function (req, res) {
  res.send(formById)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
