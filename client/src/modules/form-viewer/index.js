import React, { Component } from 'react'
import { Container, Tab } from 'semantic-ui-react'
import LiveFormBuilder from '../live-form-builder'

const initialForm = {
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

class FormViewer extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Answers',
        render: () => (
          <Tab.Pane attached={false}>
            Tab 2 Content
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Form',
        render: () => (
          <Tab.Pane attached={false}>
            <LiveFormBuilder preloadedFormConfig={initialForm} />
          </Tab.Pane>
        ),
      },
    ]

    return (
      <div>
        <Container>
          <Tab menu={{ secondary: true }} panes={panes} />
        </Container>
      </div>
    )
  }
}

export default FormViewer
