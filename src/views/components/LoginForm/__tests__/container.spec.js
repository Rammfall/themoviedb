import React from 'react'
import { shallow } from 'enzyme'

import LoginForm, { handleSubmit } from '../container'

describe('LoginForm to match snapshot', () => {
  it('with default props', () => {
    const container = shallow(<LoginForm />)
      .dive()
      .dive()
    const props = {
      onSubmit: jest.fn()
    }

    expect(
      handleSubmit({ email: 'tset', password: 'test' }, { props })
    ).toMatchSnapshot()
    expect(container).toMatchSnapshot()
  })
})
