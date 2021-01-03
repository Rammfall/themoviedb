import React from 'react'
import { shallow } from 'enzyme'

import Input from '../component'

describe('Input component matches snapshot', () => {
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

  it('with default props', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<Input {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })
})
