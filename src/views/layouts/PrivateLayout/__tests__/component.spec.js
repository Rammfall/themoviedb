import React from 'react'
import { shallow } from 'enzyme'

import PrivateLayout from '../component'

describe('PrivateLayout', () => {
  it('matches snapshot', () => {
    const component = shallow(<PrivateLayout>Test</PrivateLayout>)

    expect(component).toMatchSnapshot()
  })
})
