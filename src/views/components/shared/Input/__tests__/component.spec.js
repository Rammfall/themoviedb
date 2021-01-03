import React from 'react'
import { shallow } from 'enzyme'

import Input, { iconRender } from '../component'

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

    it('eye icon component', () => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const visibleComponent = shallow(iconRender(true))
      const invisibleComponent = shallow(iconRender(false))

      expect(visibleComponent).toMatchSnapshot()
      expect(invisibleComponent).toMatchSnapshot()
    })
  })
})
