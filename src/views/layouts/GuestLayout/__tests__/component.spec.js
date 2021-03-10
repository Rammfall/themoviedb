import React from 'react'
import { shallow } from 'enzyme'

import GuestLayout from '../component'

describe('GuestLayout', () => {
  it('matches snapshot', () => {
    const component = shallow(<GuestLayout>test</GuestLayout>)

    expect(component).toMatchSnapshot()
  })
})
