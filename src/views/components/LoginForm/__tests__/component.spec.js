import React from 'react'
import { shallow } from 'enzyme'

import LoginFormComponent from '../component'

describe('LoginForm match snapshot', () => {
  const defaultProp = {
    isSubmitting: true,
    status: undefined
  }

  it('matches snapshot', () => {
    const component = shallow(<LoginFormComponent {...defaultProp} />)

    expect(component).toMatchSnapshot()
  })
})
