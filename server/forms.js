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

// userId as key, formId is unique
const forms = {
  0: [
    {
      id: 0,
      title: 'Form 0',
      description: 'Description 0',
      formConfig,
    },
    {
      id: 1,
      title: 'Form 1',
      description: 'Description 1',
      formConfig,
    },
  ],
  1: [
    {
      id: 2,
      title: 'Form 2',
      description: 'Description 2',
      formConfig,
    },
  ]
}

module.exports = forms
