import React from 'react'
import LiveForm from 'react-live-form'

const formConfig = {
  formName: 'firstForm',
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

const SurveyBuilder = () => (
  <div>
    SurveyBuilder
    <LiveForm formConfig={formConfig} />
  </div>
)

export default SurveyBuilder
