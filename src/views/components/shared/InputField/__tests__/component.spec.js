import React from 'react'
import { shallow } from 'enzyme'

import InputField from '../container'

describe('InputField', () => {
  const defaultProps = {
    field: {
      name: 'test',
      onChange: jest.fn(),
      onBlur: jest.fn(),
      value: 'test'
    },
    form: {
      touched: { test: true },
      errors: { test: 'test' }
    },
    placeholder: 'Test'
  }

  it('matches snapshot', () => {
    const component = shallow(<InputField {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })
})
