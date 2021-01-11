import React from 'react'
import { shallow } from 'enzyme'

import LoginFormComponent from '../component'

describe('LoginForm match snapshot', () => {
  const defaultProp = {
    isSubmitting: true,
    status: undefined
  }

  it('with default props', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<LoginFormComponent {...defaultProp} />)

    expect(component).toMatchSnapshot()
  })
})
