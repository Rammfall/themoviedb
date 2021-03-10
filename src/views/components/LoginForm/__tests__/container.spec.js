import React from 'react'
import { shallow } from 'enzyme'

import diveTo from 'TestUtils/diveToEnzyme'

import LoginForm, { LoginFormContainer } from '../container'

describe('LoginForm', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<LoginForm />)
    const container = diveTo(wrapper, LoginFormContainer)

    expect(container).toMatchSnapshot()
  })
})
