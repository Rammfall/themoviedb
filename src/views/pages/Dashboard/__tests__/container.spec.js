import React from 'react'
import { shallow } from 'enzyme'

import DashboardPage from 'Views/pages/Dashboard'

describe('DashboardPage', () => {
  it('matches snapshot', () => {
    const container = shallow(<DashboardPage />)

    expect(container).toMatchSnapshot()
  })
})
