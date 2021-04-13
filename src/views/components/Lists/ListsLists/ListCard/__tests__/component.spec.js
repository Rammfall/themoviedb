import React from 'react'
import { shallow } from 'enzyme'

import ListCard from '../component'

describe('ListCard', () => {
  it('matches snapshot', () => {
    const props = {
      name: 'test',
      description: 'test'
    }
    const component = shallow(<ListCard {...props} />)

    expect(component).toMatchSnapshot()
  })
})
