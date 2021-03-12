import React from 'react'
import { shallow } from 'enzyme'

import Input from '../component'

describe('Input', () => {
  const defaultProps = {
    placeholder: 'test',
    onBlur: jest.fn(),
    onChange: jest.fn()
  }

  describe('with type text', () => {
    it('matches snapshot', () => {
      const component = shallow(<Input {...defaultProps} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('with type password', () => {
    const passwordProps = {
      ...defaultProps,
      type: 'password'
    }

    it('matches snapshot', () => {
      const component = shallow(<Input {...passwordProps} />)

      expect(component).toMatchSnapshot()
    })
  })
})
