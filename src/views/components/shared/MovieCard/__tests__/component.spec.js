import React from 'react'
import { shallow } from 'enzyme'

import MovieCard from '../component'

describe('MovieCard', () => {
  it('matches snapshot', () => {
    const props = {
      title: 'test',
      description: 'test',
      image: 'test'
    }
    const component = shallow(<MovieCard {...props} />)

    expect(component).toMatchSnapshot()
  })
})
