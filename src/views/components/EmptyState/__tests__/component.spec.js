import React from 'react'
import { shallow } from 'enzyme'

import EmptyState from '../component'

describe('EmptyState', () => {
  it('matches snapshot', () => {
    const component = shallow(<EmptyState title="test" />)

    expect(component).toMatchSnapshot()
  })
})
