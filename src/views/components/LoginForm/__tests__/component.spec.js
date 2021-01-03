import React from 'react'
import { shallow } from 'enzyme'

import LoginFormComponent from '../component'

describe('LoginForm match snapshot', () => {
  it('with default props', () => {
    jest.mock('react-intl')

    const component = shallow(<LoginFormComponent />)

    expect(component).toMatchSnapshot()
  })
})
