import React from 'react'
import { shallow } from 'enzyme'

import DashboardComponent from 'Views/pages/Dashboard/component'

describe('Dashboard', () => {
  it('matches snapshot', () => {
    const container = shallow(<DashboardComponent />)

    expect(container).toMatchSnapshot()
  })
})
