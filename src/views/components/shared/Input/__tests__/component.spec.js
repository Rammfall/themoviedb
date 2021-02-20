import React from 'react'
import { shallow } from 'enzyme'

import Input from '../component'

describe('Input component matches snapshot', () => {
  const defaultProps = {
    placeholder: 'test',
    onBlur: jest.fn(),
    onChange: jest.fn()
  }

  describe('if type text', () => {
    it('with default props', () => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const component = shallow(<Input {...defaultProps} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('if type password', () => {
    const passwordProps = {
      ...defaultProps,
      type: 'password'
    }

    it('with default props', () => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const component = shallow(<Input {...passwordProps} />)

      expect(component).toMatchSnapshot()
    })
  })
})
