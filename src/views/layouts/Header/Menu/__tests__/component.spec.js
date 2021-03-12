import React from 'react'
import { shallow } from 'enzyme'

import MenuComponent from '../component'

describe('MenuComponent', () => {
  const defaultProps = {
    onLogout: jest.fn()
  }

  it('matches snapshot', () => {
    const component = shallow(<MenuComponent {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })
})
