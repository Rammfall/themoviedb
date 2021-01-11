import React from 'react'
import { shallow } from 'enzyme'

import Dashboard from 'Views/pages/Dashboard'

describe('Dashboard', () => {
  it('matches snapshot', () => {
    const container = shallow(<Dashboard />)

    expect(container).toMatchSnapshot()
  })
})
