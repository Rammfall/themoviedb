import React from 'react'
import { shallow } from 'enzyme'

import Header from '../component'

describe('MenuComponent', () => {
  const defaultProps = {
    username: 'testUser'
  }

  it('matches snapshot', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<Header {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })
})
