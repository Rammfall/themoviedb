import React from 'react'
import { shallow } from 'enzyme'

import InputField from '../component'

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
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<InputField {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })
})
