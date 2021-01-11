import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '../container'

describe('LoginForm', () => {
  it('matches snapshot', () => {
    const container = shallow(<LoginForm />)
      .dive()
      .dive()
      .dive()

    expect(container).toMatchSnapshot()
  })
})
